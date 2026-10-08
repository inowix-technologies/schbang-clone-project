import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollToForm } from "@/lib/healthcare/config";

export const Container = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)}>{children}</div>
);

export const Eyebrow = ({ children, dark = false }: { children: ReactNode; dark?: boolean }) => (
  <span
    className={cn(
      "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
      dark ? "border border-hc-white/15 bg-hc-white/5 text-[#7EE7DA]" : "bg-hc-sky text-hc-blue",
    )}
  >
    <span className={cn("h-1.5 w-1.5 rounded-full", dark ? "bg-hc-teal" : "bg-hc-blue")} />
    {children}
  </span>
);

export const SectionHeading = ({
  eyebrow,
  title,
  intro,
  center = false,
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
  dark?: boolean;
}) => (
  <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
    {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
    <h2
      className={cn(
        "mt-4 text-[1.85rem] font-extrabold leading-[1.15] tracking-tight sm:text-4xl",
        dark ? "text-hc-white" : "text-hc-ink",
      )}
    >
      {title}
    </h2>
    {intro && <p className={cn("mt-4 text-base sm:text-lg", dark ? "text-hc-white/70" : "text-hc-body")}>{intro}</p>}
  </div>
);

export const CtaButton = ({
  children,
  className,
  size = "lg",
}: {
  children: ReactNode;
  className?: string;
  size?: "sm" | "lg";
}) => (
  <button
    type="button"
    onClick={scrollToForm}
    className={cn(
      "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-hc-white hc-gradient-bg",
      "shadow-[0_12px_30px_-10px_rgba(59,91,255,0.65)] transition-[transform,box-shadow] duration-200",
      "hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_rgba(59,91,255,0.8)]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hc-teal focus-visible:ring-offset-2",
      size === "lg" ? "h-[52px] px-6 text-base" : "h-10 px-4 text-sm",
      className,
    )}
  >
    {children}
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
  </button>
);
