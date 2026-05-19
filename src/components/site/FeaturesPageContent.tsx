import {
  LayoutGrid, ListChecks, GitBranch, Lightbulb, ClipboardCheck,
  LineChart, Newspaper, Bookmark, Languages,
} from "lucide-react";
import { SiteLayout, Section } from "./Layout";
import { PageHero } from "./PageHero";
import { CTASection } from "./CTASection";
import { translations, type Lang } from "@/i18n/translations";

const FEATURE_ICONS = [
  LayoutGrid, ListChecks, GitBranch, Lightbulb, ClipboardCheck,
  LineChart, Newspaper, Bookmark, Languages,
];

export function FeaturesPageContent({ lang }: { lang: Lang }) {
  const T = translations[lang];
  const h = T.pageHeroFeatures;

  return (
    <SiteLayout dir={T.dir}>
      <PageHero eyebrow={h.eyebrow} title={h.title} description={h.description} />
      <Section className="!pt-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {T.featuresList.map((f, i) => {
            const Icon = FEATURE_ICONS[i] ?? LayoutGrid;
            return (
              <div key={f.title} className="glass rounded-2xl p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-[#16D9F5] border border-white/10">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-white">{f.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
            );
          })}
        </div>
      </Section>
      <CTASection />
    </SiteLayout>
  );
}
