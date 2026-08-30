import { supabase } from '@/integrations/supabase/client';
import type { Product, CaseStudy, Service, Industry, PublishStatus } from '@/types/cms';
import { FALLBACK_PRODUCTS, FALLBACK_SERVICES, FALLBACK_INDUSTRIES } from '@/data/cms-fallback';

const CMS_BUCKET = 'cms-media';

export async function uploadCmsImage(file: File, folder: string): Promise<string> {
  const ext = file.name.split('.').pop();
  const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error } = await supabase.storage
    .from(CMS_BUCKET)
    .upload(fileName, file, { upsert: false });

  if (error) throw error;

  const { data } = supabase.storage.from(CMS_BUCKET).getPublicUrl(fileName);
  return data.publicUrl;
}

export async function fetchProducts(options?: {
  status?: PublishStatus | 'all';
  featured?: boolean;
}): Promise<Product[]> {
  let query = supabase
    .from('products')
    .select(`
      *,
      product_features(*),
      product_technologies(*),
      product_metrics(*),
      product_screenshots(*)
    `)
    .order('sort_order', { ascending: true });

  if (options?.status && options.status !== 'all') {
    query = query.eq('status', options.status);
  }
  if (options?.featured) {
    query = query.eq('is_featured', true);
  }

  const { data, error } = await query;
  if (error) {
    console.warn('CMS products fetch failed, using fallback:', error.message);
    let fallback = [...FALLBACK_PRODUCTS];
    if (options?.featured) fallback = fallback.filter(p => p.is_featured);
    if (options?.status && options.status !== 'all') fallback = fallback.filter(p => p.status === options.status);
    return fallback;
  }
  return (data as Product[]) || [];
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      product_features(*),
      product_technologies(*),
      product_metrics(*),
      product_screenshots(*)
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error) {
    const fallback = FALLBACK_PRODUCTS.find(p => p.slug === slug);
    return fallback || null;
  }
  return data as Product;
}

export async function fetchCaseStudies(options?: {
  status?: PublishStatus | 'all';
  featured?: boolean;
}): Promise<CaseStudy[]> {
  let query = supabase
    .from('case_studies')
    .select(`
      *,
      case_study_sections(*),
      case_study_stats(*),
      case_study_technologies(*),
      case_study_images(*)
    `)
    .order('sort_order', { ascending: true });

  if (options?.status && options.status !== 'all') {
    query = query.eq('status', options.status);
  }
  if (options?.featured) {
    query = query.eq('is_featured', true);
  }

  const { data, error } = await query;
  if (error) throw error;
  return (data as CaseStudy[]) || [];
}

export async function fetchCaseStudiesWithFallback(options?: {
  status?: PublishStatus | 'all';
  featured?: boolean;
}): Promise<CaseStudy[]> {
  try {
    return await fetchCaseStudies(options);
  } catch {
    return [];
  }
}

export async function fetchCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const { data, error } = await supabase
    .from('case_studies')
    .select(`
      *,
      case_study_sections(*),
      case_study_stats(*),
      case_study_technologies(*),
      case_study_images(*)
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error) return null;
  return data as CaseStudy;
}

export async function fetchServices(status: PublishStatus | 'all' = 'published'): Promise<Service[]> {
  let query = supabase
    .from('services')
    .select(`*, service_items(*)`)
    .order('sort_order', { ascending: true });

  if (status !== 'all') {
    query = query.eq('status', status);
  }

  const { data, error } = await query;
  if (error) {
    console.warn('CMS services fetch failed, using fallback:', error.message);
    let fallback = [...FALLBACK_SERVICES];
    if (status !== 'all') fallback = fallback.filter(s => s.status === status);
    return fallback;
  }
  return (data as Service[]) || [];
}

export async function fetchIndustries(status: PublishStatus | 'all' = 'published'): Promise<Industry[]> {
  let query = supabase
    .from('industries')
    .select('*')
    .order('sort_order', { ascending: true });

  if (status !== 'all') {
    query = query.eq('status', status);
  }

  const { data, error } = await query;
  if (error) {
    console.warn('CMS industries fetch failed, using fallback:', error.message);
    let fallback = [...FALLBACK_INDUSTRIES];
    if (status !== 'all') fallback = fallback.filter(i => i.status === status);
    return fallback;
  }
  return (data as Industry[]) || [];
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
