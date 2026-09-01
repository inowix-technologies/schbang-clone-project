import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SECTION_CONTAINER, SECTION_PY, SECTION_BORDER } from "@/lib/section-layout";

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
      className={cn(SECTION_CONTAINER, "pt-28 sm:pt-32 pb-12 sm:pb-16", className)}
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
