import { FileSpreadsheet, Hourglass, Repeat } from "lucide-react";
import { PAINS } from "@/lib/ai-automation/content";
import { LpContainer, SectionHeading } from "./LpPrimitives";
import { Reveal } from "./Reveal";

const ICONS = [Hourglass, FileSpreadsheet, Repeat];

export const PainStrip = () => (
  <section className="bg-lp-white py-20 sm:py-24">
    <LpContainer>
      <Reveal>
        <SectionHeading title="Sound familiar?" />
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {PAINS.map((pain, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={pain.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-lp-line bg-lp-mist p-6 sm:p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-500 ring-1 ring-rose-100">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-lp-ink">{pain.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-lp-body">{pain.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </LpContainer>
  </section>
);
