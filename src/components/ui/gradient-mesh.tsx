import React from "react";
import { cn } from "@/lib/utils";

interface GradientMeshProps {
  className?: string;
  colors?: string[];
}

export const GradientMesh = ({ 
  className, 
  colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#06b6d4"] 
}: GradientMeshProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/30 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/30 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
      </div>
      
      {/* Mesh gradient overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="mesh-gradient-1" cx="50%" cy="50%">
            <stop offset="0%" stopColor={colors[0]} stopOpacity="0.4" />
            <stop offset="100%" stopColor={colors[0]} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="mesh-gradient-2" cx="50%" cy="50%">
            <stop offset="0%" stopColor={colors[1]} stopOpacity="0.4" />
            <stop offset="100%" stopColor={colors[1]} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="mesh-gradient-3" cx="50%" cy="50%">
            <stop offset="0%" stopColor={colors[2]} stopOpacity="0.4" />
            <stop offset="100%" stopColor={colors[2]} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="20%" cy="30%" r="400" fill="url(#mesh-gradient-1)" className="animate-pulse-slow" />
        <circle cx="70%" cy="60%" r="400" fill="url(#mesh-gradient-2)" className="animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <circle cx="50%" cy="80%" r="400" fill="url(#mesh-gradient-3)" className="animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </svg>
    </div>
  );
};
