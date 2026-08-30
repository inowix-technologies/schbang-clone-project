import { Link } from "react-router-dom";
import { ArrowRight, Code2, Brain, Shield, Cloud, Loader2 } from "lucide-react";
import { useServices } from "@/hooks/useServices";

const iconMap: Record<string, React.ReactNode> = {
  'product-engineering': <Code2 className="w-6 h-6" />,
  'artificial-intelligence': <Brain className="w-6 h-6" />,
  'cloud-devops': <Cloud className="w-6 h-6" />,
  'cybersecurity': <Shield className="w-6 h-6" />,
};

export const ServicesSection = () => {
  const { services, isLoading } = useServices();

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-inowix-surface/30 border-t border-border/40 relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Services</p>
          <h2 className="section-title mb-4">What we engineer</h2>
          <p className="lead max-w-2xl mx-auto">
            Production-grade technology across product engineering, AI, cloud, and security.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group rounded-2xl border border-border/40 bg-inowix-bg/50 p-6 hover:bg-inowix-elevated/30 hover:border-border/60 transition-all duration-300"
              >
                <div className="text-primary mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  {iconMap[service.slug] || <Code2 className="w-6 h-6" />}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
