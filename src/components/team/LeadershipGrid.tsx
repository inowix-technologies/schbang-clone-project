import { motion, useReducedMotion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { CO_FOUNDERS } from "@/data/team";

export const LeadershipGrid = () => {
  const reduced = useReducedMotion();

  return (
    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
      {CO_FOUNDERS.map((leader, i) => (
        <motion.article
          key={leader.id}
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="group relative border border-border/40 rounded-sm bg-inowix-surface/20 overflow-hidden"
          style={{ borderTopColor: leader.accent, borderTopWidth: 3 }}
        >
          <div
            className="aspect-[3/4] overflow-hidden relative"
            style={{
              background: `radial-gradient(ellipse at 50% 90%, ${leader.accent}18, transparent 65%)`,
            }}
          >
            <img
              src={leader.photo}
              alt={`${leader.name}, ${leader.title} of Inowix`}
              className="absolute inset-0 w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="p-6 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: leader.accent }}>
              {leader.title}
            </p>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">{leader.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{leader.bio}</p>
            {leader.linkedin && (
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  );
};
