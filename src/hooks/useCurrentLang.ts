import { useLocation } from "@tanstack/react-router";
import type { Lang } from "@/i18n/translations";

export function useCurrentLang(): Lang {
  const { pathname } = useLocation();
  if (pathname.startsWith("/ar")) return "ar";
  if (pathname.startsWith("/fr")) return "fr";
  return "en";
}
