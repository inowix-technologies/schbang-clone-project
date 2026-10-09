import { PROJECTS_SHIPPED } from "@/lib/landing-proof";
import { LEADS_WEBHOOK_URL } from "@/lib/lead-webhook";

// Every value wrapped in [BRACKETS] is a placeholder that must be replaced before the campaign goes live.

export const AIA_CONFIG = {
  webhookUrl: (import.meta.env.VITE_AIA_WEBHOOK_URL as string | undefined) || LEADS_WEBHOOK_URL,
  /** Send name, WhatsApp and email as soon as step 1 is completed so abandoned step-2 leads can be followed up. */
  sendPartialLeads: true,
  /** International format without "+" or spaces, e.g. 971500000000. */
  whatsappNumber: "918769626027",
  bookingUrl: "[BOOKING LINK]",
  contactEmail: "[CONTACT EMAIL]",
  privacyUrl: "[PRIVACY POLICY URL]",
  projectsDelivered: `${PROJECTS_SHIPPED}+`,
  goLiveWeeks: "[X-Y]",
  priceLine: "AED 10,000 / $5K+",
  priceFloorAed: "AED 10,000+",
  companyName: "Inowix Technologies",
  thankYouPath: "/ai-automation/thank-you",
  formAnchorId: "quote",
} as const;

export const isPlaceholder = (value: string) => value.startsWith("[") && value.endsWith("]");

export const scrollToForm = () => {
  document.getElementById(AIA_CONFIG.formAnchorId)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const whatsappLink = (message = "Hi Inowix, I'd like to know more about AI automation for my business") =>
  `https://wa.me/${AIA_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
