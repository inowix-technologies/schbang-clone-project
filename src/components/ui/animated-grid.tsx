import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGridProps {
  className?: string;
  pattern?: "grid" | "dots" | "lines";
  color?: string;
}

export const AnimatedGrid = ({ 
  className, 
  pattern = "grid",
  color = "rgba(255, 255, 255, 0.03)"
}: AnimatedGridProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {pattern === "grid" && (
        <div 
          className="absolute inset-0 bg-grid-white/[0.02]"
          style={{
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      )}
      {pattern === "dots" && (
        <div 
          className="absolute inset-0 bg-dot-white/[0.05]"
          style={{
            backgroundSize: "30px 30px",
          }}
        />
      )}
      {pattern === "lines" && (
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="40" stroke={color} strokeWidth="1" />
              <line x1="0" y1="0" x2="40" y2="0" stroke={color} strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lines)" />
        </svg>
      )}
    </div>
  );
};
