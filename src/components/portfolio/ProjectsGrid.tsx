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
  const [viewMode, setViewMode] = useState<'swipe' | 'grid'>('grid');
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
    <section className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#0F172A] relative overflow-hidden ${className}`} data-testid="projects-grid">
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-10 gap-6 border-b border-zinc-800/50 pb-6 sm:pb-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="section-title mb-3 text-white">
                Selected <span className="font-normal bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Works</span>
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed font-light">
                  Strategic solutions and creative executions that drive impact.
                </p>
                <div className="h-4 w-px bg-zinc-800/50 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-medium text-white tracking-tight">
                    {filteredProjects.length}
                  </span>
                  <span className="text-[#6B7280] font-medium uppercase tracking-widest text-xs sm:text-sm">
                    Projects
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-zinc-900/50 border border-zinc-800/50 p-1 rounded-xl flex">
              <button
                onClick={() => setViewMode('swipe')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 ${viewMode === 'swipe' ? 'bg-primary text-primary-foreground' : 'text-[#9CA3AF] hover:text-white'}`}
              >
                <GalleryHorizontal className="w-4 h-4" /> SWIPE
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-[#9CA3AF] hover:text-white'}`}
              >
                <LayoutGrid className="w-4 h-4" /> GRID
              </button>
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm uppercase font-medium transition-colors duration-200 border",
                showFilters ? "bg-primary text-primary-foreground border-primary/30" : "bg-zinc-900/50 text-[#D1D5DB] border-zinc-800/50 hover:border-primary/40"
              )}
            >
              {showFilters ? 'Hide Filters' : 'Filters'}
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Sidebar Filter */}
          <AnimatePresence>
            {showFilters && (
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden sticky top-24 self-start w-full lg:w-[280px]"
              >
                <div className="w-full pr-0 lg:pr-4">
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
                      className="mt-6 w-full py-3 text-sm font-medium text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors duration-200 uppercase tracking-wider"
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

                      <div className="mt-6 sm:mt-8 flex items-center justify-between gap-4 sm:gap-6">
                        <div className="flex-1 flex items-center gap-3 sm:gap-4">
                          <div className="h-0.5 flex-1 bg-zinc-800/50 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-primary"
                              initial={false}
                              animate={{ width: `${(current / count) * 100}%` }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                          <p className="text-xs sm:text-sm font-mono text-[#6B7280] tabular-nums">
                            {current.toString().padStart(2, '0')} / {count.toString().padStart(2, '0')}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CarouselPrevious className="static translate-y-0 w-8 h-8 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/50 border-zinc-800/50 text-white transition-colors duration-200" />
                          <CarouselNext className="static translate-y-0 w-8 h-8 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/50 border-zinc-800/50 text-white transition-colors duration-200" />
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
                  className="text-center py-16 sm:py-20 border border-dashed border-zinc-800/50 rounded-2xl bg-zinc-900/20"
                >
                  <div className="mb-6 inline-flex w-16 h-16 bg-zinc-900/50 rounded-full items-center justify-center border border-zinc-800/50">
                    <svg className="w-8 h-8 text-[#6B7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <p className="text-[#9CA3AF] text-base mb-4 font-light">No matching cases discovered.</p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
                  >
                    Reset Filters
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