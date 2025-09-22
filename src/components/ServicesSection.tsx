import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Brand Solutions",
    description: "We provide customised solutions to meet partner needs. We understand the objectives and requirements to develop strategies & create holistic consumer experiences and fully serve clients.",
    href: "/solutions/brand-strategy"
  },
  {
    title: "Tech Solutions", 
    description: "We optimise People, Processes and Technology. Map processes, align to objectives and maximise team efficiency with tech to improve the customer experience.",
    href: "/solutions/technology-solutions"
  },
  {
    title: "Media Solutions",
    description: "Drive results through strategic, audience-aligned ad placement across channels using the right messaging at the optimal time.",
    href: "/solutions/media-solutions"
  },
  {
    title: "Research Solutions",
    description: "We provide specialised market research for businesses using qualitative and quantitative methods. We integrate market research with our services to connect research, strategy and implementation.",
    href: "/solutions/research-data-and-analytics-solutions"
  },
  {
    title: "Film & Photography",
    description: "Schbang Motion Pictures, Global Content Hub and Schbang 808 produce and launch high-quality ad films, rapid video content and branded audio.",
    href: "/schbang-network"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-section">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">
          Our services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="group p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};