import { createFileRoute } from "@tanstack/react-router";
import { FeaturesPageContent } from "@/components/site/FeaturesPageContent";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/fr/features")({
  head: () => ({
    meta: buildMeta({
      title: "Fonctionnalités AI Guide - Apprenez l'IA avec des guides étape par étape",
      description:
        "Découvrez les fonctionnalités d'AI Guide : parcours d'apprentissage, fiches outils, quiz, suivi de progression, favoris, actualités IA et support multilingue.",
      path: "/fr/features",
    }),
    links: buildLinks("/fr/features"),
  }),
  component: () => <FeaturesPageContent lang="fr" />,
});
