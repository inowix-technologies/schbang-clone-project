import { Link } from "react-router-dom";
import { CO_FOUNDERS } from "@/data/team";

interface TeamPresenceStripProps {
  title?: string;
  subtitle?: string;
}

export const TeamPresenceStrip = ({
  title = "Talk to our co-founders directly",
  subtitle = "No account managers. No layers. The engineers who build with you.",
}: TeamPresenceStripProps) => (
  <div className="border border-border/40 rounded-sm bg-inowix-surface/20 p-6 sm:p-8">
    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-inowix-com-ai mb-2">Leadership</p>
    <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>
    <div className="flex flex-col sm:flex-row flex-wrap gap-6">
      {CO_FOUNDERS.map((leader) => (
        <div key={leader.id} className="flex items-center gap-4">
          <div
            className="w-16 h-16 rounded-sm overflow-hidden border shrink-0 flex items-end justify-center"
            style={{
              borderColor: `${leader.accent}50`,
              background: `radial-gradient(ellipse at 50% 100%, ${leader.accent}20, transparent 70%)`,
              boxShadow: `0 0 20px ${leader.accent}25`,
            }}
          >
            <img
              src={leader.photo}
              alt={`${leader.name}, ${leader.title}`}
              className="w-full h-[90%] object-contain object-bottom"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-sm font-semibold leading-tight">{leader.name}</p>
            <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mt-1">
              {leader.title}
            </p>
          </div>
        </div>
      ))}
    </div>
    <Link to="/about-us" className="inline-block mt-6 text-xs font-medium text-primary hover:underline">
      Meet the full team →
    </Link>
  </div>
);
