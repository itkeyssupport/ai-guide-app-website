export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.ai.guide";
export const APP_STORE_URL = "https://apps.apple.com/app/id6791725953";

export const SITE = {
  name: "AI Guide",
  domain: "https://aiguidia.com",
  email: "support@aiguidia.com",
  description:
    "AI Guide helps you learn, compare, and master popular AI tools like ChatGPT, Claude, Gemini, Perplexity AI, DeepSeek, Meta AI, Notion AI, and more — through simple step-by-step guides.",
  disclaimer:
    "AI Guide is an independent educational app and is not affiliated with the AI tools mentioned.",
} as const;

export function isPlaceholder(url: string) {
  return !url || url.startsWith("REPLACE_WITH_");
}

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/ai-tools", label: "AI Tools" },
  { to: "/compare", label: "Compare" },
  { to: "/learn", label: "Learn" },
  { to: "/contact", label: "Contact" },
] as const;
