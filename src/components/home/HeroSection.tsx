import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();
  
  const handleWaitlistClick = () => {
    window.location.href = "https://cutt.ly/beJsnsBc";
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
            <Rocket className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-primary-400">automated instagram marketing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            turn your <span className="gradient-text">customers</span> into your best <span className="gradient-text">marketers</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            automate rewards for instagram mentions. save marketing costs. grow organically.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              onClick={handleWaitlistClick}
              className="px-8 py-6 text-lg font-medium text-white rounded-md bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 hover:opacity-90 transition-opacity"
            >
              Join Waitlist
            </Button>
            <Button
              onClick={() => navigate("/pricing")}
              className="px-8 py-6 text-lg font-medium text-white rounded-md bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 via-yellow-500 to-red-500 hover:opacity-90 transition-opacity"
            >
              View Pricing
            </Button>
            <Button
              onClick={() => navigate("/login")}
              className="px-8 py-6 text-lg font-medium text-white rounded-md bg-gradient-to-r from-blue-500 via-purple-500 via-red-500 via-yellow-500 to-green-500 hover:opacity-90 transition-opacity"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};