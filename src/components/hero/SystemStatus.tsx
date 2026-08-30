import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const pillars = [
  "Product Engineering",
  "Artificial Intelligence",
  "Cybersecurity",
];

export const SystemStatus = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground",
        className
      )}
    >
      <span className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        <span className="text-foreground/80">Inowix Technologies</span>
      </span>
      <span className="hidden sm:inline text-border">|</span>
      {pillars.map((pillar, i) => (
        <span key={pillar} className="flex items-center gap-2">
          {i > 0 && <span className="text-border hidden sm:inline">·</span>}
          <span>{pillar}</span>
        </span>
      ))}
    </motion.div>
  );
};
