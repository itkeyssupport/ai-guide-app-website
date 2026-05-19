import { createFileRoute } from "@tanstack/react-router";
import { FeaturesPageContent } from "@/components/site/FeaturesPageContent";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: buildMeta({
      title: "AI Guide Features - Learn AI with Step-by-Step Guides",
      description:
        "Explore AI Guide features including learning paths, AI tool pages, quizzes, progress tracking, bookmarks, AI news, and multilingual support.",
      path: "/features",
    }),
    links: buildLinks("/features"),
  }),
  component: () => <FeaturesPageContent lang="en" />,
});
