import { createFileRoute } from "@tanstack/react-router";
import { HomeLanding, getHomeLandingHead } from "@/components/site/HomeLanding";

export const Route = createFileRoute("/ar/")({
  head: () => getHomeLandingHead("ar", "/ar"),
  component: () => <HomeLanding lang="ar" />,
});
