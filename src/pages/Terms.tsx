import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#020314] font-lexend">
      <div className="container mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-lg text-gray-400">Last updated: March 2024</p>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Serenes, you agree to be bound by these Terms of Service and all
            applicable laws and regulations.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Serenes provides automated Instagram mention detection and reward distribution services for
            businesses ("the Service").
          </p>

          <h2>3. User Responsibilities</h2>
          <p>
            You are responsible for maintaining the security of your account and for all activities
            that occur under your account.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are owned by Serenes
            and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            Serenes shall not be liable for any indirect, incidental, special, consequential, or
            punitive damages resulting from your use of or inability to use the Service.
          </p>

          <h2>6. Contact</h2>
          <p>
            If you have any questions about these Terms, please contact us at: legal@serenes.life
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;