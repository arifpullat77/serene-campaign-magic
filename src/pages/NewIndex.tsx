import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Rocket, Target, ChartBarIncreasing, ShieldCheck, Lightbulb } from "lucide-react";
import { Footer } from "@/components/layout/Footer";

const NewIndex = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#020314] font-lexend">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
              <Rocket className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-400">automated instagram marketing</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              turn your <span className="gradient-text">customers</span> into your best <span className="gradient-text">marketers</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              automate rewards for instagram mentions. save marketing costs. grow organically.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                onClick={() => window.location.href = "https://cutt.ly/beJsnsBc"}
                className="bg-primary-600 hover:bg-primary-700 text-lg px-8"
              >
                Join Waitlist
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate("/pricing")}
                className="text-lg px-8"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 border-t border-primary-500/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              how serenes works
            </h2>
            <p className="text-xl text-gray-400">
              three simple steps to automate your instagram marketing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Target className="w-8 h-8 text-primary-400" />,
                title: "Connect Instagram",
                description: "Link your brand's Instagram account to start monitoring mentions and stories",
                image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              },
              {
                icon: <ChartBarIncreasing className="w-8 h-8 text-primary-400" />,
                title: "Set Rewards",
                description: "Define reward tiers based on customer follower counts",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-primary-400" />,
                title: "Automate & Grow",
                description: "Let Serenes handle the rest - from verification to reward delivery",
                image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center space-y-6 p-6 rounded-2xl bg-primary-500/5 border border-primary-500/20">
                <div className="p-4 rounded-full bg-primary-500/10">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                <div className="w-full aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              why choose serenes?
            </h2>
            <p className="text-xl text-gray-400">
              maximize your marketing roi with user-generated content
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                icon: <Lightbulb className="w-6 h-6" />,
                title: "Zero Cash Outflow",
                description: "Pay with inventory instead of cash. Perfect for growing brands."
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Higher Engagement",
                description: "5-15% engagement rate vs 0.5-3% for traditional ads"
              },
              {
                icon: <ChartBarIncreasing className="w-6 h-6" />,
                title: "Organic Growth",
                description: "Build authentic social proof through real customer experiences"
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Full Automation",
                description: "Set it once, let Serenes handle verification and rewards"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-primary-500/5 border border-primary-500/20"
              >
                <div className="p-3 rounded-lg bg-primary-500/10 text-primary-400">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
