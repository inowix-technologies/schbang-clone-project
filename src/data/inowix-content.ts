/**
 * Single source of truth for Hero + Inowix Labs homepage content.
 * Swap image paths when real product assets are added to src/assets/products/
 */

import bumpImage from "@/assets/Bump.png";
import nextstopImage from "@/assets/nextstop-app.jpg";
import retailxImage from "@/assets/retailx-dashboard.jpg";
import carzentraImage from "@/assets/carzentra-app.jpg";
import finnovaImage from "@/assets/finnova-app.jpg";
import bigoImage from "@/assets/bigo.webp";

export type ProductSlug = "com-ai" | "beacon" | "red-cli";
export type ProjectSlug = "babyland" | "swiftgo" | "srl-logistics";

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
  link: string;
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
    description: "Mobile platform with realtime backend and cloud infrastructure for parenting.",
    accent: "#F472B6",
    glow: "rgba(244,114,182,0.35)",
    capabilities: ["MOBILE", "BACKEND", "REALTIME", "INFRASTRUCTURE"],
    technologies: ["Flutter", "Node.js", "PostgreSQL", "AWS"],
    image: bumpImage,
    link: "/work",
  },
  swiftgo: {
    slug: "swiftgo",
    name: "SwiftGo",
    category: "Logistics & Mobility",
    description: "Mobility and logistics platform with realtime tracking and operational systems.",
    accent: "#38BDF8",
    glow: "rgba(56,189,248,0.35)",
    capabilities: ["MOBILITY", "TRACKING", "LOGISTICS", "REALTIME SYSTEMS"],
    technologies: ["React Native", "Node.js", "Redis", "GCP"],
    image: nextstopImage,
    link: "/work",
  },
  "srl-logistics": {
    slug: "srl-logistics",
    name: "SRL Logistics",
    category: "Enterprise Operations",
    description: "Enterprise logistics operations platform with inventory, tracking, and management systems.",
    accent: "#F59E0B",
    glow: "rgba(245,158,11,0.35)",
    capabilities: ["LOGISTICS", "TRACKING", "OPERATIONS", "REALTIME SYSTEMS"],
    technologies: ["React", "Python", "PostgreSQL", "Docker"],
    image: retailxImage,
    link: "/work",
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
