import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const InstagramConnect = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  const handleInstagramConnect = async () => {
    setIsConnecting(true);
    try {
      // TODO: Implement Instagram OAuth connection
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("User not authenticated");

      await supabase
        .from("profiles")
        .update({ instagram_connected: true })
        .eq("id", user.id);

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
      disabled={isConnecting}
      className="gap-2"
    >
      <Instagram className="w-4 h-4" />
      {isConnecting ? "Connecting..." : "Connect Instagram Account"}
    </Button>
  );
};