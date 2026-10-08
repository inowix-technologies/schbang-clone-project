import { Bell, CalendarPlus, FileText, Home, MessageCircle, User, Video } from "lucide-react";
import { PhoneFrame } from "./MockPrimitives";

const ACTIONS = [
  { icon: CalendarPlus, label: "Book" },
  { icon: FileText, label: "Reports" },
  { icon: Video, label: "Consult" },
  { icon: MessageCircle, label: "Chat" },
];

export const PatientAppMockup = ({ className }: { className?: string }) => (
  <PhoneFrame className={className}>
    <div className="bg-hc-navy px-3.5 pb-4 pt-7 text-hc-white">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] text-hc-white/60">Good morning</p>
          <p className="text-[12px] font-bold">Hi, Rohan</p>
        </div>
        <span className="relative rounded-full bg-hc-white/10 p-1.5">
          <Bell className="h-3 w-3" />
          <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-hc-teal" />
        </span>
      </div>
      <div className="mt-3 rounded-xl bg-hc-white/10 p-2.5 ring-1 ring-hc-white/15">
        <p className="text-[8px] font-semibold uppercase tracking-wider text-hc-teal">Upcoming</p>
        <p className="mt-0.5 text-[11px] font-semibold">General consultation</p>
        <p className="text-[9px] text-hc-white/70">Tue, 10:30 AM · Bandra branch</p>
        <div className="mt-2 flex gap-1.5">
          <span className="rounded-md bg-hc-white px-2 py-1 text-[8px] font-bold text-hc-navy">Reschedule</span>
          <span className="rounded-md bg-hc-white/10 px-2 py-1 text-[8px] font-semibold">Directions</span>
        </div>
      </div>
    </div>

    <div className="space-y-3 px-3.5 py-3">
      <div className="grid grid-cols-4 gap-1.5">
        {ACTIONS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <span className="rounded-xl bg-hc-sky p-2 text-hc-blue">
              <Icon className="h-3.5 w-3.5" />
            </span>
            <span className="text-[8px] font-medium text-hc-body">{label}</span>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-hc-line p-2">
        <p className="text-[9px] font-semibold text-hc-ink">Documents</p>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="rounded-md bg-hc-teal/10 p-1 text-[#0B8577]">
            <FileText className="h-3 w-3" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[9px] font-medium text-hc-ink">Visit summary #2207</p>
            <p className="text-[8px] text-hc-muted">Shared by your clinic</p>
          </div>
          <span className="text-[8px] font-semibold text-hc-blue">View</span>
        </div>
      </div>
    </div>

    <div className="flex justify-around border-t border-hc-line py-2 text-hc-muted">
      <Home className="h-3.5 w-3.5 text-hc-blue" />
      <CalendarPlus className="h-3.5 w-3.5" />
      <FileText className="h-3.5 w-3.5" />
      <User className="h-3.5 w-3.5" />
    </div>
  </PhoneFrame>
);
