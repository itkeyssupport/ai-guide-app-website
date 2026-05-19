import { Link } from "@tanstack/react-router";
import {
  ArrowRight, BookOpen, GitCompare, Compass, LayoutGrid, ListChecks,
  GitBranch, Lightbulb, ClipboardCheck, LineChart, Newspaper, Bookmark,
  Languages, Users, GraduationCap, Briefcase, Code2, Sparkles,
  CheckCircle2, Star, Zap, Globe, HelpCircle,
} from "lucide-react";
import { SiteLayout, Section } from "@/components/site/Layout";
import { PhoneMockup } from "@/components/site/PhoneMockup";
import { StructuredData } from "@/components/site/StructuredData";
import { DownloadButtons } from "@/components/site/DownloadButtons";
import { buildMeta, buildLinks } from "@/components/site/seo";
import { SITE } from "@/config/site";
import { translations, type Lang } from "@/i18n/translations";

const AI_TOOL_NAMES = [
  "ChatGPT", "Claude", "Gemini", "Perplexity AI",
  "DeepSeek", "Notion AI", "Meta AI", "Manus AI",
];
const AI_TOOL_COLORS = [
  "from-[#16D9F5] to-[#7A4DFF]",
  "from-[#D9B8FF] to-[#7A4DFF]",
  "from-[#16D9F5] to-[#D9B8FF]",
  "from-[#7A4DFF] to-[#16D9F5]",
  "from-[#16D9F5] to-[#7A4DFF]",
  "from-[#D9B8FF] to-[#16D9F5]",
  "from-[#7A4DFF] to-[#D9B8FF]",
  "from-[#16D9F5] to-[#7A4DFF]",
];

const CONFUSION_ITEMS = [
  { label: "ChatGPT", color: "#16D9F5" },
  { label: "Claude", color: "#D9B8FF" },
  { label: "Gemini", color: "#7A4DFF" },
  { label: "Perplexity", color: "#16D9F5" },
  { label: "DeepSeek", color: "#7A4DFF" },
  { label: "Meta AI", color: "#D9B8FF" },
  { label: "Notion AI", color: "#16D9F5" },
  { label: "Manus AI", color: "#7A4DFF" },
];

const AUDIENCE_ICONS = [GraduationCap, Sparkles, Briefcase, Users, Code2, BookOpen, Star, LineChart];

const FEATURE_ICONS = [LayoutGrid, ListChecks, GitBranch, Lightbulb, ClipboardCheck, LineChart, Newspaper, Bookmark, Languages];
const FEATURE_TINTS = ["cyan", "purple", "cyan", "purple", "cyan", "purple", "cyan", "purple", "cyan"] as const;

const STATS_ICONS = [LayoutGrid, BookOpen, GitBranch, Globe];
const STATS_VALUES = ["8+", "8", "10+", "3"];

const COMPARISON_COLORS = [
  { a: "#16D9F5", b: "#7A4DFF" }, { a: "#16D9F5", b: "#7A4DFF" },
  { a: "#16D9F5", b: "#7A4DFF" }, { a: "#D9B8FF", b: "#7A4DFF" },
];
const COMPARISON_AB = [
  { a: "ChatGPT", b: "Claude" },
  { a: "Gemini", b: "Perplexity AI" },
  { a: "DeepSeek", b: "ChatGPT" },
  { a: "Notion AI", b: "ChatGPT" },
];

export function getHomeLandingHead(lang: Lang, path: string) {
  const T = translations[lang];
  return {
    meta: buildMeta({ title: T.seoTitle, description: T.seoDescription, path }),
    links: buildLinks(path),
  };
}

export function HomeLanding({ lang }: { lang: Lang }) {
  const T = translations[lang];
  const lp = lang === "fr" ? "/fr" : lang === "ar" ? "/ar" : "";
  const lpath = (route: string) => lp ? `${lp}${route}` : route;

  const screenSuffix = lang === "en" ? "en" : lang === "fr" ? "fr" : "ar";
  const progressFile = lang === "en" ? "profil-progress_page_en.jpeg" : lang === "fr" ? "profil_page_fr.jpeg" : "profil_page_ar.jpeg";

  const APP_SCREENS = [
    { src: `/screens/tools_page_${screenSuffix}.jpeg`, label: T.screenLabels.tools, alt: `AI Guide tools screen (${lang})` },
    { src: `/screens/learning_path_${screenSuffix}.jpeg`, label: T.screenLabels.learn, alt: `AI Guide learning screen (${lang})` },
    { src: `/screens/home_page_${screenSuffix}.jpeg`, label: T.screenLabels.home, alt: `AI Guide home screen (${lang})`, featured: true },
    { src: `/screens/comparaison_page_${screenSuffix}.jpeg`, label: T.screenLabels.compare, alt: `AI Guide compare screen (${lang})` },
    { src: `/screens/${progressFile}`, label: T.screenLabels.progress, alt: `AI Guide progress screen (${lang})` },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      name: SITE.name,
      applicationCategory: "EducationApplication",
      operatingSystem: "Android, iOS",
      description: T.seoDescription,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      url: SITE.domain,
      author: { "@type": "Organization", name: SITE.name, url: SITE.domain },
      inLanguage: ["en", "fr", "ar"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.domain,
      description: T.seoDescription,
    },
  ];

  return (
    <SiteLayout dir={T.dir}>
      <StructuredData data={jsonLd} />

      {/* Hero */}
      <Section className="!pt-14 sm:!pt-24 !pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#16D9F5]/25 bg-[#16D9F5]/8 px-4 py-1.5 text-xs font-medium text-[#16D9F5] badge-shimmer" data-reveal>
              <Sparkles className="h-3.5 w-3.5 flex-shrink-0" />
              {T.heroBadge}
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.04]" data-reveal data-delay="100">
              {T.heroTitle} <span className="text-gradient">{T.heroHighlight}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed" data-reveal data-delay="200">
              {T.heroDescription}
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3" data-reveal data-delay="300">
              <Link
                to={lpath("/download") as any}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-base font-semibold text-[#07112F] hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
              >
                {T.heroPrimary}
                <ArrowRight className={`h-4 w-4 ${T.dir === "rtl" ? "rotate-180" : ""}`} />
              </Link>
              <Link
                to={lpath("/features") as any}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                {T.heroSecondary}
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2" data-reveal data-delay="400">
              {T.trust.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-[#16D9F5] flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero visual */}
          <div className="relative" data-reveal data-delay="200">
            <div className="absolute -inset-16 -z-10 bg-gradient-brand opacity-15 blur-3xl rounded-full animate-pulse-glow" />
            <div className="grid grid-cols-2 gap-4">
              {T.heroCards.map((card, i) => (
                <HeroCard
                  key={i}
                  icon={[BookOpen, GitBranch, LineChart, Newspaper][i]}
                  title={card.title}
                  subtitle={card.subtitle}
                  tint={i % 2 === 0 ? "cyan" : "purple"}
                  className={i % 2 === 0 ? "animate-float" : "animate-float-delayed"}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="!py-10 sm:!py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS_VALUES.map((value, i) => {
            const Icon = STATS_ICONS[i];
            return (
              <div key={i} className="glass rounded-2xl p-5 sm:p-6 text-center stat-card" data-reveal data-delay={String(i * 100)}>
                <div className="inline-flex h-10 w-10 mx-auto items-center justify-center rounded-xl bg-gradient-brand-soft border border-white/10 text-[#16D9F5] mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-white">{value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{T.statsLabels[i]}</div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Challenge */}
      <Section ariaLabel={T.challengeEyebrow}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#16D9F5]">{T.challengeEyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">{T.challengeTitle}</h2>
            <p className="mt-5 text-muted-foreground">{T.challengeIntro}</p>
            <ul className="mt-4 space-y-3">
              {T.challengeItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <HelpCircle className="h-4 w-4 text-[#7A4DFF] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg text-white font-medium">{T.challengeConclusion}</p>
          </div>

          {/* Confusion motif */}
          <div className="relative" data-reveal data-delay="200">
            <div className="absolute inset-0 bg-[#7A4DFF]/10 blur-3xl rounded-full -z-10" />
            <div className="glass rounded-3xl p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5 text-center">
                {T.confusionCaption}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {CONFUSION_ITEMS.map((item, i) => (
                  <div
                    key={item.label}
                    className="glass rounded-xl px-4 py-3 flex items-center gap-2.5"
                    style={{ opacity: 0.55 + (i % 3) * 0.15, transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (i % 3)}deg)` }}
                  >
                    <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                    <span className="text-sm font-medium text-white/80">{item.label}</span>
                    <span className="ml-auto text-lg" style={{ color: item.color, opacity: 0.5 }}>?</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-center gap-2">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs text-muted-foreground px-3">{T.solvesText}</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {T.challengeTags.map((tag) => (
                  <span key={tag} className="rounded-full bg-gradient-brand-soft border border-white/10 px-3.5 py-1 text-xs font-semibold text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Inside the app */}
      <Section ariaLabel={T.appEyebrow} id="app-preview">
        <div className="text-center max-w-2xl mx-auto mb-16" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#16D9F5]">{T.appEyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">{T.appTitle}</h2>
          <p className="mt-4 text-muted-foreground">{T.appDescription}</p>
        </div>

        <div className="relative">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-80 bg-gradient-brand opacity-8 blur-3xl rounded-full -z-10 animate-pulse-glow" />
          <div className="flex items-end justify-center gap-3 sm:gap-5 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory px-4">
            {APP_SCREENS.map((screen, i) => {
              const isCenter = screen.featured;
              return (
                <PhoneMockup
                  key={screen.label}
                  label={screen.label}
                  imageSrc={screen.src}
                  imageAlt={screen.alt}
                  featured={isCenter}
                  className={`snap-center ${!isCenter && i < 2 ? "mb-6 sm:mb-8" : ""} ${!isCenter && i > 2 ? "mb-6 sm:mb-8" : ""}`}
                />
              );
            })}
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {T.appFeatures.map((f, i) => {
              const Icon = [Zap, BookOpen, Globe][i];
              return (
                <div key={f.title} className="glass rounded-xl p-4 text-center" data-reveal data-delay={String(i * 150)}>
                  <Icon className="h-5 w-5 text-[#16D9F5] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-white">{f.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Solution */}
      <Section ariaLabel="Solution">
        <div className="text-center max-w-2xl mx-auto mb-12" data-reveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {T.solutionTitleParts[0]}{" "}
            <span className="text-gradient">{T.solutionTitleParts[1]}</span>{" "}
            {T.solutionTitleParts[2]}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {T.solutionCards.map((card, i) => {
            const Icon = [BookOpen, GitCompare, Compass][i];
            const delays = ["0", "150", "300"];
            return (
              <div key={card.title} className="glass glass-hover rounded-3xl p-8" data-reveal data-delay={delays[i]}>
                <div className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-brand text-[#07112F]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-muted-foreground">{card.text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Features */}
      <Section ariaLabel={T.featuresEyebrow} id="features">
        <div className="max-w-2xl mb-12" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#16D9F5]">{T.featuresEyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">{T.featuresTitle}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {T.featuresList.map((f, i) => {
            const Icon = FEATURE_ICONS[i];
            const tint = FEATURE_TINTS[i];
            return (
              <div key={f.title} className="glass glass-hover rounded-2xl p-6 group" data-reveal data-delay={String((i % 3) * 100)}>
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 ${
                  tint === "cyan" ? "bg-[#16D9F5]/10 text-[#16D9F5]" : "bg-[#7A4DFF]/15 text-[#D9B8FF]"
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* AI Tools */}
      <Section ariaLabel={T.toolsEyebrow}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10" data-reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#16D9F5]">{T.toolsEyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">{T.toolsTitle}</h2>
          </div>
          <Link to={lpath("/ai-tools") as any} className="text-sm text-[#16D9F5] hover:text-white inline-flex items-center gap-1.5 font-medium transition-colors flex-shrink-0">
            {T.toolsSeeAll} <ArrowRight className={`h-4 w-4 ${T.dir === "rtl" ? "rotate-180" : ""}`} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AI_TOOL_NAMES.map((name, i) => {
            const desc = T.toolDescriptions[i];
            return (
              <div key={name} className="glass glass-hover rounded-2xl p-5 flex flex-col" data-reveal data-delay={String((i % 4) * 100)}>
                <div className={`h-1 w-14 rounded-full bg-gradient-to-r ${AI_TOOL_COLORS[i]}`} />
                <h3 className="mt-4 text-lg font-semibold text-white">{name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{desc.short}</p>
                <p className="mt-3 text-sm text-muted-foreground flex-1 leading-relaxed">{desc.description}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  <span className="text-white/80 font-medium">{T.bestForLabel}</span>{" "}
                  {desc.bestFor}
                </p>
                <Link to={lpath("/download") as any} className="mt-4 text-sm font-semibold text-[#16D9F5] hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  {T.toolsLearnCta} <ArrowRight className={`h-3.5 w-3.5 ${T.dir === "rtl" ? "rotate-180" : ""}`} />
                </Link>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">{T.toolsDisclaimer}</p>
      </Section>

      {/* Compare */}
      <Section ariaLabel={T.compareEyebrow}>
        <div className="text-center max-w-2xl mx-auto mb-10" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#16D9F5]">{T.compareEyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">{T.compareTitle}</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-12" data-reveal data-delay="100">
          {T.compareCategories.map((c) => (
            <span key={c} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-muted-foreground hover:border-white/20 hover:text-white transition-colors cursor-default">
              {c}
            </span>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {T.comparisons.map((comp, i) => {
            const ab = COMPARISON_AB[i];
            return (
              <div key={comp.title} className="glass glass-hover rounded-2xl p-6" data-reveal data-delay={String((i % 2) * 150)}>
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-[#16D9F5]/10 border border-[#16D9F5]/20 px-3 py-1.5 text-sm font-semibold text-white">{ab.a}</span>
                  <span className="text-xs text-muted-foreground font-medium">{lang === "ar" ? "مقابل" : "vs"}</span>
                  <span className="rounded-lg bg-[#7A4DFF]/10 border border-[#7A4DFF]/20 px-3 py-1.5 text-sm font-semibold text-white">{ab.b}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{comp.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{comp.note}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center" data-reveal>
          <Link
            to={lpath("/download") as any}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-[#07112F] hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20"
          >
            {T.compareCta} <ArrowRight className={`h-4 w-4 ${T.dir === "rtl" ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </Section>

      {/* Learning paths */}
      <Section ariaLabel={T.learnEyebrow}>
        <div className="max-w-2xl mb-10" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#16D9F5]">{T.learnEyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">{T.learnTitle}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {T.learningPaths.map((p, i) => (
            <div key={p.title} className="glass glass-hover rounded-2xl p-5 relative overflow-hidden" data-reveal data-delay={String((i % 4) * 100)}>
              <div className="absolute top-3 right-3 text-3xl font-bold text-white/4 select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-xs font-medium text-[#16D9F5]">{T.learnPathLabel} {String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-2 text-base font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Audience */}
      <Section ariaLabel={T.audienceEyebrow}>
        <div className="max-w-2xl mb-10" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#16D9F5]">{T.audienceEyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">{T.audienceTitle}</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {T.audienceLabels.map((label, i) => {
            const Icon = AUDIENCE_ICONS[i];
            return (
              <div key={label} className="glass glass-hover rounded-2xl p-5 flex flex-col items-center text-center" data-reveal data-delay={String((i % 4) * 100)}>
                <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-gradient-brand-soft border border-white/10">
                  <Icon className="h-5 w-5 text-[#16D9F5]" />
                </div>
                <p className="mt-3 text-sm font-semibold text-white">{label}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section ariaLabel={T.ctaTitle}>
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16 text-center" data-reveal>
          <div className="absolute inset-0 glass -z-10" />
          <div className="absolute inset-0 bg-gradient-brand opacity-8 -z-10" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#7A4DFF] opacity-15 blur-3xl rounded-full -z-10 animate-pulse-glow" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#16D9F5] opacity-12 blur-3xl rounded-full -z-10 animate-pulse-glow" />
          <div className="absolute inset-0 rounded-3xl border border-white/12 -z-10" />
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7A4DFF]/40 bg-[#7A4DFF]/10 px-4 py-1.5 text-xs font-medium text-[#D9B8FF] mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            {T.ctaBadge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-tight">
            {T.ctaTitle}
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-muted-foreground text-lg leading-relaxed">{T.ctaDescription}</p>
          <div className="mt-10 flex justify-center">
            <DownloadButtons />
          </div>
          <p className="mt-6 text-xs text-muted-foreground">{T.ctaFootnote}</p>
        </div>
      </Section>

      {/* FAQ */}
      <Section ariaLabel={T.faqEyebrow}>
        <div className="max-w-2xl mx-auto text-center mb-10" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#16D9F5]">{T.faqEyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">{T.faqTitle}</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {T.faqs.map((f, i) => (
            <details key={f.q} className="group glass glass-hover rounded-2xl p-5 open:bg-white/5 open:border-white/14" data-reveal data-delay={String((i % 3) * 100)}>
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                <h3 className="text-base font-semibold text-white">{f.q}</h3>
                <span className="text-muted-foreground group-open:rotate-45 transition-transform duration-200 flex-shrink-0 text-lg">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}

function HeroCard({
  icon: Icon,
  title,
  subtitle,
  tint,
  className = "",
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  tint: "cyan" | "purple";
  className?: string;
}) {
  return (
    <div className={`glass rounded-2xl p-5 ${tint === "cyan" ? "glow-cyan-sm" : "glow-purple-sm"} ${className}`}>
      <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
        tint === "cyan" ? "bg-[#16D9F5]/15 text-[#16D9F5]" : "bg-[#7A4DFF]/20 text-[#D9B8FF]"
      }`}>
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-sm font-semibold text-white">{title}</p>
      <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
      <div className="mt-3 space-y-1.5">
        <div className="h-1.5 w-full rounded-full bg-white/10" />
        <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
        <div className="h-1.5 w-3/5 rounded-full bg-white/10" />
      </div>
    </div>
  );
}
