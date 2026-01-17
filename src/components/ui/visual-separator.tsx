import React from "react";
import { cn } from "@/lib/utils";

interface VisualSeparatorProps {
  className?: string;
  variant?: "gradient" | "dots" | "waves" | "geometric";
}

export const VisualSeparator = ({ 
  className, 
  variant = "gradient" 
}: VisualSeparatorProps) => {
  return (
    <div className={cn("w-full h-px relative", className)}>
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}
      
      {variant === "dots" && (
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-white/20"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      )}
      
      {variant === "waves" && (
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,60 Q300,20 600,60 T1200,60"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            className="animate-pulse-slow"
          />
        </svg>
      )}
      
      {variant === "geometric" && (
        <div className="absolute inset-0 flex items-center justify-center gap-8">
          <div className="w-2 h-2 rotate-45 bg-white/20" />
          <div className="w-1 h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="w-2 h-2 rotate-45 bg-white/20" />
        </div>
      )}
    </div>
  );
};
