import { createFileRoute } from "@tanstack/react-router";
import { ComparePageContent } from "@/components/site/ComparePageContent";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: buildMeta({
      title: "Compare AI Tools - ChatGPT vs Claude, Gemini vs Perplexity & More",
      description:
        "Compare AI tools by writing, research, coding, speed, creativity, reasoning, productivity, and beginner friendliness.",
      path: "/compare",
    }),
    links: buildLinks("/compare"),
  }),
  component: () => <ComparePageContent lang="en" />,
});
