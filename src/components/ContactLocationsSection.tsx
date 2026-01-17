import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Globe, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const locations = [
  {
    code: "BL",
    city: "Bangalore",
    country: "India",
    office: "Base Creative Hub",
    address: "OXFORD TOWER-2, Door no. 901 8th floor, 139, Kodihalli, Bengaluru, Karnataka 560008",
    phones: ["+91 6283075131"],
    email: "info@inowix.in",
    coordinates: "12.9634° N, 77.6433° E"
  },
  {
    code: "DL",
    city: "Delhi",
    country: "India",
    office: "Northern Outreach Center",
    address: "1-A, Khasra No. 275, First Floor, Westend Marg, Saidulajab, Saket, New Delhi, Delhi 110030",
    phones: ["+91 6283075131"],
    email: "info@inowix.in",
    coordinates: "28.5204° N, 77.2016° E"
  },
  {
    code: "CH",
    city: "Chandigarh",
    country: "India",
    office: "Creative Studio North",
    address: "SBP South City, Zirakpur, Chandigarh",
    phones: ["+91 6283075131"],
    email: "info@inowix.in",
    coordinates: "30.6425° N, 76.8173° E"
  },
];

export const ContactLocationsSection = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden" id="contact">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 md:mb-16 gap-4 sm:gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-3 sm:mb-4 tracking-tighter px-2 sm:px-0">
              Visit Our <span className="text-primary">Spaces</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl px-2 sm:px-0">
              We operate from the heart of India's tech hubs. Drop by for a coffee and some brilliant ideas.
            </p>
          </div>
          <div className="flex gap-1.5 sm:gap-2 bg-card/50 backdrop-blur-md p-1 sm:p-1.5 rounded-xl sm:rounded-2xl border border-border overflow-x-auto">
            {locations.map((loc, idx) => (
              <button
                key={loc.code}
                onClick={() => setActiveLocation(idx)}
                className={cn(
                  "px-2.5 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap flex-shrink-0",
                  activeLocation === idx
                    ? "bg-primary text-primary-foreground shadow-[0_0_24px_rgba(37,99,235,0.35)]"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {loc.code}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-4 space-y-2 sm:space-y-3 md:space-y-4">
            {locations.map((location, index) => (
              <button
                key={index}
                onClick={() => setActiveLocation(index)}
                className={cn(
                  "group w-full p-3 sm:p-4 md:p-6 h-auto rounded-xl sm:rounded-2xl md:rounded-3xl text-left transition-all duration-500 border relative overflow-hidden",
                  activeLocation === index
                    ? "bg-card/60 border-border shadow-2xl"
                    : "bg-transparent border-border/60 hover:border-border"
                )}
              >
                {activeLocation === index && (
                  <motion.div
                    layoutId="activeSideTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent"
                  />
                )}

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className={cn(
                      "text-[10px] sm:text-xs font-mono mb-1 sm:mb-2 transition-colors",
                      activeLocation === index ? "text-primary" : "text-muted-foreground"
                    )}>
                      {location.coordinates}
                    </div>
                    <h3 className={cn(
                      "text-lg sm:text-xl md:text-2xl font-bold transition-all",
                      activeLocation === index ? "text-foreground scale-105 origin-left" : "text-muted-foreground"
                    )}>
                      {location.city}
                    </h3>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1 flex items-center gap-2">
                      <Globe className="w-3 h-3 flex-shrink-0" /> <span className="truncate">{location.country}</span>
                    </div>
                  </div>
                  <div className={cn(
                    "w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-500 ml-2",
                    activeLocation === index
                      ? "border-primary/60 bg-primary/10 text-primary rotate-90"
                      : "border-border text-muted-foreground"
                  )}>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Details Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-card/60 backdrop-blur-xl border border-border rounded-2xl sm:rounded-3xl md:rounded-[40px] p-6 sm:p-8 md:p-12 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 sm:mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(37,99,235,0.35)]">
                      <MapPin className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-mono text-primary uppercase tracking-widest leading-none mb-1">Office Location</h4>
                      <div className="text-foreground font-bold text-base sm:text-lg md:text-xl truncate">{locations[activeLocation].office}</div>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 sm:mb-8 leading-tight break-words">
                    {locations[activeLocation].address}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-border">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase tracking-widest">Connect with us</div>
                    {locations[activeLocation].phones.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone}`}
                        className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl text-foreground hover:text-primary transition-colors group"
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all">
                          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <span className="break-all">{phone}</span>
                      </a>
                    ))}
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase tracking-widest">Direct Mail</div>
                    <a
                      href={`mailto:${locations[activeLocation].email}`}
                      className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl text-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all">
                        <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="break-all">{locations[activeLocation].email}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};