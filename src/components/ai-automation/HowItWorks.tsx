import { STEPS } from "@/lib/ai-automation/content";
import { AIA_CONFIG } from "@/lib/ai-automation/config";
import { LpContainer, SectionHeading } from "./LpPrimitives";
import { Reveal } from "./Reveal";

export const HowItWorks = () => (
  <section id="how-it-works" className="bg-lp-white py-20 sm:py-24">
    <LpContainer>
      <Reveal>
        <SectionHeading eyebrow="How it works" title="From first call to live system" />
      </Reveal>

      <div className="relative mt-14">
        <div
          aria-hidden
          className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-lp-blue to-lp-violet md:bottom-auto md:left-[12.5%] md:right-[12.5%] md:top-5 md:h-px md:w-auto md:bg-gradient-to-r"
        />
        <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
          {STEPS.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 110}
              className="relative flex gap-5 md:flex-col md:items-center md:gap-4 md:text-center"
            >
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lp-blue to-lp-violet text-sm font-bold text-lp-white ring-[6px] ring-lp-white">
                {i + 1}
              </span>
              <div>
                <h3 className="text-base font-bold text-lp-ink">{step.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-lp-body">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal>
        <p className="mt-14 text-center text-base font-semibold text-lp-ink">
          Most projects go live in{" "}
          <span className="bg-gradient-to-r from-lp-blue to-lp-violet bg-clip-text text-transparent">
            {AIA_CONFIG.goLiveWeeks} weeks
          </span>
          .
        </p>
      </Reveal>
    </LpContainer>
  </section>
);
