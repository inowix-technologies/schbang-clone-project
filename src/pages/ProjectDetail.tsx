import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, Share2, ExternalLink } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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
    <div className="min-h-screen bg-[#030303] text-white selection:bg-primary/30">
      <Header />

      <main className="pt-32 pb-20">
        {/* Header / Hero Section */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                  {project.category}
                </span>
                <div className="h-px w-8 bg-zinc-800" />
                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                  Case Study {project.id.padStart(2, '0')}
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
                {project.title}
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                {project.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-3 rounded-full bg-zinc-900 border border-white/5 hover:bg-zinc-800 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-all shadow-xl">
                View Live <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-[16/9] lg:aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl"
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
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[2rem] bg-zinc-900/50 border border-white/5 backdrop-blur-sm group hover:border-primary/20 transition-all"
              >
                <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 w-fit mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-bold mb-2 tabular-nums">{stat.value}</div>
                <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Content Section */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mt-32 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-24">
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

                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{section.title}</h2>

                <div className="text-lg text-zinc-400 leading-relaxed space-y-6">
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
                className="p-12 rounded-[3rem] bg-zinc-900 border border-white/5 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="text-primary text-6xl font-serif mb-8 opacity-50">“</div>
                  <blockquote className="text-2xl lg:text-3xl font-medium leading-tight text-white mb-10">
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

          <aside className="lg:col-span-4 space-y-8">
            {/* Tech Stack Card */}
            <div className="p-8 rounded-[2rem] bg-zinc-900 border border-white/5 sticky top-32">
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
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mt-40">
          <div className="p-16 rounded-[4rem] bg-gradient-to-br from-primary/20 to-transparent border border-primary/10 text-center relative overflow-hidden group">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">Ready to build your masterpiece?</h2>
              <p className="text-xl text-zinc-400 mb-12">
                Join the league of industry leaders who chose Inowix to redefine their digital future.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center px-10 py-5 bg-white text-black rounded-full text-lg font-bold hover:bg-zinc-200 transition-all hover:scale-105"
              >
                Start a Project
                <ChevronRight className="ml-2 w-5 h-5" />
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