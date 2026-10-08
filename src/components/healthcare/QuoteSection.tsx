import { CalendarCheck, PhoneCall, Search } from "lucide-react";
import { HC_CONFIG } from "@/lib/healthcare/config";
import { Container } from "./Primitives";
import { Reveal } from "./Reveal";
import { QuoteForm } from "./form/QuoteForm";

const NEXT_STEPS = [
  { icon: Search, title: "We review your request", body: "A senior team member reads your requirements, not a bot." },
  { icon: PhoneCall, title: "We reach out within 30 minutes", body: "On business days, 10am-7pm IST, on WhatsApp or a call." },
  { icon: CalendarCheck, title: "Discovery call, then a clear quote", body: "We map your workflow and share scope, timeline and cost." },
];

export const QuoteSection = () => (
  <section id={HC_CONFIG.formAnchorId} className="relative overflow-clip bg-gradient-to-b from-hc-sky via-hc-mist to-hc-white py-16 sm:py-24">
    <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-hc-teal/10 blur-[100px]" />
    <Container className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <Reveal className="lg:pt-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-hc-white px-3 py-1 text-xs font-semibold text-hc-blue ring-1 ring-hc-line">
          <span className="h-1.5 w-1.5 rounded-full bg-hc-teal" /> Platform consultation
        </span>
        <h2 className="mt-4 text-[1.9rem] font-extrabold leading-[1.12] tracking-tight text-hc-ink sm:text-4xl">
          Tell us about your healthcare platform
        </h2>
        <p className="mt-4 text-base text-hc-body sm:text-lg">
          Two quick steps, mostly taps. {HC_CONFIG.priceLine}, so this helps us prepare a useful first conversation.
        </p>
        <ol className="mt-8 hidden space-y-5 lg:block">
          {NEXT_STEPS.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-hc-navy text-hc-teal">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-hc-ink">{title}</p>
                <p className="text-sm text-hc-body">{body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 hidden rounded-2xl bg-hc-white p-4 shadow-sm ring-1 ring-hc-line lg:block">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-hc-muted">Healthcare products we've built</p>
          <ul className="mt-3 grid grid-cols-3 gap-3">
            {HC_CONFIG.proofProjects.map((project) => (
              <li key={project.slug}>
                <div
                  className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl ring-1 ring-hc-line"
                  style={{ background: `linear-gradient(135deg, ${project.accent}1f, ${project.accent}45)` }}
                >
                  {project.screenshot ? (
                    <img src={project.screenshot} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  ) : (
                    project.logo && <img src={project.logo} alt="" loading="lazy" decoding="async" className="max-h-9 w-auto max-w-[80%] object-contain" />
                  )}
                </div>
                <p className="mt-1.5 truncate text-xs font-semibold text-hc-ink">{project.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
      <div>
        <QuoteForm />
      </div>
    </Container>
  </section>
);
