import { FileClock, KeyRound, LockKeyhole, ShieldCheck } from "lucide-react";
import { HC_CONFIG } from "@/lib/healthcare/config";
import { Container } from "./Primitives";
import { Reveal } from "./Reveal";

const PRACTICES = [
  { icon: KeyRound, title: "Role-based access", body: "Doctors, front desk and admins see only what their role needs." },
  { icon: LockKeyhole, title: "Encrypted data", body: "Patient and business data is encrypted, with hosting set up for your requirements." },
  { icon: FileClock, title: "Audit logs", body: "Every access and change is recorded and reviewable." },
];

export const Security = () => (
  <section className="bg-hc-white py-16 sm:py-20">
    <Container>
      <Reveal>
        <div className="grid items-center gap-8 rounded-3xl border border-hc-line bg-gradient-to-br from-hc-white via-hc-white to-hc-sky p-6 sm:p-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="inline-flex rounded-2xl bg-hc-navy p-3 text-hc-teal">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight tracking-tight text-hc-ink sm:text-3xl">
              Security and privacy
            </h2>
            <p className="mt-3 text-base text-hc-body">
              Built with privacy and security in mind: role-based access, encrypted data, audit logs.
            </p>
            {HC_CONFIG.complianceBadges.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {HC_CONFIG.complianceBadges.map((badge) => (
                  <li
                    key={badge.label}
                    title={badge.description}
                    className="rounded-full border border-hc-line bg-hc-white px-3 py-1 text-xs font-semibold text-hc-ink"
                  >
                    {badge.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <ul className="grid gap-3 sm:grid-cols-3">
            {PRACTICES.map(({ icon: Icon, title, body }) => (
              <li key={title} className="rounded-2xl bg-hc-white p-5 ring-1 ring-hc-line">
                <Icon className="h-5 w-5 text-hc-blue" />
                <h3 className="mt-3 text-base font-bold text-hc-ink">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-hc-body">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Container>
  </section>
);
