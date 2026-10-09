import { HEALTHCARE_PROOF_PROJECTS, PROJECTS_SHIPPED } from "@/lib/landing-proof";
import { LEADS_WEBHOOK_URL } from "@/lib/lead-webhook";

// Every value wrapped in [BRACKETS] is a placeholder that must be replaced before the campaign goes live.

export interface ComplianceBadge {
  label: string;
  description: string;
}

export const HC_CONFIG = {
  webhookUrl: (import.meta.env.VITE_HC_WEBHOOK_URL as string | undefined) || LEADS_WEBHOOK_URL,
  /** Send name, WhatsApp and email to the webhook after step 1 so abandoned step-2 leads can be followed up. */
  sendPartialLeads: true,
  /** International format without "+" or spaces, e.g. 919800000000. */
  whatsappNumber: "918769626027",
  whatsappMessage: "Hi Inowix, I just submitted a request about a healthcare platform",
  calendlyUrl: "[CALENDLY LINK]",
  contactEmail: "[CONTACT EMAIL]",
  privacyUrl: "[PRIVACY POLICY URL]",
  platformsDelivered: `${PROJECTS_SHIPPED}+`,
  goLiveWeeks: "[X-Y]",
  timelineFaqAnswer: "[TIMELINE ANSWER, e.g. Most platforms go live in X-Y weeks depending on modules and integrations.]",
  priceLine: "Custom healthcare platforms typically start from ₹5L+",
  companyName: "Inowix Technologies",
  siteUrl: "https://inowix.in",
  landingPath: "/healthcare-platforms",
  thankYouPath: "/healthcare-platforms/thank-you",
  formAnchorId: "quote",
  /** Add a badge ONLY after the certification or alignment has been confirmed in writing. */
  complianceBadges: [] as ComplianceBadge[],
  /** Hide the quote slot and other [PLACEHOLDER] copy in production. */
  hidePlaceholderProofInProduction: true,
  proofProjects: HEALTHCARE_PROOF_PROJECTS,
  clientQuote: {
    quote: "[CLIENT QUOTE]",
    attribution: "[NAME, ROLE, ORGANIZATION]",
  },
} as const;

export const isPlaceholder = (value: string) => /^\[.*\]$/.test(value.trim());

export const showPlaceholder = (value: string) =>
  !isPlaceholder(value) || !(HC_CONFIG.hidePlaceholderProofInProduction && import.meta.env.PROD);

export const scrollToForm = () => {
  document.getElementById(HC_CONFIG.formAnchorId)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const whatsappLink = (message: string = HC_CONFIG.whatsappMessage) =>
  `https://wa.me/${HC_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
