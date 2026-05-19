import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteLayout, Section } from "./Layout";
import { PageHero } from "./PageHero";
import { CTASection } from "./CTASection";
import { AI_TOOLS } from "./data";
import { translations, type Lang } from "@/i18n/translations";

export function AIToolsPageContent({ lang }: { lang: Lang }) {
  const T = translations[lang];
  const h = T.pageHeroTools;
  const downloadPath = lang === "fr" ? "/fr/download" : lang === "ar" ? "/ar/download" : "/download";

  return (
    <SiteLayout dir={T.dir}>
      <PageHero eyebrow={h.eyebrow} title={h.title} description={h.description} />
      <Section className="!pt-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AI_TOOLS.map((t, i) => {
            const desc = T.toolDescriptions[i] ?? { short: t.short, description: t.description, bestFor: t.bestFor };
            return (
              <article key={t.name} className="glass rounded-2xl p-6 flex flex-col">
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${t.color}`} />
                <h2 className="mt-4 text-xl font-semibold text-white">{t.name}</h2>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{desc.short}</p>
                <p className="mt-3 text-sm text-muted-foreground flex-1">{desc.description}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  <span className="text-white/80 font-medium">{T.bestForLabel}</span> {desc.bestFor}
                </p>
                <Link to={downloadPath as any} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#16D9F5] hover:text-white">
                  {T.toolsLearnCta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            );
          })}
        </div>
        <p className="mt-8 text-xs text-muted-foreground text-center">
          {T.toolsDisclaimer}
        </p>
      </Section>
      <CTASection />
    </SiteLayout>
  );
}
