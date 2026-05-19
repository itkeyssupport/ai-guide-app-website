import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { buildMeta, buildLinks } from "@/components/site/seo";
import { Newspaper, Zap, TrendingUp, Bell } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/fr/news")({
  head: () => ({
    meta: buildMeta({
      title: "Actualités IA - AI Guide",
      description:
        "Restez informé des dernières actualités IA, sorties de modèles, mises à jour produits et tendances du secteur. Tout en un seul endroit avec AI Guide.",
      path: "/fr/news",
    }),
    links: buildLinks("/fr/news"),
  }),
  component: NewsPageFr,
});

const NEWS_FEATURES = [
  {
    icon: Zap,
    title: "Sorties de modèles",
    text: "Soyez le premier informé lorsque de nouveaux modèles IA d'OpenAI, Anthropic, Google, Meta et d'autres sont lancés.",
  },
  {
    icon: TrendingUp,
    title: "Tendances du secteur",
    text: "Suivez les développements clés qui façonnent le paysage IA — des avancées de recherche aux grandes mises à jour produits.",
  },
  {
    icon: Bell,
    title: "Mises à jour produits",
    text: "Suivez les nouvelles fonctionnalités, changements de prix et améliorations des outils IA que vous utilisez.",
  },
];

function NewsPageFr() {
  return (
    <SiteLayout dir="ltr">
      <PageHero
        eyebrow="Actualités IA"
        title="Restez informé des dernières nouvelles de l'IA."
        description="Sorties de modèles, mises à jour produits, tendances du secteur — sélectionnés et disponibles dans l'application AI Guide."
      />

      <Section className="!pt-0">
        <div className="max-w-4xl mx-auto">

          <div className="grid sm:grid-cols-3 gap-5 mb-16">
            {NEWS_FEATURES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="glass rounded-2xl p-6 space-y-3" data-reveal>
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-[#16D9F5]/10">
                  <Icon className="h-5 w-5 text-[#16D9F5]" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="glass rounded-2xl p-8 text-center space-y-4" data-reveal>
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-brand mx-auto">
              <Newspaper className="h-7 w-7 text-[#07112F]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Les actualités IA sont disponibles dans l'application</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Téléchargez AI Guide pour accéder aux actualités IA sélectionnées aux côtés de vos parcours d'apprentissage, comparaisons d'outils et guides — le tout en un seul endroit.
            </p>
          </div>

        </div>
      </Section>

      <CTASection />
    </SiteLayout>
  );
}
