import { useState, useMemo } from 'react';
import { ProjectCategory, projects, filterProjects } from '@/data/projects';

export const useProjectFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = useMemo(() => {
    return filterProjects(selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  const categoryStats = useMemo(() => {
    const stats = {
      'All': projects.length,
      'Apps': projects.filter(p => p.category === 'Apps').length,
      'AI': projects.filter(p => p.category === 'AI').length,
      'SaaS': projects.filter(p => p.category === 'SaaS').length,
      'Web App': projects.filter(p => p.category === 'Web App').length,
    };
    return stats;
  }, []);

  const clearFilters = () => {
    setSelectedCategory(undefined);
    setSearchQuery('');
  };

  return {
    filteredProjects,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    categoryStats,
    clearFilters,
    hasActiveFilters: selectedCategory !== undefined || searchQuery.length > 0
  };
};