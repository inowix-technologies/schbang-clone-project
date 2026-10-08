import { Clock, Video } from "lucide-react";
import { PhoneFrame, StatusPill } from "./MockPrimitives";

const SLOTS = [
  { time: "09:30", patient: "Patient #1042", type: "Follow-up", status: "Checked in", tone: "teal" as const },
  { time: "10:00", patient: "Patient #1187", type: "Video consult", status: "Online", tone: "blue" as const, video: true },
  { time: "10:30", patient: "Patient #0963", type: "New visit", status: "Confirmed", tone: "slate" as const },
  { time: "11:00", patient: "Patient #1220", type: "Follow-up", status: "Confirmed", tone: "slate" as const },
];

export const DoctorAppMockup = ({ className }: { className?: string }) => (
  <PhoneFrame className={className}>
    <div className="px-3.5 pb-3 pt-7">
      <p className="text-[9px] text-hc-muted">Doctor app · Powai</p>
      <p className="text-[12px] font-bold text-hc-ink">Today&apos;s schedule</p>
      <div className="mt-2 flex gap-1.5">
        <span className="rounded-md bg-hc-navy px-2 py-1 text-[8px] font-semibold text-hc-white">14 visits</span>
        <span className="rounded-md bg-hc-sky px-2 py-1 text-[8px] font-semibold text-hc-blue">3 online</span>
      </div>
    </div>
    <div className="space-y-1.5 px-3 pb-4">
      {SLOTS.map((s) => (
        <div key={s.time} className="flex items-center gap-2 rounded-xl border border-hc-line p-2">
          <div className="flex w-9 shrink-0 flex-col items-center">
            <Clock className="h-2.5 w-2.5 text-hc-muted" />
            <span className="text-[9px] font-bold text-hc-ink">{s.time}</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[9px] font-semibold text-hc-ink">{s.patient}</p>
            <p className="flex items-center gap-1 text-[8px] text-hc-muted">
              {s.video && <Video className="h-2.5 w-2.5" />}
              {s.type}
            </p>
          </div>
          <StatusPill tone={s.tone}>{s.status}</StatusPill>
        </div>
      ))}
    </div>
  </PhoneFrame>
);
