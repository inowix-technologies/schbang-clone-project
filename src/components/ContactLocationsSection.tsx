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
    <section className="py-24 bg-black relative overflow-hidden" id="contact">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
              Visit Our <span className="text-blue-500">Spaces</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-xl">
              We operate from the heart of India's tech hubs. Drop by for a coffee and some brilliant ideas.
            </p>
          </div>
          <div className="flex gap-2 bg-neutral-900/50 backdrop-blur-md p-1.5 rounded-2xl border border-white/5">
            {locations.map((loc, idx) => (
              <button
                key={loc.code}
                onClick={() => setActiveLocation(idx)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300",
                  activeLocation === idx
                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    : "text-neutral-500 hover:text-white"
                )}
              >
                {loc.code}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-4 space-y-4">
            {locations.map((location, index) => (
              <button
                key={index}
                onClick={() => setActiveLocation(index)}
                className={cn(
                  "group w-full p-6 h-auto rounded-3xl text-left transition-all duration-500 border relative overflow-hidden",
                  activeLocation === index
                    ? "bg-white/[0.03] border-white/20 shadow-2xl"
                    : "bg-transparent border-white/5 hover:border-white/10"
                )}
              >
                {activeLocation === index && (
                  <motion.div
                    layoutId="activeSideTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent"
                  />
                )}

                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className={cn(
                      "text-xs font-mono mb-2 transition-colors",
                      activeLocation === index ? "text-blue-400" : "text-neutral-600"
                    )}>
                      {location.coordinates}
                    </div>
                    <h3 className={cn(
                      "text-2xl font-bold transition-all",
                      activeLocation === index ? "text-white scale-105 origin-left" : "text-neutral-500"
                    )}>
                      {location.city}
                    </h3>
                    <div className="text-sm text-neutral-500 mt-1 flex items-center gap-2">
                      <Globe className="w-3 h-3" /> {location.country}
                    </div>
                  </div>
                  <div className={cn(
                    "w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500",
                    activeLocation === index
                      ? "border-blue-500/50 bg-blue-500/10 text-blue-400 rotate-90"
                      : "border-white/10 text-neutral-700"
                  )}>
                    <ChevronRight className="w-5 h-5" />
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
                className="bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                      <MapPin className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-mono text-blue-400 uppercase tracking-widest leading-none mb-1">Office Location</h4>
                      <div className="text-white font-bold text-xl">{locations[activeLocation].office}</div>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                    {locations[activeLocation].address}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                  <div className="space-y-4">
                    <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Connect with us</div>
                    {locations[activeLocation].phones.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone}`}
                        className="flex items-center gap-4 text-xl text-white hover:text-blue-400 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                          <Phone className="w-4 h-4" />
                        </div>
                        {phone}
                      </a>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Direct Mail</div>
                    <a
                      href={`mailto:${locations[activeLocation].email}`}
                      className="flex items-center gap-4 text-xl text-white hover:text-blue-400 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                        <Mail className="w-4 h-4" />
                      </div>
                      {locations[activeLocation].email}
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