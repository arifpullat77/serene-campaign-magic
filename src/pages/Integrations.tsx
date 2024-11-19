import { Footer } from "@/components/layout/Footer";

const Integrations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#020314] font-lexend">
      <div className="container mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful <span className="gradient-text">Integrations</span>
          </h1>
          <p className="text-lg text-gray-400">
            Connect Serenes with your favorite platforms to streamline your workflow
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Instagram */}
          <div className="p-6 rounded-lg border border-primary-500/20 bg-black/50 animate-fade-up">
            <h3 className="text-xl font-semibold mb-4">Instagram</h3>
            <p className="text-gray-400">
              Connect your Instagram Business account to automatically detect mentions and send reward messages.
            </p>
          </div>

          {/* Analytics Tools */}
          <div className="p-6 rounded-lg border border-primary-500/20 bg-black/50 animate-fade-up [animation-delay:200ms]">
            <h3 className="text-xl font-semibold mb-4">Analytics Tools</h3>
            <p className="text-gray-400">
              Export your campaign data for deeper analysis in your preferred analytics platform.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Integrations;