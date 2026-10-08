import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logoinowix.png";
import { cn } from "@/lib/utils";
import { scrollToForm } from "@/lib/ai-automation/config";

export const LpContainer = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)}>{children}</div>
);

/** The source PNG is mostly transparent padding around the wordmark, so it is cropped by its container. */
export const LpLogo = ({ className }: { className?: string }) => (
  <span className={cn("flex h-9 items-center overflow-hidden", className)}>
    <img src={logo} alt="Inowix" width={96} height={83} className="h-auto w-24 max-w-none" decoding="async" />
  </span>
);

interface CtaButtonProps {
  children: ReactNode;
  className?: string;
  size?: "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export const CtaButton = ({ children, className, size = "lg", onClick = scrollToForm, type = "button", disabled }: CtaButtonProps) => (
  <button
    type={type}
    onClick={type === "submit" ? undefined : onClick}
    disabled={disabled}
    className={cn(
      "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-lp-white",
      "bg-gradient-to-r from-lp-blue to-lp-violet shadow-[0_10px_30px_-10px_rgba(59,91,255,0.7)]",
      "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgba(124,58,237,0.75)]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lp-blue focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-60",
      size === "lg" ? "h-14 px-7 text-base" : "h-10 px-4 text-sm",
      className
    )}
  >
    {children}
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
  </button>
);

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}) => (
  <div className={cn("mx-auto max-w-2xl text-center", className)}>
    {eyebrow && (
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-lp-blue">{eyebrow}</p>
    )}
    <h2
      className={cn(
        "text-[28px] font-extrabold leading-[1.15] tracking-tight sm:text-4xl",
        dark ? "text-lp-white" : "text-lp-ink"
      )}
    >
      {title}
    </h2>
    {subtitle && (
      <p className={cn("mt-4 text-base sm:text-lg", dark ? "text-slate-300" : "text-lp-body")}>{subtitle}</p>
    )}
  </div>
);
