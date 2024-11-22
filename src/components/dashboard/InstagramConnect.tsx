import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const INSTAGRAM_CLIENT_ID = "528808453359215";
const REDIRECT_URI = "https://localhost:5173/auth/callback";
const WEBHOOK_URL = "https://fojtlzgvbhasumaadzhk.supabase.co/functions/v1/instagram-webhook";

export const InstagramConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const loadInstagramStatus = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { data, error } = await supabase
          .from('profiles')
          .select('instagram_connected, instagram_access_token')
          .eq('id', user.id)
          .single();

        if (error) throw error;
        
        setIsConnected(data?.instagram_connected && !!data?.instagram_access_token);
      } catch (error) {
        console.error('Error loading Instagram status:', error);
        setIsConnected(false);
      }
    };

    loadInstagramStatus();

    // Handle OAuth redirect
    const handleOAuthRedirect = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      
      if (code) {
        setIsConnecting(true);
        try {
          const { data: { user } } = await supabase.auth.getUser();
          if (!user) throw new Error("User not authenticated");

          // Exchange code for access token
          const { data, error } = await supabase.functions.invoke('instagram-auth', {
            body: { code }
          });

          if (error) throw error;

          // Set up webhook subscription
          const subscriptionResponse = await fetch('https://graph.facebook.com/v18.0/app/subscriptions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              object: 'instagram',
              callback_url: WEBHOOK_URL,
              fields: ['mentions', 'comments', 'messages'],
              verify_token: 'your_verify_token',
              access_token: data.access_token,
            }),
          });

          if (!subscriptionResponse.ok) {
            throw new Error('Failed to set up webhook subscription');
          }

          // Update profile with Instagram credentials
          const { error: updateError } = await supabase
            .from('profiles')
            .update({
              instagram_connected: true,
              instagram_access_token: data.access_token,
              instagram_business_id: data.user_id,
              instagram_username: data.username
            })
            .eq('id', user.id);

          if (updateError) throw updateError;

          setIsConnected(true);
          toast({
            title: "Success",
            description: "Instagram account connected successfully",
          });

          // Clean up URL
          window.history.replaceState({}, document.title, window.location.pathname);
        } catch (error: any) {
          console.error('Instagram connection error:', error);
          setIsConnected(false);
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
        } finally {
          setIsConnecting(false);
        }
      }
    };

    handleOAuthRedirect();
  }, [toast]);

  const handleInstagramConnect = () => {
    const scopes = [
      'instagram_business_basic',
      'instagram_business_manage_messages',
      'instagram_business_manage_comments',
      'instagram_business_content_publish'
    ].join(',');

    const params = new URLSearchParams({
      client_id: INSTAGRAM_CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      scope: scopes,
      response_type: 'code',
      enable_fb_login: '0',
      force_authentication: '1'
    });

    const authUrl = `https://api.instagram.com/oauth/authorize?${params.toString()}`;
    window.location.href = authUrl;
  };

  const handleDisconnect = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("User not authenticated");

      const { error } = await supabase
        .from('profiles')
        .update({
          instagram_connected: false,
          instagram_access_token: null,
          instagram_business_id: null,
          instagram_username: null
        })
        .eq('id', user.id);

      if (error) throw error;

      setIsConnected(false);
      toast({
        title: "Success",
        description: "Instagram account disconnected successfully",
      });
    } catch (error: any) {
      console.error('Error disconnecting Instagram:', error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      onClick={isConnected ? handleDisconnect : handleInstagramConnect}
      disabled={isConnecting}
      className="gap-2"
    >
      <Instagram className="w-4 h-4" />
      {isConnecting 
        ? "Connecting..." 
        : isConnected 
        ? "Disconnect Instagram"
        : "Connect Instagram Account"}
    </Button>
  );
};