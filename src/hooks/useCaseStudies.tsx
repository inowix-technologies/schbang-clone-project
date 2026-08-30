import { useState, useEffect, useCallback } from 'react';
import { fetchCaseStudies, fetchCaseStudyBySlug } from '@/lib/cms';
import type { CaseStudy, PublishStatus } from '@/types/cms';

export const useCaseStudies = (options?: {
  status?: PublishStatus | 'all';
  featured?: boolean;
}) => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchCaseStudies(options);
      setCaseStudies(data);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to fetch case studies';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [options?.status, options?.featured]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { caseStudies, isLoading, error, refetch };
};

export const useCaseStudy = (slug: string) => {
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    const load = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchCaseStudyBySlug(slug);
        setCaseStudy(data);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Failed to fetch case study';
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [slug]);

  return { caseStudy, isLoading, error };
};
