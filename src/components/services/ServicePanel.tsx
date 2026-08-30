import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { EngineeringService } from "@/data/inowix-content";
import { ArchitectureFlowStrip } from "@/components/labs/ArchitectureFlowStrip";
import { LayerStack } from "./LayerStack";
import { cn } from "@/lib/utils";

interface ServicePanelProps {
  service: EngineeringService;
  index: number;
}

export const ServicePanel = ({ service, index }: ServicePanelProps) => {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex flex-col lg:flex-row gap-8 lg:gap-12 border-b border-border/30 py-12 sm:py-16 transition-all duration-400",
        hovered && "bg-inowix-surface/10"
      )}
      style={{
        borderLeftColor: hovered ? service.accent : undefined,
        borderLeftWidth: hovered ? 3 : 0,
      }}
    >
      <div className="hidden lg:block shrink-0">
        <LayerStack activeLayers={hovered ? service.layers : []} accent={service.accent} />
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: service.accent }}>
          {service.tagline}
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold mb-3">{service.name}</h3>
        <p className="text-muted-foreground mb-6 max-w-xl">{service.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
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

        <ArchitectureFlowStrip steps={service.architecture} accent={service.accent} className="mb-6" />

        <Link
          to={service.link}
          className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
          style={{ color: service.accent }}
        >
          Explore {service.name} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};
