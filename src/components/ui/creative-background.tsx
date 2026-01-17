import React from "react";
import { cn } from "@/lib/utils";

interface CreativeBackgroundProps {
  className?: string;
  variant?: "default" | "gradient" | "particles" | "mesh";
}

export const CreativeBackground = ({ 
  className, 
  variant = "default" 
}: CreativeBackgroundProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {variant === "gradient" && (
        <>
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        </>
      )}
      
      {variant === "particles" && (
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}
      
      {variant === "mesh" && (
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mesh-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="currentColor" className="text-white/10" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh-pattern)" />
        </svg>
      )}
      
      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <line
          x1="0"
          y1="30%"
          x2="100%"
          y2="30%"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          className="animate-pulse-slow"
        />
        <line
          x1="0"
          y1="70%"
          x2="100%"
          y2="70%"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          className="animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </svg>
    </div>
  );
};
