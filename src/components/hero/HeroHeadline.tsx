import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

const lines = ["WE BUILD", "TECHNOLOGY", "THAT BUSINESSES", "RUN ON."];

interface HeroHeadlineProps {
  className?: string;
}

export const HeroHeadline = ({ className }: HeroHeadlineProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <h1 className={cn("hero-headline-stack mb-8 sm:mb-10", className)}>
      {lines.map((line, i) => (
        <motion.span
          key={line}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 28, clipPath: "inset(100% 0 0 0)" }}
          animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
          transition={{
            duration: 0.7,
            delay: 0.15 + i * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={cn(
            "hero-headline-line block",
            line === "TECHNOLOGY" && "",
            line === "RUN ON." && "text-foreground/90"
          )}
        >
          {line === "TECHNOLOGY" ? (
            <AnimatedGradientText className="from-primary via-inowix-beacon to-inowix-com-ai">
              {line}
            </AnimatedGradientText>
          ) : (
            line
          )}
        </motion.span>
      ))}
    </h1>
  );
};
