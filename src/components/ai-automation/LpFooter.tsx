import { AIA_CONFIG } from "@/lib/ai-automation/config";
import { cn } from "@/lib/utils";
import { LpContainer, LpLogo } from "./LpPrimitives";

/** `stickyCtaOffset` leaves room for the mobile sticky CTA bar so it never covers the footer links. */
export const LpFooter = ({ stickyCtaOffset = false }: { stickyCtaOffset?: boolean }) => (
  <footer className={cn("border-t border-lp-white/10 bg-lp-navy pt-8", stickyCtaOffset ? "pb-24 md:pb-8" : "pb-8")}>
    <LpContainer className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
      <LpLogo />
      <p>
        © {new Date().getFullYear()} {AIA_CONFIG.companyName}. All rights reserved.
      </p>
      <div className="flex items-center gap-5">
        <a href={AIA_CONFIG.privacyUrl} className="transition-colors hover:text-lp-white">
          Privacy Policy
        </a>
        <a href={`mailto:${AIA_CONFIG.contactEmail}`} className="transition-colors hover:text-lp-white">
          {AIA_CONFIG.contactEmail}
        </a>
      </div>
    </LpContainer>
  </footer>
);
