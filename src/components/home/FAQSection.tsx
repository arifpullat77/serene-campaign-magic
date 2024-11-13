import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  return (
    <section className="py-32 bg-black/60">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            frequently asked questions
          </h2>
          <p className="text-xl text-gray-400">
            everything you need to know about serenes
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-primary-500/5 border border-primary-500/20 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold">
                How to cut marketing costs with more branding?
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-4 space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Comparison - Serenes vs. Facebook Ads</h3>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="font-medium text-primary-400">Metric</div>
                    <div className="font-medium text-primary-400">Serenes</div>
                    <div className="font-medium text-primary-400">Facebook Ads</div>
                    
                    {[
                      ["Cost", "Inventory cost (products/coupons)", "Direct cash outlay for ad spend"],
                      ["Authenticity", "High - Real customers sharing genuine experiences", "Medium - Branded ads lack personal trust"],
                      ["Engagement Rate", "5-15% (Organic user-generated content)", "0.5-3% (Click-Through Rate on Facebook)"],
                      ["Reach", "Organic reach via customer networks", "Paid reach - Limited to ad budget"],
                      ["Organic Growth", "Boost in Instagram followers & profile views", "Limited impact on follower growth"],
                      ["Brand Building", "Strong - Built organically through genuine posts", "Moderate - Built through paid media"]
                    ].map(([metric, serenes, facebook], index) => (
                      <React.Fragment key={index}>
                        <div className="text-yellow-400">{metric}</div>
                        <div className="text-gray-300">{serenes}</div>
                        <div className="text-gray-500">{facebook}</div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-primary-500/5 border border-primary-500/20 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold">
                How does Serenes verify authentic mentions?
              </AccordionTrigger>
              <AccordionContent>
                Our AI-powered system automatically verifies Instagram mentions and stories by checking post authenticity, 
                account legitimacy, and engagement metrics. We ensure only genuine customer content qualifies for rewards, 
                maintaining the integrity of your brand's social proof.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-primary-500/5 border border-primary-500/20 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold">
                What types of rewards can I offer?
              </AccordionTrigger>
              <AccordionContent>
                You have complete flexibility in setting up rewards. Common options include product discounts, 
                free products, exclusive merchandise, or store credits. You can create different reward tiers 
                based on the influencer's follower count and engagement rates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-primary-500/5 border border-primary-500/20 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold">
                How quickly can I start seeing results?
              </AccordionTrigger>
              <AccordionContent>
                Most brands start seeing increased Instagram mentions within the first month of implementation. 
                The compound effect of organic user-generated content typically leads to noticeable follower growth 
                and engagement improvements within 2-3 months of consistent usage.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};