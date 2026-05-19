import { createFileRoute } from "@tanstack/react-router";
import { ComparePageContent } from "@/components/site/ComparePageContent";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/fr/compare")({
  head: () => ({
    meta: buildMeta({
      title: "Comparer les outils IA - ChatGPT vs Claude, Gemini vs Perplexity et plus",
      description:
        "Comparez les outils IA selon la qualité d'écriture, la recherche, le codage, la vitesse, la créativité, le raisonnement et la productivité.",
      path: "/fr/compare",
    }),
    links: buildLinks("/fr/compare"),
  }),
  component: () => <ComparePageContent lang="fr" />,
});
