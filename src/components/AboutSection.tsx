import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { ArrowRight, Lightbulb, Users, Target, Rocket, Sparkles, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { FloatingShapes } from "@/components/ui/floating-shapes";

const items = [
  {
    title: "Challengers at Heart",
    description: "We constantly question the status quo and push boundaries.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent animate-pulse-slow" />
        <Target className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-blue-400 opacity-60 group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
      </div>
    ),
    icon: <Target className="h-4 w-4 text-blue-400" />,
  },
  {
    title: "Builders by Nature",
    description: "We don't just strategize; we build tangible solutions.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
        <Rocket className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-purple-400 opacity-60 group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute top-3 left-3 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: "0.3s" }} />
        <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" />
      </div>
    ),
    icon: <Rocket className="h-4 w-4 text-purple-400" />,
  },
  {
    title: "Global Ambition",
    description: "Taking the best of Indian creative talent to the world stage.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <Globe className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-cyan-400 opacity-60 group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute top-2 left-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: "0.6s" }} />
        <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
      </div>
    ),
    icon: <Globe className="h-4 w-4 text-cyan-400" />,
  },
  {
    title: "Integrated Core",
    description: "Seamlessly blending creativity, technology, and media.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <Zap className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-pink-400 opacity-60 group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute top-3 right-3 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: "0.9s" }} />
        <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
      </div>
    ),
    icon: <Zap className="h-4 w-4 text-pink-400" />,
  },
];

export const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      <GradientMesh className="opacity-30" />
      <FloatingShapes count={8} className="opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mb-3 sm:mb-4">
            What defines us
          </p>
          <h2 className="section-title text-foreground mb-3 sm:mb-4 px-2 sm:px-0">
            We're <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">challengers</span> at heart and <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">builders</span> by nature.
          </h2>
          <p className="lead max-w-3xl mx-auto px-4 sm:px-0">
             We're brand builders at heart, creators by design, tech enthusiasts in practice, and integrated at our core.
          </p>
        </div>

        <BentoGrid className="max-w-4xl mx-auto mb-12">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
        
        <div className="flex justify-center">
            <Button asChild variant="outline" className="rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base text-foreground border-foreground hover:bg-foreground hover:text-background transition-all">
                <Link to="/about-us">
                  Dive into our culture
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
};