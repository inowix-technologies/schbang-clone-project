/**
 * Single source of truth for homepage content.
 * Client logos: add to src/assets/projects/clients/ and update imports below.
 */

import bumpImage from "@/assets/Bump.png";
import nextstopImage from "@/assets/nextstop-app.jpg";
import retailxImage from "@/assets/retailx-dashboard.jpg";
import carzentraImage from "@/assets/carzentra-app.jpg";
import finnovaImage from "@/assets/finnova-app.jpg";
import bigoImage from "@/assets/bigo.webp";
import siyaAyurvedaImage from "@/assets/siyaayurveda.webp";
import amrutamLogo from "@/assets/only_text_Amrutam_Logo_in_Green-09.webp";
import techIllustration from "@/assets/tech-illustration.jpg";

export type ProductSlug = "com-ai" | "beacon" | "red-cli";

export type ProjectSlug =
  | "babyland"
  | "babylox"
  | "bebroot"
  | "swiftgo"
  | "srl-logistics"
  | "instadham"
  | "siya-ayurveda"
  | "amrutam"
  | "moon-derma"
  | "triplecare"
  | "exhale"
  | "green-gainz"
  | "palatial-farms"
  | "sanch-farms"
  | "melas"
  | "aim"
  | "linkedin-automation"
  | "enterprise-chatbot";

export interface InowixProduct {
  slug: ProductSlug;
  name: string;
  tagline: string;
  description: string;
  accent: string;
  glow: string;
  features: string[];
  architecture: string[];
  link: string;
  screenshot?: string;
}

export interface InowixProject {
  slug: ProjectSlug;
  name: string;
  category: string;
  description: string;
  accent: string;
  glow: string;
  capabilities: string[];
  technologies: string[];
  image: string;
  logo?: string;
  link: string;
  featured?: boolean;
}

export interface EngineeringWorld {
  id: string;
  name: string;
  label: string;
  accent: string;
  glow: string;
  description: string;
  capabilities: string[];
  productSlug?: ProductSlug;
  serviceLink: string;
  layers: string[];
}

export interface EngineeringService {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  accent: string;
  capabilities: string[];
  architecture: string[];
  layers: string[];
  link: string;
}

export interface IndustryProof {
  slug: string;
  name: string;
  proof: string;
  projectSlug: ProjectSlug;
  accent: string;
}

export const INOWIX_PRODUCTS: Record<ProductSlug, InowixProduct> = {
  "com-ai": {
    slug: "com-ai",
    name: "COM AI",
    tagline: "AI Commerce Infrastructure",
    description:
      "End-to-end AI-powered commerce infrastructure. From customer conversation to product intelligence, memory, and automated commerce actions.",
    accent: "#00FF88",
    glow: "rgba(0,255,136,0.4)",
    features: [
      "Customer Memory",
      "Product Intelligence",
      "WhatsApp Integration",
      "Inventory Sync",
      "Recommendation Engine",
      "Sentiment Analysis",
    ],
    architecture: ["WHATSAPP", "COM AI", "MEMORY", "AI", "PRODUCT DATA", "COMMERCE"],
    link: "/products/com-ai",
    screenshot: carzentraImage,
  },
  beacon: {
    slug: "beacon",
    name: "Beacon",
    tagline: "Revenue Intelligence Platform",
    description:
      "Revenue intelligence from discovery to pipeline. Discover, verify, enrich, qualify, and convert signals into revenue opportunities.",
    accent: "#00D4FF",
    glow: "rgba(0,212,255,0.4)",
    features: [
      "Company Discovery",
      "Data Verification",
      "Lead Enrichment",
      "Qualification Scoring",
      "Revenue Intelligence",
      "Pipeline Automation",
    ],
    architecture: [
      "DISCOVER",
      "VERIFY",
      "ENRICH",
      "QUALIFY",
      "INTELLIGENCE",
      "OUTREACH",
      "FOLLOW-UP",
      "PIPELINE",
    ],
    link: "/products/beacon",
    screenshot: finnovaImage,
  },
  "red-cli": {
    slug: "red-cli",
    name: "RED CLI",
    tagline: "AI-Native Cybersecurity",
    description:
      "AI-native security analysis for any codebase. Automated vulnerability detection, dependency scanning, and AI-powered remediation recommendations.",
    accent: "#DC2626",
    glow: "rgba(220,38,38,0.4)",
    features: [
      "Code Scanning",
      "Dependency Analysis",
      "API Surface Detection",
      "Secrets Scanning",
      "AI Vulnerability Analysis",
      "DevSecOps Integration",
    ],
    architecture: ["DETECTION", "ANALYSIS", "RISK", "RECOMMENDATION", "REPORT"],
    link: "/products/red-cli",
    screenshot: retailxImage,
  },
};

export const INOWIX_PROJECTS: Record<ProjectSlug, InowixProject> = {
  babyland: {
    slug: "babyland",
    name: "Babyland",
    category: "Healthcare & Parenting",
    description:
      "Mobile parenting platform with realtime backend, community features, and cloud infrastructure engineered for scale.",
    accent: "#F472B6",
    glow: "rgba(244,114,182,0.35)",
    capabilities: ["MOBILE", "BACKEND", "REALTIME", "INFRASTRUCTURE"],
    technologies: ["Flutter", "Node.js", "PostgreSQL", "AWS"],
    image: bumpImage,
    link: "/work",
    featured: true,
  },
  babylox: {
    slug: "babylox",
    name: "Babylox",
    category: "Parenting & Retail",
    description: "Consumer platform for parenting products with ecommerce integration and mobile-first experience.",
    accent: "#EC4899",
    glow: "rgba(236,72,153,0.35)",
    capabilities: ["ECOMMERCE", "MOBILE", "CATALOG", "CHECKOUT"],
    technologies: ["React Native", "Node.js", "Stripe"],
    image: techIllustration,
    link: "/work",
  },
  bebroot: {
    slug: "bebroot",
    name: "Bebroot",
    category: "Consumer / D2C",
    description: "Direct-to-consumer brand platform with product catalog, order management, and customer engagement systems.",
    accent: "#A855F7",
    glow: "rgba(168,85,247,0.35)",
    capabilities: ["D2C", "ECOMMERCE", "CMS", "ANALYTICS"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    image: techIllustration,
    link: "/work",
  },
  swiftgo: {
    slug: "swiftgo",
    name: "SwiftGo",
    category: "Logistics & Mobility",
    description:
      "Mobility and logistics platform with realtime tracking, driver management, and operational dispatch systems.",
    accent: "#38BDF8",
    glow: "rgba(56,189,248,0.35)",
    capabilities: ["MOBILITY", "TRACKING", "LOGISTICS", "REALTIME"],
    technologies: ["React Native", "Node.js", "Redis", "GCP"],
    image: nextstopImage,
    link: "/work",
    featured: true,
  },
  "srl-logistics": {
    slug: "srl-logistics",
    name: "SRL Logistics",
    category: "Enterprise Operations",
    description:
      "Enterprise logistics operations platform with inventory management, fleet tracking, and management dashboards.",
    accent: "#F59E0B",
    glow: "rgba(245,158,11,0.35)",
    capabilities: ["LOGISTICS", "INVENTORY", "OPERATIONS", "DASHBOARDS"],
    technologies: ["React", "Python", "PostgreSQL", "Docker"],
    image: retailxImage,
    link: "/work",
    featured: true,
  },
  instadham: {
    slug: "instadham",
    name: "Instadham",
    category: "Spiritual / Community",
    description:
      "Community platform connecting devotees with temples, events, and spiritual content — mobile app with scalable backend.",
    accent: "#C084FC",
    glow: "rgba(192,132,252,0.35)",
    capabilities: ["MOBILE", "COMMUNITY", "CONTENT", "BACKEND"],
    technologies: ["Flutter", "Firebase", "Node.js"],
    image: techIllustration,
    link: "/work",
    featured: true,
  },
  "siya-ayurveda": {
    slug: "siya-ayurveda",
    name: "Siya Ayurveda",
    category: "Ayurvedic Health",
    description:
      "Holistic Ayurvedic health platform with practitioner booking, treatment plans, and wellness content delivery.",
    accent: "#4ADE80",
    glow: "rgba(74,222,128,0.35)",
    capabilities: ["HEALTH", "BOOKING", "CONTENT", "MOBILE"],
    technologies: ["React", "Node.js", "MongoDB"],
    image: siyaAyurvedaImage,
    logo: siyaAyurvedaImage,
    link: "/work",
    featured: true,
  },
  amrutam: {
    slug: "amrutam",
    name: "Amrutam",
    category: "Ayurvedic Commerce",
    description: "Ayurvedic commerce platform with product catalog, subscription flows, and integrated payment systems.",
    accent: "#22C55E",
    glow: "rgba(34,197,94,0.35)",
    capabilities: ["ECOMMERCE", "SUBSCRIPTIONS", "PAYMENTS", "CMS"],
    technologies: ["Shopify", "React", "Node.js"],
    image: amrutamLogo,
    logo: amrutamLogo,
    link: "/work",
  },
  "moon-derma": {
    slug: "moon-derma",
    name: "Moon Derma",
    category: "Dermatology / Skincare",
    description:
      "Skincare and dermatology brand platform with product education, consultation booking, and ecommerce integration.",
    accent: "#818CF8",
    glow: "rgba(129,140,248,0.35)",
    capabilities: ["SKINCARE", "ECOMMERCE", "BOOKING", "CONTENT"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    image: techIllustration,
    link: "/work",
    featured: true,
  },
  triplecare: {
    slug: "triplecare",
    name: "Triplecare",
    category: "Healthcare",
    description: "Healthcare services platform with patient management, appointment scheduling, and care coordination.",
    accent: "#2DD4BF",
    glow: "rgba(45,212,191,0.35)",
    capabilities: ["HEALTHCARE", "SCHEDULING", "PATIENT MGMT", "PORTAL"],
    technologies: ["React", "Node.js", "PostgreSQL"],
    image: techIllustration,
    link: "/work",
  },
  exhale: {
    slug: "exhale",
    name: "Exhale",
    category: "Wellness / Lifestyle",
    description: "Wellness lifestyle brand with content platform, product catalog, and community engagement features.",
    accent: "#FB923C",
    glow: "rgba(251,146,60,0.35)",
    capabilities: ["WELLNESS", "CONTENT", "ECOMMERCE", "COMMUNITY"],
    technologies: ["React", "Node.js", "CMS"],
    image: techIllustration,
    link: "/work",
  },
  "green-gainz": {
    slug: "green-gainz",
    name: "GreenGainz",
    category: "Fitness / Health",
    description: "Fitness and nutrition platform with workout tracking, meal plans, and subscription-based coaching flows.",
    accent: "#84CC16",
    glow: "rgba(132,204,22,0.35)",
    capabilities: ["FITNESS", "NUTRITION", "SUBSCRIPTIONS", "MOBILE"],
    technologies: ["React Native", "Node.js", "Firebase"],
    image: techIllustration,
    link: "/work",
  },
  "palatial-farms": {
    slug: "palatial-farms",
    name: "Palatial Farms",
    category: "Agriculture",
    description: "Agricultural brand platform with product traceability, farm-to-consumer ordering, and supply chain visibility.",
    accent: "#65A30D",
    glow: "rgba(101,163,13,0.35)",
    capabilities: ["AGRICULTURE", "TRACEABILITY", "ECOMMERCE", "SUPPLY CHAIN"],
    technologies: ["React", "Node.js", "PostgreSQL"],
    image: techIllustration,
    link: "/work",
  },
  "sanch-farms": {
    slug: "sanch-farms",
    name: "Sanch Farms",
    category: "Agriculture",
    description: "Farm operations and consumer ordering platform with inventory management and delivery coordination.",
    accent: "#CA8A04",
    glow: "rgba(202,138,4,0.35)",
    capabilities: ["AGRICULTURE", "ORDERS", "INVENTORY", "DELIVERY"],
    technologies: ["React", "Python", "PostgreSQL"],
    image: techIllustration,
    link: "/work",
  },
  melas: {
    slug: "melas",
    name: "Melas",
    category: "Consumer / Brand",
    description: "Consumer brand platform with digital storefront, brand storytelling, and integrated commerce systems.",
    accent: "#E879F9",
    glow: "rgba(232,121,249,0.35)",
    capabilities: ["BRAND", "ECOMMERCE", "CMS", "ANALYTICS"],
    technologies: ["Next.js", "Shopify", "Node.js"],
    image: techIllustration,
    link: "/work",
  },
  aim: {
    slug: "aim",
    name: "AIM",
    category: "B2B / Platform",
    description: "B2B platform with workflow automation, user management, and operational dashboards for business teams.",
    accent: "#60A5FA",
    glow: "rgba(96,165,250,0.35)",
    capabilities: ["B2B", "WORKFLOWS", "DASHBOARDS", "AUTOMATION"],
    technologies: ["React", "Node.js", "PostgreSQL"],
    image: techIllustration,
    link: "/work",
  },
  "linkedin-automation": {
    slug: "linkedin-automation",
    name: "LinkedIn Automation",
    category: "B2B Automation",
    description:
      "Outreach and workflow automation tool for B2B teams — lead enrichment, sequence management, and analytics.",
    accent: "#0EA5E9",
    glow: "rgba(14,165,233,0.35)",
    capabilities: ["AUTOMATION", "OUTREACH", "ENRICHMENT", "ANALYTICS"],
    technologies: ["Python", "React", "PostgreSQL", "Redis"],
    image: finnovaImage,
    link: "/work",
    featured: true,
  },
  "enterprise-chatbot": {
    slug: "enterprise-chatbot",
    name: "Enterprise Chatbot",
    category: "Enterprise AI",
    description:
      "Enterprise management system with AI chatbot layer — internal knowledge base, ticket routing, and admin controls.",
    accent: "#00FF88",
    glow: "rgba(0,255,136,0.35)",
    capabilities: ["AI CHATBOT", "KNOWLEDGE BASE", "TICKETING", "ADMIN"],
    technologies: ["Python", "React", "LLM", "PostgreSQL"],
    image: carzentraImage,
    link: "/work",
    featured: true,
  },
};

export const FEATURED_PROJECT_SLUGS: ProjectSlug[] = Object.values(INOWIX_PROJECTS)
  .filter((p) => p.featured)
  .map((p) => p.slug);

export const CLIENT_LOGO_SLUGS: ProjectSlug[] = (
  Object.keys(INOWIX_PROJECTS) as ProjectSlug[]
).filter((slug) => !FEATURED_PROJECT_SLUGS.includes(slug));

export const THREE_WORLDS: EngineeringWorld[] = [
  {
    id: "engineering",
    name: "Engineering",
    label: "PRODUCT ENGINEERING",
    accent: "#E5E7EB",
    glow: "rgba(229,231,235,0.2)",
    description:
      "Production-grade software from architecture to deployment. SaaS, mobile, APIs, and platforms built to run at scale.",
    capabilities: ["SAAS PLATFORMS", "MOBILE APPS", "API DESIGN", "SYSTEM ARCHITECTURE"],
    serviceLink: "/services/product-engineering",
    layers: ["EXPERIENCE", "APPLICATION", "INFRASTRUCTURE"],
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    label: "AI SYSTEMS",
    accent: "#00FF88",
    glow: "rgba(0,255,136,0.35)",
    description:
      "AI-native products, agents, LLM integration, and intelligent automation — engineered for production, not demos.",
    capabilities: ["AI AGENTS", "LLM INTEGRATION", "RAG SYSTEMS", "INTELLIGENT AUTOMATION"],
    productSlug: "com-ai",
    serviceLink: "/services/artificial-intelligence",
    layers: ["INTELLIGENCE", "DATA", "APPLICATION"],
  },
  {
    id: "security",
    name: "Cybersecurity",
    label: "SECURITY ENGINEERING",
    accent: "#DC2626",
    glow: "rgba(220,38,38,0.35)",
    description:
      "Security engineered from the ground up — application security, DevSecOps, and AI-native vulnerability analysis.",
    capabilities: ["CODE SCANNING", "DEVSECOPS", "SECURITY ARCHITECTURE", "THREAT ANALYSIS"],
    productSlug: "red-cli",
    serviceLink: "/services/cybersecurity",
    layers: ["SECURITY", "INFRASTRUCTURE", "DATA"],
  },
];

export const ENGINEERING_SERVICES: EngineeringService[] = [
  {
    slug: "product-engineering",
    name: "Product Engineering",
    tagline: "We engineer what ships.",
    description: "Production-grade software from SaaS to enterprise platforms.",
    accent: "#E5E7EB",
    capabilities: ["SaaS Development", "Web Applications", "Mobile Applications", "API & Backend"],
    architecture: ["DESIGN", "ARCHITECTURE", "ENGINEERING", "DEPLOY", "SCALE"],
    layers: ["EXPERIENCE", "APPLICATION", "INFRASTRUCTURE"],
    link: "/services/product-engineering",
  },
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    tagline: "Intelligence engineered for production.",
    description: "AI products, agents, LLM integration, and intelligent automation.",
    accent: "#00FF88",
    capabilities: ["AI Product Development", "AI Agents", "LLM Integration", "RAG Systems"],
    architecture: ["DATA", "MODEL", "AGENT", "INTEGRATION", "PRODUCTION"],
    layers: ["INTELLIGENCE", "DATA", "APPLICATION"],
    link: "/services/artificial-intelligence",
  },
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    tagline: "Infrastructure built to scale.",
    description: "Cloud architecture, CI/CD, infrastructure, and observability.",
    accent: "#00D4FF",
    capabilities: ["Cloud Architecture", "CI/CD", "Infrastructure", "Observability"],
    architecture: ["PROVISION", "PIPELINE", "DEPLOY", "MONITOR", "SCALE"],
    layers: ["INFRASTRUCTURE", "DATA", "SECURITY"],
    link: "/services/cloud-devops",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    tagline: "Security engineered from the ground up.",
    description: "Application security, DevSecOps, and AI-native security analysis.",
    accent: "#DC2626",
    capabilities: ["Application Security", "DevSecOps", "Security Architecture", "Threat Analysis"],
    architecture: ["DETECT", "ANALYZE", "HARDEN", "MONITOR", "RESPOND"],
    layers: ["SECURITY", "INFRASTRUCTURE", "APPLICATION"],
    link: "/services/cybersecurity",
  },
];

export const INDUSTRY_PROOF: IndustryProof[] = [
  { slug: "healthcare", name: "Healthcare & Parenting", proof: "Mobile + backend systems for Babyland, Triplecare, Moon Derma", projectSlug: "babyland", accent: "#F472B6" },
  { slug: "logistics", name: "Logistics & Mobility", proof: "Realtime tracking platforms for SwiftGo and SRL Logistics", projectSlug: "swiftgo", accent: "#38BDF8" },
  { slug: "ayurvedic", name: "Ayurvedic & Wellness", proof: "Health and commerce platforms for Siya Ayurveda and Amrutam", projectSlug: "siya-ayurveda", accent: "#4ADE80" },
  { slug: "agriculture", name: "Agriculture", proof: "Farm-to-consumer systems for Sanch Farms and Palatial Farms", projectSlug: "sanch-farms", accent: "#CA8A04" },
  { slug: "ecommerce", name: "Ecommerce & D2C", proof: "Brand storefronts for Bebroot, Melas, and Babylox", projectSlug: "bebroot", accent: "#A855F7" },
  { slug: "enterprise-ai", name: "Enterprise AI", proof: "Chatbot and automation systems for enterprise operations", projectSlug: "enterprise-chatbot", accent: "#00FF88" },
  { slug: "b2b", name: "B2B Automation", proof: "Outreach and workflow tooling for B2B teams", projectSlug: "linkedin-automation", accent: "#0EA5E9" },
  { slug: "community", name: "Community & Spiritual", proof: "Community platforms connecting users at scale", projectSlug: "instadham", accent: "#C084FC" },
];

export const HOMEPAGE_COPY = {
  threeWorlds: {
    label: "HOW WE ENGINEER",
    line1: "THREE WORLDS.",
    line2: "ONE PRODUCTION STACK.",
  },
  systemsEngineered: {
    label: "SYSTEMS WE'VE ENGINEERED",
    line1: "BUILT FOR PRODUCTION.",
    line2: "NOT FOR PRESENTATIONS.",
  },
  engineeringStack: {
    label: "ENGINEERING STACK",
    line1: "FROM EXPERIENCE LAYER",
    line2: "TO SECURITY LAYER.",
  },
  industries: {
    label: "INDUSTRIES",
    line1: "DEEP DOMAIN ENGINEERING.",
    line2: "REAL SYSTEMS SHIPPED.",
  },
  clientStrip: {
    label: "TRUSTED BY BRANDS WE'VE BUILT FOR",
  },
  banner: {
    label: "LET'S BUILD",
    headline: "Ready to engineer your next system?",
    subline: "From complex problems to production systems. Tell us what you're building.",
    statusLine: "ENGINEERING · AI · SECURITY · PRODUCTION",
  },
};

export const ENGINEERING_LAYERS = [
  "EXPERIENCE",
  "APPLICATION",
  "INTELLIGENCE",
  "DATA",
  "INFRASTRUCTURE",
  "SECURITY",
] as const;

export const HERO_CAPABILITIES = [
  ["PRODUCT ENGINEERING", "AI SYSTEMS", "CYBERSECURITY"],
  ["CLOUD INFRA", "DEVSECOPS", "REAL-TIME"],
  ["SAAS PLATFORMS", "MOBILE APPS", "DATA PIPELINES"],
];

export const COM_AI_DEMO = {
  customerMessage: "Is the black sneaker available in size 9?",
  processingSteps: ["CUSTOMER MEMORY", "PRODUCT INTELLIGENCE", "INVENTORY", "RECOMMENDATION", "SENTIMENT"],
  response: "Yes. Size 9 is in stock — 12 units available. Want me to reserve a pair?",
};

export const BEACON_DEMO = {
  company: "Acme Technologies",
  stages: ["DISCOVER", "VERIFY", "ENRICH", "QUALIFY", "INTELLIGENCE", "OUTREACH", "PIPELINE"],
  score: 94,
};

export const RED_CLI_DEMO = {
  command: "red scan ./application",
  fileCount: 1847,
  checks: [
    { label: "AUTHENTICATION", status: "SECURE", ok: true },
    { label: "DEPENDENCIES", status: "3 RISKS", ok: false },
    { label: "API SURFACE", status: "1 CRITICAL", ok: false },
    { label: "SECRETS", status: "SECURE", ok: true },
  ],
  vulnerability: {
    title: "CRITICAL VULNERABILITY",
    analysis: "Potential authorization bypass in /api/v2/orders endpoint. AI recommends role-based access control patch.",
  },
};

export const LABS_HEADLINE = {
  label: "INOWIX LABS",
  line1: "WE DIDN'T WAIT FOR",
  line2: "THE TECHNOLOGY TO EXIST.",
  line3: "WE BUILT IT.",
};

export const DECOR_IMAGES = [bigoImage, carzentraImage, finnovaImage];
