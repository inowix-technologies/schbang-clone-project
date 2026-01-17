import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedGradientText = ({ children, className }: AnimatedGradientTextProps) => {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient",
        className
      )}
      style={{
        backgroundSize: "200% auto",
        animation: "gradient 3s ease infinite",
      }}
    >
      {children}
    </span>
  );
};
