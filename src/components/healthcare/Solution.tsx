import { BarChart3, CalendarClock, HeartHandshake, Hospital, Plug, Smartphone } from "lucide-react";
import { Container, SectionHeading } from "./Primitives";
import { Reveal } from "./Reveal";
import { CalendarMockup } from "./mockups/CalendarMockup";
import { RecordsMockup } from "./mockups/RecordsMockup";
import { DoctorAppMockup } from "./mockups/DoctorAppMockup";
import { ReminderMockup } from "./mockups/ReminderMockup";

const CAPABILITIES = [
  {
    icon: Hospital,
    title: "Clinic and hospital management",
    body: "Front desk, billing, inventory and branch operations in one system your staff actually enjoy using.",
  },
  {
    icon: Smartphone,
    title: "Doctor and patient apps",
    body: "Branded iOS and Android apps for schedules, bookings, documents and follow-ups.",
  },
  {
    icon: CalendarClock,
    title: "Appointments and telemedicine",
    body: "Online booking, slot management across branches and secure video consultations.",
  },
  {
    icon: HeartHandshake,
    title: "Patient engagement and healthcare CRM",
    body: "Automated reminders, recalls and follow-ups on WhatsApp, SMS and email.",
  },
  {
    icon: BarChart3,
    title: "Admin dashboard and analytics",
    body: "Live view of every branch: footfall, utilisation, no-shows and collections.",
  },
  {
    icon: Plug,
    title: "Integrations with your existing systems",
    body: "Connect lab systems, billing, payment gateways, accounting and the tools you already use.",
  },
];

export const Solution = () => (
  <section id="solution" className="relative overflow-hidden bg-hc-mist py-16 sm:py-24">
    <Container>
      <Reveal>
        <SectionHeading
          eyebrow="What we build"
          title="One platform built around your workflow"
          intro="Not a template. We map how your branches, doctors and front desk actually work, then build the platform around it."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {CAPABILITIES.map(({ icon: Icon, title, body }, i) => (
          <Reveal key={title} delay={(i % 3) * 80}>
            <div className="group h-full rounded-2xl hc-glass-light p-6 shadow-[0_10px_30px_-20px_rgba(11,21,48,0.35)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(11,21,48,0.4)]">
              <span className="inline-flex rounded-xl hc-gradient-bg p-2.5 text-hc-white shadow-[0_8px_20px_-8px_rgba(20,184,166,0.7)]">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[17px] font-bold leading-snug text-hc-ink">{title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-hc-body">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 sm:mt-16">
        <div className="relative grid items-start gap-5 rounded-3xl bg-gradient-to-br from-hc-white to-hc-sky p-4 ring-1 ring-hc-line sm:p-6 lg:grid-cols-[1.35fr_1fr_auto] lg:p-8">
          <CalendarMockup />
          <div className="space-y-4">
            <RecordsMockup />
            <ReminderMockup className="hidden sm:block" />
          </div>
          <div className="hidden justify-center lg:flex">
            <DoctorAppMockup />
          </div>
          <p className="text-center text-xs text-hc-muted lg:col-span-3">
            Illustrative product screens with sample data. Your platform is designed around your own workflow.
          </p>
        </div>
      </Reveal>
    </Container>
  </section>
);
