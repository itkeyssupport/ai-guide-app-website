import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { buildMeta, buildLinks } from "@/components/site/seo";
import { Newspaper, Zap, TrendingUp, Bell } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/ar/news")({
  head: () => ({
    meta: buildMeta({
      title: "أخبار الذكاء الاصطناعي - AI Guide",
      description:
        "ابق على اطلاع بآخر أخبار الذكاء الاصطناعي وإصدارات النماذج وتحديثات المنتجات واتجاهات الصناعة. كل شيء في مكان واحد مع AI Guide.",
      path: "/ar/news",
    }),
    links: buildLinks("/ar/news"),
  }),
  component: NewsPageAr,
});

const NEWS_FEATURES = [
  {
    icon: Zap,
    title: "إصدارات النماذج",
    text: "كن أول من يعلم عند إطلاق نماذج ذكاء اصطناعي جديدة من OpenAI وAnthropic وGoogle وMeta وغيرها.",
  },
  {
    icon: TrendingUp,
    title: "اتجاهات الصناعة",
    text: "تابع التطورات الرئيسية التي تشكّل مشهد الذكاء الاصطناعي — من اختراقات البحث إلى تحديثات المنتجات الكبرى.",
  },
  {
    icon: Bell,
    title: "تحديثات المنتجات",
    text: "تتبع إصدارات الميزات وتغييرات الأسعار وتحسينات القدرات لأدوات الذكاء الاصطناعي التي تستخدمها.",
  },
];

function NewsPageAr() {
  return (
    <SiteLayout dir="rtl">
      <PageHero
        eyebrow="أخبار الذكاء الاصطناعي"
        title="ابق على اطلاع بآخر أخبار الذكاء الاصطناعي."
        description="إصدارات النماذج، تحديثات المنتجات، اتجاهات الصناعة — منتقاة ومتاحة من خلال تطبيق AI Guide."
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

          <div className="glass rounded-2xl p-8 text-center space-y-4" data-reveal>
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-brand mx-auto">
              <Newspaper className="h-7 w-7 text-[#07112F]" />
            </div>
            <h2 className="text-2xl font-bold text-white">أخبار الذكاء الاصطناعي متاحة داخل التطبيق</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              حمّل AI Guide للوصول إلى أخبار الذكاء الاصطناعي المنتقاة إلى جانب مسارات التعلم ومقارنات الأدوات والأدلة — كل ذلك في مكان واحد.
            </p>
          </div>

        </div>
      </Section>

      <CTASection />
    </SiteLayout>
  );
}
