import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AIA_CONFIG } from "@/lib/ai-automation/config";
import { CtaButton } from "./LpPrimitives";

/** Hidden while the hero (which has its own CTA) or the form itself is on screen. */
const WATCHED_IDS = ["lp-hero", AIA_CONFIG.formAnchorId];

export const MobileStickyCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const onScreen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onScreen.add(entry.target.id);
          else onScreen.delete(entry.target.id);
        });
        setVisible(onScreen.size === 0);
      },
      { threshold: 0.05 }
    );
    WATCHED_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-lp-line bg-lp-white/90 p-3 backdrop-blur-md transition-[transform,visibility] duration-300 md:hidden",
        visible ? "visible translate-y-0" : "invisible translate-y-full"
      )}
    >
      <CtaButton className="h-12 w-full">Get Your Free Automation Plan</CtaButton>
    </div>
  );
};
