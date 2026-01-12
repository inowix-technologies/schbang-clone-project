import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <section className={cn(
      "relative min-h-[75vh] flex flex-col items-center justify-center overflow-hidden bg-black px-6 py-20",
      className
    )}>
      <BackgroundBeams className="opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-hero font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05] selection:bg-primary/30">
            <span className="text-neutral-500/80">A great solution is</span>
            <br />
            <span className="text-blue-500 inline-block drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">never a coincidence;</span>
            <br className="hidden md:block" />
            <span className="inline-block mt-2">It's built when all the</span>{" "}
            <span className="relative inline-block px-1">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-gradient-x">
                molecules
              </span>
              <motion.span
                className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
            <br className="hidden md:block" />
            <span className="text-neutral-500/80">fall into place.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 space-y-4"
        >
          <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            We combine <span className="text-white/90">creativity</span>, <span className="text-white/90">technology</span>, and <span className="text-white/90">data</span> to create meaningful brand experiences that drive exponential growth.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="h-px w-12 bg-neutral-800" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold">Inowix Studio</span>
            <div className="h-px w-12 bg-neutral-800" />
          </div>
        </motion.div>
      </div>

      {/* Refined bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;