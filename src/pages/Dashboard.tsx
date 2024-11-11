import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { RewardTierEditor } from "@/components/dashboard/RewardTierEditor";
import { MentionsTable } from "@/components/dashboard/MentionsTable";
import { Analytics } from "@/components/dashboard/Analytics";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        <h1 className="text-3xl font-bold gradient-text lowercase">whiteboard</h1>
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

      <Accordion type="single" collapsible className="w-full space-y-4">
        {/* Mentions Tracking Section */}
        <AccordionItem value="mentions" className="border rounded-lg bg-white/10 backdrop-blur-sm">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <span className="text-lg font-semibold lowercase">customer mentions</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4">
            <MentionsTable />
          </AccordionContent>
        </AccordionItem>

        {/* Reward Tiers Section */}
        <AccordionItem value="rewards" className="border rounded-lg bg-white/10 backdrop-blur-sm">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <span className="text-lg font-semibold lowercase">reward tiers</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4">
            <RewardTierEditor />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Dashboard;