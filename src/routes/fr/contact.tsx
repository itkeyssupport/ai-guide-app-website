import { createFileRoute } from "@tanstack/react-router";
import { ContactPageContent } from "@/components/site/ContactPageContent";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/fr/contact")({
  head: () => ({
    meta: buildMeta({
      title: "Contact AI Guide - Support et partenariats",
      description:
        "Vous avez une question, une suggestion ou une demande de partenariat ? Contactez l'équipe AI Guide à support@aiguidia.com.",
      path: "/fr/contact",
    }),
    links: buildLinks("/fr/contact"),
  }),
  component: () => <ContactPageContent lang="fr" />,
});
