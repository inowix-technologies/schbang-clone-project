import { Briefcase, Trophy, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const ValueProposition = () => {
  const values = [
    {
      icon: Briefcase,
      title: "Direct Placement Referrals",
      description: "The top 3 teams get a direct referral to our partner companies in Gurgaon. This is your fast track to a high-growth career.",
      color: "accent-blue"
    },
    {
      icon: Trophy,
      title: "Solve & Win",
      description: "Compete for a ₹5,000 winning prize by building a robust solution in your chosen tech track.",
      color: "accent-green"
    },
    {
      icon: Brain,
      title: "Showcase Your Depth",
      description: "This isn't a 24-hour sprint. Go deep. Present your algorithms and architecture to a panel of industry experts.",
      color: "accent-orange"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Gateway to <span className="text-gradient">Gurgaon's Elite</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            More than just a hackathon—your gateway to elite tech careers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="p-8 hover-lift bg-[hsl(var(--card))] border-border/50 hover:border-primary/50 transition-all duration-300 glow-card-purple group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-[hsl(var(--${value.color}))]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className={`w-8 h-8 text-[hsl(var(--${value.color}))] group-hover:animate-pulse`} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
