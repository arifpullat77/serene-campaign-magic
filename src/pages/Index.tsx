import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Instagram, BarChart3, Send, DollarSign } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                Transform Your Customer Content Into Sales
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Automatically track Instagram mentions, reward customers, and boost your brand's organic reach.
              </p>
              <Button size="lg" onClick={() => navigate("/signup")} className="animate-fade-up">
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How Serenes Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Instagram className="h-8 w-8 text-primary-500" />}
                title="Instagram Integration"
                description="Automatically detect and track when customers mention your brand in posts and stories."
              />
              <FeatureCard
                icon={<Send className="h-8 w-8 text-primary-500" />}
                title="Automated Rewards"
                description="Send personalized coupon codes via DM to customers who share your products."
              />
              <FeatureCard
                icon={<BarChart3 className="h-8 w-8 text-primary-500" />}
                title="Analytics Dashboard"
                description="Track campaign performance, engagement metrics, and ROI in real-time."
              />
              <FeatureCard
                icon={<DollarSign className="h-8 w-8 text-primary-500" />}
                title="Flexible Pricing"
                description="Simple monthly subscription with no hidden fees or long-term commitments."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Grow Your Brand?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of brands using Serenes to turn customer content into powerful marketing campaigns.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate("/signup")}
              className="bg-white text-primary-600 hover:bg-white/90"
            >
              Get Started Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Index;