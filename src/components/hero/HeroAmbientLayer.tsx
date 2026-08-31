import { motion, useReducedMotion } from "framer-motion";
import { ENGINEERING_LAYERS } from "@/data/inowix-content";
import { cn } from "@/lib/utils";

const nodes = [
  { id: "core", x: 50, y: 50, accent: "hsl(var(--primary))" },
  { id: "ai", x: 22, y: 28, accent: "hsl(var(--accent-com-ai))" },
  { id: "cloud", x: 78, y: 32, accent: "hsl(var(--accent-beacon))" },
  { id: "security", x: 18, y: 72, accent: "hsl(var(--accent-red-cli))" },
  { id: "data", x: 82, y: 68, accent: "hsl(var(--primary))" },
  { id: "edge", x: 50, y: 18, accent: "hsl(var(--accent-beacon))" },
];

const connections: [string, string][] = [
  ["core", "ai"],
  ["core", "cloud"],
  ["core", "security"],
  ["core", "data"],
  ["core", "edge"],
  ["ai", "security"],
  ["cloud", "data"],
];

const getNode = (id: string) => nodes.find((n) => n.id === id)!;

interface HeroAmbientLayerProps {
  className?: string;
}

export const HeroAmbientLayer = ({ className }: HeroAmbientLayerProps) => {
  const reduced = useReducedMotion();

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      aria-hidden="true"
    >
      {/* Brand orbs */}
      <div
        className={cn(
          "absolute -top-8 right-1/4 h-56 w-56 rounded-full bg-inowix-com-ai/10 blur-[100px]",
          !reduced && "animate-pulse-slow"
        )}
      />
      <div
        className={cn(
          "absolute bottom-1/4 -left-8 h-48 w-48 rounded-full bg-inowix-beacon/10 blur-[100px]",
          !reduced && "animate-pulse-slow"
        )}
        style={reduced ? undefined : { animationDelay: "1s" }}
      />
      <div
        className={cn(
          "absolute top-1/3 -right-4 h-40 w-40 rounded-full bg-primary/10 blur-[100px]",
          !reduced && "animate-pulse-slow"
        )}
        style={reduced ? undefined : { animationDelay: "2s" }}
      />

      {/* Engineering scan lines */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        {ENGINEERING_LAYERS.map((layer, i) => (
          <div
            key={layer}
            className="absolute left-0 right-0 flex items-center gap-2 px-2"
            style={{ top: `${10 + i * 16}%` }}
          >
            <span className="font-mono text-[7px] sm:text-[8px] uppercase tracking-widest text-muted-foreground/40 w-20 shrink-0">
              {layer}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* SVG node graph */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-40">
        {connections.map(([from, to], i) => {
          const a = getNode(from);
          const b = getNode(to);
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="hsl(var(--border))"
              strokeWidth="0.25"
              initial={reduced ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: reduced ? 0 : 0.8,
                delay: reduced ? 0 : 0.2 + i * 0.1,
              }}
            />
          );
        })}
        {nodes.map((node, i) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r="1.2"
            fill={node.accent}
            initial={reduced ? false : { opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduced ? 0 : 0.4,
              delay: reduced ? 0 : 0.5 + i * 0.08,
            }}
          />
        ))}
      </svg>

      {/* Corner brackets */}
      <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 100 100" fill="none">
        <path d="M4 12 V4 H12" stroke="hsl(var(--foreground))" strokeWidth="0.4" />
        <path d="M88 4 H96 V12" stroke="hsl(var(--foreground))" strokeWidth="0.4" />
        <path d="M4 88 V96 H12" stroke="hsl(var(--foreground))" strokeWidth="0.4" />
        <path d="M88 96 H96 V88" stroke="hsl(var(--foreground))" strokeWidth="0.4" />
      </svg>
    </div>
  );
};
