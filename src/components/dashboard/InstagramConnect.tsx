import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const InstagramConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const loadInstagramStatus = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from('profiles')
        .select('instagram_connected')
        .eq('id', user.id)
        .single();

      if (data) {
        setIsConnected(data.instagram_connected || false);
      }
    };

    loadInstagramStatus();
  }, []);

  const handleInstagramConnect = async () => {
    setIsConnecting(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("User not authenticated");

      // TODO: Implement Instagram OAuth connection
      const { error } = await supabase
        .from('profiles')
        .update({ instagram_connected: true })
        .eq('id', user.id);

      if (error) throw error;

      setIsConnected(true);
      toast({
        title: "Success",
        description: "Instagram account connected successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <Button
      onClick={handleInstagramConnect}
      disabled={isConnecting || isConnected}
      className="gap-2"
    >
      <Instagram className="w-4 h-4" />
      {isConnecting 
        ? "Connecting..." 
        : isConnected 
        ? "Instagram Connected"
        : "Connect Instagram Account"}
    </Button>
  );
};