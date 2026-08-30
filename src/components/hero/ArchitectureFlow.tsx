import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const nodes = [
  { id: "architecture", label: "Architecture", x: 50, y: 8 },
  { id: "design", label: "Design", x: 15, y: 35 },
  { id: "engineering", label: "Engineering", x: 50, y: 35 },
  { id: "deployment", label: "Deployment", x: 85, y: 35 },
  { id: "scale", label: "Scale", x: 50, y: 62 },
  { id: "production", label: "Production", x: 50, y: 88 },
];

const connections = [
  ["architecture", "design"],
  ["architecture", "engineering"],
  ["architecture", "deployment"],
  ["design", "engineering"],
  ["engineering", "deployment"],
  ["design", "scale"],
  ["engineering", "scale"],
  ["deployment", "scale"],
  ["scale", "production"],
];

const getNode = (id: string) => nodes.find((n) => n.id === id)!;

export const ArchitectureFlow = ({ className }: { className?: string }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative w-full max-w-md mx-auto aspect-square",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        fill="none"
      >
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
              strokeWidth="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.8,
                delay: prefersReducedMotion ? 0 : 0.3 + i * 0.08,
              }}
            />
          );
        })}
        {!prefersReducedMotion &&
          connections.map(([from, to], i) => {
            const a = getNode(from);
            const b = getNode(to);
            return (
              <motion.circle
                key={`pulse-${from}-${to}`}
                r="0.6"
                fill="hsl(var(--primary))"
                initial={{ cx: a.x, cy: a.y, opacity: 0 }}
                animate={{
                  cx: [a.x, b.x],
                  cy: [a.y, b.y],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2.5,
                  delay: 1.5 + i * 0.4,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "linear",
                }}
              />
            );
          })}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.4,
            delay: prefersReducedMotion ? 0 : 0.1 + i * 0.1,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <div
            className={cn(
              "px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-md border border-border/60 bg-inowix-surface/90 backdrop-blur-sm",
              node.id === "production" && "border-primary/40 shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
            )}
          >
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-foreground/90 whitespace-nowrap">
              {node.label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
