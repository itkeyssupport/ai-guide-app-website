import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { buildMeta, buildLinks } from "@/components/site/seo";
import { Newspaper, Zap, TrendingUp, Bell, Download } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: buildMeta({
      title: "AI News - AI Guide",
      description:
        "Stay updated with the latest AI news, model releases, product updates, and industry trends. All in one place with AI Guide.",
      path: "/news",
    }),
    links: buildLinks("/news"),
  }),
  component: NewsPage,
});

const NEWS_FEATURES = [
  {
    icon: Zap,
    title: "Model Releases",
    text: "Be the first to know when new AI models from OpenAI, Anthropic, Google, Meta, and others launch.",
  },
  {
    icon: TrendingUp,
    title: "Industry Trends",
    text: "Follow the key developments shaping the AI landscape, from research breakthroughs to major product updates.",
  },
  {
    icon: Bell,
    title: "Product Updates",
    text: "Track feature releases, pricing changes, and capability improvements for the AI tools you use.",
  },
];

function NewsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="AI News"
        title="Stay updated with the latest in AI."
        description="Model releases, product updates, industry trends, curated and delivered through the AI Guide app."
      />

      <Section className="!pt-0">
        <div className="max-w-4xl mx-auto">

          <div className="grid sm:grid-cols-3 gap-5 mb-16">
            {NEWS_FEATURES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="glass rounded-2xl p-6 space-y-3" data-reveal>
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-[#16D9F5]/10">
                  <Icon className="h-5 w-5 text-[#16D9F5]" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="glass rounded-2xl p-8 text-center space-y-5" data-reveal>
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-brand mx-auto">
              <Newspaper className="h-7 w-7 text-[#07112F]" />
            </div>
            <h2 className="text-2xl font-bold text-white">AI News is available inside the app</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              To view the latest AI news, visit our application. Access curated news alongside your learning paths, tool comparisons, and guides, all in one place.
            </p>
            <Link
              to="/download"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-[#07112F] hover:opacity-90 transition-opacity shadow-md"
            >
              <Download className="h-4 w-4" />
              Download AI Guide
            </Link>
          </div>

        </div>
      </Section>

      <CTASection />
    </SiteLayout>
  );
}
