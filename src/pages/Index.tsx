import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowUp, Gift, ShoppingCart, TrendingUp, Cog, Wallet } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar.tsx";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#020314] font-lexend">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 lowercase leading-tight">
              turn your customers into brand marketeers
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 mb-12 lowercase">
              cut costs : more branding
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate("/login")} 
              className="animate-fade-up bg-primary-600 hover:bg-primary-700"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </section>

      {/* Process Flow Images */}
      <section className="py-32 relative border-t border-primary-500/30">
        <div className="absolute inset-0 bg-[url('/hexagon-grid.png')] bg-repeat opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="text-center space-y-6 border-2 border-primary-500 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4 leading-relaxed">your customer<br />POST & TAG<br />on Instagram</h3>
              <div className="aspect-square bg-gradient-to-br from-primary-500/20 to-transparent p-1 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Customer posting on Instagram" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-xl text-white font-semibold leading-relaxed">
                Happy Customer<br />=<br />New Customers
              </p>
            </div>

            <div className="text-center space-y-6 border-2 border-primary-500 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4 leading-relaxed">they get 2000<br />INR<br />coupon</h3>
              <div className="aspect-square bg-gradient-to-br from-primary-500/20 to-transparent p-1 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Happy customer with reward" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-xl text-white font-semibold leading-relaxed">
                Happier Customer<br />=<br />More transaction
              </p>
            </div>

            <div className="text-center space-y-6 border-2 border-primary-500 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4 leading-relaxed">Got brand<br />marketeer's without<br />paying cash</h3>
              <div className="aspect-square bg-gradient-to-br from-primary-500/20 to-transparent p-1 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Team celebrating success" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-xl text-white font-semibold leading-relaxed">
                Free Branding<br />without cash outflow
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 text-white border-t border-primary-500/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Link Your Instagram & Never Look Back
            </h2>
            <p className="text-xl md:text-2xl text-gray-400">
              Automated But You Decide Offers!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-8">
                <ArrowUp className="h-12 w-12 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">They Post</h3>
              <p className="text-gray-300 leading-relaxed">
                Your customers post about your products and tag you, Serenes automatically collects these mentions.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="flex justify-center mb-8">
                <Gift className="h-12 w-12 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">They Get Rewarded</h3>
              <p className="text-gray-300 leading-relaxed">
                They get rewarded with cool coupon codes, and you can choose what reward to give based on their follower count (pre-set on serenes)
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="flex justify-center mb-8">
                <ShoppingCart className="h-12 w-12 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">They Transact Again</h3>
              <p className="text-gray-300 leading-relaxed">
                They buy again & bring more money to the bank obviously your brand gets organic exposure and new followers
              </p>
            </div>
          </div>

          <div className="text-center mt-24">
            <p className="text-xl text-gray-400">
              What if they didn't post, we loose nothing
            </p>
          </div>
        </div>
      </section>

      {/* Meta Section */}
      <section className="py-32 border-t border-primary-500/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
            Meta has looted $2.7 billion, while Flipkart too $650 million from consumer brands
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Do you want to pay more? Of course not. Join our mission as customers, talent & strategic partners
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => window.location.href = 'mailto:arifpullat@serenes.life'}
            className="mb-32"
          >
            EMAIL US
          </Button>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Why not, Serenes?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-24">
            cash is KING only if its in your bank, not in facebook's
          </p>

          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-8">
                <TrendingUp className="h-12 w-12 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Compounding Growth</h3>
              <p className="text-gray-300 leading-relaxed">
                Reward your customers & let them bring more visibility, Branding & Sales
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="flex justify-center mb-8">
                <Wallet className="h-12 w-12 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">No More Cash Outflow</h3>
              <p className="text-gray-300 leading-relaxed">
                Your only investment is your product. Customers earn tiered rewards through coupon codes depending on their follower count
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="flex justify-center mb-8">
                <Cog className="h-12 w-12 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Automated & Analytics</h3>
              <p className="text-gray-300 leading-relaxed">
                Every time a customer tags your brand, Serenes instantly picks it up, verifies it, and sends out a custom coupon code—no manual work needed
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
