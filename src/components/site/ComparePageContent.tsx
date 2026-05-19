import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteLayout, Section } from "./Layout";
import { PageHero } from "./PageHero";
import { CTASection } from "./CTASection";
import { COMPARISONS } from "./data";
import { translations, type Lang } from "@/i18n/translations";

export function ComparePageContent({ lang }: { lang: Lang }) {
  const T = translations[lang];
  const h = T.pageHeroCompare;
  const downloadPath = lang === "fr" ? "/fr/download" : lang === "ar" ? "/ar/download" : "/download";

  return (
    <SiteLayout dir={T.dir}>
      <PageHero eyebrow={h.eyebrow} title={h.title} description={h.description} />
      <Section className="!pt-0">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {T.compareCategories.map((c) => (
            <span key={c} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
              {c}
            </span>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {COMPARISONS.map((c, i) => {
            const trans = T.comparisons[i] ?? { title: c.title, note: c.note };
            return (
              <article key={c.title} className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-white/5 px-3 py-1.5 text-sm font-semibold text-white">{c.a}</span>
                  <span className="text-xs text-muted-foreground">{T.compareVsLabel}</span>
                  <span className="rounded-lg bg-white/5 px-3 py-1.5 text-sm font-semibold text-white">{c.b}</span>
                </div>
                <h2 className="mt-4 text-lg font-semibold text-white">{trans.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{trans.note}</p>
                <Link to={downloadPath as any} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#16D9F5] hover:text-white">
                  {T.compareInAppCta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            );
          })}
        </div>
      </Section>
      <CTASection />
    </SiteLayout>
  );
}
