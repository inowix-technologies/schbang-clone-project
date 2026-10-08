import { Check, X } from "lucide-react";
import { Container, SectionHeading } from "./Primitives";
import { Reveal } from "./Reveal";

const GREAT_FIT = [
  "Multi-branch clinics",
  "Diagnostic chains",
  "Mid-size hospitals",
  "Telemedicine and health startups",
  "Owners ready to invest ₹5L+",
];

const NOT_FIT = ["Single-doctor practices looking for a ready-made app"];

export const WhoFor = () => (
  <section className="bg-hc-mist py-16 sm:py-24">
    <Container>
      <Reveal>
        <SectionHeading eyebrow="Who this is for" title="Built for growing healthcare organizations" center />
      </Reveal>
      <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="h-full rounded-2xl bg-hc-white p-6 ring-1 ring-hc-line shadow-[0_14px_36px_-24px_rgba(11,21,48,0.35)] sm:p-7">
            <p className="text-sm font-bold uppercase tracking-wider text-hc-success">Great fit</p>
            <ul className="mt-4 space-y-3">
              {GREAT_FIT.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] font-medium text-hc-ink">
                  <span className="mt-0.5 rounded-full bg-hc-success/10 p-1 text-hc-success">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="h-full rounded-2xl border border-dashed border-hc-line bg-hc-white/60 p-6 sm:p-7">
            <p className="text-sm font-bold uppercase tracking-wider text-hc-muted">Probably not a fit</p>
            <ul className="mt-4 space-y-3">
              {NOT_FIT.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-hc-body">
                  <span className="mt-0.5 rounded-full bg-slate-100 p-1 text-slate-500">
                    <X className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-hc-muted">
              Off-the-shelf clinic software is usually faster and more affordable for a single practice.
            </p>
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
);
