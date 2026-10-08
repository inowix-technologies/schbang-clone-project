import { Headset, LayoutDashboard, MessagesSquare, Workflow } from "lucide-react";
import { SOLUTIONS } from "@/lib/ai-automation/content";
import { CtaButton, LpContainer, SectionHeading } from "./LpPrimitives";
import { Reveal } from "./Reveal";

const ICONS = [MessagesSquare, Workflow, Headset, LayoutDashboard];

export const SolutionGrid = () => (
  <section className="relative overflow-hidden bg-lp-mist py-20 sm:py-24">
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2"
      style={{ background: "radial-gradient(ellipse at center, rgba(59,91,255,0.10) 0%, rgba(124,58,237,0.06) 40%, transparent 70%)" }}
    />
    <LpContainer className="relative">
      <Reveal>
        <SectionHeading eyebrow="What we build" title="AI systems built around your business, not a template" />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {SOLUTIONS.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={item.title} delay={(i % 2) * 90}>
              <div className="group h-full rounded-2xl border border-lp-white bg-lp-white/70 p-6 shadow-[0_8px_30px_-12px_rgba(11,16,32,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(59,91,255,0.35)] sm:p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-lp-blue to-lp-violet text-lp-white shadow-[0_8px_20px_-8px_rgba(59,91,255,0.7)]">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-lp-ink">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-lp-body">{item.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-12 flex justify-center">
        <CtaButton>Get Your Free Automation Plan</CtaButton>
      </Reveal>
    </LpContainer>
  </section>
);
