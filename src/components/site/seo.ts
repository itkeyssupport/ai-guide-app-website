import { SITE } from "@/config/site";

export function buildMeta({
  title,
  description,
  path = "/",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}) {
  const url = `${SITE.domain}${path}`;
  const ogImage = image ?? `${SITE.domain}/og-image.svg`;
  return [
    { title },
    { name: "description", content: description },
    { name: "author", content: SITE.name },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: ogImage },
    { property: "og:site_name", content: SITE.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];
}

export function buildLinks(path = "/") {
  return [{ rel: "canonical", href: `${SITE.domain}${path}` }];
}