import { createFileRoute } from "@tanstack/react-router";
import { ContactPageContent } from "@/components/site/ContactPageContent";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: buildMeta({
      title: "Contact AI Guide - Support & Partnerships",
      description:
        "Have a question, suggestion, or partnership request? Contact the AI Guide team at support@aiguidia.com.",
      path: "/contact",
    }),
    links: buildLinks("/contact"),
  }),
  component: () => <ContactPageContent lang="en" />,
});
