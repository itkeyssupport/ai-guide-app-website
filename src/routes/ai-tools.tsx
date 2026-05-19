import { createFileRoute } from "@tanstack/react-router";
import { AIToolsPageContent } from "@/components/site/AIToolsPageContent";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/ai-tools")({
  head: () => ({
    meta: buildMeta({
      title: "AI Tools Directory - ChatGPT, Claude, Gemini, DeepSeek and More",
      description:
        "Discover popular AI tools, learn what they are best for, and understand how to use them with AI Guide.",
      path: "/ai-tools",
    }),
    links: buildLinks("/ai-tools"),
  }),
  component: () => <AIToolsPageContent lang="en" />,
});
