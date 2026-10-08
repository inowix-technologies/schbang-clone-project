-- One-time setup for a fresh Supabase project (Inowix website).
-- Paste this whole file into Supabase Dashboard -> SQL Editor -> New query, then click Run.
-- It runs the three files in supabase/migrations in dependency order (the CMS file needs is_admin first).

-- ===========================================================================
-- 20250925220905_3972d7b7-ca9c-49b3-8a1a-b371f50e0300.sql
-- ===========================================================================
-- Create enum for blog post status
CREATE TYPE blog_status AS ENUM ('draft', 'published', 'archived');

-- Create blogs table
CREATE TABLE public.blogs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    featured_image_url TEXT,
    status blog_status DEFAULT 'draft',
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    author_id UUID REFERENCES auth.users(id),
    views INTEGER DEFAULT 0,
    tags TEXT[]
);

-- Create contact_leads table
CREATE TABLE public.contact_leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    phone VARCHAR(50),
    subject VARCHAR(255),
    message TEXT NOT NULL,
    source VARCHAR(50) DEFAULT 'website',
    status VARCHAR(20) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    notes TEXT
);

-- Create user_roles table for admin access
CREATE TABLE public.user_roles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('admin', 'editor', 'user')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id)
);

-- Create profiles table
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email VARCHAR(255),
    full_name VARCHAR(100),
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
    SELECT EXISTS (
        SELECT 1 FROM public.user_roles
        WHERE user_roles.user_id = $1 AND role = 'admin'
    );
$$;

-- RLS Policies for blogs
CREATE POLICY "Anyone can view published blogs" ON public.blogs
    FOR SELECT USING (status = 'published');

CREATE POLICY "Admins can manage all blogs" ON public.blogs
    FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for contact_leads  
CREATE POLICY "Admins can view all contact leads" ON public.contact_leads
    FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Anyone can insert contact leads" ON public.contact_leads
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can update contact leads" ON public.contact_leads
    FOR UPDATE USING (public.is_admin(auth.uid()));

-- RLS Policies for user_roles
CREATE POLICY "Users can view their own role" ON public.user_roles
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles" ON public.user_roles
    FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for profiles
CREATE POLICY "Users can view all profiles" ON public.profiles
    FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true);

-- Storage policies for blog images
CREATE POLICY "Anyone can view blog images" ON storage.objects
    FOR SELECT USING (bucket_id = 'blog-images');

CREATE POLICY "Admins can upload blog images" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'blog-images' AND 
        public.is_admin(auth.uid())
    );

CREATE POLICY "Admins can update blog images" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'blog-images' AND 
        public.is_admin(auth.uid())
    );

CREATE POLICY "Admins can delete blog images" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'blog-images' AND 
        public.is_admin(auth.uid())
    );

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER blogs_updated_at
    BEFORE UPDATE ON public.blogs
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER contact_leads_updated_at
    BEFORE UPDATE ON public.contact_leads
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', '')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- Create indexes for better performance
CREATE INDEX idx_blogs_status ON public.blogs(status);
CREATE INDEX idx_blogs_published_at ON public.blogs(published_at DESC);
CREATE INDEX idx_blogs_slug ON public.blogs(slug);
CREATE INDEX idx_contact_leads_created_at ON public.contact_leads(created_at DESC);
CREATE INDEX idx_contact_leads_status ON public.contact_leads(status);
CREATE INDEX idx_user_roles_user_id ON public.user_roles(user_id);

-- Insert sample admin user role (you'll need to update this with actual user ID after signup)
-- INSERT INTO public.user_roles (user_id, role) VALUES ('your-admin-user-id', 'admin');

-- ===========================================================================
-- 20250925221059_8a01dcef-d060-42cf-b858-88f99e62ae28.sql
-- ===========================================================================
-- Fix security warnings by setting search_path for functions with CASCADE

-- Update is_admin function (drop with cascade first)
DROP FUNCTION IF EXISTS public.is_admin(UUID) CASCADE;
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
    SELECT EXISTS (
        SELECT 1 FROM public.user_roles
        WHERE user_roles.user_id = $1 AND role = 'admin'
    );
$$;

-- Recreate all RLS policies that depended on is_admin function
-- RLS Policies for blogs
DROP POLICY IF EXISTS "Admins can manage all blogs" ON public.blogs;
CREATE POLICY "Admins can manage all blogs" ON public.blogs
    FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for contact_leads  
DROP POLICY IF EXISTS "Admins can view all contact leads" ON public.contact_leads;
CREATE POLICY "Admins can view all contact leads" ON public.contact_leads
    FOR SELECT USING (public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "Admins can update contact leads" ON public.contact_leads;
CREATE POLICY "Admins can update contact leads" ON public.contact_leads
    FOR UPDATE USING (public.is_admin(auth.uid()));

-- RLS Policies for user_roles
DROP POLICY IF EXISTS "Admins can manage all roles" ON public.user_roles;
CREATE POLICY "Admins can manage all roles" ON public.user_roles
    FOR ALL USING (public.is_admin(auth.uid()));

-- Storage policies for blog images
DROP POLICY IF EXISTS "Admins can upload blog images" ON storage.objects;
CREATE POLICY "Admins can upload blog images" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'blog-images' AND 
        public.is_admin(auth.uid())
    );

DROP POLICY IF EXISTS "Admins can update blog images" ON storage.objects;
CREATE POLICY "Admins can update blog images" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'blog-images' AND 
        public.is_admin(auth.uid())
    );

DROP POLICY IF EXISTS "Admins can delete blog images" ON storage.objects;
CREATE POLICY "Admins can delete blog images" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'blog-images' AND 
        public.is_admin(auth.uid())
    );

-- Update handle_updated_at function
DROP FUNCTION IF EXISTS public.handle_updated_at() CASCADE;
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;

-- Recreate triggers for updated_at
DROP TRIGGER IF EXISTS blogs_updated_at ON public.blogs;
CREATE TRIGGER blogs_updated_at
    BEFORE UPDATE ON public.blogs
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS contact_leads_updated_at ON public.contact_leads;
CREATE TRIGGER contact_leads_updated_at
    BEFORE UPDATE ON public.contact_leads
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS profiles_updated_at ON public.profiles;
CREATE TRIGGER profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Update handle_new_user function
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', '')
    );
    RETURN NEW;
END;
$$;

-- Recreate trigger for new user registration
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- ===========================================================================
-- 20250830120000_cms_entities.sql
-- ===========================================================================
-- CMS entities: products, case_studies, services, industries
-- with relationship junction tables

CREATE TYPE publish_status AS ENUM ('draft', 'published', 'archived');

-- Industries
CREATE TABLE public.industries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    icon VARCHAR(100),
    sort_order INTEGER DEFAULT 0,
    status publish_status DEFAULT 'draft',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Services (top-level pillars)
CREATE TABLE public.services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    tagline TEXT,
    icon VARCHAR(100),
    sort_order INTEGER DEFAULT 0,
    status publish_status DEFAULT 'draft',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Service items (sub-services under each pillar)
CREATE TABLE public.service_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    service_id UUID NOT NULL REFERENCES public.services(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Products
CREATE TABLE public.products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    tagline TEXT,
    description TEXT,
    logo_url TEXT,
    hero_visual_url TEXT,
    accent_color VARCHAR(20),
    external_url TEXT,
    cta_text VARCHAR(100),
    cta_url TEXT,
    is_featured BOOLEAN DEFAULT false,
    sort_order INTEGER DEFAULT 0,
    status publish_status DEFAULT 'draft',
    seo_title VARCHAR(255),
    seo_description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Product features
CREATE TABLE public.product_features (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Product technologies
CREATE TABLE public.product_technologies (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    sort_order INTEGER DEFAULT 0
);

-- Product metrics
CREATE TABLE public.product_metrics (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
    label VARCHAR(100) NOT NULL,
    value VARCHAR(100) NOT NULL,
    sort_order INTEGER DEFAULT 0
);

-- Product screenshots
CREATE TABLE public.product_screenshots (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    caption TEXT,
    sort_order INTEGER DEFAULT 0
);

-- Case studies
CREATE TABLE public.case_studies (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    subtitle TEXT,
    description TEXT,
    short_description TEXT,
    hero_image_url TEXT,
    category VARCHAR(100),
    color_variant INTEGER DEFAULT 0,
    status publish_status DEFAULT 'draft',
    is_featured BOOLEAN DEFAULT false,
    sort_order INTEGER DEFAULT 0,
    seo_title VARCHAR(255),
    seo_description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Case study sections (Context, Challenge, Architecture, etc.)
CREATE TABLE public.case_study_sections (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    case_study_id UUID NOT NULL REFERENCES public.case_studies(id) ON DELETE CASCADE,
    section_type VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    sort_order INTEGER DEFAULT 0
);

-- Case study stats
CREATE TABLE public.case_study_stats (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    case_study_id UUID NOT NULL REFERENCES public.case_studies(id) ON DELETE CASCADE,
    label VARCHAR(100) NOT NULL,
    value VARCHAR(100) NOT NULL,
    sort_order INTEGER DEFAULT 0
);

-- Case study tech stack
CREATE TABLE public.case_study_technologies (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    case_study_id UUID NOT NULL REFERENCES public.case_studies(id) ON DELETE CASCADE,
    category VARCHAR(100) NOT NULL,
    items TEXT[] NOT NULL DEFAULT '{}'
);

-- Case study images
CREATE TABLE public.case_study_images (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    case_study_id UUID NOT NULL REFERENCES public.case_studies(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    caption TEXT,
    sort_order INTEGER DEFAULT 0
);

-- Junction tables for relationships
CREATE TABLE public.product_industries (
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    industry_id UUID REFERENCES public.industries(id) ON DELETE CASCADE,
    PRIMARY KEY (product_id, industry_id)
);

CREATE TABLE public.product_services (
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    service_id UUID REFERENCES public.services(id) ON DELETE CASCADE,
    PRIMARY KEY (product_id, service_id)
);

CREATE TABLE public.case_study_products (
    case_study_id UUID REFERENCES public.case_studies(id) ON DELETE CASCADE,
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    PRIMARY KEY (case_study_id, product_id)
);

CREATE TABLE public.case_study_industries (
    case_study_id UUID REFERENCES public.case_studies(id) ON DELETE CASCADE,
    industry_id UUID REFERENCES public.industries(id) ON DELETE CASCADE,
    PRIMARY KEY (case_study_id, industry_id)
);

CREATE TABLE public.case_study_services (
    case_study_id UUID REFERENCES public.case_studies(id) ON DELETE CASCADE,
    service_id UUID REFERENCES public.services(id) ON DELETE CASCADE,
    PRIMARY KEY (case_study_id, service_id)
);

-- Enable RLS
ALTER TABLE public.industries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_technologies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_screenshots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_study_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_study_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_study_technologies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_study_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_industries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_study_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_study_industries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_study_services ENABLE ROW LEVEL SECURITY;

-- Public read policies (published only)
CREATE POLICY "Anyone can view published industries" ON public.industries
    FOR SELECT USING (status = 'published');

CREATE POLICY "Anyone can view published services" ON public.services
    FOR SELECT USING (status = 'published');

CREATE POLICY "Anyone can view service items of published services" ON public.service_items
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM public.services s WHERE s.id = service_id AND s.status = 'published')
    );

CREATE POLICY "Anyone can view published products" ON public.products
    FOR SELECT USING (status = 'published');

CREATE POLICY "Anyone can view features of published products" ON public.product_features
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM public.products p WHERE p.id = product_id AND p.status = 'published')
    );

CREATE POLICY "Anyone can view technologies of published products" ON public.product_technologies
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM public.products p WHERE p.id = product_id AND p.status = 'published')
    );

CREATE POLICY "Anyone can view metrics of published products" ON public.product_metrics
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM public.products p WHERE p.id = product_id AND p.status = 'published')
    );

CREATE POLICY "Anyone can view screenshots of published products" ON public.product_screenshots
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM public.products p WHERE p.id = product_id AND p.status = 'published')
    );

CREATE POLICY "Anyone can view published case studies" ON public.case_studies
    FOR SELECT USING (status = 'published');

CREATE POLICY "Anyone can view sections of published case studies" ON public.case_study_sections
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM public.case_studies cs WHERE cs.id = case_study_id AND cs.status = 'published')
    );

CREATE POLICY "Anyone can view stats of published case studies" ON public.case_study_stats
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM public.case_studies cs WHERE cs.id = case_study_id AND cs.status = 'published')
    );

CREATE POLICY "Anyone can view tech of published case studies" ON public.case_study_technologies
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM public.case_studies cs WHERE cs.id = case_study_id AND cs.status = 'published')
    );

CREATE POLICY "Anyone can view images of published case studies" ON public.case_study_images
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM public.case_studies cs WHERE cs.id = case_study_id AND cs.status = 'published')
    );

-- Junction table read policies
CREATE POLICY "Anyone can view product_industries" ON public.product_industries FOR SELECT USING (true);
CREATE POLICY "Anyone can view product_services" ON public.product_services FOR SELECT USING (true);
CREATE POLICY "Anyone can view case_study_products" ON public.case_study_products FOR SELECT USING (true);
CREATE POLICY "Anyone can view case_study_industries" ON public.case_study_industries FOR SELECT USING (true);
CREATE POLICY "Anyone can view case_study_services" ON public.case_study_services FOR SELECT USING (true);

-- Admin manage policies
CREATE POLICY "Admins manage industries" ON public.industries FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins manage services" ON public.services FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins manage service_items" ON public.service_items FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins manage products" ON public.products FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins manage product_features" ON public.product_features FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins manage product_technologies" ON public.product_technologies FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins manage product_metrics" ON public.product_metrics FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins manage product_screenshots" ON public.product_screenshots FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins manage case_studies" ON public.case_studies FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins manage case_study_sections" ON public.case_study_sections FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins manage case_study_stats" ON public.case_study_stats FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins manage case_study_technologies" ON public.case_study_technologies FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins manage case_study_images" ON public.case_study_images FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins manage product_industries" ON public.product_industries FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins manage product_services" ON public.product_services FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins manage case_study_products" ON public.case_study_products FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins manage case_study_industries" ON public.case_study_industries FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins manage case_study_services" ON public.case_study_services FOR ALL USING (public.is_admin(auth.uid()));

-- Updated_at triggers
CREATE TRIGGER industries_updated_at BEFORE UPDATE ON public.industries FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER services_updated_at BEFORE UPDATE ON public.services FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER products_updated_at BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER case_studies_updated_at BEFORE UPDATE ON public.case_studies FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Indexes
CREATE INDEX idx_industries_status ON public.industries(status);
CREATE INDEX idx_industries_slug ON public.industries(slug);
CREATE INDEX idx_services_status ON public.services(status);
CREATE INDEX idx_services_slug ON public.services(slug);
CREATE INDEX idx_products_status ON public.products(status);
CREATE INDEX idx_products_slug ON public.products(slug);
CREATE INDEX idx_products_featured ON public.products(is_featured) WHERE is_featured = true;
CREATE INDEX idx_case_studies_status ON public.case_studies(status);
CREATE INDEX idx_case_studies_slug ON public.case_studies(slug);
CREATE INDEX idx_case_studies_featured ON public.case_studies(is_featured) WHERE is_featured = true;

-- Storage bucket for CMS media
INSERT INTO storage.buckets (id, name, public) VALUES ('cms-media', 'cms-media', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Anyone can view cms media" ON storage.objects
    FOR SELECT USING (bucket_id = 'cms-media');

CREATE POLICY "Admins can upload cms media" ON storage.objects
    FOR INSERT WITH CHECK (bucket_id = 'cms-media' AND public.is_admin(auth.uid()));

CREATE POLICY "Admins can update cms media" ON storage.objects
    FOR UPDATE USING (bucket_id = 'cms-media' AND public.is_admin(auth.uid()));

CREATE POLICY "Admins can delete cms media" ON storage.objects
    FOR DELETE USING (bucket_id = 'cms-media' AND public.is_admin(auth.uid()));

-- Seed default services
INSERT INTO public.services (name, slug, description, tagline, sort_order, status) VALUES
('Product Engineering', 'product-engineering', 'Production-grade software from SaaS to enterprise platforms.', 'We engineer what ships.', 1, 'published'),
('Artificial Intelligence', 'artificial-intelligence', 'AI products, agents, LLM integration, and intelligent automation.', 'Intelligence engineered for production.', 2, 'published'),
('Cloud & DevOps', 'cloud-devops', 'Cloud architecture, CI/CD, infrastructure, and observability.', 'Infrastructure built to scale.', 3, 'published'),
('Cybersecurity', 'cybersecurity', 'Application security, DevSecOps, and AI-native security analysis.', 'Security engineered from the ground up.', 4, 'published');

-- Seed default industries
INSERT INTO public.industries (name, slug, description, sort_order, status) VALUES
('Healthcare & Parenting', 'healthcare-parenting', 'Platforms built for health, wellness, and family.', 1, 'published'),
('Logistics & Mobility', 'logistics-mobility', 'Systems for transportation, delivery, and supply chain.', 2, 'published'),
('Ecommerce & D2C', 'ecommerce-d2c', 'Commerce infrastructure and direct-to-consumer platforms.', 3, 'published'),
('SaaS & AI', 'saas-ai', 'Software products and AI-native platforms.', 4, 'published'),
('Cybersecurity', 'cybersecurity', 'Security technology and application protection.', 5, 'published'),
('Consumer & Wellness', 'consumer-wellness', 'Digital products for wellness and consumer markets.', 6, 'published'),
('Professional Services', 'professional-services', 'Platforms for agencies and professional operations.', 7, 'published'),
('Enterprise Operations', 'enterprise-operations', 'Enterprise software and operational systems.', 8, 'published');

-- Seed flagship products
INSERT INTO public.products (name, slug, tagline, description, accent_color, is_featured, sort_order, status) VALUES
('COM AI', 'com-ai', 'AI Commerce Infrastructure', 'End-to-end AI-powered commerce infrastructure from conversation to conversion.', '#00FF88', true, 1, 'published'),
('Beacon', 'beacon', 'Revenue Intelligence Platform', 'Revenue intelligence from discovery to pipeline â€” discover, verify, enrich, qualify, and close.', '#00D4FF', true, 2, 'published'),
('RED CLI', 'red-cli', 'AI-Native Cybersecurity', 'AI-native security analysis from code scan to vulnerability report and remediation.', '#DC2626', true, 3, 'published');

-- ---------------------------------------------------------------------------
-- Explicit API grants (row level security above still decides who sees which rows)
-- ---------------------------------------------------------------------------
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin(UUID) TO anon, authenticated;

-- ---------------------------------------------------------------------------
-- After you sign up on /admin once, make your account an admin (replace the email and run this line alone):
-- INSERT INTO public.user_roles (user_id, role) SELECT id, 'admin' FROM auth.users WHERE email = 'you@inowix.in'
--   ON CONFLICT (user_id) DO UPDATE SET role = 'admin';
