import { FileText, Code2, Calendar, Presentation, Handshake } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      icon: FileText,
      title: "Form Your Team",
      description: "Register your 3-5 member elite squad"
    },
    {
      icon: Code2,
      title: "Receive Your Track",
      description: "Get your deep-tech problem statement at our online kick-off"
    },
    {
      icon: Calendar,
      title: "Build & Collaborate",
      description: "Work for 1-2 weeks, with Q&A support on our Discord"
    },
    {
      icon: Presentation,
      title: "Present Your Architecture",
      description: "Deliver an in-depth presentation to our expert judges"
    },
    {
      icon: Handshake,
      title: "Win & Get Referred",
      description: "Top 3 teams are announced, and the referral process begins"
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your <span className="text-gradient">2-Week Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From registration to referral in 5 clear steps
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Glowing line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[hsl(var(--accent-blue))] via-primary to-[hsl(var(--accent-green))] opacity-30"></div>
          <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-[hsl(var(--accent-blue))] via-primary to-[hsl(var(--accent-green))] animate-pulse-slow"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative flex items-start gap-8 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step number with glow */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-card border-4 border-[hsl(var(--accent-blue))] flex items-center justify-center shadow-lg shadow-[hsl(var(--accent-blue))]/30 group-hover:shadow-[hsl(var(--accent-blue))]/60 transition-all duration-300 group-hover:scale-110">
                    <step.icon className="w-7 h-7 text-[hsl(var(--accent-blue))] group-hover:animate-pulse" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 glow-card-blue">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
