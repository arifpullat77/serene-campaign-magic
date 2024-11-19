import { Footer } from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#020314] font-lexend">
      <div className="container mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-400">Last updated: March 2024</p>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including when you create an account,
            connect your Instagram account, or communicate with us.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services,
            including automated mention detection and reward distribution.
          </p>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share your information with third-party
            service providers who assist us in providing our services.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access or disclosure.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            privacy@serenes.life
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;