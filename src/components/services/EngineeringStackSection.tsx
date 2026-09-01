import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ENGINEERING_SERVICES, HOMEPAGE_COPY } from "@/data/inowix-content";
import { ArchitectureFlow } from "@/components/hero/ArchitectureFlow";
import { LayerStack } from "./LayerStack";
import { ArchitectureFlowStrip } from "@/components/labs/ArchitectureFlowStrip";
import { cn } from "@/lib/utils";
import { fadeUp, defaultViewport } from "@/components/home/HomepageMotion";
import { SECTION_CONTAINER, SECTION_PY, SECTION_BORDER, SECTION_HEADER_MB, SECTION_EYEBROW } from "@/lib/section-layout";

export const EngineeringStackSection = ({ hideHeader = false }: { hideHeader?: boolean }) => {
  const reduced = useReducedMotion();
  const copy = HOMEPAGE_COPY.engineeringStack;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = ENGINEERING_SERVICES[activeIndex];

  return (
    <section id="services" className={cn("relative bg-inowix-surface/20 overflow-hidden", SECTION_BORDER)} aria-label="Engineering stack">
      <div className="absolute inset-0 pointer-events-none bg-grid-white/[0.02] bg-[length:48px_48px]" />

      <div className={cn("relative z-10", SECTION_CONTAINER, SECTION_PY)}>
        {!hideHeader && (
          <motion.div
            initial={reduced ? false : fadeUp.hidden}
            whileInView={fadeUp.visible}
            viewport={defaultViewport}
            className={cn("max-w-4xl", SECTION_HEADER_MB)}
          >
            <p className={SECTION_EYEBROW}>{copy.label}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
              <span className="block">{copy.line1}</span>
              <span className="block text-primary">{copy.line2}</span>
            </h2>
            <div className="mt-8 max-w-md hidden lg:block">
              <ArchitectureFlow />
            </div>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-[1fr_280px] gap-8 lg:gap-12">
          <div className="space-y-2">
            {ENGINEERING_SERVICES.map((service, i) => (
              <div
                key={service.slug}
                className={cn(
                  "border border-border/30 rounded-sm transition-all duration-300",
                  activeIndex === i && "border-l-[3px] bg-inowix-surface/20"
                )}
                style={activeIndex === i ? { borderLeftColor: service.accent } : undefined}
              >
                <button
                  type="button"
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4"
                  onClick={() => setActiveIndex(i)}
                  aria-expanded={activeIndex === i}
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: service.accent }}>
                      {service.tagline}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold">{service.name}</h3>
                  </div>
                  <ChevronDown
                    className={cn("w-5 h-5 shrink-0 text-muted-foreground transition-transform", activeIndex === i && "rotate-180")}
                  />
                </button>

                {activeIndex === i && (
                  <motion.div
                    initial={reduced ? false : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-5 sm:px-6 pb-6"
                  >
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 border rounded-sm"
                          style={{ borderColor: `${service.accent}35`, color: service.accent }}
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                    <ArchitectureFlowStrip steps={service.architecture} accent={service.accent} className="mb-4" />
                    <div className="lg:hidden mb-4">
                      <LayerStack activeLayers={service.layers} accent={service.accent} />
                    </div>
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                      style={{ color: service.accent }}
                    >
                      Explore {service.name} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block sticky top-32 h-fit">
            <LayerStack activeLayers={activeService.layers} accent={activeService.accent} />
          </div>
        </div>

        <div className="pt-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            All services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
