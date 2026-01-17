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
      <div className="space-y-2.5">
        <h3 className="text-[10px] font-medium uppercase tracking-wider text-[#6B7280]">Search Workspace</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280] h-3.5 w-3.5" />
          <Input
            placeholder="Type to find..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9 h-10 bg-zinc-950/50 border-zinc-800/50 text-sm text-white placeholder:text-[#6B7280] focus:ring-primary/30 focus:border-primary/50 rounded-lg transition-colors duration-200"
            data-testid="input-search"
          />
        </div>
      </div>

      {/* Category Filters - Two column grid to save space */}
      <div className="space-y-2.5">
        <h3 className="text-[10px] font-medium uppercase tracking-wider text-[#6B7280]">Expertise</h3>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.value;
            const count = categoryStats[category.label] || 0;

            return (
              <button
                key={category.label}
                onClick={() => onCategoryChange(category.value)}
                className={cn(
                  "flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-colors duration-200 text-[10px] font-medium border",
                  isSelected
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-zinc-950/50 border-zinc-800/50 text-[#9CA3AF] hover:border-zinc-700/50 hover:text-white"
                )}
                data-testid={`filter-${category.label.toLowerCase().replace(' ', '-')}`}
              >
                <span className="truncate">{category.label}</span>
                <span className={cn(
                  "ml-1.5 opacity-70",
                  isSelected ? "text-primary-foreground" : "text-[#6B7280]"
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
          className="w-full py-2.5 text-[10px] font-medium text-[#9CA3AF] hover:text-white border border-dashed border-zinc-800/50 rounded-lg transition-colors duration-200"
          data-testid="button-clear-filters"
        >
          RESET FILTERS
        </button>
      )}
    </div>
  );
};

export default ProjectFilter;