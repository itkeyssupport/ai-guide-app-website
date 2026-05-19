import { createFileRoute } from "@tanstack/react-router";
import { LearnPageContent } from "@/components/site/LearnPageContent";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/fr/learn")({
  head: () => ({
    meta: buildMeta({
      title: "Apprendre l'IA - Guides et parcours pour débutants",
      description:
        "Suivez des parcours d'apprentissage structurés et des leçons accessibles pour ChatGPT, le prompt engineering, la productivité, la recherche et plus encore.",
      path: "/fr/learn",
    }),
    links: buildLinks("/fr/learn"),
  }),
  component: () => <LearnPageContent lang="fr" />,
});
