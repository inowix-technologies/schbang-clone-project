import { useState } from 'react';
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { useProjectFilter } from "@/hooks/useProjectFilter";

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

  const [showFilters, setShowFilters] = useState(false);

  return (
    <section className={`py-16 lg:py-24 px-4 lg:px-8 ${className}`} data-testid="projects-grid">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Filter Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Projects</h2>
            <p className="text-muted-foreground text-lg">
              Explore our portfolio of innovative solutions across different categories
            </p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="mt-4 lg:mt-0 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors lg:hidden"
            data-testid="button-toggle-filters"
          >
            {showFilters ? 'Hide' : 'Show'} Filters
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filter */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'} lg:col-span-1`}>
            <div className="sticky top-24">
              <ProjectFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                categoryStats={categoryStats}
                onClearFilters={clearFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="lg:col-span-3">
            {/* Results Info */}
            <div className="mb-8 flex items-center justify-between">
              <p className="text-muted-foreground">
                {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
                {hasActiveFilters && (
                  <span className="ml-2 text-accent">
                    (filtered)
                  </span>
                )}
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors lg:hidden"
                  data-testid="button-clear-filters-mobile"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.shortDescription}
                    image={project.heroImage}
                    colorVariant={project.colorVariant as 1 | 2 | 3 | 4 | 5 | 6}
                    delay={index * 150}
                    slug={project.slug}
                    category={project.category}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filter criteria to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-accent hover:text-accent/80 transition-colors"
                  data-testid="button-clear-filters-empty"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;