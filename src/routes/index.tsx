import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  GitCompare,
  Compass,
  LayoutGrid,
  ListChecks,
  GitBranch,
  Lightbulb,
  ClipboardCheck,
  LineChart,
  Newspaper,
  Bookmark,
  Languages,
  Users,
  GraduationCap,
  Briefcase,
  Code2,
  Sparkles,
  CheckCircle2,
  Star,
  Zap,
  Globe,
  HelpCircle,
} from "lucide-react";
import { SiteLayout, Section } from "@/components/site/Layout";
import { CTASection } from "@/components/site/CTASection";
import { PhoneMockup } from "@/components/site/PhoneMockup";
import { StructuredData } from "@/components/site/StructuredData";
import { AI_TOOLS, COMPARISONS, COMPARE_CATEGORIES, LEARNING_PATHS, FAQS } from "@/components/site/data";
import { buildMeta, buildLinks } from "@/components/site/seo";
import { SITE } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildMeta({
      title: "AI Guide - Learn, Compare and Master AI Tools",
      description:
        "Download AI Guide to learn, compare, and master popular AI tools like ChatGPT, Claude, Gemini, Perplexity AI, DeepSeek, Meta AI, Notion AI, and more with step-by-step guides.",
      path: "/",
    }),
    links: buildLinks("/"),
  }),
  component: HomePage,
});

const TRUST = [
  "Beginner friendly",
  "Step-by-step guides",
  "AI tool comparisons",
  "Multilingual learning",
];

const STATS = [
  { value: "8+", label: "AI tools covered", icon: LayoutGrid },
  { value: "8", label: "Learning paths", icon: BookOpen },
  { value: "10+", label: "Comparison categories", icon: GitBranch },
  { value: "3", label: "Languages supported", icon: Globe },
];

const FEATURES = [
  { icon: LayoutGrid, title: "AI Tools Directory", text: "Explore popular AI tools with clear explanations, use cases, strengths, limitations, ratings, and practical tips.", tint: "cyan" },
  { icon: ListChecks, title: "Step-by-Step Learning Paths", text: "Follow organized lessons that teach you what to learn first, what to practice, and how to improve.", tint: "purple" },
  { icon: GitBranch, title: "AI Tool Comparisons", text: "Compare tools like ChatGPT vs Claude, Gemini vs Perplexity, and DeepSeek vs ChatGPT for writing, research, coding, and more.", tint: "cyan" },
  { icon: Lightbulb, title: "Prompt Examples and Tips", text: "Learn how to use AI tools with real examples, prompt ideas, and simple explanations.", tint: "purple" },
  { icon: ClipboardCheck, title: "Quizzes and Knowledge Checks", text: "Test what you learned and improve your understanding of AI tools and responsible AI usage.", tint: "cyan" },
  { icon: LineChart, title: "Progress Tracking", text: "Continue from where you left off and keep your learning journey organized.", tint: "purple" },
  { icon: Newspaper, title: "Latest AI News", text: "Stay updated with important AI model releases, product updates, and industry trends.", tint: "cyan" },
  { icon: Bookmark, title: "Bookmarks", text: "Save useful tools, lessons, guides, and comparisons for later.", tint: "purple" },
  { icon: Languages, title: "Multilingual Support", text: "Learn AI in French, English, and Arabic.", tint: "cyan" },
];

const AUDIENCES = [
  { icon: GraduationCap, label: "Students" },
  { icon: Sparkles, label: "Creators" },
  { icon: Briefcase, label: "Professionals" },
  { icon: Users, label: "Business owners" },
  { icon: Code2, label: "Developers" },
  { icon: BookOpen, label: "Researchers" },
  { icon: Star, label: "Beginners" },
  { icon: LineChart, label: "Productivity lovers" },
];

const APP_SCREENS = [
  { src: "/screens/tools_page_en.jpeg", label: "AI Tools", alt: "AI Guide tools directory screen" },
  { src: "/screens/learning_path_en.jpeg", label: "Learn", alt: "AI Guide learning path screen" },
  { src: "/screens/home_page_en.jpeg", label: "Home", alt: "AI Guide home dashboard screen", featured: true },
  { src: "/screens/comparaison_page_en.jpeg", label: "Compare", alt: "AI Guide comparisons screen" },
  { src: "/screens/profil-progress_page_en.jpeg", label: "Progress", alt: "AI Guide profile and progress screen" },
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

function HomePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      name: SITE.name,
      applicationCategory: "EducationApplication",
      operatingSystem: "Android, iOS",
      description: "AI Guide helps users learn, compare, and master popular AI tools through guides, lessons, comparisons, quizzes, and AI news.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      url: SITE.domain,
      author: { "@type": "Organization", name: SITE.name, url: SITE.domain },
      inLanguage: ["en", "fr", "ar"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE.name,
      url: SITE.domain,
      logo: `${SITE.domain}/app-logo.png`,
      contactPoint: { "@type": "ContactPoint", email: SITE.email, contactType: "customer support" },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.domain,
      description: SITE.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <SiteLayout>
      <StructuredData data={jsonLd} />

      {/* Hero */}
      <Section className="!pt-14 sm:!pt-24 !pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#16D9F5]/25 bg-[#16D9F5]/8 px-4 py-1.5 text-xs font-medium text-[#16D9F5] badge-shimmer" data-reveal>
              <Sparkles className="h-3.5 w-3.5" />
              The AI learning app for everyone
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.04]" data-reveal data-delay="100">
              Learn AI Tools <span className="text-gradient">Faster</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed" data-reveal data-delay="200">
              AI Guide helps you discover, compare, and master tools like ChatGPT,
              Claude, Gemini, Perplexity AI, DeepSeek, Meta AI, Notion AI, and more
              through simple step-by-step guides.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3" data-reveal data-delay="300">
              <Link
                to="/download"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-base font-semibold text-[#07112F] hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
              >
                Download AI Guide
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Explore Features
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2" data-reveal data-delay="400">
              {TRUST.map((t) => (
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
              <HeroCard icon={BookOpen} title="Step-by-step lessons" subtitle="8 learning paths" tint="cyan" className="animate-float" />
              <HeroCard icon={GitBranch} title="AI tool comparisons" subtitle="10+ categories" tint="purple" className="animate-float-delayed" />
              <HeroCard icon={LineChart} title="Progress tracking" subtitle="Pick up where you left off" tint="purple" className="animate-float-delayed" />
              <HeroCard icon={Newspaper} title="Latest AI news" subtitle="Always up to date" tint="cyan" className="animate-float" />
            </div>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="!py-10 sm:!py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <div key={s.label} className="glass rounded-2xl p-5 sm:p-6 text-center stat-card" data-reveal data-delay={String(i * 100)}>
              <div className="inline-flex h-10 w-10 mx-auto items-center justify-center rounded-xl bg-gradient-brand-soft border border-white/10 text-[#16D9F5] mb-3">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Challenge */}
      <Section ariaLabel="The challenge">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div data-reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#16D9F5]">The challenge</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              AI tools are powerful, but choosing and learning them can be confusing.
            </h2>
            <p className="mt-5 text-muted-foreground">Most people don't know:</p>
            <ul className="mt-4 space-y-3">
              {[
                "Which AI tool to use for their needs",
                "How to write better prompts",
                "How ChatGPT, Claude, Gemini, DeepSeek, Perplexity, Meta AI, Notion AI, and Manus AI differ",
                "How to learn AI in a structured way",
                "How to stay updated with AI news",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <HelpCircle className="h-4 w-4 text-[#7A4DFF] flex-shrink-0 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg text-white font-medium">
              AI Guide brings everything together in one beginner-friendly app.
            </p>
          </div>

          {/* Visual: AI tool confusion motif */}
          <div className="relative" data-reveal data-delay="200">
            <div className="absolute inset-0 bg-[#7A4DFF]/10 blur-3xl rounded-full -z-10" />
            <div className="glass rounded-3xl p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5 text-center">So many tools, so little guidance...</p>
              <div className="grid grid-cols-2 gap-3">
                {CONFUSION_ITEMS.map((item, i) => (
                  <div
                    key={item.label}
                    className="glass rounded-xl px-4 py-3 flex items-center gap-2.5"
                    style={{
                      opacity: 0.55 + (i % 3) * 0.15,
                      transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (i % 3)}deg)`,
                    }}
                  >
                    <span
                      className="h-2 w-2 rounded-full flex-shrink-0"
                      style={{ background: item.color }}
                    />
                    <span className="text-sm font-medium text-white/80">{item.label}</span>
                    <span className="ml-auto text-lg" style={{ color: item.color, opacity: 0.5 }}>?</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-center gap-2">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs text-muted-foreground px-3">AI Guide solves this</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {["Learn", "Compare", "Discover"].map((tag) => (
                  <span key={tag} className="rounded-full bg-gradient-brand-soft border border-white/10 px-3.5 py-1 text-xs font-semibold text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Inside the app (moved here, right after Challenge) */}
      <Section ariaLabel="App preview" id="app-preview">
        <div className="text-center max-w-2xl mx-auto mb-16" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#16D9F5]">Inside the app</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            A clean, intuitive AI learning experience.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Designed for everyday users. Navigate tools, comparisons, learning paths, and news, all from one app.
          </p>
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
          <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto" data-reveal>
            {[
              { icon: Zap, title: "Fast and lightweight", text: "Optimized for smooth navigation on any device." },
              { icon: BookOpen, title: "Structured content", text: "Every topic organized into clear, digestible lessons." },
              { icon: Globe, title: "3 languages", text: "Available in French, English, and Arabic." },
            ].map((f, i) => (
              <div key={f.title} className="glass rounded-xl p-4 text-center" data-reveal data-delay={String(i * 150)}>
                <f.icon className="h-5 w-5 text-[#16D9F5] mx-auto mb-2" />
                <p className="text-sm font-semibold text-white">{f.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Solution */}
      <Section ariaLabel="Solution">
        <div className="text-center max-w-2xl mx-auto mb-12" data-reveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            One app to <span className="text-gradient">learn, compare, and master</span> AI tools.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: BookOpen, title: "Learn", text: "Structured learning paths and beginner guides for every AI tool.", tint: "cyan", delay: "0" },
            { icon: GitCompare, title: "Compare", text: "Understand differences between AI tools side-by-side.", tint: "purple", delay: "150" },
            { icon: Compass, title: "Discover", text: "Explore popular AI tools, use cases, ratings, tips, and news.", tint: "cyan", delay: "300" },
          ].map((c) => (
            <div key={c.title} className="glass glass-hover rounded-3xl p-8" data-reveal data-delay={c.delay}>
              <div className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-brand text-[#07112F]">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{c.title}</h3>
              <p className="mt-2 text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section ariaLabel="Features" id="features">
        <div className="max-w-2xl mb-12" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#16D9F5]">Features</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Everything you need to learn AI, in one app.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="glass glass-hover rounded-2xl p-6 group"
              data-reveal
              data-delay={String((i % 3) * 100)}
            >
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 ${
                f.tint === "cyan" ? "bg-[#16D9F5]/10 text-[#16D9F5]" : "bg-[#7A4DFF]/15 text-[#D9B8FF]"
              }`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* AI Tools */}
      <Section ariaLabel="AI tools">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10" data-reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#16D9F5]">AI Tools</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Explore the AI tools people are using every day.
            </h2>
          </div>
          <Link to="/ai-tools" className="text-sm text-[#16D9F5] hover:text-white inline-flex items-center gap-1.5 font-medium transition-colors flex-shrink-0">
            See all tools <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AI_TOOLS.map((t, i) => (
            <div key={t.name} className="glass glass-hover rounded-2xl p-5 flex flex-col" data-reveal data-delay={String((i % 4) * 100)}>
              <div className={`h-1 w-14 rounded-full bg-gradient-to-r ${t.color}`} />
              <h3 className="mt-4 text-lg font-semibold text-white">{t.name}</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.short}</p>
              <p className="mt-3 text-sm text-muted-foreground flex-1 leading-relaxed">{t.description}</p>
              <p className="mt-3 text-xs text-muted-foreground">
                <span className="text-white/80 font-medium">Best for:</span> {t.bestFor}
              </p>
              <Link to="/download" className="mt-4 text-sm font-semibold text-[#16D9F5] hover:text-white inline-flex items-center gap-1.5 transition-colors">
                Learn in the app <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          AI Guide is an independent educational app. Tool names are used for informational and educational purposes only.
        </p>
      </Section>

      {/* Compare */}
      <Section ariaLabel="Compare">
        <div className="text-center max-w-2xl mx-auto mb-10" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#16D9F5]">Compare</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Choose the right AI tool for the right task.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-12" data-reveal data-delay="100">
          {COMPARE_CATEGORIES.map((c) => (
            <span key={c} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-muted-foreground hover:border-white/20 hover:text-white transition-colors cursor-default">
              {c}
            </span>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {COMPARISONS.map((c, i) => (
            <div key={c.title} className="glass glass-hover rounded-2xl p-6" data-reveal data-delay={String((i % 2) * 150)}>
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-[#16D9F5]/10 border border-[#16D9F5]/20 px-3 py-1.5 text-sm font-semibold text-white">{c.a}</span>
                <span className="text-xs text-muted-foreground font-medium">vs</span>
                <span className="rounded-lg bg-[#7A4DFF]/10 border border-[#7A4DFF]/20 px-3 py-1.5 text-sm font-semibold text-white">{c.b}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center" data-reveal>
          <Link
            to="/download"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-[#07112F] hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20"
          >
            Compare AI tools in the app <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Learning paths */}
      <Section ariaLabel="Learning paths">
        <div className="max-w-2xl mb-10" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#16D9F5]">Learn</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Structured AI learning for beginners and everyday users.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LEARNING_PATHS.map((p, i) => (
            <div key={p.title} className="glass glass-hover rounded-2xl p-5 relative overflow-hidden" data-reveal data-delay={String((i % 4) * 100)}>
              <div className="absolute top-3 right-3 text-3xl font-bold text-white/4 select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-xs font-medium text-[#16D9F5]">Path {String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-2 text-base font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Audience */}
      <Section ariaLabel="Who is it for">
        <div className="max-w-2xl mb-10" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#16D9F5]">Who is it for</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Built for anyone who wants to understand AI.
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {AUDIENCES.map((a, i) => (
            <div key={a.label} className="glass glass-hover rounded-2xl p-5 flex flex-col items-center text-center" data-reveal data-delay={String((i % 4) * 100)}>
              <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-gradient-brand-soft border border-white/10">
                <a.icon className="h-5 w-5 text-[#16D9F5]" />
              </div>
              <p className="mt-3 text-sm font-semibold text-white">{a.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />

      {/* FAQ */}
      <Section ariaLabel="Frequently asked questions">
        <div className="max-w-2xl mx-auto text-center mb-10" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#16D9F5]">FAQ</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Frequently asked questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((f, i) => (
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
