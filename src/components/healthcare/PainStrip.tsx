import { CalendarX2, Smartphone, Sheet } from "lucide-react";
import { Container, SectionHeading } from "./Primitives";
import { Reveal } from "./Reveal";

const PAINS = [
  {
    icon: Sheet,
    title: "WhatsApp + Excel + 3 different software",
    body: "No single view across branches.",
  },
  {
    icon: CalendarX2,
    title: "No-shows and manual reminders",
    body: "Staff spend hours confirming appointments.",
  },
  {
    icon: Smartphone,
    title: "Patients can't self-serve",
    body: "No booking, reports or follow-ups in one app.",
  },
];

export const PainStrip = () => (
  <section className="bg-hc-white py-16 sm:py-20">
    <Container>
      <Reveal>
        <SectionHeading title="Running multiple branches on disconnected tools?" center />
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
        {PAINS.map(({ icon: Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 90}>
            <div className="h-full rounded-2xl border border-hc-line bg-hc-mist/60 p-6 transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(11,21,48,0.35)]">
              <span className="inline-flex rounded-xl bg-hc-white p-2.5 text-[#C2410C] ring-1 ring-hc-line">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold leading-snug text-hc-ink">{title}</h3>
              <p className="mt-1.5 text-[15px] text-hc-body">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);
