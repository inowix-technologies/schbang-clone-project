import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

export const PageHero = ({ label, title, subtitle, className, children }: PageHeroProps) => {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32 pb-12 sm:pb-16", className)}
    >
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">{label}</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] max-w-4xl mb-4">
        {title}
      </h1>
      {subtitle && <p className="lead max-w-2xl">{subtitle}</p>}
      {children}
    </motion.div>
  );
};
