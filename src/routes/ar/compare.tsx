import { createFileRoute } from "@tanstack/react-router";
import { ComparePageContent } from "@/components/site/ComparePageContent";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/ar/compare")({
  head: () => ({
    meta: buildMeta({
      title: "مقارنة أدوات الذكاء الاصطناعي - ChatGPT مقابل Claude وGemini مقابل Perplexity",
      description:
        "قارن بين أدوات الذكاء الاصطناعي في جودة الكتابة والبحث والبرمجة والسرعة والإبداع والتفكير المنطقي والإنتاجية.",
      path: "/ar/compare",
    }),
    links: buildLinks("/ar/compare"),
  }),
  component: () => <ComparePageContent lang="ar" />,
});
