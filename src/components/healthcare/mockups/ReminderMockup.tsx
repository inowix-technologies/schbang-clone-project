import { BellRing, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const ReminderMockup = ({ className }: { className?: string }) => (
  <div aria-hidden="true" className={cn("w-[240px] space-y-2", className)}>
    <div className="rounded-2xl hc-glass-light p-2.5 shadow-[0_18px_40px_-18px_rgba(11,21,48,0.45)]">
      <div className="flex items-start gap-2">
        <span className="rounded-lg hc-gradient-bg p-1.5 text-hc-white">
          <BellRing className="h-3 w-3" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-bold text-hc-ink">Appointment reminder</p>
            <span className="text-[8px] text-hc-muted">now</span>
          </div>
          <p className="text-[9px] leading-snug text-hc-body">
            Tomorrow, 10:30 AM at Bandra branch. Reply 1 to confirm or 2 to reschedule.
          </p>
        </div>
      </div>
    </div>
    <div className="ml-6 flex items-center gap-2 rounded-2xl bg-hc-white p-2 ring-1 ring-hc-line shadow-[0_12px_30px_-16px_rgba(11,21,48,0.4)]">
      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-hc-success" />
      <p className="text-[9px] font-semibold text-hc-ink">Confirmed · slot locked</p>
    </div>
  </div>
);
