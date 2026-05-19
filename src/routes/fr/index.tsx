import { createFileRoute } from "@tanstack/react-router";
import { HomeLanding, getHomeLandingHead } from "@/components/site/HomeLanding";

export const Route = createFileRoute("/fr/")({
  head: () => getHomeLandingHead("fr", "/fr"),
  component: () => <HomeLanding lang="fr" />,
});
