import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const NotificationBanner = () => {
  return (
    <div className="bg-inowix-surface border-b border-border/40 py-2.5 px-4 sm:px-6 text-center relative overflow-hidden">
      <div className="relative z-10 flex items-center justify-center gap-2 text-xs sm:text-sm">
        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-inowix-com-ai">
          New
        </span>
        <p className="text-muted-foreground">
          <span className="text-foreground/90">COM AI, Beacon & RED CLI</span>
          {" — "}
          AI-native products engineered by Inowix.
        </p>
        <Link
          to="/products"
          className="hidden sm:inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium transition-colors ml-1"
        >
          Explore
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};
