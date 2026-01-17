import React from "react";
import { cn } from "@/lib/utils";

interface FloatingShapeProps {
  className?: string;
  count?: number;
}

export const FloatingShapes = ({ className, count = 6 }: FloatingShapeProps) => {
  const shapes = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute opacity-20"
          style={{
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            animation: `float ${shape.duration}s ease-in-out infinite`,
            animationDelay: `${shape.delay}s`,
          }}
        >
          {shape.id % 3 === 0 ? (
            // Circle
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/40 blur-sm" />
          ) : shape.id % 3 === 1 ? (
            // Square rotated
            <div className="w-full h-full bg-gradient-to-br from-pink-500/40 to-cyan-500/40 blur-sm transform rotate-45" />
          ) : (
            // Triangle
            <div className="w-full h-full bg-gradient-to-br from-purple-500/40 to-blue-500/40 blur-sm" style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }} />
          )}
        </div>
      ))}
    </div>
  );
};
