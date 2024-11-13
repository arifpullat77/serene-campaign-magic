import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";

const Index = () => {
  const navigate = useNavigate();

  const handleWaitlistClick = () => {
    window.location.href = "https://forms.zohopublic.in/arex/form/SerenesSAAS/formperma/npqMFzuMYUMxihDcxi7RINMAPoxgLPaCeYil7RGFww8";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#020314] font-lexend">
      <HeroSection 
        onWaitlistClick={handleWaitlistClick}
        onPricingClick={() => navigate("/pricing")}
      />
      <ProcessSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Index;