import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { EngineeringWorld } from "@/data/inowix-content";
import { INOWIX_PRODUCTS } from "@/data/inowix-content";

interface WorldPanelProps {
  world: EngineeringWorld;
  isActive: boolean;
  onActivate: () => void;
  reduced: boolean | null;
}

export const WorldPanel = ({ world, isActive, onActivate, reduced }: WorldPanelProps) => {
  const product = world.productSlug ? INOWIX_PRODUCTS[world.productSlug] : null;

  return (
    <motion.div
      layout
      onMouseEnter={onActivate}
      onFocus={onActivate}
      tabIndex={0}
      role="button"
      aria-pressed={isActive}
      className={cn(
        "relative flex flex-col border rounded-sm p-6 sm:p-8 transition-all duration-500 cursor-default outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        isActive ? "bg-inowix-surface/40 border-border/60" : "bg-inowix-bg/40 border-border/30 opacity-70 hover:opacity-90"
      )}
      style={{
        boxShadow: isActive ? `0 0 40px ${world.glow}` : undefined,
        borderLeftColor: isActive ? world.accent : undefined,
        borderLeftWidth: isActive ? 3 : 1,
      }}
      animate={reduced ? undefined : { scale: isActive ? 1.02 : 1 }}
      transition={{ duration: 0.35 }}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] mb-3" style={{ color: world.accent }}>
        {world.label}
      </p>
      <h3 className="text-xl sm:text-2xl font-bold mb-3">{world.name}</h3>
      <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">{world.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {world.capabilities.map((cap) => (
          <span
            key={cap}
            className="font-mono text-[9px] uppercase tracking-wider px-2 py-1 border rounded-sm"
            style={{ borderColor: `${world.accent}30`, color: world.accent }}
          >
            {cap}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-auto">
        <Link
          to={world.serviceLink}
          className="inline-flex items-center gap-1.5 text-xs font-medium hover:gap-2 transition-all"
          style={{ color: world.accent }}
        >
          Explore service <ArrowRight className="w-3 h-3" />
        </Link>
        {product && (
          <Link
            to={product.link}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {product.name} <ArrowRight className="w-3 h-3" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};
