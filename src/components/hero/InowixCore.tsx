import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ENGINEERING_LAYERS } from "@/data/inowix-content";
import {
  CoreNodePanel,
  ORBIT_NODE_IDS,
  CORE_NODE_ANGLES,
  getNodeAccent,
  getNodeGlow,
  getNodeLabel,
  polarToXY,
  type CoreNodeId,
} from "./CoreNodePanel";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const NODE_RADIUS = 38;
const CENTER = { x: 50, y: 50 };

interface InowixCoreProps {
  activeId: CoreNodeId | null;
  onActivate: (id: CoreNodeId | null) => void;
  className?: string;
}

export const InowixCore = ({ activeId, onActivate, className }: InowixCoreProps) => {
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const next = (focusedIndex + 1) % ORBIT_NODE_IDS.length;
        setFocusedIndex(next);
        onActivate(ORBIT_NODE_IDS[next]);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const prev = (focusedIndex - 1 + ORBIT_NODE_IDS.length) % ORBIT_NODE_IDS.length;
        setFocusedIndex(prev);
        onActivate(ORBIT_NODE_IDS[prev]);
      } else if (e.key === "Escape") {
        onActivate(null);
      }
    },
    [focusedIndex, onActivate]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const activeGlow = activeId ? getNodeGlow(activeId) : "rgba(96,165,250,0.12)";

  return (
    <div className={cn("relative w-full h-full min-h-[320px] sm:min-h-[400px] lg:min-h-[480px]", className)}>
      {/* Engineering scan lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {ENGINEERING_LAYERS.map((layer, i) => (
          <div
            key={layer}
            className="absolute left-0 right-0 flex items-center gap-2 px-2"
            style={{ top: `${12 + i * 14}%` }}
          >
            <span className="font-mono text-[7px] sm:text-[8px] uppercase tracking-widest text-muted-foreground/40 w-20 shrink-0">
              {layer}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* Hex grid SVG */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <defs>
          {ORBIT_NODE_IDS.map((id) => (
            <linearGradient key={id} id={`beam-${id}`} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={getNodeAccent(id)} stopOpacity="0.7" />
              <stop offset="100%" stopColor={getNodeAccent(id)} stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>

        {/* Outer hex ring */}
        <motion.polygon
          points="50,8 85,28 85,72 50,92 15,72 15,28"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="0.2"
          animate={{ opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Connection beams */}
        {ORBIT_NODE_IDS.map((id) => {
          const pos = polarToXY(CORE_NODE_ANGLES[id], NODE_RADIUS, CENTER.x, CENTER.y);
          const isActive = activeId === id;
          const isDimmed = activeId && activeId !== id;
          return (
            <g key={id}>
              <motion.line
                x1={CENTER.x}
                y1={CENTER.y}
                x2={pos.x}
                y2={pos.y}
                stroke={`url(#beam-${id})`}
                strokeWidth={isActive ? 0.6 : 0.25}
                animate={{ opacity: isDimmed ? 0.12 : isActive ? 1 : 0.4 }}
                transition={{ duration: 0.35 }}
              />
              {isActive && !reduced && (
                <motion.circle
                  r="0.9"
                  fill={getNodeAccent(id)}
                  animate={{
                    cx: [CENTER.x, pos.x],
                    cy: [CENTER.y, pos.y],
                  }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                />
              )}
            </g>
          );
        })}

        {/* Core rings */}
        {[10, 16, 22].map((r, i) => (
          <motion.circle
            key={r}
            cx={CENTER.x}
            cy={CENTER.y}
            r={r}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="0.15"
            animate={{ opacity: [0.1, 0.35, 0.1] }}
            transition={{ duration: 3.5 + i, repeat: Infinity }}
          />
        ))}
      </svg>

      {/* Central core hex */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        style={{ width: "24%", height: "24%" }}
      >
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          animate={{ boxShadow: `0 0 48px ${activeGlow}` }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 rotate-45 border-2 border-primary/40 bg-inowix-surface/90 backdrop-blur-md" />
          <div className="absolute inset-[18%] rotate-45 border border-border/60 bg-inowix-bg" />
          <div className="relative z-10 text-center">
            <p className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-primary">Inowix</p>
            <p className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest">Core</p>
          </div>
        </motion.div>
      </div>

      {/* Orbit nodes */}
      {ORBIT_NODE_IDS.map((id) => {
        const pos = polarToXY(CORE_NODE_ANGLES[id], NODE_RADIUS, CENTER.x, CENTER.y);
        const isActive = activeId === id;
        const isDimmed = activeId && activeId !== id;
        const accent = getNodeAccent(id);

        return (
          <button
            key={id}
            type="button"
            className={cn(
              "absolute z-10 -translate-x-1/2 -translate-y-1/2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded transition-all duration-300",
              isActive && "scale-110 z-20",
              isDimmed && "opacity-35 scale-90"
            )}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            onMouseEnter={() => !isMobile && onActivate(id)}
            onFocus={() => onActivate(id)}
            onClick={() => onActivate(activeId === id ? null : id)}
            aria-pressed={isActive}
            aria-label={getNodeLabel(id)}
          >
            <motion.div
              animate={{
                borderColor: isActive ? accent : "hsl(var(--border) / 0.5)",
                boxShadow: isActive ? `0 0 24px ${getNodeGlow(id)}` : "none",
              }}
              className="relative px-2.5 py-2 sm:px-3 sm:py-2.5 border-2 bg-inowix-bg/95 backdrop-blur-sm min-w-[76px] sm:min-w-[92px]"
              style={{ clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0 100%)" }}
            >
              <span className="absolute top-1.5 left-2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
              <span className="block font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-foreground pl-2.5 text-left">
                {getNodeLabel(id)}
              </span>
            </motion.div>
          </button>
        );
      })}

      {/* Desktop overlay panel */}
      {!isMobile && (
        <AnimatePresence mode="wait">
          {activeId && activeId !== "core" && (
            <CoreNodePanel nodeId={activeId} variant="overlay" />
          )}
        </AnimatePresence>
      )}

      {/* Hint */}
      {!activeId && (
        <p className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-muted-foreground/40 whitespace-nowrap pointer-events-none">
          {isMobile ? "Tap a system" : "Hover · Arrow keys · Enter"}
        </p>
      )}

      {/* Mobile drawer */}
      {isMobile && (
        <AnimatePresence>
          {activeId && activeId !== "core" && (
            <CoreNodePanel
              nodeId={activeId}
              variant="drawer"
              onClose={() => onActivate(null)}
            />
          )}
        </AnimatePresence>
      )}
    </div>
  );
};
