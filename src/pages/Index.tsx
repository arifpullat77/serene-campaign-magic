import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUp, Gift, ShoppingCart } from "lucide-react";

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
                Link Your Instagram & Never Look Back
              </h1>
              <p className="text-2xl text-gray-600 mb-8">
                Automated But You Decide Offers !
              </p>
              <Button size="lg" onClick={() => navigate("/signup")} className="animate-fade-up">
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <ArrowUp className="h-12 w-12 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">They Post</h3>
                <p className="text-gray-300">
                  Your customers post about your products and tag you, Serenes automatically collects these mentions.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Gift className="h-12 w-12 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">They Get Rewarded</h3>
                <p className="text-gray-300">
                  They get rewarded with cool coupon codes, and you can choose what reward to give based on their follower count (pre-set on serenes)
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <ShoppingCart className="h-12 w-12 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">They Transact Again</h3>
                <p className="text-gray-300">
                  They buy again & bring more money to the bank obviously your brand gets organic exposure and new followers
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-xl text-gray-400">
                What if they didn't post, we loose nothing
              </p>
            </div>
          </div>
        </section>

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

export default Index;
