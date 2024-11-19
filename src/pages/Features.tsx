import { Footer } from "@/components/layout/Footer";

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#020314] font-lexend">
      <div className="container mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">Serenes</span>
          </h1>
          <p className="text-lg text-gray-400">
            Empower your brand with authentic customer advocacy and automated reward distribution
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Automated Mention Detection */}
          <div className="p-6 rounded-lg border border-primary-500/20 bg-black/50 animate-fade-up">
            <h3 className="text-xl font-semibold mb-4">Automated Mention Detection</h3>
            <p className="text-gray-400">
              Automatically detect and track Instagram mentions of your brand, ensuring no customer shoutout goes unnoticed.
            </p>
          </div>

          {/* Instant Reward Distribution */}
          <div className="p-6 rounded-lg border border-primary-500/20 bg-black/50 animate-fade-up [animation-delay:200ms]">
            <h3 className="text-xl font-semibold mb-4">Instant Reward Distribution</h3>
            <p className="text-gray-400">
              Automatically send reward codes to customers who mention your brand, creating a seamless reward experience.
            </p>
          </div>

          {/* Analytics Dashboard */}
          <div className="p-6 rounded-lg border border-primary-500/20 bg-black/50 animate-fade-up [animation-delay:400ms]">
            <h3 className="text-xl font-semibold mb-4">Analytics Dashboard</h3>
            <p className="text-gray-400">
              Track mentions, reward distribution, and measure the impact of your word-of-mouth marketing campaigns.
            </p>
          </div>

          {/* Instagram Integration */}
          <div className="p-6 rounded-lg border border-primary-500/20 bg-black/50 animate-fade-up">
            <h3 className="text-xl font-semibold mb-4">Instagram Integration</h3>
            <p className="text-gray-400">
              Seamlessly connect with Instagram to monitor mentions and engage with customers through direct messages.
            </p>
          </div>

          {/* Customizable Rewards */}
          <div className="p-6 rounded-lg border border-primary-500/20 bg-black/50 animate-fade-up [animation-delay:200ms]">
            <h3 className="text-xl font-semibold mb-4">Customizable Rewards</h3>
            <p className="text-gray-400">
              Set up flexible reward tiers based on follower count and engagement metrics to maximize ROI.
            </p>
          </div>

          {/* Easy Setup */}
          <div className="p-6 rounded-lg border border-primary-500/20 bg-black/50 animate-fade-up [animation-delay:400ms]">
            <h3 className="text-xl font-semibold mb-4">Easy Setup</h3>
            <p className="text-gray-400">
              Get started quickly with our simple onboarding process and user-friendly dashboard.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;