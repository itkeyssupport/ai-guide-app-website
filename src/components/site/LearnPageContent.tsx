import { BookOpen } from "lucide-react";
import { SiteLayout, Section } from "./Layout";
import { PageHero } from "./PageHero";
import { CTASection } from "./CTASection";
import { translations, type Lang } from "@/i18n/translations";

export function LearnPageContent({ lang }: { lang: Lang }) {
  const T = translations[lang];
  const h = T.pageHeroLearn;

  return (
    <SiteLayout dir={T.dir}>
      <PageHero eyebrow={h.eyebrow} title={h.title} description={h.description} />
      <Section className="!pt-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {T.learningPaths.map((p, i) => (
            <article key={p.title} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-[#07112F]">
                  <BookOpen className="h-5 w-5" />
                </div>
                <span className="text-xs text-muted-foreground">
                  {T.learnPathPrefix} {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-white">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <CTASection />
    </SiteLayout>
  );
}
