import { HC_CONFIG, isPlaceholder } from "@/lib/healthcare/config";
import { Container } from "./Primitives";
import { Logo } from "./TopBar";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hc-white/10 bg-[#081025] py-8 text-hc-white/60">
      <Container className="flex flex-col items-center gap-4 text-sm sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
          <Logo />
          <p>© {year} {HC_CONFIG.companyName}. All rights reserved.</p>
        </div>
        <nav aria-label="Footer" className="flex items-center gap-5">
          <a
            href={isPlaceholder(HC_CONFIG.privacyUrl) ? "#" : HC_CONFIG.privacyUrl}
            className="transition-colors hover:text-hc-white"
          >
            Privacy Policy
          </a>
          <a
            href={isPlaceholder(HC_CONFIG.contactEmail) ? "#" : `mailto:${HC_CONFIG.contactEmail}`}
            className="transition-colors hover:text-hc-white"
          >
            {HC_CONFIG.contactEmail}
          </a>
        </nav>
      </Container>
    </footer>
  );
};
