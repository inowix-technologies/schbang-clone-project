import { FileText, Lock, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const FIELDS = [
  ["Patient ID", "#1042"],
  ["Home branch", "Powai"],
  ["Visits", "6"],
  ["Last visit", "12 Sep"],
];

const TIMELINE = [
  { title: "Follow-up visit", meta: "12 Sep · Powai · Dr. Rao" },
  { title: "Lab order completed", meta: "02 Sep · Diagnostics" },
  { title: "Video consult", meta: "21 Aug · Online" },
];

export const RecordsMockup = ({ className }: { className?: string }) => (
  <div aria-hidden="true" className={cn("rounded-2xl bg-hc-white p-3 ring-1 ring-hc-line shadow-[0_20px_50px_-24px_rgba(11,21,48,0.35)]", className)}>
    <div className="mb-2.5 flex items-center justify-between">
      <p className="text-[11px] font-bold text-hc-ink">Patient record</p>
      <span className="inline-flex items-center gap-1 rounded-full bg-hc-teal/10 px-2 py-0.5 text-[8px] font-semibold text-[#0B7468]">
        <Lock className="h-2.5 w-2.5" /> Role: Front desk
      </span>
    </div>
    <div className="grid grid-cols-2 gap-1.5">
      {FIELDS.map(([k, v]) => (
        <div key={k} className="rounded-lg bg-hc-mist px-2 py-1.5">
          <p className="text-[8px] text-hc-muted">{k}</p>
          <p className="text-[10px] font-semibold text-hc-ink">{v}</p>
        </div>
      ))}
    </div>
    <div className="mt-2.5 space-y-1.5 border-l-2 border-hc-sky pl-2.5">
      {TIMELINE.map((t) => (
        <div key={t.title} className="relative">
          <span className="absolute -left-[13px] top-1 h-2 w-2 rounded-full bg-hc-blue ring-2 ring-hc-white" />
          <p className="text-[9px] font-semibold text-hc-ink">{t.title}</p>
          <p className="text-[8px] text-hc-muted">{t.meta}</p>
        </div>
      ))}
    </div>
    <div className="mt-2.5 flex items-center justify-between rounded-lg border border-dashed border-hc-line px-2 py-1.5">
      <span className="inline-flex items-center gap-1 text-[8px] text-hc-body">
        <FileText className="h-2.5 w-2.5" /> 4 documents
      </span>
      <span className="inline-flex items-center gap-1 text-[8px] text-hc-muted">
        <ShieldCheck className="h-2.5 w-2.5" /> Access logged
      </span>
    </div>
  </div>
);
