import React from "react";
import { cn } from "@/lib/utils";

interface GlowEffectProps {
  className?: string;
  color?: "blue" | "purple" | "pink" | "cyan";
  intensity?: "low" | "medium" | "high";
}

export const GlowEffect = ({ 
  className, 
  color = "blue",
  intensity = "medium" 
}: GlowEffectProps) => {
  const colorClasses = {
    blue: "from-blue-500/20 via-blue-400/10 to-transparent",
    purple: "from-purple-500/20 via-purple-400/10 to-transparent",
    pink: "from-pink-500/20 via-pink-400/10 to-transparent",
    cyan: "from-cyan-500/20 via-cyan-400/10 to-transparent",
  };

  const intensityClasses = {
    low: "blur-3xl",
    medium: "blur-2xl",
    high: "blur-xl",
  };

  return (
    <div
      className={cn(
        "absolute inset-0 bg-gradient-to-br",
        colorClasses[color],
        intensityClasses[intensity],
        "animate-pulse-slow pointer-events-none",
        className
      )}
    />
  );
};
