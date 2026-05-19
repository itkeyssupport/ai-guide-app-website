import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { buildMeta, buildLinks } from "@/components/site/seo";
import { Trash2, SmartphoneIcon, Mail, ShieldCheck, AlertTriangle } from "lucide-react";
import { SITE } from "@/config/site";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: buildMeta({
      title: "Delete Your Account - AI Guide",
      description:
        "Learn how to delete your AI Guide account. You can delete your account directly from the Profile section in the app, or contact us for help.",
      path: "/delete-account",
    }),
    links: buildLinks("/delete-account"),
  }),
  component: DeleteAccountPage,
});

function DeleteAccountPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Account"
        title="Delete Your Account"
        description="You have full control over your account. Here is how to delete it and what happens to your data."
      />

      <Section className="!pt-0">
        <div className="max-w-3xl mx-auto space-y-6">

          {/* Warning banner */}
          <div className="glass rounded-2xl p-5 border border-orange-500/20 bg-orange-500/5" data-reveal>
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">This action is permanent</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Deleting your account will permanently remove your profile, saved progress, bookmarks, and all associated data. This cannot be undone.
                </p>
              </div>
            </div>
          </div>

          {/* Method 1 - In-app */}
          <div className="glass rounded-2xl p-6 sm:p-8" data-reveal data-delay="100">
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand-soft border border-white/10 text-[#16D9F5]">
                <SmartphoneIcon className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-white">Option 1: Delete from the app</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-5">
              The easiest way to delete your account is directly inside the AI Guide app. Follow these steps:
            </p>
            <ol className="space-y-3">
              {[
                "Open the AI Guide app on your device.",
                "Tap the Profile icon at the bottom of the screen.",
                "Go to Settings or Account settings.",
                'Tap "Delete Account".',
                "Confirm the deletion when prompted.",
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

          {/* Method 2 - Contact us */}
          <div className="glass rounded-2xl p-6 sm:p-8" data-reveal data-delay="200">
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#7A4DFF]/15 border border-white/10 text-[#D9B8FF]">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-white">Option 2: Contact us directly</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              If you cannot access the app or prefer to request deletion by email, send us a message and we will process your request.
            </p>
            <p className="text-sm text-muted-foreground mb-5">
              Please send your request from the email address linked to your account so we can identify it.
            </p>
            <a
              href={`mailto:${SITE.email}?subject=Account Deletion Request`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-[#07112F] hover:opacity-90 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              Email us at {SITE.email}
            </a>
          </div>

          {/* What happens after deletion */}
          <div className="glass rounded-2xl p-6 sm:p-8" data-reveal data-delay="300">
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#16D9F5]/10 border border-white/10 text-[#16D9F5]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-white">What happens after deletion</h2>
            </div>
            <ul className="space-y-2.5">
              {[
                "Your account and login credentials are permanently deleted.",
                "Your learning progress, streaks, and quiz results are removed.",
                "Your saved bookmarks and preferences are deleted.",
                "Your profile data is removed from our systems.",
                "Some anonymized or aggregated data may be retained as required by law.",
                "You can create a new account at any time.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Trash2 className="h-4 w-4 text-[#16D9F5] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Help link */}
          <p className="text-sm text-muted-foreground text-center" data-reveal data-delay="400">
            Have questions?{" "}
            <Link to="/contact" className="text-[#16D9F5] hover:text-white transition-colors">
              Contact our support team
            </Link>
            {" "}and we will assist you.
          </p>
        </div>
      </Section>
    </SiteLayout>
  );
}
