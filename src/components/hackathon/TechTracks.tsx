import { Card } from "@/components/ui/card";
import { Brain, Server, Smartphone, Zap } from "lucide-react";

const TechTracks = () => {
  const tracks = [
    {
      icon: Brain,
      title: "AI / ML Solutions",
      description: "Build and implement advanced models. Focus on real-world applications, optimization, and deployment-ready AI systems.",
      color: "accent-blue",
      gradient: "from-[hsl(var(--accent-blue))]/20 to-transparent"
    },
    {
      icon: Server,
      title: "Core Backend Development",
      description: "Design scalable, secure microservices and APIs. Demonstrate deep understanding of system architecture and databases.",
      color: "accent-green",
      gradient: "from-[hsl(var(--accent-green))]/20 to-transparent"
    },
    {
      icon: Smartphone,
      title: "APK Core Development",
      description: "Engineer a high-performance, feature-rich native Android app. Showcase clean architecture and modern Android practices.",
      color: "accent-yellow",
      gradient: "from-[hsl(var(--accent-yellow))]/20 to-transparent"
    },
    {
      icon: Zap,
      title: "Advanced Automation",
      description: "Create sophisticated automation solutions for real-world business problems. Demonstrate efficiency gains and ROI.",
      color: "accent-orange",
      gradient: "from-[hsl(var(--accent-orange))]/20 to-transparent"
    }
  ];

  return (
    <section id="tracks" className="py-24 px-4 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient">Arena</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the domain where you want to prove your expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, index) => (
            <Card 
              key={index}
              className={`p-6 hover-lift bg-gradient-to-b ${track.gradient} border-border/50 hover:border-[hsl(var(--${track.color}))]/50 transition-all duration-300 glow-card-${track.color === 'accent-blue' ? 'blue' : track.color === 'accent-green' ? 'green' : track.color === 'accent-orange' ? 'orange' : 'purple'} group cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-lg bg-[hsl(var(--${track.color}))]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <track.icon className={`w-7 h-7 text-[hsl(var(--${track.color}))] group-hover:rotate-12 transition-transform`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{track.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{track.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTracks;
