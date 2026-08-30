import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useServices } from "@/hooks/useServices";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const { slug } = useParams<{ slug?: string }>();
  const { services, isLoading } = useServices();
  const activeService = slug ? services.find((s) => s.slug === slug) : null;

  return (
    <div className="min-h-screen bg-inowix-bg text-foreground">
      <Header />
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {!slug ? (
            <>
              <div className="mb-12 sm:mb-16 max-w-2xl">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Services</p>
                <h1 className="section-title mb-4">Technology services</h1>
                <p className="lead">
                  Product engineering, AI, cloud infrastructure, and cybersecurity — engineered for production.
                </p>
              </div>
              {isLoading ? (
                <div className="flex justify-center py-20">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      className="group block rounded-2xl border border-border/40 bg-inowix-surface/30 p-6 sm:p-8 hover:bg-inowix-elevated/50 transition-all duration-300"
                    >
                      <h2 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h2>
                      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                        {service.tagline}
                      </p>
                      <p className="text-sm text-muted-foreground mb-6">{service.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                        Explore
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : !activeService ? (
            <div className="text-center py-20">
              <h1 className="text-2xl font-bold mb-4">Service not found</h1>
              <Button asChild variant="outline"><Link to="/services">All Services</Link></Button>
            </div>
          ) : (
            <>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                All Services
              </Link>
              <div className="max-w-3xl mb-12">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  {activeService.tagline}
                </p>
                <h1 className="section-title mb-6">{activeService.name}</h1>
                <p className="lead">{activeService.description}</p>
              </div>
              {activeService.service_items && activeService.service_items.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                  {activeService.service_items.map((item) => (
                    <div key={item.id} className="rounded-xl border border-border/40 bg-inowix-surface/30 p-5">
                      <h3 className="font-medium mb-1">{item.name}</h3>
                      {item.description && (
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
              <Button asChild>
                <Link to="/contact-us">Start a Project</Link>
              </Button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
