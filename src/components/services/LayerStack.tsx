import { cn } from "@/lib/utils";
import { ENGINEERING_LAYERS } from "@/data/inowix-content";

interface LayerStackProps {
  activeLayers: string[];
  accent: string;
  className?: string;
}

export const LayerStack = ({ activeLayers, accent, className }: LayerStackProps) => (
  <div className={cn("flex flex-col gap-1", className)}>
    {ENGINEERING_LAYERS.map((layer) => {
      const isActive = activeLayers.includes(layer);
      return (
        <div
          key={layer}
          className={cn(
            "font-mono text-[9px] sm:text-[10px] uppercase tracking-wider px-3 py-2 border rounded-sm transition-all duration-300",
            isActive ? "opacity-100" : "opacity-30"
          )}
          style={{
            borderColor: isActive ? `${accent}50` : "rgba(255,255,255,0.08)",
            background: isActive ? `${accent}10` : "transparent",
            color: isActive ? accent : undefined,
          }}
        >
          {layer}
        </div>
      );
    })}
  </div>
);
