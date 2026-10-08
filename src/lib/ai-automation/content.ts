import { AIA_CONFIG } from "./config";

export const HERO = {
  eyebrow: "AI Automation for UAE Businesses",
  headline: "Your Team Shouldn't Do Work AI Can Automate.",
  subheadline:
    "We build custom AI systems that reply to leads, qualify them, follow up and update your CRM, 24/7, on WhatsApp and the tools you already use.",
  priceLine: `Custom projects typically start from ${AIA_CONFIG.priceLine}`,
  primaryCta: "Get Your Free Automation Plan",
  secondaryCta: "See how it works",
  trust: [
    "Serving businesses across the UAE & GCC",
    "Reply within 30 minutes on business days",
    `${AIA_CONFIG.projectsDelivered} projects delivered`,
  ],
};

export const PAINS = [
  {
    title: "Leads go cold",
    body: "Messages sit unanswered for hours. Competitors reply first.",
  },
  {
    title: "Everything lives in Excel and WhatsApp",
    body: "No single view of customers, orders or follow-ups.",
  },
  {
    title: "Your best people do repetitive work",
    body: "Data entry, reminders and basic queries eat their day.",
  },
];

export const SOLUTIONS = [
  {
    title: "Instant lead replies and qualification",
    body: "WhatsApp and website AI agents that respond in seconds and pass only qualified leads to your team.",
  },
  {
    title: "Sales and CRM automation",
    body: "Follow-ups, reminders and pipeline updates run themselves.",
  },
  {
    title: "Customer support on autopilot",
    body: "Handles common queries, orders and bookings, escalating to humans when needed.",
  },
  {
    title: "Custom business software",
    body: "Dashboards, management systems and integrations tailored to how you work.",
  },
];

export const STEPS = [
  { title: "Discovery call", body: "We map your workflow and pick the highest-value automation." },
  { title: "Prototype", body: "You see a working version on your real use case." },
  { title: "Build and integrate", body: "We connect it to WhatsApp, your CRM and your tools." },
  { title: "Launch and support", body: "We go live, monitor results and keep improving it." },
];

export const PROOF_PROJECTS = [
  {
    name: "[PROJECT NAME]",
    tag: "[INDUSTRY]",
    problem: "[WHAT IT DOES]",
    result: "[RESULT]",
    image: "", // e.g. "/ai-automation/project-1.webp" (1200x750)
  },
  {
    name: "[PROJECT NAME]",
    tag: "[INDUSTRY]",
    problem: "[WHAT IT DOES]",
    result: "[RESULT]",
    image: "",
  },
  {
    name: "[PROJECT NAME]",
    tag: "[INDUSTRY]",
    problem: "[WHAT IT DOES]",
    result: "[RESULT]",
    image: "",
  },
];

export const CLIENT_QUOTE = {
  quote: "[CLIENT QUOTE]",
  attribution: "[CLIENT NAME, ROLE, COMPANY]",
};

export const FIT = {
  great: [
    "Businesses with 10+ staff or a high volume of enquiries",
    "Real estate, clinics, e-commerce, logistics, education and hospitality",
    `Owners ready to invest ${AIA_CONFIG.priceFloorAed} in a system built around their business`,
  ],
  notFit: [
    "Looking for a cheap chatbot",
    "Need a template website",
    "Want an off-the-shelf tool rather than a custom system",
  ],
};

export const FAQS = [
  {
    q: "What does a project cost?",
    a: `Custom projects typically start from ${AIA_CONFIG.priceLine}, depending on scope. We'll give you a clear quote after a short discovery call.`,
  },
  {
    q: "How long does it take?",
    a: `Most projects go live in ${AIA_CONFIG.goLiveWeeks} weeks, depending on scope and integrations. You see a working prototype before the full build.`,
  },
  {
    q: "Do you integrate with WhatsApp, my CRM and existing tools?",
    a: "[INTEGRATIONS ANSWER] Draft: Yes. We connect to WhatsApp, your website, and the CRM and tools you already use, so your team keeps working where they work today.",
  },
  {
    q: "Will it replace my team?",
    a: "No. It handles the repetitive work, like first replies, data entry and reminders, so your team can focus on closing deals and serving customers. Anything complex is handed to a person.",
  },
  {
    q: "Who owns the system and data?",
    a: "[OWNERSHIP ANSWER]",
  },
  {
    q: "Do you provide support after launch?",
    a: "[SUPPORT ANSWER]",
  },
];

export const FORM_OPTIONS = {
  roles: ["Founder/Owner", "CEO/MD", "GM", "Operations", "Sales/Marketing", "Other"],
  industries: [
    "Real estate",
    "Healthcare/Clinics",
    "E-commerce/Retail",
    "Logistics/Trading",
    "Education",
    "Hospitality",
    "Other",
  ],
  companySizes: ["1-10", "11-50", "51-200", "200+"],
  budgets: ["Under $3K", "$3K-5K", "$5K-10K", "$10K-25K", "$25K+", "Not decided"],
  timelines: ["Immediately", "Within 30 days", "1-3 months", "Just researching"],
};

export const LOW_BUDGET_OPTION = "Under $3K";

export const PAGE_META = {
  title: "AI Automation for UAE Businesses | Inowix",
  description: `Custom AI systems that reply to leads, qualify them, follow up and update your CRM 24/7 on WhatsApp. Built for UAE businesses. Projects from ${AIA_CONFIG.priceLine}.`,
};
