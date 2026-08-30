import { motion, useReducedMotion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { FOUNDERS_AND_LEADERS } from "@/data/team";

export const LeadershipGrid = () => {
  const reduced = useReducedMotion();

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {FOUNDERS_AND_LEADERS.map((leader, i) => (
        <motion.article
          key={leader.id}
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="group relative border border-border/40 rounded-sm bg-inowix-surface/20 overflow-hidden"
          style={{ borderTopColor: leader.accent, borderTopWidth: 3 }}
        >
          <div className="aspect-[4/3] overflow-hidden bg-inowix-elevated">
            <img
              src={leader.photo}
              alt={leader.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
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
