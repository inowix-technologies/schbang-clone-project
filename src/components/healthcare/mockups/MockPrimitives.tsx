import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Mockups are decorative product illustrations with fictional data; screen readers skip them. */
export const BrowserFrame = ({ url, children, className }: { url: string; children: ReactNode; className?: string }) => (
  <div
    aria-hidden="true"
    className={cn(
      "overflow-hidden rounded-2xl border border-hc-white/10 bg-hc-white shadow-[0_30px_80px_-20px_rgba(4,10,30,0.55)]",
      className,
    )}
  >
    <div className="flex items-center gap-2 border-b border-hc-line bg-hc-mist px-3 py-2">
      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
      <span className="ml-3 flex-1 truncate rounded-md bg-hc-white px-2 py-0.5 text-[10px] text-hc-muted">{url}</span>
    </div>
    {children}
  </div>
);

export const PhoneFrame = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div
    aria-hidden="true"
    className={cn(
      "w-[200px] rounded-[2rem] border-[6px] border-[#0E1733] bg-[#0E1733] shadow-[0_30px_70px_-15px_rgba(4,10,30,0.6)]",
      className,
    )}
  >
    <div className="relative overflow-hidden rounded-[1.55rem] bg-hc-white">
      <div className="absolute left-1/2 top-1.5 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-[#0E1733]" />
      {children}
    </div>
  </div>
);

export const StatusPill = ({ tone, children }: { tone: "teal" | "blue" | "amber" | "slate"; children: ReactNode }) => {
  const tones = {
    teal: "bg-hc-teal/10 text-[#0B8577]",
    blue: "bg-hc-blue/10 text-hc-blue",
    amber: "bg-amber-100 text-hc-amber",
    slate: "bg-slate-100 text-slate-600",
  };
  return <span className={cn("inline-flex rounded-full px-1.5 py-0.5 text-[9px] font-semibold", tones[tone])}>{children}</span>;
};
