import { HoverEffect } from "@/components/ui/card-hover-effect";

const services = [
  {
    title: "Brand Solutions",
    description: "We provide customised solutions to meet partner needs. We understand the objectives and requirements to develop strategies & create holistic consumer experiences and fully serve clients.",
    link: "/solutions/brand-strategy"
  },
  {
    title: "Tech Solutions", 
    description: "We optimise People, Processes and Technology. Map processes, align to objectives and maximise team efficiency with tech to improve the customer experience.",
    link: "/solutions/technology-solutions"
  },
  {
    title: "Media Solutions",
    description: "Drive results through strategic, audience-aligned ad placement across channels using the right messaging at the optimal time.",
    link: "/solutions/media-solutions"
  },
  {
    title: "Research Solutions",
    description: "We provide specialised market research for businesses using qualitative and quantitative methods. We integrate market research with our services to connect research, strategy and implementation.",
    link: "/solutions/research-data-and-analytics-solutions"
  },
  {
    title: "Film & Photography",
    description: "Inowix Motion Pictures, Global Content Hub and Inowix 808 produce and launch high-quality ad films, rapid video content and branded audio.",
    link: "/schbang-network"
  },
  {
      title: "Digital Strategy",
      description: "Crafting comprehensive digital roadmaps that align with your business goals, ensuring every digital touchpoint contributes to growth.",
      link: "/solutions/technology-solutions"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Our Services
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Comprehensive digital solutions tailored to elevate your brand.
        </p>
        
        <HoverEffect items={services} />
      </div>
    </section>
  );
};