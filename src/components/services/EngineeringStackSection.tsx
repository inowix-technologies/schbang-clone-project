import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ENGINEERING_SERVICES, HOMEPAGE_COPY, ENGINEERING_LAYERS } from "@/data/inowix-content";
import { ServicePanel } from "./ServicePanel";

export const EngineeringStackSection = () => {
  const reduced = useReducedMotion();
  const copy = HOMEPAGE_COPY.engineeringStack;

  return (
    <section id="services" className="relative bg-inowix-surface/20 border-t border-border/40 overflow-hidden" aria-label="Engineering stack">
      <div className="absolute inset-0 pointer-events-none bg-grid-white/[0.02] bg-[length:48px_48px]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-28">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-14 sm:mb-20"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">{copy.label}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
            <span className="block">{copy.line1}</span>
            <span className="block text-primary">{copy.line2}</span>
          </h2>
        </motion.div>

        <div className="hidden xl:flex absolute right-10 top-32 flex-col gap-1 opacity-40 pointer-events-none">
          {ENGINEERING_LAYERS.map((layer) => (
            <span key={layer} className="font-mono text-[8px] uppercase tracking-[0.2em] text-muted-foreground">
              {layer}
            </span>
          ))}
        </div>

        <div>
          {ENGINEERING_SERVICES.map((service, i) => (
            <ServicePanel key={service.slug} service={service} index={i} />
          ))}
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
