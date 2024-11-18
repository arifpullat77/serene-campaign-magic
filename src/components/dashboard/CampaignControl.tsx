import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const CampaignControl = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const toggleCampaign = async () => {
    setIsLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("User not authenticated");

      await supabase
        .from("profiles")
        .update({ campaign_active: !isActive })
        .eq("id", user.id);

      setIsActive(!isActive);
      toast({
        title: isActive ? "Campaign Paused" : "Campaign Activated",
        description: isActive
          ? "Your campaign has been paused successfully"
          : "Your campaign is now active and running",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={toggleCampaign}
      disabled={isLoading}
      variant={isActive ? "destructive" : "default"}
      className="gap-2"
    >
      {isActive ? (
        <Pause className="w-4 h-4" />
      ) : (
        <Play className="w-4 h-4" />
      )}
      {isLoading
        ? "Processing..."
        : isActive
        ? "Pause Campaign"
        : "Activate Campaign"}
    </Button>
  );
};