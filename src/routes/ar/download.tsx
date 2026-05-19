import { createFileRoute } from "@tanstack/react-router";
import { DownloadPageContent } from "@/components/site/DownloadPageContent";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/ar/download")({
  head: () => ({
    meta: buildMeta({
      title: "تنزيل AI Guide - تطبيق تعلم الذكاء الاصطناعي",
      description:
        "حمّل AI Guide وابدأ تعلم أدوات الذكاء الاصطناعي بأدلة بسيطة ومقارنات ونصائح عملية.",
      path: "/ar/download",
    }),
    links: buildLinks("/ar/download"),
  }),
  component: () => <DownloadPageContent lang="ar" />,
});
