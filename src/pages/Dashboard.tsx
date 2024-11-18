import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MentionsTable } from "@/components/dashboard/MentionsTable";
import { Analytics } from "@/components/dashboard/Analytics";
import { MessageTemplateEditor } from "@/components/dashboard/MessageTemplateEditor";
import { InstagramConnect } from "@/components/dashboard/InstagramConnect";
import { CampaignControl } from "@/components/dashboard/CampaignControl";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Dashboard = () => {
  return (
    <CurrencyProvider>
      <div className="container mx-auto p-6 space-y-6 animate-fade-up">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold gradient-text lowercase">whiteboard</h1>
          <div className="flex gap-4">
            <InstagramConnect />
            <CampaignControl />
          </div>
        </div>

        {/* Analytics Section */}
        <Analytics />

        {/* Mentions Tracking Section */}
        <Card className="bg-white/10 backdrop-blur-sm border-gray-800">
          <CardHeader>
            <CardTitle className="lowercase">customer mentions</CardTitle>
          </CardHeader>
          <CardContent>
            <MentionsTable />
          </CardContent>
        </Card>

        {/* Message Templates Section */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="messages" className="border rounded-lg bg-white/10 backdrop-blur-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <span className="text-lg font-semibold lowercase">your messages to customer</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <MessageTemplateEditor />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </CurrencyProvider>
  );
};

export default Dashboard;