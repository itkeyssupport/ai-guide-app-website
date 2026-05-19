import { createFileRoute } from "@tanstack/react-router";
import { AIToolsPageContent } from "@/components/site/AIToolsPageContent";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/fr/ai-tools")({
  head: () => ({
    meta: buildMeta({
      title: "Répertoire d'outils IA - ChatGPT, Claude, Gemini, DeepSeek et plus",
      description:
        "Découvrez les outils IA populaires, apprenez à quoi ils servent et comment les utiliser avec AI Guide.",
      path: "/fr/ai-tools",
    }),
    links: buildLinks("/fr/ai-tools"),
  }),
  component: () => <AIToolsPageContent lang="fr" />,
});
