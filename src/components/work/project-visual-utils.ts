const GENERIC_PLACEHOLDER_PATTERNS = [
  "nextstop-app",
  "retailx-dashboard",
  "Bump.png",
  "carzentra-app",
  "finnova-app",
  "bigo",
];

export const isGenericPlaceholderImage = (image?: string) =>
  Boolean(image && GENERIC_PLACEHOLDER_PATTERNS.some((pattern) => image.includes(pattern)));
