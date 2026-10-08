import { BarChart3, Building2, CalendarDays, LayoutDashboard, Settings, Users } from "lucide-react";
import { BrowserFrame, StatusPill } from "./MockPrimitives";
import { cn } from "@/lib/utils";

const KPIS = [
  { label: "Appointments today", value: "248", delta: "+12%" },
  { label: "Checked in", value: "196", delta: "79%" },
  { label: "No-show rate", value: "4.1%", delta: "-2.3 pts" },
  { label: "Collections", value: "₹3.8L", delta: "+8%" },
];

const BRANCHES = [
  { name: "Branch A · Andheri", load: 86, status: "On schedule", tone: "teal" as const },
  { name: "Branch B · Bandra", load: 72, status: "On schedule", tone: "teal" as const },
  { name: "Branch C · Powai", load: 94, status: "Busy", tone: "amber" as const },
  { name: "Branch D · Thane", load: 58, status: "Slots open", tone: "blue" as const },
];

const WEEK = [42, 58, 51, 66, 74, 61, 38];
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

const NAV = [LayoutDashboard, CalendarDays, Users, Building2, BarChart3, Settings];

export const AdminDashboardMockup = ({ className }: { className?: string }) => (
  <BrowserFrame url="admin.yourhospital.in/overview" className={className}>
    <div className="flex text-hc-ink">
      <div className="hidden w-11 shrink-0 flex-col items-center gap-3 border-r border-hc-line bg-hc-navy py-4 sm:flex">
        <span className="mb-1 h-6 w-6 rounded-lg hc-gradient-bg" />
        {NAV.map((Icon, i) => (
          <span key={i} className={cn("rounded-md p-1.5", i === 0 ? "bg-hc-white/10 text-hc-white" : "text-hc-white/40")}>
            <Icon className="h-3.5 w-3.5" />
          </span>
        ))}
      </div>

      <div className="min-w-0 flex-1 bg-[#F7FAFE] p-3 sm:p-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[10px] font-medium text-hc-muted">All branches · Today</p>
            <p className="truncate text-[13px] font-bold">Network overview</p>
          </div>
          <div className="flex shrink-0 gap-1">
            {["Today", "Week", "Month"].map((t, i) => (
              <span
                key={t}
                className={cn(
                  "rounded-md px-2 py-1 text-[9px] font-semibold",
                  i === 0 ? "bg-hc-navy text-hc-white" : "bg-hc-white text-hc-muted ring-1 ring-hc-line",
                )}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {KPIS.map((k) => (
            <div key={k.label} className="rounded-lg bg-hc-white p-2 ring-1 ring-hc-line">
              <p className="truncate text-[9px] text-hc-muted">{k.label}</p>
              <p className="text-[15px] font-bold leading-tight">{k.value}</p>
              <p className="text-[9px] font-semibold text-hc-success">{k.delta}</p>
            </div>
          ))}
        </div>

        <div className="mt-2 grid gap-2 md:grid-cols-5">
          <div className="rounded-lg bg-hc-white p-2.5 ring-1 ring-hc-line md:col-span-3">
            <p className="mb-2 text-[10px] font-semibold">Branch utilisation</p>
            <div className="space-y-2">
              {BRANCHES.map((b) => (
                <div key={b.name} className="flex items-center gap-2">
                  <span className="w-[92px] shrink-0 truncate text-[9px] text-hc-body">{b.name}</span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-hc-sky">
                    <span className="block h-full rounded-full hc-gradient-bg" style={{ width: `${b.load}%` }} />
                  </span>
                  <StatusPill tone={b.tone}>{b.status}</StatusPill>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden rounded-lg bg-hc-white p-2.5 ring-1 ring-hc-line md:col-span-2 md:block">
            <p className="mb-2 text-[10px] font-semibold">Bookings this week</p>
            <div className="flex h-[72px] items-end justify-between gap-1">
              {WEEK.map((h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <span
                    className={cn("w-full rounded-sm", i === 4 ? "hc-gradient-bg" : "bg-hc-blue/20")}
                    style={{ height: `${h}px` }}
                  />
                  <span className="text-[8px] text-hc-muted">{DAYS[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </BrowserFrame>
);
