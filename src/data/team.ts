/**
 * Founders & leadership — update names/titles/bios when confirmed.
 * Photo files: src/assets/ow1.png, ow2.png, Lakshay.webp, etc.
 */

import lakshayPhoto from "@/assets/Lakshay.webp";
import leader1Photo from "@/assets/ow1.png";
import leader2Photo from "@/assets/ow2.png";

export interface TeamLeader {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo: string;
  linkedin?: string;
  accent?: string;
}

/** Update with real names, titles, and LinkedIn URLs */
export const FOUNDERS_AND_LEADERS: TeamLeader[] = [
  {
    id: "leader-1",
    name: "Lakshay",
    title: "Co-founder & CEO",
    bio: "Leads Inowix product vision and client engineering — from architecture to production systems shipped across healthcare, logistics, and AI.",
    photo: lakshayPhoto,
    accent: "#00FF88",
  },
  {
    id: "leader-2",
    name: "Leadership",
    title: "Co-founder & CTO",
    bio: "Architects Inowix Labs products — COM AI, Beacon, and RED CLI — and oversees engineering standards across all client platforms.",
    photo: leader1Photo,
    accent: "#00D4FF",
  },
  {
    id: "leader-3",
    name: "Leadership",
    title: "Head of Engineering",
    bio: "Runs delivery across mobile, backend, and cloud — ensuring every system we build is production-grade, secure, and scalable.",
    photo: leader2Photo,
    accent: "#E5E7EB",
  },
];

export const COMPANY_MILESTONES = [
  { year: "2020", label: "Founded", detail: "Inowix begins as a product engineering studio." },
  { year: "2022", label: "First platforms shipped", detail: "Babyland, SwiftGo, and enterprise client systems in production." },
  { year: "2024", label: "Inowix Labs", detail: "COM AI, Beacon, and RED CLI — proprietary products built in-house." },
  { year: "2025", label: "Full-stack engineering", detail: "18+ client brands, 3 flagship products, 3 engineering hubs." },
];

export const ENGINEERING_VALUES = [
  { title: "Engineers at Core", description: "We architect, build, and ship — not slide decks." },
  { title: "Product Builders", description: "We run our own products alongside client engineering." },
  { title: "Security-First", description: "Cybersecurity engineered into every layer we touch." },
  { title: "Production Obsessed", description: "Built for production. Not for presentations." },
];
