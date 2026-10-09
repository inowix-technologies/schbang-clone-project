import { WhatsAppIcon } from "@/components/landing/WhatsAppIcon";
import { AIA_CONFIG, isPlaceholder, whatsappLink } from "@/lib/ai-automation/config";
import { CtaButton, LpContainer, LpLogo } from "./LpPrimitives";

export const LpTopBar = () => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-lp-white/10 bg-lp-navy/80 backdrop-blur-md">
    <LpContainer className="flex h-16 items-center justify-between">
      <LpLogo />
      <div className="flex items-center gap-2 sm:gap-3">
        {!isPlaceholder(AIA_CONFIG.whatsappNumber) && (
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-lp-wa px-2.5 text-sm font-semibold text-lp-navy shadow-[0_8px_20px_-10px_rgba(37,211,102,0.9)] transition-transform hover:-translate-y-0.5 sm:px-3.5"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        )}
        <CtaButton size="md">Get a Quote</CtaButton>
      </div>
    </LpContainer>
  </header>
);
