import React from "react";
import { cn } from "@/lib/utils";

interface DecorativeElementsProps {
  className?: string;
}

export const DecorativeElements = ({ className }: DecorativeElementsProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Animated circles */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-blue-500/20 rounded-full animate-pulse-slow" />
      <div className="absolute top-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
      
      {/* Animated lines */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <line
          x1="0"
          y1="20%"
          x2="100%"
          y2="20%"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          className="animate-pulse-slow"
        />
        <line
          x1="0"
          y1="80%"
          x2="100%"
          y2="80%"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          className="animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </svg>

      {/* Geometric shapes */}
      <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-pink-500/20 rotate-45 animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 w-12 h-12 border-2 border-cyan-500/20 rotate-12 animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
    </div>
  );
};
