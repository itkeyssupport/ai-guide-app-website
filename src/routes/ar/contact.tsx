import { createFileRoute } from "@tanstack/react-router";
import { ContactPageContent } from "@/components/site/ContactPageContent";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/ar/contact")({
  head: () => ({
    meta: buildMeta({
      title: "تواصل مع AI Guide - الدعم والشراكات",
      description:
        "لديك سؤال أو اقتراح أو طلب شراكة؟ تواصل مع فريق AI Guide على support@aiguidia.com.",
      path: "/ar/contact",
    }),
    links: buildLinks("/ar/contact"),
  }),
  component: () => <ContactPageContent lang="ar" />,
});
