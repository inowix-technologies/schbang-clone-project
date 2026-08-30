import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  INOWIX_PRODUCTS,
  INOWIX_PROJECTS,
  type ProductSlug,
  type ProjectSlug,
} from "@/data/inowix-content";
import { ProductMicroDemo } from "./ProductMicroDemo";
import { BuiltByInowix } from "./BuiltByInowix";
import { cn } from "@/lib/utils";

export type CoreNodeId = "core" | ProductSlug | ProjectSlug;

interface CoreNodePanelProps {
  nodeId: CoreNodeId;
  variant?: "overlay" | "inline" | "drawer";
  onClose?: () => void;
}

export const CoreNodePanel = ({ nodeId, variant = "overlay", onClose }: CoreNodePanelProps) => {
  const product = nodeId in INOWIX_PRODUCTS ? INOWIX_PRODUCTS[nodeId as ProductSlug] : null;
  const project = nodeId in INOWIX_PROJECTS ? INOWIX_PROJECTS[nodeId as ProjectSlug] : null;
  if (!product && !project) return null;

  const isProduct = !!product;
  const accent = isProduct ? product!.accent : project!.accent;
  const link = isProduct ? product!.link : project!.link;

  return (
    <motion.div
      key={nodeId}
      initial={{
        opacity: 0,
        y: variant === "inline" || variant === "drawer" ? 12 : 0,
        x: variant === "overlay" ? 16 : 0,
      }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: 8, x: variant === "overlay" ? 8 : 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex flex-col overflow-hidden",
        variant === "overlay" &&
          "absolute right-0 top-0 bottom-0 w-[55%] sm:w-[50%] border-l border-border/40 bg-inowix-bg/95 backdrop-blur-xl p-4 sm:p-5 z-30",
        variant === "inline" && "mt-4 rounded-xl border border-border/40 bg-inowix-surface/80 p-4",
        variant === "drawer" &&
          "fixed inset-x-0 bottom-0 z-50 max-h-[70vh] overflow-y-auto rounded-t-2xl border-t border-border/40 bg-inowix-bg p-5 pb-8 shadow-2xl"
      )}
      role="region"
      aria-label={`${isProduct ? product!.name : project!.name} details`}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: accent }}>
            {isProduct ? "Inowix Labs · Product" : "Engineered System"}
          </p>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight">
            {isProduct ? product!.name : project!.name}
          </h3>
          {isProduct && <p className="text-xs text-muted-foreground mt-0.5">{product!.tagline}</p>}
        </div>
        <BuiltByInowix size="md" />
      </div>

      <div className="relative rounded-lg overflow-hidden border border-border/40 mb-4 aspect-[16/10] shrink-0">
        <img
          src={isProduct ? product!.screenshot : project!.image}
          alt=""
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{ background: `linear-gradient(135deg, ${accent}60, transparent 70%)` }}
        />
      </div>

      {isProduct && (
        <div className="mb-4 shrink-0">
          <ProductMicroDemo productId={product!.slug} autoPlay />
        </div>
      )}

      <p className="text-xs sm:text-sm text-muted-foreground mb-4">
        {isProduct ? product!.description : project!.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-auto">
        {(isProduct ? product!.features : project!.capabilities).map((cap) => (
          <span
            key={cap}
            className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider px-2 py-1 rounded border border-border/40 bg-inowix-surface/60"
          >
            {cap}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/30">
        <Link
          to={link}
          className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2 transition-all"
          style={{ color: accent }}
        >
          Explore {isProduct ? "product" : "work"}
          <ArrowUpRight className="w-4 h-4" />
        </Link>
        {variant === "drawer" && onClose && (
          <button
            type="button"
            onClick={onClose}
            className="ml-auto text-xs text-muted-foreground hover:text-foreground font-mono uppercase tracking-wider"
          >
            Close
          </button>
        )}
      </div>
    </motion.div>
  );
};

export function polarToXY(angleDeg: number, radius: number, cx = 50, cy = 50) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
}

export const CORE_NODE_ANGLES: Record<CoreNodeId, number> = {
  core: 0,
  "com-ai": -90,
  beacon: -30,
  "red-cli": 30,
  "srl-logistics": 90,
  swiftgo: 150,
  babyland: 210,
};

export const ORBIT_NODE_IDS: CoreNodeId[] = [
  "com-ai",
  "beacon",
  "red-cli",
  "srl-logistics",
  "swiftgo",
  "babyland",
];

export function getNodeAccent(id: CoreNodeId): string {
  if (id in INOWIX_PRODUCTS) return INOWIX_PRODUCTS[id as ProductSlug].accent;
  if (id in INOWIX_PROJECTS) return INOWIX_PROJECTS[id as ProjectSlug].accent;
  return "hsl(var(--primary))";
}

export function getNodeGlow(id: CoreNodeId): string {
  if (id in INOWIX_PRODUCTS) return INOWIX_PRODUCTS[id as ProductSlug].glow;
  if (id in INOWIX_PROJECTS) return INOWIX_PROJECTS[id as ProjectSlug].glow;
  return "rgba(96,165,250,0.2)";
}

export function getNodeLabel(id: CoreNodeId): string {
  if (id in INOWIX_PRODUCTS) return INOWIX_PRODUCTS[id as ProductSlug].name.toUpperCase();
  if (id in INOWIX_PROJECTS) return INOWIX_PROJECTS[id as ProjectSlug].name.toUpperCase();
  return "INOWIX CORE";
}
