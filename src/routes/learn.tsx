import { createFileRoute } from "@tanstack/react-router";
import { LearnPageContent } from "@/components/site/LearnPageContent";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: buildMeta({
      title: "Learn AI Tools - Beginner AI Guides and Learning Paths",
      description:
        "Follow structured AI learning paths and beginner-friendly lessons for ChatGPT, prompt engineering, productivity, research, and more.",
      path: "/learn",
    }),
    links: buildLinks("/learn"),
  }),
  component: () => <LearnPageContent lang="en" />,
});
