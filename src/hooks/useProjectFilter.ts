import { useState, useMemo } from 'react';
import { ProjectCategory, projects, filterProjects } from '@/data/projects';

export const useProjectFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = useMemo(() => {
    let filtered = projects;
    
    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

const categoryStats = useMemo(() => {
  const stats = {
    'All': projects.length,
    'Apps': projects.filter(p => p.category === 'Apps').length,
    'AI': projects.filter(p => p.category === 'AI').length,
    'SaaS': projects.filter(p => p.category === 'SaaS').length,
    'Web App': projects.filter(p => p.category === 'Web App').length,
    'Healthcare': projects.filter(p => p.category === 'Healthcare').length,
    'E-commerce': projects.filter(p => p.category === 'E-commerce').length,
    'Services': projects.filter(p => p.category === 'Services').length,
    'Blockchain': projects.filter(p => p.category === 'Blockchain').length,
    'Fintech': projects.filter(p => p.category === 'Fintech').length,
    'EdTech': projects.filter(p => p.category === 'EdTech').length,
  };
  return stats;
}, [projects]); 

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