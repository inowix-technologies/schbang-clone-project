import { Plus } from "lucide-react";
import { FAQS } from "@/lib/ai-automation/content";
import { LpContainer, SectionHeading } from "./LpPrimitives";
import { Reveal } from "./Reveal";

export const LpFaq = () => (
  <section className="bg-lp-white py-20 sm:py-24">
    <LpContainer>
      <Reveal>
        <SectionHeading eyebrow="FAQ" title="Questions decision-makers ask" />
      </Reveal>

      <Reveal className="lp-faq mx-auto mt-12 max-w-3xl divide-y divide-lp-line rounded-2xl border border-lp-line bg-lp-white">
        {FAQS.map((faq) => (
          <details key={faq.q} className="group px-5 sm:px-7">
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-left text-base font-semibold text-lp-ink">
              {faq.q}
              <span className="lp-faq-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lp-mist text-lp-blue transition-transform duration-200">
                <Plus className="h-4 w-4" aria-hidden />
              </span>
            </summary>
            <p className="-mt-1 pb-5 text-[15px] leading-relaxed text-lp-body">{faq.a}</p>
          </details>
        ))}
      </Reveal>
    </LpContainer>
  </section>
);
