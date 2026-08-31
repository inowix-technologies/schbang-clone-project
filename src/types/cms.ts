export type PublishStatus = 'draft' | 'published' | 'archived';

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string | null;
  description: string | null;
  logo_url: string | null;
  hero_visual_url: string | null;
  accent_color: string | null;
  external_url: string | null;
  cta_text: string | null;
  cta_url: string | null;
  is_featured: boolean;
  sort_order: number;
  status: PublishStatus;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
  updated_at: string;
  product_features?: ProductFeature[];
  product_technologies?: ProductTechnology[];
  product_metrics?: ProductMetric[];
  product_screenshots?: ProductScreenshot[];
}

export interface ProductFeature {
  id: string;
  product_id: string;
  title: string;
  description: string | null;
  sort_order: number;
}

export interface ProductTechnology {
  id: string;
  product_id: string;
  name: string;
  sort_order: number;
}

export interface ProductMetric {
  id: string;
  product_id: string;
  label: string;
  value: string;
  sort_order: number;
}

export interface ProductScreenshot {
  id: string;
  product_id: string;
  image_url: string;
  caption: string | null;
  sort_order: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  subtitle: string | null;
  description: string | null;
  short_description: string | null;
  hero_image_url: string | null;
  category: string | null;
  color_variant: number;
  status: PublishStatus;
  is_featured: boolean;
  sort_order: number;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
  updated_at: string;
  case_study_sections?: CaseStudySection[];
  case_study_stats?: CaseStudyStat[];
  case_study_technologies?: CaseStudyTechnology[];
  case_study_images?: CaseStudyImage[];
}

export interface CaseStudySection {
  id: string;
  case_study_id: string;
  section_type: string;
  title: string;
  content: string | null;
  sort_order: number;
}

export interface CaseStudyStat {
  id: string;
  case_study_id: string;
  label: string;
  value: string;
  sort_order: number;
}

export interface CaseStudyTechnology {
  id: string;
  case_study_id: string;
  category: string;
  items: string[];
}

export interface CaseStudyImage {
  id: string;
  case_study_id: string;
  image_url: string;
  caption: string | null;
  sort_order: number;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  tagline: string | null;
  icon: string | null;
  sort_order: number;
  status: PublishStatus;
  created_at: string;
  updated_at: string;
  service_items?: ServiceItem[];
}

export interface ServiceItem {
  id: string;
  service_id: string;
  name: string;
  description: string | null;
  sort_order: number;
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  sort_order: number;
  status: PublishStatus;
  created_at: string;
  updated_at: string;
}
