import { useState, useEffect, useCallback } from 'react';
import { fetchServices, fetchIndustries } from '@/lib/cms';
import type { Service, Industry, PublishStatus } from '@/types/cms';

export const useServices = (status: PublishStatus | 'all' = 'published') => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchServices(status);
      setServices(data);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to fetch services';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [status]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { services, isLoading, error, refetch };
};

export const useIndustries = (status: PublishStatus | 'all' = 'published') => {
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchIndustries(status);
      setIndustries(data);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to fetch industries';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [status]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { industries, isLoading, error, refetch };
};
