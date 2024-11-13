import { Target, ChartBarIncreasing, ShieldCheck } from "lucide-react";

export const ProcessSection = () => {
  return (
    <section className="py-32 border-t border-primary-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            how serenes works
          </h2>
          <p className="text-xl text-gray-400">
            three simple steps to automate your instagram marketing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Target className="w-8 h-8 text-primary-400" />,
              title: "Connect Instagram",
              description: "Link your brand's Instagram account to start monitoring mentions and stories",
              image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
            },
            {
              icon: <ChartBarIncreasing className="w-8 h-8 text-primary-400" />,
              title: "Set Rewards",
              description: "Define reward tiers based on customer follower counts",
              image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-primary-400" />,
              title: "Automate & Grow",
              description: "Let Serenes handle the rest - from verification to reward delivery",
              image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
            }
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center space-y-6 p-6 rounded-2xl bg-primary-500/5 border border-primary-500/20">
              <div className="p-4 rounded-full bg-primary-500/10">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
              <div className="w-full aspect-video rounded-lg overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};