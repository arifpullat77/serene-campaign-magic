import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export const HeroSection = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  
  const handleWaitlistClick = () => {
    window.open("https://cutt.ly/beJsnsBc", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      
      {/* Top-right auth button */}
      <div className="absolute top-6 right-6 z-50">
        {isLoggedIn ? (
          <Button
            onClick={() => navigate("/dashboard")}
            variant="outline"
            className="px-6 py-2 text-base font-medium hover:bg-primary-500/10"
          >
            Dashboard
          </Button>
        ) : (
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            className="px-6 py-2 text-base font-medium hover:bg-primary-500/10"
          >
            Login
          </Button>
        )}
      </div>

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
          
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button
              onClick={handleWaitlistClick}
              size="lg"
              className="min-w-[160px] bg-primary-600 hover:bg-primary-700 text-white"
            >
              Join Waitlist
            </Button>
            
            <Button
              onClick={() => navigate("/pricing")}
              size="lg"
              variant="outline"
              className="min-w-[160px] border-primary-500/20 hover:bg-primary-500/10"
            >
              View Pricing
            </Button>
            
            {!isLoggedIn && (
              <Button
                onClick={() => navigate("/login")}
                size="lg"
                className="min-w-[160px] bg-secondary-600 hover:bg-secondary-700 text-white"
              >
                Sign Up
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};