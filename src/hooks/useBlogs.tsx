import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

export type BlogPost = Database['public']['Tables']['blogs']['Row'];

export const useBlogs = (includeContent = false, statusFilter: 'all' | 'published' | 'draft' | 'archived' = 'published') => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      let query = supabase
        .from('blogs')
        .select('*')
        .order('published_at', { ascending: false });

      if (statusFilter !== 'all') {
        query = query.eq('status', statusFilter);
      }

      const { data, error } = await query;

      if (error) throw error;
      setBlogs(data || []);
    } catch (err: any) {
      setError(err.message);
      console.error('Error fetching blogs:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [includeContent, statusFilter]);

  const refetch = () => {
    fetchBlogs();
  };

  // Get unique tags from all blogs
  const allTags = [...new Set(blogs.flatMap(blog => blog.tags || []))];

  // Filter blogs by search query and tag
  const filterBlogs = (searchQuery: string, selectedTag?: string) => {
    return blogs.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = !selectedTag || blog.tags?.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  };

  return {
    blogs,
    isLoading,
    error,
    refetch,
    allTags,
    filterBlogs
  };
};

// Hook specifically for getting a single blog by slug
export const useBlog = (slug: string) => {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('slug', slug)
          .eq('status', 'published')
          .single();

        if (error) throw error;

        // Increment view count
        if (data) {
          await supabase
            .from('blogs')
            .update({ views: (data.views || 0) + 1 })
            .eq('id', data.id);
        }

        setBlog(data);
      } catch (err: any) {
        setError(err.message);
        console.error('Error fetching blog:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  return { blog, isLoading, error };
};