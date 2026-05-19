import { createFileRoute } from "@tanstack/react-router";
import { AIToolsPageContent } from "@/components/site/AIToolsPageContent";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/ar/ai-tools")({
  head: () => ({
    meta: buildMeta({
      title: "دليل أدوات الذكاء الاصطناعي - ChatGPT وClaude وGemini وDeepSeek والمزيد",
      description:
        "اكتشف أدوات الذكاء الاصطناعي الشائعة وتعلم ما تتميز به وكيفية استخدامها مع AI Guide.",
      path: "/ar/ai-tools",
    }),
    links: buildLinks("/ar/ai-tools"),
  }),
  component: () => <AIToolsPageContent lang="ar" />,
});
