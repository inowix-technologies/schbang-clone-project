import { Link } from "react-router-dom";
import { FOUNDERS_AND_LEADERS } from "@/data/team";

interface TeamPresenceStripProps {
  title?: string;
  subtitle?: string;
}

export const TeamPresenceStrip = ({
  title = "Talk to leadership directly",
  subtitle = "No account managers. No layers. Engineering leaders who build with you.",
}: TeamPresenceStripProps) => (
  <div className="border border-border/40 rounded-sm bg-inowix-surface/20 p-6 sm:p-8">
    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-inowix-com-ai mb-2">Our team</p>
    <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>
    <div className="flex flex-wrap items-center gap-4">
      {FOUNDERS_AND_LEADERS.map((leader) => (
        <div key={leader.id} className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-sm overflow-hidden border border-border/40 shrink-0"
            style={{ boxShadow: `0 0 16px ${leader.accent}30` }}
          >
            <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover object-top" />
          </div>
          <div>
            <p className="text-sm font-semibold leading-tight">{leader.name}</p>
            <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{leader.title}</p>
          </div>
        </div>
      ))}
    </div>
    <Link to="/about-us" className="inline-block mt-6 text-xs font-medium text-primary hover:underline">
      Meet the full team →
    </Link>
  </div>
);
