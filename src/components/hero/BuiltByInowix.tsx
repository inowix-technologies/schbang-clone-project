import { cn } from "@/lib/utils";

interface BuiltByInowixProps {
  className?: string;
  size?: "sm" | "md";
}

export const BuiltByInowix = ({ className, size = "sm" }: BuiltByInowixProps) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.18em] text-muted-foreground/80 border border-border/50 rounded px-2 py-0.5 bg-inowix-bg/60 backdrop-blur-sm",
      size === "sm" ? "text-[8px] sm:text-[9px]" : "text-[10px] sm:text-xs",
      className
    )}
  >
    <span className="w-1 h-1 rounded-full bg-primary animate-pulse" aria-hidden="true" />
    Built by Inowix
  </span>
);
