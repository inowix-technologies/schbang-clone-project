import { useState, useEffect } from 'react';
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { useProjectFilter } from "@/hooks/useProjectFilter";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { LayoutGrid, GalleryHorizontal } from "lucide-react";

interface ProjectsGridProps {
  className?: string;
}

const ProjectsGrid = ({ className }: ProjectsGridProps) => {
  const {
    filteredProjects,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    categoryStats,
    clearFilters,
    hasActiveFilters
  } = useProjectFilter();

  const [showFilters, setShowFilters] = useState(true);
  const [viewMode, setViewMode] = useState<'swipe' | 'grid'>('swipe');
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className={`py-12 px-4 lg:px-8 bg-black relative overflow-hidden ${className}`} data-testid="projects-grid">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-6 border-b border-white/5 pb-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-3 tracking-tight text-white leading-tight">
                Selected <span className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.15)]">Works</span>
              </h2>
              <div className="flex items-center gap-4">
                <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
                  Strategic solutions and creative executions that drive impact.
                </p>
                <div className="h-4 w-px bg-white/10 hidden md:block" />
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white tracking-tight">
                    {filteredProjects.length}
                  </span>
                  <span className="text-neutral-600 font-bold uppercase tracking-widest text-[9px]">
                    Projects
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-neutral-900 border border-white/5 p-1 rounded-xl flex shadow-2xl">
              <button
                onClick={() => setViewMode('swipe')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${viewMode === 'swipe' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-neutral-500 hover:text-white'}`}
              >
                <GalleryHorizontal className="w-3 h-3" /> SWIPE
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${viewMode === 'grid' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-neutral-500 hover:text-white'}`}
              >
                <LayoutGrid className="w-3 h-3" /> GRID
              </button>
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] uppercase font-bold transition-all border shadow-2xl",
                showFilters ? "bg-white text-black border-white" : "bg-neutral-900 text-white border-white/5 hover:border-white/20"
              )}
            >
              {showFilters ? 'Hide Filters' : 'Filters'}
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
          <AnimatePresence>
            {showFilters && (
              <motion.aside
                initial={{ opacity: 0, width: 0, x: -20 }}
                animate={{ opacity: 1, width: 280, x: 0 }}
                exit={{ opacity: 0, width: 0, x: -20 }}
                className="overflow-hidden sticky top-24 self-start"
              >
                <div className="w-[280px] pr-4">
                  <ProjectFilter
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    categoryStats={categoryStats}
                    onClearFilters={clearFilters}
                    hasActiveFilters={hasActiveFilters}
                  />

                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="mt-6 w-full py-3 text-[9px] font-bold text-blue-500 border border-blue-500/20 rounded-lg hover:bg-blue-500/5 transition-all uppercase tracking-widest"
                    >
                      Clear Selection
                    </button>
                  )}
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Projects Results Area Area */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                viewMode === 'swipe' ? (
                  <motion.div
                    key="swipe-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative"
                  >
                    <Carousel
                      setApi={setApi}
                      opts={{
                        align: "start",
                        loop: false,
                      }}
                      className="w-full"
                    >
                      <CarouselContent className="-ml-4">
                        {filteredProjects.map((project, index) => (
                          <CarouselItem key={project.id} className={cn(
                            "pl-4",
                            showFilters
                              ? "basis-full md:basis-1/2 xl:basis-1/3"
                              : "basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                          )}>
                            <ProjectCard
                              title={project.title}
                              description={project.shortDescription}
                              image={project.heroImage}
                              colorVariant={project.colorVariant as 1 | 2 | 3 | 4 | 5 | 6}
                              slug={project.slug}
                              category={project.category}
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>

                      <div className="mt-8 flex items-center justify-between gap-6">
                        <div className="flex-1 flex items-center gap-4">
                          <div className="h-0.5 flex-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-blue-500"
                              initial={false}
                              animate={{ width: `${(current / count) * 100}%` }}
                            />
                          </div>
                          <p className="text-[10px] font-mono text-neutral-600 tabular-nums">
                            {current.toString().padStart(2, '0')} / {count.toString().padStart(2, '0')}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CarouselPrevious className="static translate-y-0 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border-white/10 text-white" />
                          <CarouselNext className="static translate-y-0 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border-white/10 text-white" />
                        </div>
                      </div>
                    </Carousel>
                  </motion.div>
                ) : (
                  <motion.div
                    key="grid-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                      "grid gap-6",
                      showFilters
                        ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    )}
                  >
                    {filteredProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.shortDescription}
                        image={project.heroImage}
                        colorVariant={project.colorVariant as 1 | 2 | 3 | 4 | 5 | 6}
                        slug={project.slug}
                        category={project.category}
                      />
                    ))}
                  </motion.div>
                )
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20 border border-dashed border-white/10 rounded-2xl bg-neutral-900/10"
                >
                  <div className="mb-6 inline-flex w-16 h-16 bg-neutral-900 rounded-full items-center justify-center border border-white/10">
                    <svg className="w-8 h-8 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <p className="text-neutral-500 text-sm mb-4">No matching cases discovered.</p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-2 bg-white text-black rounded-lg text-xs font-bold hover:scale-105 transition-transform"
                  >
                    Reset Galaxy
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;