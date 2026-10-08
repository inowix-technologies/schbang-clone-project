import { useEffect, useRef, useState } from "react";
import { CalendarCheck, Check, CheckCheck, Sparkles, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

type Sender = "customer" | "ai";

const MESSAGES: { from: Sender; text: string }[] = [
  { from: "customer", text: "Hi, is the 2BR in Dubai Marina still available?" },
  { from: "ai", text: "Hi Ahmed! Yes, it is. Are you looking to rent or buy?" },
  { from: "customer", text: "Rent. Budget around AED 150k a year." },
  { from: "ai", text: "That works. Can you view it Thu 4pm or Sat 11am?" },
  { from: "customer", text: "Sat 11am please." },
  { from: "ai", text: "Booked for Sat 11:00 at Marina Gate. Sara from our team will meet you there." },
];

const PIPELINE = [
  { label: "New lead", showsAt: 1 },
  { label: "Qualified", showsAt: 4 },
  { label: "Meeting booked", showsAt: 6 },
];

const STEP_MS = 1600;
const HOLD_STEPS = 3;
const TOTAL_STEPS = MESSAGES.length + HOLD_STEPS;

export const HeroChatDashboard = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(MESSAGES.length);
      return;
    }
    const node = rootRef.current;
    if (!node || !("IntersectionObserver" in window)) {
      setRunning(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setRunning(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % (TOTAL_STEPS + 1)), STEP_MS);
    return () => window.clearInterval(id);
  }, [running]);

  const visibleCount = Math.min(step, MESSAGES.length);
  const nextIsAi = step < MESSAGES.length && MESSAGES[step]?.from === "ai" && step > 0;
  const stageIndex = PIPELINE.reduce((acc, stage, i) => (visibleCount >= stage.showsAt ? i : acc), -1);

  return (
    <div ref={rootRef} className="relative mx-auto w-full max-w-[520px]" aria-label="Example: an AI assistant qualifying a WhatsApp lead and booking a viewing" role="img">
      {/* Phone-style WhatsApp chat */}
      <div className="relative z-10 w-full overflow-hidden rounded-[28px] border border-lp-white/10 bg-[#0B141A] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] sm:w-[340px]">
        <div className="flex items-center gap-3 bg-[#1F2C34] px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-lp-blue to-lp-violet">
            <Sparkles className="h-4 w-4 text-lp-white" aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-lp-white">Marina Homes</p>
            <p className="text-[11px] text-lp-wa">AI assistant · online</p>
          </div>
        </div>

        <div
          className="flex h-[330px] flex-col justify-end gap-2 overflow-hidden px-3 py-4"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "14px 14px" }}
        >
          {MESSAGES.slice(0, visibleCount).map((message, i) => (
            <div
              key={`${i}-${message.text}`}
              className={cn(
                "lp-msg-in max-w-[82%] rounded-xl px-3 py-2 text-[13px] leading-snug",
                message.from === "customer"
                  ? "self-end rounded-tr-sm bg-[#005C4B] text-[#E9EDEF]"
                  : "self-start rounded-tl-sm bg-[#202C33] text-[#E9EDEF]"
              )}
            >
              {message.text}
              <span className="ml-2 inline-flex translate-y-0.5 items-center gap-0.5 text-[10px] text-[#8696A0]">
                {message.from === "customer" ? <CheckCheck className="h-3 w-3 text-[#53BDEB]" aria-hidden /> : "AI"}
              </span>
            </div>
          ))}
          {nextIsAi && (
            <div className="lp-typing lp-msg-in flex w-14 gap-1 self-start rounded-xl rounded-tl-sm bg-[#202C33] px-3 py-3" aria-hidden>
              <span className="h-1.5 w-1.5 rounded-full bg-[#8696A0]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#8696A0]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#8696A0]" />
            </div>
          )}
        </div>
      </div>

      {/* CRM dashboard card */}
      <div className="relative z-20 -mt-10 ml-auto w-[88%] rounded-2xl border border-lp-white/15 bg-lp-white/10 p-4 shadow-[0_20px_60px_-20px_rgba(59,91,255,0.55)] backdrop-blur-xl sm:absolute sm:bottom-[-28px] sm:right-0 sm:mt-0 sm:w-[260px]">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">CRM · Live</p>
          <span className="flex items-center gap-1 text-[11px] text-lp-wa">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lp-wa" />
            Synced
          </span>
        </div>

        <div className="mb-3 flex items-center gap-3 rounded-xl bg-lp-navy/60 p-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lp-white/10">
            <UserRound className="h-4 w-4 text-slate-200" aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-lp-white">Ahmed K.</p>
            <p className="truncate text-[11px] text-slate-400">2BR Dubai Marina · Rent · AED 150k</p>
          </div>
        </div>

        <ol className="space-y-1.5">
          {PIPELINE.map((stage, i) => {
            const done = i <= stageIndex;
            const current = i === stageIndex;
            return (
              <li
                key={stage.label}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[12px] transition-all duration-500",
                  current ? "bg-gradient-to-r from-lp-blue/40 to-lp-violet/40 text-lp-white" : done ? "text-slate-200" : "text-slate-500"
                )}
              >
                <span
                  className={cn(
                    "flex h-4 w-4 items-center justify-center rounded-full border transition-colors duration-500",
                    done ? "border-transparent bg-lp-wa" : "border-slate-600"
                  )}
                >
                  {done && (i === PIPELINE.length - 1 ? <CalendarCheck className="h-2.5 w-2.5 text-lp-navy" aria-hidden /> : <Check className="h-2.5 w-2.5 text-lp-navy" aria-hidden />)}
                </span>
                {stage.label}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
