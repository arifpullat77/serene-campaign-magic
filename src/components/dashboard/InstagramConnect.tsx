import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const INSTAGRAM_CLIENT_ID = "1088199005875337";
const REDIRECT_URI = "http://localhost:5173/auth/callback";

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

        if (error) {
          console.error('Error loading Instagram status:', error);
          throw error;
        }
        
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
      const error = urlParams.get('error');
      const errorDescription = urlParams.get('error_description');
      
      if (error) {
        console.error('Instagram OAuth error:', error, errorDescription);
        toast({
          title: "Instagram Connection Error",
          description: errorDescription || "Failed to connect to Instagram",
          variant: "destructive",
        });
        return;
      }
      
      if (code) {
        setIsConnecting(true);
        try {
          const { data: { user } } = await supabase.auth.getUser();
          if (!user) throw new Error("User not authenticated");

          console.log('Exchanging code for access token...');
          const { data, error } = await supabase.functions.invoke('instagram-auth', {
            body: { 
              code,
              redirect_uri: REDIRECT_URI
            }
          });

          if (error) {
            console.error('Instagram auth error:', error);
            throw error;
          }

          if (!data || !data.access_token) {
            throw new Error('No access token received from Instagram');
          }

          console.log('Successfully received access token');

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

          if (updateError) {
            console.error('Profile update error:', updateError);
            throw updateError;
          }

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
            description: error.message || "Failed to connect Instagram account",
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
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=user_profile,user_media&response_type=code`;
    console.log('Redirecting to auth URL:', authUrl);
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
        description: error.message || "Failed to disconnect Instagram account",
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