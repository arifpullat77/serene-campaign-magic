import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const INSTAGRAM_CLIENT_ID = "528808453359215";
// Use the encoded version of the redirect URI to prevent parsing issues
const REDIRECT_URI = encodeURIComponent("http://localhost:5173/dashboard");

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
        
        // Only set as connected if we have both the flag and a valid token
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

          // Exchange code for access token using our edge function
          const { data, error } = await supabase.functions.invoke('instagram-auth', {
            body: { code }
          });

          if (error) throw error;

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
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;
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