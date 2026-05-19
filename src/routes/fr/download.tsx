import { createFileRoute } from "@tanstack/react-router";
import { DownloadPageContent } from "@/components/site/DownloadPageContent";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/fr/download")({
  head: () => ({
    meta: buildMeta({
      title: "Télécharger AI Guide - Application d'apprentissage IA",
      description:
        "Téléchargez AI Guide et commencez à apprendre l'IA avec des guides simples, des comparatifs et des conseils pratiques.",
      path: "/fr/download",
    }),
    links: buildLinks("/fr/download"),
  }),
  component: () => <DownloadPageContent lang="fr" />,
});
