import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, DollarSign } from "lucide-react";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary-900/10">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
      
      <div className="container px-4 mx-auto relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
            turn your customers into{" "}
            <span className="relative">
              <span className="relative z-10 gradient-text whitespace-normal sm:whitespace-nowrap">
                Brand Marketeers
              </span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-primary-500/20 -rotate-1" />
            </span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
              <p className="text-lg sm:text-xl text-gray-300">cut costs</p>
            </div>
            <div className="hidden md:block w-2 h-2 rounded-full bg-primary-400" />
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
              <p className="text-lg sm:text-xl text-gray-300">more branding</p>
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 px-4">
            automate rewards for instagram mentions. save marketing costs. grow organically.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => navigate("/signup")}
              size="lg"
              className="min-w-[200px] bg-primary-600 hover:bg-primary-700 text-white font-semibold group"
            >
              get started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => navigate("/pricing")}
              size="lg"
              variant="outline"
              className="min-w-[200px] border-primary-500/30 hover:bg-primary-500/10"
            >
              learn more
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary-500/30 to-transparent blur-sm" />
      </div>
    </section>
  );
};