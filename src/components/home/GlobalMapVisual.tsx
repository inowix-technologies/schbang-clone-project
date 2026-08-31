import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const pins = [
  { id: "BL", label: "Bengaluru", x: 42, y: 78, tz: "Asia/Kolkata" },
  { id: "DL", label: "Delhi", x: 38, y: 32, tz: "Asia/Kolkata" },
  { id: "CH", label: "Chandigarh", x: 32, y: 22, tz: "Asia/Kolkata" },
];

interface GlobalMapVisualProps {
  activeIndex: number;
  className?: string;
}

export const GlobalMapVisual = ({ activeIndex, className }: GlobalMapVisualProps) => {
  const reduced = useReducedMotion();

  return (
    <div className={cn("relative aspect-[4/3] w-full", className)} aria-hidden="true">
      <svg viewBox="0 0 100 80" className="w-full h-full" fill="none">
        <path
          d="M15 35 Q25 20 40 25 T70 22 T88 35 T82 55 T60 72 T35 68 T15 55 Z"
          stroke="hsl(var(--border))"
          strokeWidth="0.4"
          fill="hsl(var(--primary) / 0.04)"
        />
        {pins.map((pin, i) => (
          <g key={pin.id}>
            {activeIndex === i && !reduced && (
              <motion.circle
                cx={pin.x}
                cy={pin.y}
                r="6"
                fill="hsl(var(--primary))"
                initial={{ opacity: 0.3, scale: 0.8 }}
                animate={{ opacity: 0, scale: 2 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
            <circle
              cx={pin.x}
              cy={pin.y}
              r={activeIndex === i ? 2.5 : 1.8}
              fill={activeIndex === i ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
            />
            <text
              x={pin.x}
              y={pin.y - 4}
              textAnchor="middle"
              className="fill-muted-foreground"
              style={{ fontSize: "3px", fontFamily: "monospace" }}
            >
              {pin.id}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export const getLocalTime = (tz: string) => {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      timeZone: tz,
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(new Date());
  } catch {
    return "";
  }
};
