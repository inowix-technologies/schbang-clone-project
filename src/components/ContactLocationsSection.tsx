import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GlobalMapVisual, getLocalTime } from "@/components/home/GlobalMapVisual";

const locations = [
  {
    code: "BL",
    city: "Bangalore",
    country: "India",
    office: "Engineering Hub",
    address: "OXFORD TOWER-2, Door no. 901 8th floor, 139, Kodihalli, Bengaluru, Karnataka 560008",
    phones: ["+91 6283075131"],
    email: "info@inowix.in",
    coordinates: "12.9634° N, 77.6433° E",
    tz: "Asia/Kolkata",
  },
  {
    code: "DL",
    city: "Delhi",
    country: "India",
    office: "Northern Outreach Center",
    address: "1-A, Khasra No. 275, First Floor, Westend Marg, Saidulajab, Saket, New Delhi, Delhi 110030",
    phones: ["+91 6283075131"],
    email: "info@inowix.in",
    coordinates: "28.5204° N, 77.2016° E",
    tz: "Asia/Kolkata",
  },
  {
    code: "CH",
    city: "Chandigarh",
    country: "India",
    office: "Technology Studio",
    address: "SBP South City, Zirakpur, Chandigarh",
    phones: ["+91 6283075131"],
    email: "info@inowix.in",
    coordinates: "30.6425° N, 76.8173° E",
    tz: "Asia/Kolkata",
  },
];

export const ContactLocationsSection = () => {
  const [activeLocation, setActiveLocation] = useState(0);
  const loc = locations[activeLocation];

  return (
    <section className="py-20 sm:py-28 bg-inowix-bg relative overflow-hidden border-t border-border/40" id="contact">
      <div className="absolute inset-0 pointer-events-none bg-grid-white/[0.02] bg-[length:48px_48px]" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Contact</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] mb-4">
              Engineering hubs across <span className="text-primary">India</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl">
              Three offices. One engineering standard. Reach out to discuss architecture, products, or production systems.
            </p>
          </div>

          <div className="flex gap-1.5 bg-inowix-surface/50 backdrop-blur-md p-1 rounded-sm border border-border/40">
            {locations.map((l, idx) => (
              <button
                key={l.code}
                onClick={() => setActiveLocation(idx)}
                className={cn(
                  "px-4 sm:px-5 py-2 rounded-sm font-mono text-xs sm:text-sm font-bold transition-all duration-300",
                  activeLocation === idx
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.code}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-8">
          <div className="lg:col-span-5 rounded-sm border border-border/40 bg-inowix-surface/20 p-6">
            <GlobalMapVisual activeIndex={activeLocation} />
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35 }}
                className="grid gap-8 border border-border/40 rounded-sm bg-inowix-surface/20 overflow-hidden h-full"
                style={{ borderLeftColor: "rgba(37,99,235,0.4)", borderLeftWidth: 3 }}
              >
                <div className="p-8 sm:p-10">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">{loc.coordinates}</p>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-1">{loc.city}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{loc.office} · {loc.country}</p>
                  <p className="font-mono text-xs text-inowix-com-ai mb-6">Local time: {getLocalTime(loc.tz)}</p>
                  <div className="flex items-start gap-3 mb-8">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground/90 leading-relaxed">{loc.address}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Phone</p>
                      {loc.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="flex items-center gap-3 text-lg text-foreground hover:text-primary transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          {phone}
                        </a>
                      ))}
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Email</p>
                      <a
                        href={`mailto:${loc.email}`}
                        className="flex items-center gap-3 text-lg text-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {loc.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <Button asChild className="rounded-sm">
          <Link to="/contact-us">
            Book a discovery call
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
