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
('Beacon', 'beacon', 'Revenue Intelligence Platform', 'Revenue intelligence from discovery to pipeline — discover, verify, enrich, qualify, and close.', '#00D4FF', true, 2, 'published'),
('RED CLI', 'red-cli', 'AI-Native Cybersecurity', 'AI-native security analysis from code scan to vulnerability report and remediation.', '#DC2626', true, 3, 'published');
