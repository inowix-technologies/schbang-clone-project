import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { ProjectCategory } from '@/data/projects';

interface ProjectFilterProps {
  selectedCategory?: ProjectCategory;
  onCategoryChange: (category: ProjectCategory | undefined) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categoryStats: Record<string, number>;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const categories: Array<{ label: string; value: ProjectCategory | undefined }> = [
  { label: 'All', value: undefined },
  { label: 'Apps', value: 'Apps' },
  { label: 'AI', value: 'AI' },
  { label: 'SaaS', value: 'SaaS' },
  { label: 'Web App', value: 'Web App' },
  { label: 'Healthcare', value: 'Healthcare' },
  { label: 'E-commerce', value: 'E-commerce' },
  { label: 'Services', value: 'Services' },
  { label: 'Blockchain', value: 'Blockchain' },
  { label: 'Fintech', value: 'Fintech' },
  { label: 'EdTech', value: 'EdTech' },
];

const ProjectFilter = ({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  categoryStats,
  onClearFilters,
  hasActiveFilters
}: ProjectFilterProps) => {
  return (
    <div className="space-y-6" data-testid="project-filter">
      {/* Search */}
      <div className="space-y-2">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">Search Workspace</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-600 h-3 w-3" />
          <Input
            placeholder="Type to find..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9 h-10 bg-white/5 border-white/5 text-xs text-white placeholder:text-neutral-700 focus:ring-blue-500/30 rounded-lg transition-all"
            data-testid="input-search"
          />
        </div>
      </div>

      {/* Category Filters - Two column grid to save space */}
      <div className="space-y-2">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">Expertise</h3>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.value;
            const count = categoryStats[category.label] || 0;

            return (
              <button
                key={category.label}
                onClick={() => onCategoryChange(category.value)}
                className={cn(
                  "flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-all duration-300 text-[10px] font-bold border",
                  isSelected
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-transparent border-white/5 text-neutral-500 hover:border-white/20 hover:text-neutral-300"
                )}
                data-testid={`filter-${category.label.toLowerCase().replace(' ', '-')}`}
              >
                <span className="truncate">{category.label}</span>
                <span className={cn(
                  "ml-1 opacity-60",
                  isSelected ? "text-white" : "text-neutral-700"
                )}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={onClearFilters}
          className="w-full py-2 text-[10px] font-bold text-neutral-600 hover:text-white border border-dashed border-white/10 rounded-lg transition-all"
          data-testid="button-clear-filters"
        >
          RESET FILTERS
        </button>
      )}
    </div>
  );
};

export default ProjectFilter;