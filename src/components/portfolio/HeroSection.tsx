import { motion } from "framer-motion";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }), []);

  return (
    <section className={cn(
      "relative min-h-[70vh] sm:min-h-[75vh] flex flex-col items-center justify-center overflow-hidden bg-[#0F172A] px-4 sm:px-6 py-16 sm:py-20",
      className
    )}>
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="hero-title font-light tracking-tight text-white selection:bg-primary/30">
              <span className="text-[#9CA3AF]">A great solution is</span>
              <br />
              <span className="text-blue-400 inline-block font-normal">never a coincidence;</span>
              <br className="hidden sm:block" />
              <span className="inline-block mt-2">It's built when all the</span>{" "}
              <span className="relative inline-block px-1">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-normal">
                  molecules
                </span>
              </span>
              <br className="hidden sm:block" />
              <span className="text-[#9CA3AF]">fall into place.</span>
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-10 space-y-4"
          >
            <p className="lead text-[#D1D5DB] max-w-3xl mx-auto font-light px-4 sm:px-0">
              We combine <span className="text-white/90">creativity</span>, <span className="text-white/90">technology</span>, and <span className="text-white/90">data</span> to create meaningful brand experiences that drive exponential growth.
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="h-px w-8 sm:w-12 bg-zinc-800/50" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.4em] text-[#6B7280] font-medium">Inowix Studio</span>
              <div className="h-px w-8 sm:w-12 bg-zinc-800/50" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Refined bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#0F172A] to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;