import { Plus } from "lucide-react";
import { HC_CONFIG } from "@/lib/healthcare/config";
import { Container, SectionHeading } from "./Primitives";
import { Reveal } from "./Reveal";

// Answers other than cost and timeline are drafts: confirm them before the campaign goes live.
const FAQS = [
  {
    q: "What does a healthcare platform cost?",
    a: "Custom healthcare platforms typically start from ₹5L+, depending on scope and number of branches. You'll get a clear quote after a discovery call.",
  },
  {
    q: "How long does it take?",
    a: HC_CONFIG.timelineFaqAnswer,
  },
  {
    q: "Can you connect with our existing software?",
    a: "Yes, in most cases. During discovery we review your current tools, such as lab systems, billing, accounting and payment gateways, and plan integrations or a phased migration so your branches keep running while we build.",
  },
  {
    q: "How do you handle patient data security?",
    a: "Platforms are built with role-based access, encryption in transit and at rest, and audit logs of who accessed or changed what. We'll walk you through the security setup and hosting options for your platform during discovery.",
  },
  {
    q: "Who owns the code and data?",
    a: "Ownership of the code and your data is agreed in writing before the project starts. Your patient and business data always belongs to your organization.",
  },
  {
    q: "Do you provide training and support?",
    a: "Yes. Every launch includes staff training, and we offer ongoing support and maintenance plans after go-live so the platform keeps up as you add branches.",
  },
];

export const Faq = () => (
  <section className="bg-hc-white py-16 sm:py-24">
    <Container className="max-w-3xl">
      <Reveal>
        <SectionHeading eyebrow="FAQ" title="Questions owners usually ask" center />
      </Reveal>
      <div className="hc-faq mt-10 divide-y divide-hc-line rounded-2xl border border-hc-line bg-hc-white">
        {FAQS.map(({ q, a }) => (
          <details key={q} className="group px-5 sm:px-6">
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-left text-base font-semibold text-hc-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hc-blue/40">
              {q}
              <Plus className="hc-faq-icon h-5 w-5 shrink-0 text-hc-blue transition-transform duration-200" />
            </summary>
            <p className="-mt-1 pb-5 text-[15px] leading-relaxed text-hc-body">{a}</p>
          </details>
        ))}
      </div>
    </Container>
  </section>
);
