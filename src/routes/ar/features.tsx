import { createFileRoute } from "@tanstack/react-router";
import { FeaturesPageContent } from "@/components/site/FeaturesPageContent";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/ar/features")({
  head: () => ({
    meta: buildMeta({
      title: "ميزات AI Guide - تعلم الذكاء الاصطناعي بأدلة خطوة بخطوة",
      description:
        "استكشف ميزات AI Guide: مسارات التعلم وصفحات الأدوات والمقارنات والاختبارات وتتبع التقدم والإشارات المرجعية وأخبار الذكاء الاصطناعي.",
      path: "/ar/features",
    }),
    links: buildLinks("/ar/features"),
  }),
  component: () => <FeaturesPageContent lang="ar" />,
});
