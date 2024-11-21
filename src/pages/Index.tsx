import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { EmailPopup } from "@/components/EmailPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#020314] font-lexend">
      <HeroSection />
      <ProcessSection />
      <BenefitsSection />
      <FAQSection />
      <Footer />
      <EmailPopup />
    </div>
  );
};

export default Index;