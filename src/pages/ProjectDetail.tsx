import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, Share2, ExternalLink } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { FloatingShapes } from "@/components/ui/floating-shapes";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 text-white">Project not found</h1>
          <Link to="/work" className="inline-flex items-center text-primary hover:underline gap-2">
            <ArrowLeft className="w-4 h-4" />
            Return to portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-primary/30 relative overflow-hidden">
      <GradientMesh className="opacity-20" />
      <FloatingShapes count={6} className="opacity-8" />
      <Header />

      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative z-10">
        {/* Header / Hero Section */}
        <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-primary/10 text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                  {project.category}
                </span>
                <div className="h-px w-6 sm:w-8 bg-zinc-800" />
                <span className="text-zinc-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                  Case Study {project.id.padStart(2, '0')}
                </span>
              </div>
              <h1 className="hero-title mb-6 sm:mb-8">
                {project.title}
              </h1>
              <p className="lead max-w-2xl">
                {project.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              <button className="p-2.5 sm:p-3 rounded-full bg-zinc-900 border border-white/5 hover:bg-zinc-800 transition-colors">
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all shadow-xl text-sm sm:text-base">
                View Live <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </motion.div>

            <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-[16/9] lg:aspect-[21/9] rounded-xl sm:rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl"
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </section>

        {/* Stats Grid */}
        <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {project.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg sm:rounded-xl md:rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm group hover:border-primary/20 transition-all"
              >
                <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-primary/5 border border-primary/10 w-fit mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 tabular-nums">{stat.value}</div>
                <div className="text-[9px] sm:text-[10px] md:text-xs text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mt-12 sm:mt-16 md:mt-24 lg:mt-32 grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          <div className="lg:col-span-8 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
            {project.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                    {section.type}
                  </h3>
                </div>

                <h2 className="h2">{section.title}</h2>

                <div className="text-base text-zinc-400 leading-relaxed space-y-4 sm:space-y-6">
                  {typeof section.content === 'string' ? (
                    <p>{section.content}</p>
                  ) : (
                    <ul className="space-y-4">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex gap-4">
                          <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {section.highlights && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {section.highlights.map((h, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-zinc-900/30 border border-white/5 text-sm font-medium">
                        {h}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}

            {/* Testimonial */}
            {project.testimonial && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl md:rounded-[3rem] bg-zinc-900 border border-white/5 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="text-primary text-4xl sm:text-5xl md:text-6xl font-serif mb-4 sm:mb-6 md:mb-8 opacity-50">"</div>
                  <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-white mb-6 sm:mb-8 md:mb-10">
                    {project.testimonial.content}
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary">
                      {project.testimonial.company[0]}
                    </div>
                    <div>
                      <div className="font-bold">{project.testimonial.company}</div>
                      <div className="text-sm text-zinc-500 uppercase tracking-widest">{project.testimonial.position}</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <div className="text-[120px] font-bold text-white select-none leading-none tracking-tighter">QUOTE</div>
                </div>
              </motion.div>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-6 sm:space-y-8">
            {/* Tech Stack Card */}
            <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-zinc-900 border border-white/5 lg:sticky lg:top-24 lg:top-32">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
                Tech Stack <span className="h-px flex-1 bg-zinc-800" />
              </h3>

              <div className="space-y-8">
                {Object.entries(project.techStack).map(([category, techs]) => (
                  (techs as string[]).length > 0 && (
                    <div key={category}>
                      <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-3">{category}</div>
                      <div className="flex flex-wrap gap-2">
                        {(techs as string[]).map((tech, i) => (
                          <span key={i} className="px-3 py-1.5 rounded-lg bg-zinc-800 border border-white/5 text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-zinc-800">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Process</h3>
                <div className="space-y-6">
                  {project.process.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white mb-1">{step.title}</div>
                        <div className="text-[10px] text-zinc-500">Step {(i + 1).toString().padStart(2, '0')}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-40">
          <div className="p-8 sm:p-12 md:p-14 lg:p-16 rounded-2xl sm:rounded-3xl md:rounded-[4rem] bg-gradient-to-br from-primary/20 to-transparent border border-primary/10 text-center relative overflow-hidden group">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="section-title mb-6 sm:mb-8 px-2 sm:px-0">Ready to build your masterpiece?</h2>
              <p className="lead mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
                Join the league of industry leaders who chose Inowix to redefine their digital future.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-primary text-primary-foreground rounded-full text-sm sm:text-base md:text-lg font-bold hover:bg-primary/90 transition-all hover:scale-105"
              >
                Start a Project
                <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>

            {/* Animated decorative elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-colors" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-colors" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;