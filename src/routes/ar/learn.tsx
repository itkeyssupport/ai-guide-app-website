import { createFileRoute } from "@tanstack/react-router";
import { LearnPageContent } from "@/components/site/LearnPageContent";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/ar/learn")({
  head: () => ({
    meta: buildMeta({
      title: "تعلم الذكاء الاصطناعي - أدلة ومسارات تعليمية للمبتدئين",
      description:
        "اتبع مسارات تعليمية منظمة ودروساً سهلة لـ ChatGPT وهندسة المطالبات والإنتاجية والبحث والمزيد.",
      path: "/ar/learn",
    }),
    links: buildLinks("/ar/learn"),
  }),
  component: () => <LearnPageContent lang="ar" />,
});
