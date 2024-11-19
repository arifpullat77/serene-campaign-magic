import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#020314] font-lexend">
      <div className="container mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Serenes</span>
          </h1>
          <p className="text-lg text-gray-400">
            Empowering brands to build stronger relationships with their customers through automated engagement
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-400 mb-8">
            At Serenes, we believe in the power of authentic customer advocacy. Our mission is to help brands harness 
            and reward genuine customer mentions, creating a virtuous cycle of engagement that benefits both businesses 
            and their customers.
          </p>
          <p className="text-gray-400">
            We're building tools that make it easy for brands to automatically detect, verify, and reward customer 
            mentions on Instagram, turning spontaneous shoutouts into lasting customer relationships.
          </p>
        </div>

        {/* Values Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
              <p className="text-gray-400">
                We believe in fostering genuine connections between brands and their customers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-400">
                We continuously improve our platform to meet the evolving needs of modern brands.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;