import { cn } from "@/lib/utils";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const HOURS = ["9:00", "10:00", "11:00", "12:00", "1:00"];

/** [dayIndex, startHourIndex, spanHours, label, tone] */
const EVENTS: [number, number, number, string, "teal" | "blue" | "navy"][] = [
  [0, 0, 1, "Dr. Mehta · OPD", "teal"],
  [0, 2, 2, "Dr. Rao · Procedures", "blue"],
  [1, 1, 1, "Video consults", "navy"],
  [1, 3, 1, "Dr. Iyer · OPD", "teal"],
  [2, 0, 2, "Dr. Khan · OPD", "blue"],
  [3, 1, 2, "Diagnostics slots", "teal"],
  [3, 4, 1, "Follow-ups", "navy"],
  [4, 0, 1, "Dr. Mehta · OPD", "teal"],
  [4, 2, 1, "Video consults", "navy"],
];

const tones = {
  teal: "bg-hc-teal/15 text-[#0B7468] border-l-hc-teal",
  blue: "bg-hc-blue/10 text-hc-blue border-l-hc-blue",
  navy: "bg-hc-navy/[0.07] text-hc-navy border-l-hc-navy",
};

const ROW_H = 30;

export const CalendarMockup = ({ className }: { className?: string }) => (
  <div aria-hidden="true" className={cn("rounded-2xl bg-hc-white p-3 ring-1 ring-hc-line shadow-[0_20px_50px_-24px_rgba(11,21,48,0.35)]", className)}>
    <div className="mb-2 flex items-center justify-between">
      <p className="text-[11px] font-bold text-hc-ink">Appointments · Bandra</p>
      <span className="rounded-md bg-hc-sky px-2 py-0.5 text-[9px] font-semibold text-hc-blue">This week</span>
    </div>
    <div className="grid grid-cols-[32px_repeat(5,minmax(0,1fr))] gap-x-1">
      <span />
      {DAYS.map((d) => (
        <span key={d} className="pb-1 text-center text-[9px] font-semibold text-hc-muted">{d}</span>
      ))}
      <div className="flex flex-col">
        {HOURS.map((h) => (
          <span key={h} className="text-[8px] text-hc-muted" style={{ height: ROW_H }}>{h}</span>
        ))}
      </div>
      {DAYS.map((d, day) => (
        <div
          key={d}
          className="relative rounded-md bg-hc-mist"
          style={{ height: ROW_H * HOURS.length, backgroundImage: `repeating-linear-gradient(to bottom, transparent 0 ${ROW_H - 1}px, #E2E8F2 ${ROW_H - 1}px ${ROW_H}px)` }}
        >
          {EVENTS.filter(([d2]) => d2 === day).map(([, start, span, label, tone]) => (
            <span
              key={`${start}-${label}`}
              className={cn("absolute inset-x-0.5 overflow-hidden rounded border-l-2 px-1 py-0.5 text-[7.5px] font-semibold leading-tight", tones[tone])}
              style={{ top: start * ROW_H + 2, height: span * ROW_H - 4 }}
            >
              {label}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
