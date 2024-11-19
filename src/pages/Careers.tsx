import { Footer } from "@/components/layout/Footer";

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#020314] font-lexend">
      <div className="container mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join <span className="gradient-text">Serenes</span>
          </h1>
          <p className="text-lg text-gray-400">
            Help us revolutionize how brands connect with their customers
          </p>
        </div>

        {/* Currently no open positions */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400 mb-8">
            We're not currently hiring, but we're always interested in meeting talented people. 
            Feel free to reach out to us at arifpullat@serenes.life
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;