import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { EditorialCTA } from "@/components/layout/EditorialCTA";
import { EngineeringStackSection } from "@/components/services/EngineeringStackSection";
import { ENGINEERING_SERVICES } from "@/data/inowix-content";
import { ArchitectureFlowStrip } from "@/components/labs/ArchitectureFlowStrip";
import { LayerStack } from "@/components/services/LayerStack";
import { Button } from "@/components/ui/button";

const Services = () => {
  const { slug } = useParams<{ slug?: string }>();
  const activeService = slug ? ENGINEERING_SERVICES.find((s) => s.slug === slug) : null;

  if (!slug) {
    return (
      <PageShell>
        <PageHero
          label="Services"
          title={
            <>
              <span className="block">From experience layer</span>
              <span className="block text-primary">to security layer.</span>
            </>
          }
          subtitle="Product engineering, AI, cloud infrastructure, and cybersecurity — engineered for production."
        />
        <EngineeringStackSection hideHeader />
        <EditorialCTA />
      </PageShell>
    );
  }

  if (!activeService) {
    return (
      <PageShell>
        <div className="max-w-[1600px] mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Button asChild variant="outline" className="rounded-sm">
            <Link to="/services">All Services</Link>
          </Button>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32 pb-16">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" /> All Services
        </Link>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3 hidden lg:block">
            <LayerStack activeLayers={activeService.layers} accent={activeService.accent} />
          </div>
          <div className="lg:col-span-9">
            <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: activeService.accent }}>
              {activeService.tagline}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{activeService.name}</h1>
            <p className="lead mb-8">{activeService.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {activeService.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 border rounded-sm"
                  style={{ borderColor: `${activeService.accent}35`, color: activeService.accent }}
                >
                  {cap}
                </span>
              ))}
            </div>
            <ArchitectureFlowStrip steps={activeService.architecture} accent={activeService.accent} className="mb-10" />
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
              style={{ color: activeService.accent }}
            >
              Start a project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <EditorialCTA />
    </PageShell>
  );
};

export default Services;
