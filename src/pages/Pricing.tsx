import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Store, Users, Zap } from "lucide-react";

const Pricing = () => {
  const handleWaitlistClick = () => {
    window.location.href = "https://cutt.ly/beJsnsBc";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#020314] font-lexend">
      <div className="container mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose the Perfect Plan for Your <span className="gradient-text">Business</span>
          </h1>
          <p className="text-lg text-gray-400">
            At Serenes, we provide flexible plans tailored to your business size and goals. Start growing your brand through authentic customer shoutouts today!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* Pro Plan */}
          <Card className="relative border border-primary-500/20 bg-black/50 animate-fade-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Pro Plan</CardTitle>
              <CardDescription>Perfect for small to medium businesses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <span className="text-4xl font-bold">$30</span>
                <span className="text-gray-400">/month</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Check className="text-primary-400" />
                  <span>5,000 credits included (1 credit = 1 mention)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary-400" />
                  <span>Seamless Instagram integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary-400" />
                  <span>Automated coupon code generation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary-400" />
                  <span>Real-time tracking of mentions</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-primary-600 hover:bg-primary-700"
                onClick={handleWaitlistClick}
              >
                Join Waitlist
              </Button>
            </CardFooter>
          </Card>

          {/* Ultra Plan */}
          <Card className="relative border border-secondary-500/20 bg-black/50 animate-fade-up [animation-delay:200ms]">
            <div className="absolute -top-3 right-4 bg-secondary-600 text-white px-3 py-1 rounded-full text-sm">
              Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Ultra Plan</CardTitle>
              <CardDescription>Ideal for larger brands scaling up</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <span className="text-4xl font-bold">$50</span>
                <span className="text-gray-400">/month</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Check className="text-secondary-400" />
                  <span>10,000 credits included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-secondary-400" />
                  <span>Additional credits: $7 per 1,000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Store className="text-secondary-400" />
                  <span>Connect your e-commerce store</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="text-secondary-400" />
                  <span>In-depth reporting and analytics</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-secondary-600 hover:bg-secondary-700"
                onClick={handleWaitlistClick}
              >
                Join Waitlist
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Why Serenes Section */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold mb-8">Why Serenes?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Users className="w-8 h-8 mx-auto text-primary-400" />
              <h3 className="text-xl font-semibold">Boost Customer Loyalty</h3>
              <p className="text-gray-400">Turn one-time buyers into brand ambassadors</p>
            </div>
            <div className="space-y-4">
              <Store className="w-8 h-8 mx-auto text-primary-400" />
              <h3 className="text-xl font-semibold">Reduce Ad Costs</h3>
              <p className="text-gray-400">Achieve organic growth without breaking the bank</p>
            </div>
            <div className="space-y-4">
              <Zap className="w-8 h-8 mx-auto text-primary-400" />
              <h3 className="text-xl font-semibold">Drive Engagement</h3>
              <p className="text-gray-400">Leverage customer mentions for genuine brand visibility</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;