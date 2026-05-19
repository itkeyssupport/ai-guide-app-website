import { createFileRoute } from "@tanstack/react-router";
import { DownloadPageContent } from "@/components/site/DownloadPageContent";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: buildMeta({
      title: "Download AI Guide - AI Learning App",
      description:
        "Download AI Guide and start learning AI tools with simple guides, comparisons, quizzes, and practical tips.",
      path: "/download",
    }),
    links: buildLinks("/download"),
  }),
  component: () => <DownloadPageContent lang="en" />,
});
