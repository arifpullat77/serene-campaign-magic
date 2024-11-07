import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { RewardTierEditor } from "@/components/dashboard/RewardTierEditor";
import { MentionsTable } from "@/components/dashboard/MentionsTable";
import { Analytics } from "@/components/dashboard/Analytics";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  const [isConnected, setIsConnected] = React.useState(false);

  const handleInstagramConnect = () => {
    setIsConnected(true);
    toast({
      title: "Instagram Connected",
      description: "Your Instagram account has been successfully connected.",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6 animate-fade-up">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold gradient-text">Serenes Dashboard</h1>
        <Button
          onClick={handleInstagramConnect}
          className={`${
            isConnected ? "bg-green-500 hover:bg-green-600" : "bg-primary hover:bg-primary-600"
          } gap-2`}
          disabled={isConnected}
        >
          <Instagram className="w-4 h-4" />
          {isConnected ? "Instagram Connected" : "Connect Instagram Account"}
        </Button>
      </div>

      {/* Analytics Section */}
      <Analytics />

      {/* Mentions Tracking Section */}
      <Card className="bg-white/10 backdrop-blur-sm border-gray-800">
        <CardHeader>
          <CardTitle>Customer Mentions</CardTitle>
        </CardHeader>
        <CardContent>
          <MentionsTable />
        </CardContent>
      </Card>

      {/* Reward Tiers Section */}
      <Card className="bg-white/10 backdrop-blur-sm border-gray-800">
        <CardHeader>
          <CardTitle>Reward Tiers</CardTitle>
        </CardHeader>
        <CardContent>
          <RewardTierEditor />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;