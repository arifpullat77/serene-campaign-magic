import { Lightbulb, Target, ChartBarIncreasing, ShieldCheck } from "lucide-react";

export const BenefitsSection = () => {
  return (
    <section className="py-32 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            why choose serenes?
          </h2>
          <p className="text-xl text-gray-400">
            maximize your marketing roi with user-generated content
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {[
            {
              icon: <Lightbulb className="w-6 h-6" />,
              title: "Zero Cash Outflow",
              description: "Pay with inventory instead of cash. Perfect for growing brands."
            },
            {
              icon: <Target className="w-6 h-6" />,
              title: "Higher Engagement",
              description: "5-15% engagement rate vs 0.5-3% for traditional ads"
            },
            {
              icon: <ChartBarIncreasing className="w-6 h-6" />,
              title: "Organic Growth",
              description: "Build authentic social proof through real customer experiences"
            },
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: "Full Automation",
              description: "Set it once, let Serenes handle verification and rewards"
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-primary-500/5 border border-primary-500/20"
            >
              <div className="p-3 rounded-lg bg-primary-500/10 text-primary-400">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};