import { cn } from "@/lib/utils";

interface WorldIllustrationProps {
  type: "ai" | "engineering" | "security";
  className?: string;
  accent?: string;
}

export const WorldIllustration = ({ type, className, accent = "hsl(var(--primary))" }: WorldIllustrationProps) => {
  if (type === "ai") {
    return (
      <svg viewBox="0 0 120 80" className={cn("w-full h-full", className)} fill="none" aria-hidden="true">
        <circle cx="60" cy="40" r="8" fill={accent} opacity="0.8" />
        {[
          [20, 20], [100, 20], [20, 60], [100, 60], [60, 10], [60, 70],
        ].map(([x, y], i) => (
          <g key={i}>
            <line x1="60" y1="40" x2={x} y2={y} stroke={accent} strokeWidth="0.5" opacity="0.4" />
            <circle cx={x} cy={y} r="3" fill={accent} opacity="0.6" />
          </g>
        ))}
      </svg>
    );
  }

  if (type === "engineering") {
    return (
      <svg viewBox="0 0 120 80" className={cn("w-full h-full", className)} fill="none" aria-hidden="true">
        {[15, 35, 55, 75].map((y, i) => (
          <rect
            key={y}
            x={20 + i * 4}
            y={y}
            width={80 - i * 8}
            height="12"
            rx="1"
            stroke={accent}
            strokeWidth="0.5"
            fill={`${accent}15`}
            opacity={0.5 + i * 0.15}
          />
        ))}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 80" className={cn("w-full h-full", className)} fill="none" aria-hidden="true">
      <path
        d="M60 12 L95 28 V52 L60 68 L25 52 V28 Z"
        stroke={accent}
        strokeWidth="0.8"
        fill={`${accent}10`}
      />
      <path d="M60 28 L75 36 V52 L60 60 L45 52 V36 Z" stroke={accent} strokeWidth="0.5" opacity="0.6" />
      <circle cx="60" cy="42" r="4" fill={accent} opacity="0.7" />
    </svg>
  );
};
