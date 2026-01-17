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
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-background/50 border-border/50 focus:bg-background transition-all"
          data-testid="input-search"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-clear-search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Category Filters */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold text-foreground">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.value;
            const count = categoryStats[category.label] || 0;
            
            return (
              <Button
                key={category.label}
                variant={isSelected ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(category.value)}
                className={cn(
                  "transition-all duration-200 text-sm",
                  isSelected 
                    ? "bg-accent text-accent-foreground shadow-md" 
                    : "bg-background/50 hover:bg-accent/10 border-border/50"
                )}
                data-testid={`filter-${category.label.toLowerCase().replace(' ', '-')}`}
              >
                {category.label}
                <span className={cn(
                  "ml-1.5 px-1.5 py-0.5 rounded-full text-xs",
                  isSelected 
                    ? "bg-accent-foreground/20 text-accent-foreground" 
                    : "bg-muted text-muted-foreground"
                )}>
                  {count}
                </span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-clear-filters"
        >
          <X className="h-4 w-4 mr-1.5" />
          Clear filters
        </Button>
      )}
    </div>
  );
};

export default ProjectFilter;