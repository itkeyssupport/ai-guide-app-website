import { Section } from "./Layout";
import { DownloadButtons } from "./DownloadButtons";
import { Sparkles } from "lucide-react";
import { useCurrentLang } from "@/hooks/useCurrentLang";
import { translations } from "@/i18n/translations";

export function CTASection() {
  const lang = useCurrentLang();
  const T = translations[lang];

  return (
    <Section ariaLabel="Download AI Guide">
      <div
        className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16 text-center"
        data-reveal
      >
        <div className="absolute inset-0 glass -z-10" />
        <div className="absolute inset-0 bg-gradient-brand opacity-8 -z-10" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#7A4DFF] opacity-15 blur-3xl rounded-full -z-10 animate-pulse-glow" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#16D9F5] opacity-12 blur-3xl rounded-full -z-10 animate-pulse-glow" />
        <div className="absolute inset-0 rounded-3xl border border-white/12 -z-10" />

        <div className="inline-flex items-center gap-2 rounded-full border border-[#7A4DFF]/40 bg-[#7A4DFF]/10 px-4 py-1.5 text-xs font-medium text-[#D9B8FF] mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          {T.ctaSectionBadge}
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-tight">
          {T.ctaSectionTitle}
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-muted-foreground text-lg leading-relaxed">
          {T.ctaSectionDescription}
        </p>
        <div className="mt-10 flex justify-center">
          <DownloadButtons />
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          {T.ctaSectionAndroidNote}
        </p>
      </div>
    </Section>
  );
}
