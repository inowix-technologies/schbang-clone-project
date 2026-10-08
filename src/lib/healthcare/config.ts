// Every value wrapped in [BRACKETS] is a placeholder that must be replaced before the campaign goes live.

export interface ComplianceBadge {
  label: string;
  description: string;
}

export interface ProofProject {
  name: string;
  whatItDoes: string;
  problem: string;
  result: string;
  /** WebP screenshot URL; leave as a placeholder until a real, anonymised screenshot exists. */
  screenshot: string;
}

export const HC_CONFIG = {
  webhookUrl: (import.meta.env.VITE_HC_WEBHOOK_URL as string | undefined) ?? "[WEBHOOK/BEACON ENDPOINT]",
  /** Send name, WhatsApp and email to the webhook after step 1 so abandoned step-2 leads can be followed up. */
  sendPartialLeads: true,
  /** International format without "+" or spaces, e.g. 919800000000. */
  whatsappNumber: "[WHATSAPP NUMBER]",
  whatsappMessage: "Hi Inowix, I just submitted a request about a healthcare platform",
  calendlyUrl: "[CALENDLY LINK]",
  contactEmail: "[CONTACT EMAIL]",
  privacyUrl: "[PRIVACY POLICY URL]",
  platformsDelivered: "[NUMBER]",
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
  /** Hide proof cards and the quote slot in production while they still contain [PLACEHOLDERS]. */
  hidePlaceholderProofInProduction: true,
  proofProjects: [
    {
      name: "[PROJECT NAME]",
      whatItDoes: "[WHAT IT DOES]",
      problem: "[PROBLEM IT SOLVED]",
      result: "[RESULT]",
      screenshot: "[PROJECT SCREENSHOT]",
    },
    {
      name: "[PROJECT NAME]",
      whatItDoes: "[WHAT IT DOES]",
      problem: "[PROBLEM IT SOLVED]",
      result: "[RESULT]",
      screenshot: "[PROJECT SCREENSHOT]",
    },
    {
      name: "[PROJECT NAME]",
      whatItDoes: "[WHAT IT DOES]",
      problem: "[PROBLEM IT SOLVED]",
      result: "[RESULT]",
      screenshot: "[PROJECT SCREENSHOT]",
    },
  ] as ProofProject[],
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

export const whatsappLink = () =>
  `https://wa.me/${HC_CONFIG.whatsappNumber}?text=${encodeURIComponent(HC_CONFIG.whatsappMessage)}`;
