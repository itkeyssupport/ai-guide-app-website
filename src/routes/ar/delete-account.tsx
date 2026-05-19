import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { buildMeta, buildLinks } from "@/components/site/seo";
import { Trash2, SmartphoneIcon, Mail, ShieldCheck, AlertTriangle } from "lucide-react";
import { SITE } from "@/config/site";

export const Route = createFileRoute("/ar/delete-account")({
  head: () => ({
    meta: buildMeta({
      title: "حذف حسابك - AI Guide",
      description:
        "تعرّف على كيفية حذف حساب AI Guide الخاص بك. يمكنك حذف حسابك مباشرةً من قسم الملف الشخصي في التطبيق، أو التواصل معنا للحصول على المساعدة.",
      path: "/ar/delete-account",
    }),
    links: buildLinks("/ar/delete-account"),
  }),
  component: DeleteAccountPageAr,
});

function DeleteAccountPageAr() {
  return (
    <SiteLayout dir="rtl">
      <PageHero
        eyebrow="الحساب"
        title="حذف حسابك"
        description="لديك التحكم الكامل في حسابك. إليك كيفية حذفه وما يحدث لبياناتك."
      />

      <Section className="!pt-0">
        <div className="max-w-3xl mx-auto space-y-6">

          <div className="glass rounded-2xl p-5 border border-orange-500/20 bg-orange-500/5" data-reveal>
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">هذا الإجراء دائم</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  سيؤدي حذف حسابك إلى إزالة ملفك الشخصي وتقدمك المحفوظ وعلاماتك المرجعية وجميع البيانات المرتبطة بشكل دائم. لا يمكن التراجع عن هذا الإجراء.
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 sm:p-8" data-reveal data-delay="100">
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand-soft border border-white/10 text-[#16D9F5]">
                <SmartphoneIcon className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-white">الخيار 1: الحذف من التطبيق</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-5">
              أسهل طريقة لحذف حسابك هي مباشرةً من تطبيق AI Guide. اتبع الخطوات التالية:
            </p>
            <ol className="space-y-3">
              {[
                "افتح تطبيق AI Guide على جهازك.",
                "اضغط على أيقونة الملف الشخصي في أسفل الشاشة.",
                "انتقل إلى الإعدادات أو إعدادات الحساب.",
                'اضغط على "حذف الحساب".',
                "أكّد الحذف عند المطالبة بذلك.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#16D9F5]/15 text-[#16D9F5] text-xs font-bold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="glass rounded-2xl p-6 sm:p-8" data-reveal data-delay="200">
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#7A4DFF]/15 border border-white/10 text-[#D9B8FF]">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-white">الخيار 2: تواصل معنا مباشرة</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              إذا لم تستطع الوصول إلى التطبيق أو تفضّل طلب الحذف عبر البريد الإلكتروني، أرسل لنا رسالة وسنعالج طلبك.
            </p>
            <p className="text-sm text-muted-foreground mb-5">
              يرجى إرسال طلبك من عنوان البريد الإلكتروني المرتبط بحسابك حتى نتمكن من التعرف عليه.
            </p>
            <a
              href={`mailto:${SITE.email}?subject=طلب حذف الحساب`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-[#07112F] hover:opacity-90 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              راسلنا على {SITE.email}
            </a>
          </div>

          <div className="glass rounded-2xl p-6 sm:p-8" data-reveal data-delay="300">
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#16D9F5]/10 border border-white/10 text-[#16D9F5]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-white">ما يحدث بعد الحذف</h2>
            </div>
            <ul className="space-y-2.5">
              {[
                "يتم حذف حسابك وبيانات تسجيل الدخول بشكل دائم.",
                "يتم إزالة تقدم التعلم وسلاسلك ونتائج الاختبارات.",
                "يتم حذف علاماتك المرجعية المحفوظة وتفضيلاتك.",
                "يتم إزالة بيانات ملفك الشخصي من أنظمتنا.",
                "قد يتم الاحتفاظ ببعض البيانات المجهولة أو المجمّعة وفقًا للقانون.",
                "يمكنك إنشاء حساب جديد في أي وقت.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Trash2 className="h-4 w-4 text-[#16D9F5] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-muted-foreground text-center" data-reveal data-delay="400">
            هل لديك أسئلة؟{" "}
            <Link to="/ar/contact" className="text-[#16D9F5] hover:text-white transition-colors">
              تواصل مع فريق الدعم
            </Link>
            {" "}وسنساعدك.
          </p>
        </div>
      </Section>
    </SiteLayout>
  );
}
