import { INOWIX_PROJECTS, TRUST_STATS, type ProjectSlug } from "@/data/inowix-content";
import enterpriseChatbotShot from "@/assets/landing/enterprise-chatbot.webp";
import linkedinAutomationShot from "@/assets/landing/linkedin-automation.webp";
import babylandHeroShot from "@/assets/landing/babyland-hero.webp";
import babylandPhoneShot from "@/assets/landing/babyland-screen.webp";

export interface LandingProject {
  slug: ProjectSlug;
  name: string;
  tag: string;
  summary: string;
  problem: string;
  outcome: string;
  accent: string;
  capabilities: string[];
  technologies: string[];
  link: string;
  logo?: string;
  /** Wide product visual, shown at 16:10. */
  screenshot?: string;
  /** Tall app screen, shown inside a phone frame. */
  phoneShot?: string;
}

type LandingCopy = Pick<LandingProject, "tag" | "problem" | "outcome" | "screenshot" | "phoneShot">;

// Outcomes describe what was built (from the Work page), never invented metrics.
const COPY: Partial<Record<ProjectSlug, LandingCopy>> = {
  "enterprise-chatbot": {
    tag: "Enterprise AI",
    problem: "Staff questions and support tickets depended on people digging through documents and forwarding requests by hand.",
    outcome: "An AI chatbot on top of the company knowledge base that answers questions, routes tickets to the right team and gives admins full control.",
    screenshot: enterpriseChatbotShot,
  },
  "linkedin-automation": {
    tag: "B2B sales automation",
    problem: "Outreach meant manual prospect research, copy-pasted messages and follow-ups tracked in spreadsheets.",
    outcome: "Automated lead enrichment, multi-step outreach sequences and a live analytics dashboard for the sales team.",
    screenshot: linkedinAutomationShot,
  },
  aim: {
    tag: "HR tech and AI",
    problem: "Recruiters screened every candidate manually against every open role.",
    outcome: "An AI hiring platform with LLM-based job matching, candidate workflows and recruiter dashboards.",
  },
  babyland: {
    tag: "Healthcare and parenting app",
    problem: "Parents juggled separate apps for health tracking, pregnancy updates, community and medical advice.",
    outcome: "One Flutter app with health tracking, week-by-week fetal development, community support and on-demand medical guidance, on a cloud backend built to scale.",
    screenshot: babylandHeroShot,
    phoneShot: babylandPhoneShot,
  },
  triplecare: {
    tag: "Healthcare services",
    problem: "Patient details, appointments and care coordination were spread across calls and spreadsheets.",
    outcome: "A patient management platform with appointment scheduling, care coordination and a patient portal.",
  },
  "siya-ayurveda": {
    tag: "Ayurvedic health",
    problem: "Practitioner bookings and treatment plans were handled offline, one patient at a time.",
    outcome: "Practitioner booking, personalised treatment plans and wellness content in one health platform.",
  },
};

const toLandingProject = (slug: ProjectSlug): LandingProject => {
  const project = INOWIX_PROJECTS[slug];
  const copy = COPY[slug];
  return {
    slug,
    name: project.name,
    tag: copy?.tag ?? project.category,
    summary: project.description,
    problem: copy?.problem ?? "",
    outcome: copy?.outcome ?? project.description,
    accent: project.accent,
    capabilities: project.capabilities,
    technologies: project.technologies,
    link: project.link,
    logo: project.logo,
    screenshot: copy?.screenshot,
    phoneShot: copy?.phoneShot,
  };
};

export const AI_PROOF_PROJECTS = (["enterprise-chatbot", "linkedin-automation", "aim"] as const).map(toLandingProject);

export const HEALTHCARE_PROOF_PROJECTS = (["babyland", "triplecare", "siya-ayurveda"] as const).map(toLandingProject);

export const PROJECTS_SHIPPED = Object.keys(INOWIX_PROJECTS).length;

const statValue = (label: string) => {
  const stat = TRUST_STATS.find((s) => s.label === label);
  return stat ? `${stat.value}${stat.suffix}` : "";
};

export const LANDING_STATS = [
  { value: `${PROJECTS_SHIPPED}+`, label: "Products shipped" },
  { value: statValue("Client brands"), label: "Client brands" },
  { value: statValue("Engineering hubs"), label: "Engineering hubs" },
  { value: "Web · iOS · Android", label: "Built for every platform" },
].filter((s) => s.value);

export interface ClientLogo {
  name: string;
  image: string;
}

const logoFor = (slug: ProjectSlug): ClientLogo | null => {
  const project = INOWIX_PROJECTS[slug];
  const image = project.logo ?? (project.hasAppScreenshot ? undefined : project.image);
  return image ? { name: project.name, image } : null;
};

const toLogos = (slugs: ProjectSlug[]) => slugs.map(logoFor).filter((l): l is ClientLogo => l !== null);

export const AI_CLIENT_LOGOS = toLogos([
  "aim", "swiftgo", "ridego", "triplecare", "moon-derma", "bebroot", "exhale", "green-gainz",
  "melas", "aashey", "way2derma", "sanch-farms", "palatial-farms", "amrutam", "instadham", "babyland",
]);

export const HEALTHCARE_CLIENT_LOGOS = toLogos([
  "triplecare", "moon-derma", "way2derma", "babyland", "amrutam", "exhale", "green-gainz", "vedik-secret",
  "siya-ayurveda", "babylox", "aim", "swiftgo", "bebroot", "aashey",
]);
