import { HoverEffect } from "@/components/ui/card-hover-effect";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { Palette, Code, Radio, BarChart3, Film, Zap } from "lucide-react";

const services = [
  {
    title: "Brand Solutions",
    description: "We provide customised solutions to meet partner needs. We understand the objectives and requirements to develop strategies & create holistic consumer experiences and fully serve clients.",
    link: "/solutions/brand-strategy",
    icon: <Palette className="w-8 h-8 text-blue-400" />,
    gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20"
  },
  {
    title: "Tech Solutions", 
    description: "We optimise People, Processes and Technology. Map processes, align to objectives and maximise team efficiency with tech to improve the customer experience.",
    link: "/solutions/technology-solutions",
    icon: <Code className="w-8 h-8 text-purple-400" />,
    gradient: "from-purple-500/20 via-pink-500/20 to-cyan-500/20"
  },
  {
    title: "Media Solutions",
    description: "Drive results through strategic, audience-aligned ad placement across channels using the right messaging at the optimal time.",
    link: "/solutions/media-solutions",
    icon: <Radio className="w-8 h-8 text-pink-400" />,
    gradient: "from-pink-500/20 via-purple-500/20 to-blue-500/20"
  },
  {
    title: "Research Solutions",
    description: "We provide specialised market research for businesses using qualitative and quantitative methods. We integrate market research with our services to connect research, strategy and implementation.",
    link: "/solutions/research-data-and-analytics-solutions",
    icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20"
  },
  {
    title: "Film & Photography",
    description: "Inowix Motion Pictures, Global Content Hub and Inowix 808 produce and launch high-quality ad films, rapid video content and branded audio.",
    link: "/schbang-network",
    icon: <Film className="w-8 h-8 text-purple-400" />,
    gradient: "from-purple-500/20 via-pink-500/20 to-cyan-500/20"
  },
  {
    title: "Digital Strategy",
    description: "Crafting comprehensive digital roadmaps that align with your business goals, ensuring every digital touchpoint contributes to growth.",
    link: "/solutions/technology-solutions",
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    gradient: "from-blue-500/20 via-cyan-500/20 to-purple-500/20"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      <GradientMesh className="opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-center px-2 sm:px-0">
          Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground text-center max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            Comprehensive digital solutions tailored to elevate your brand.
        </p>
        
        <HoverEffect items={services} />
      </div>
    </section>
  );
};