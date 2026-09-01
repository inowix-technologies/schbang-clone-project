import babylandHero from "@/assets/projects/babyland/hero.png";
import nextstopImage from "@/assets/nextstop-app.jpg";
import retailxImage from "@/assets/retailx-dashboard.jpg";
import bigoImage from "@/assets/bigo.webp";
import carzentraImage from "@/assets/carzentra-app.jpg";
import finnovaImage from "@/assets/finnova-app.jpg";

export type CoreNodeId =
  | "core"
  | "com-ai"
  | "beacon"
  | "red-cli"
  | "babyland"
  | "swiftgo"
  | "srl-logistics";

export interface CoreNode {
  id: CoreNodeId;
  label: string;
  category: "product" | "project" | "core";
  angle: number;
  color: string;
  glow: string;
  capabilities: string[];
  image?: string;
  link?: string;
  builtByInowix?: boolean;
}

export const ENGINEERING_LAYERS = [
  "EXPERIENCE",
  "APPLICATION",
  "INTELLIGENCE",
  "DATA",
  "INFRASTRUCTURE",
  "SECURITY",
];

export const CORE_NODES: CoreNode[] = [
  {
    id: "com-ai",
    label: "COM AI",
    category: "product",
    angle: -90,
    color: "#00FF88",
    glow: "rgba(0,255,136,0.35)",
    capabilities: [
      "AI COMMERCE",
      "CUSTOMER MEMORY",
      "PRODUCT INTELLIGENCE",
      "AUTOMATION",
    ],
    link: "/products/com-ai",
    builtByInowix: true,
  },
  {
    id: "beacon",
    label: "BEACON",
    category: "product",
    angle: -30,
    color: "#00D4FF",
    glow: "rgba(0,212,255,0.35)",
    capabilities: [
      "DISCOVERY",
      "ENRICHMENT",
      "QUALIFICATION",
      "REVENUE INTELLIGENCE",
    ],
    link: "/products/beacon",
    builtByInowix: true,
  },
  {
    id: "red-cli",
    label: "RED CLI",
    category: "product",
    angle: 30,
    color: "#DC2626",
    glow: "rgba(220,38,38,0.35)",
    capabilities: [
      "CODE ANALYSIS",
      "VULNERABILITY DETECTION",
      "AI SECURITY",
      "RISK ANALYSIS",
    ],
    link: "/products/red-cli",
    builtByInowix: true,
  },
  {
    id: "srl-logistics",
    label: "SRL LOGISTICS",
    category: "project",
    angle: 90,
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.3)",
    capabilities: [
      "LOGISTICS",
      "TRACKING",
      "OPERATIONS",
      "REALTIME SYSTEMS",
    ],
    image: retailxImage,
    link: "/work",
    builtByInowix: true,
  },
  {
    id: "swiftgo",
    label: "SWIFTGO",
    category: "project",
    angle: 150,
    color: "#38BDF8",
    glow: "rgba(56,189,248,0.3)",
    capabilities: [
      "MOBILITY",
      "TRACKING",
      "LOGISTICS",
      "REALTIME SYSTEMS",
    ],
    image: nextstopImage,
    link: "/work",
    builtByInowix: true,
  },
  {
    id: "babyland",
    label: "BABYLAND",
    category: "project",
    angle: 210,
    color: "#F472B6",
    glow: "rgba(244,114,182,0.3)",
    capabilities: [
      "MOBILE",
      "BACKEND",
      "REALTIME",
      "INFRASTRUCTURE",
    ],
    image: babylandHero,
    link: "/work",
    builtByInowix: true,
  },
];

/** Abstract UI fragment configs for product nodes without screenshots */
export const PRODUCT_UI_FRAGMENTS: Record<string, { lines: string[]; accent: string }> = {
  "com-ai": {
    accent: "#00FF88",
    lines: [
      'customer: "Size 9 available?"',
      "memory → product graph",
      "inventory → recommendation",
      'response: "Yes. In stock."',
    ],
  },
  beacon: {
    accent: "#00D4FF",
    lines: [
      "signal: company detected",
      "verify → enrich → qualify",
      "intelligence score: 94",
      "pipeline: outreach queued",
    ],
  },
  "red-cli": {
    accent: "#DC2626",
    lines: [
      "$ red scan ./application",
      "1,847 files analyzed",
      "auth .......... secure",
      "api ........... 1 critical",
    ],
  },
};

/** Decorative thumbnails for engineering layer context */
export const LAYER_THUMBNAILS = [bigoImage, carzentraImage, finnovaImage];

export function polarToXY(angleDeg: number, radius: number, cx = 50, cy = 50) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

export function getNodeById(id: CoreNodeId) {
  return CORE_NODES.find((n) => n.id === id);
}
