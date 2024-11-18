import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -m-8">
          <div className="w-full md:w-1/2 p-8">
            <div className="md:max-w-lg">
              <h1 className="mb-6 text-4xl md:text-5xl font-bold font-heading tracking-tight">
                Automate{" "}
                <span className="gradient-text">Instagram Mentions</span>{" "}
                Rewards
              </h1>
              <p className="text-lg text-gray-300 font-medium">
                automate rewards for instagram mentions. save marketing costs. grow organically.
              </p>
          
              <div className="flex justify-center pt-4">
                <Button
                  onClick={() => navigate("/login")}
                  size="lg"
                  className="min-w-[160px] bg-primary-600 hover:bg-primary-700 text-white font-semibold"
                >
                  get started
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="md:max-w-lg">
              <h2 className="mb-6 text-3xl font-bold tracking-tight">
                join us today
              </h2>
              <p className="text-lg text-gray-300 font-medium">
                Sign up now and start benefitting from our service, it's fast, easy, and effective.
              </p>
              <Button
                onClick={() => navigate("/pricing")}
                size="lg"
                className="mt-4 bg-secondary-600 hover:bg-secondary-700 text-white font-semibold"
              >
                learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
