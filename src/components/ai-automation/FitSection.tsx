import { Check, X } from "lucide-react";
import { FIT } from "@/lib/ai-automation/content";
import { LpContainer, SectionHeading } from "./LpPrimitives";
import { Reveal } from "./Reveal";

export const FitSection = () => (
  <section className="bg-lp-white py-20 sm:py-24">
    <LpContainer>
      <Reveal>
        <SectionHeading eyebrow="Who this is for" title="Built for businesses ready to scale" />
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-lp-blue/20 bg-gradient-to-b from-lp-blue/[0.06] to-lp-violet/[0.04] p-6 sm:p-8">
            <h3 className="text-lg font-bold text-lp-ink">Great fit</h3>
            <ul className="mt-5 space-y-3.5">
              {FIT.great.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-lp-body">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lp-success/15">
                    <Check className="h-3 w-3 text-lp-success" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="h-full rounded-2xl border border-lp-line bg-lp-mist p-6 sm:p-8">
            <h3 className="text-lg font-bold text-lp-ink">Probably not a fit</h3>
            <ul className="mt-5 space-y-3.5">
              {FIT.notFit.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-lp-body">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200">
                    <X className="h-3 w-3 text-slate-500" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </LpContainer>
  </section>
);
