/**
 * Co-founders & leadership — single source of truth for founder surfaces.
 */

export interface TeamLeader {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo: string;
  linkedin?: string;
  accent?: string;
}

export const CO_FOUNDERS: TeamLeader[] = [
  {
    id: "vansh-jhamb",
    name: "Vansh Jhamb",
    title: "Co-founder & CEO",
    bio: "Leads Inowix product vision, client partnerships, and growth — from first architecture conversation to production systems shipped at scale.",
    photo:
      "https://res.cloudinary.com/drxu02bbp/image/upload/v1788218249/copy_of_chatgpt_image_sep_1_2026_04_33_17_am_py9ur3.png",
    accent: "#00FF88",
  },
  {
    id: "ragib-ali",
    name: "Ragib Ali",
    title: "Co-founder & CTO",
    bio: "Architects Inowix Labs products — COM AI, Beacon, and RED CLI — and sets engineering standards across every platform we build.",
    photo:
      "https://res.cloudinary.com/drxu02bbp/image/upload/v1788218362/copy_of_chatgpt_image_sep_1_2026_04_44_09_am_onazxy.png",
    accent: "#00D4FF",
  },
];

export const FOUNDERS_AND_LEADERS: TeamLeader[] = CO_FOUNDERS;

export const COMPANY_MILESTONES = [
  { year: "2020", label: "Founded", detail: "Inowix begins as a product engineering studio." },
  { year: "2022", label: "First platforms shipped", detail: "Babyland, SwiftGo, and enterprise client systems in production." },
  { year: "2024", label: "Inowix Labs", detail: "COM AI, Beacon, and RED CLI — proprietary products built in-house." },
  { year: "2025", label: "Full-stack engineering", detail: "35+ client brands, 3 flagship products, 3 engineering hubs." },
];

export const ENGINEERING_VALUES = [
  { title: "Engineers at Core", description: "We architect, build, and ship — not slide decks." },
  { title: "Product Builders", description: "We run our own products alongside client engineering." },
  { title: "Security-First", description: "Cybersecurity engineered into every layer we touch." },
  { title: "Production Obsessed", description: "Built for production. Not for presentations." },
];
