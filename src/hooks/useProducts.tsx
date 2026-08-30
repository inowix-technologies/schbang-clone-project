import { useState, useEffect, useCallback } from 'react';
import { fetchProducts, fetchProductBySlug } from '@/lib/cms';
import type { Product, PublishStatus } from '@/types/cms';

export const useProducts = (options?: {
  status?: PublishStatus | 'all';
  featured?: boolean;
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchProducts(options);
      setProducts(data);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to fetch products';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [options?.status, options?.featured]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { products, isLoading, error, refetch };
};

export const useProduct = (slug: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    const load = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchProductBySlug(slug);
        setProduct(data);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Failed to fetch product';
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [slug]);

  return { product, isLoading, error };
};
