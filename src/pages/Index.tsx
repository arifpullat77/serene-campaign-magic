import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUp, Gift, ShoppingCart, TrendingUp, Cog, Wallet } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 font-lexend">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold mb-6 gradient-text lowercase">
                turn your customers into brand marketeers
              </h1>
              <p className="text-2xl text-gray-400 mb-8 lowercase">
                cut costs : more branding
              </p>
              <Button 
                size="lg" 
                onClick={() => navigate("/login")} 
                className="animate-fade-up"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-900 text-white border-t border-primary-500">
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
              <h2 className="text-3xl font-bold mb-4 gradient-text">
                Link Your Instagram & Never Look Back
              </h2>
              <p className="text-xl text-gray-400 mb-16">
                Automated But You Decide Offers!
              </p>
              <p className="text-xl text-gray-400">
                What if they didn't post, we loose nothing
              </p>
            </div>
          </div>
        </section>

        {/* Meta Section */}
        <section className="py-20 bg-gray-900 border-t border-primary-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Meta has looted $2.7 billion, while Flipkart too $650 million from consumer brands
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Do you want to pay more? Of course not. Join our mission as customers, talent & strategic partners
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.location.href = 'mailto:arifpullat@serenes.life'}
              className="mb-20"
            >
              EMAIL US
            </Button>

            <h2 className="text-4xl font-bold text-white mb-6">
              Why not, Serenes?
            </h2>
            <p className="text-xl text-gray-400 mb-16">
              cash is KING only if its in your bank, not in facebook's
            </p>

            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <TrendingUp className="h-12 w-12 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Compounding Growth</h3>
                <p className="text-gray-300">
                  Reward your customers & let them bring more visibility, Branding & Sales
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Wallet className="h-12 w-12 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">No More Cash Outflow</h3>
                <p className="text-gray-300">
                  Your only investment is your product. Customers earn tiered rewards through coupon codes depending on their follower count
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Cog className="h-12 w-12 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Automated & Analytics</h3>
                <p className="text-gray-300">
                  Every time a customer tags your brand, Serenes instantly picks it up, verifies it, and sends out a custom coupon code—no manual work needed
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;