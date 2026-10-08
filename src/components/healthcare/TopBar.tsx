import logo from "@/assets/logoinowix.png";
import { cn } from "@/lib/utils";
import { scrollToForm } from "@/lib/healthcare/config";

/** The PNG is a white wordmark with heavy transparent padding, so it is cropped and only used on navy. */
export const Logo = ({ className }: { className?: string }) => (
  <span className={cn("flex h-9 w-[104px] items-center justify-center overflow-hidden sm:w-[116px]", className)}>
    <img src={logo} alt="Inowix" width={329} height={284} className="w-full max-w-none shrink-0" decoding="async" />
  </span>
);

// Solid on purpose: the global html/body styles make <body> the scroll container, so window scroll events never fire.
export const TopBar = ({ showCta = true }: { showCta?: boolean }) => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-hc-white/10 bg-hc-navy/95 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.6)] backdrop-blur-md">
    <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 sm:h-16 sm:px-6 lg:px-8">
      <Logo />
      {showCta && (
        <button
          type="button"
          onClick={scrollToForm}
          className="inline-flex h-9 items-center rounded-lg px-3.5 text-[13px] font-semibold text-hc-white hc-gradient-bg shadow-[0_8px_20px_-8px_rgba(59,91,255,0.7)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hc-teal sm:h-10 sm:px-4 sm:text-sm"
        >
          Discuss Your Platform
        </button>
      )}
    </div>
  </header>
);
