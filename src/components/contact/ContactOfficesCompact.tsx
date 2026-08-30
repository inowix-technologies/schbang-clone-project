import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const locations = [
  {
    code: "BL",
    city: "Bangalore",
    office: "Engineering Hub",
    address: "OXFORD TOWER-2, Door no. 901 8th floor, 139, Kodihalli, Bengaluru, Karnataka 560008",
    phones: ["+91 6283075131"],
    email: "info@inowix.in",
    coordinates: "12.9634° N, 77.6433° E",
  },
  {
    code: "DL",
    city: "Delhi",
    office: "Northern Outreach Center",
    address: "1-A, Khasra No. 275, First Floor, Westend Marg, Saidulajab, Saket, New Delhi, Delhi 110030",
    phones: ["+91 6283075131"],
    email: "info@inowix.in",
    coordinates: "28.5204° N, 77.2016° E",
  },
  {
    code: "CH",
    city: "Chandigarh",
    office: "Technology Studio",
    address: "SBP South City, Zirakpur, Chandigarh",
    phones: ["+91 6283075131"],
    email: "info@inowix.in",
    coordinates: "30.6425° N, 76.8173° E",
  },
];

export const ContactOfficesCompact = () => {
  const [active, setActive] = useState(0);
  const loc = locations[active];

  return (
    <div>
      <div className="flex gap-1.5 bg-inowix-surface/50 p-1 rounded-sm border border-border/40 mb-6 w-fit">
        {locations.map((l, idx) => (
          <button
            key={l.code}
            onClick={() => setActive(idx)}
            className={cn(
              "px-4 py-2 rounded-sm font-mono text-xs font-bold transition-all",
              active === idx ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {l.code}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border border-border/40 rounded-sm p-6 bg-inowix-surface/20"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">{loc.coordinates}</p>
          <h3 className="text-xl font-bold mb-1">{loc.city}</h3>
          <p className="text-sm text-muted-foreground mb-4">{loc.office}</p>
          <div className="flex items-start gap-2 mb-4 text-sm">
            <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>{loc.address}</span>
          </div>
          <a href={`tel:${loc.phones[0]}`} className="flex items-center gap-2 text-sm mb-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" /> {loc.phones[0]}
          </a>
          <a href={`mailto:${loc.email}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
            <Mail className="w-4 h-4" /> {loc.email}
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
