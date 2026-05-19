import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: buildMeta({
      title: "Terms of Use - AI Guide",
      description:
        "Read the AI Guide terms of use. By using AI Guide you agree to these terms governing your use of the app and website.",
      path: "/terms",
    }),
    links: buildLinks("/terms"),
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="Last updated: May 19, 2026"
      />
      <Section className="!pt-0">
        <article className="max-w-3xl mx-auto space-y-8 text-sm leading-7">

          <div className="glass rounded-2xl p-6 space-y-3 text-muted-foreground">
            <p><span className="text-white font-medium">App name:</span> AI Guide</p>
            <p><span className="text-white font-medium">Website:</span> aiguidia.com</p>
            <p><span className="text-white font-medium">Owner:</span> itkeys.net</p>
            <p><span className="text-white font-medium">Contact:</span> contact@itkeys.net</p>
          </div>

          <LegalSection title="1. Acceptance of Terms">
            <p>By downloading, accessing, or using AI Guide, you agree to these Terms of Use.</p>
            <p>If you do not agree with these Terms, do not use the app.</p>
          </LegalSection>

          <LegalSection title="2. About AI Guide">
            <p>
              AI Guide is an educational app that helps users learn about artificial intelligence tools through guides, lessons, comparisons, quizzes, and related learning content.
            </p>
            <p>The app may include:</p>
            <ul>
              <li>AI tool guides;</li>
              <li>learning paths;</li>
              <li>quizzes;</li>
              <li>comparison content;</li>
              <li>news or informational content;</li>
              <li>advertisements;</li>
              <li>account and progress tracking features.</li>
            </ul>
          </LegalSection>

          <LegalSection title="3. Internet Connection Requirement">
            <p>AI Guide requires an active internet connection.</p>
            <p>
              The app may stop working, restrict access, or show an offline message when no internet connection is available. This is because the app needs internet access to load content, authenticate users, sync progress, and display ads.
            </p>
            <p>
              You are responsible for your own internet connection and any data charges from your mobile carrier or internet provider.
            </p>
          </LegalSection>

          <LegalSection title="4. Accounts">
            <p>
              Some features may require an account, including progress tracking, bookmarks, streaks, profile features, and syncing across devices.
            </p>
            <p>You agree to:</p>
            <ul>
              <li>provide accurate account information;</li>
              <li>keep your login details secure;</li>
              <li>not share your account with unauthorized users;</li>
              <li>notify us if you believe your account has been accessed without permission.</li>
            </ul>
            <p>We may suspend or delete accounts that violate these Terms or misuse the app.</p>
          </LegalSection>

          <LegalSection title="5. Educational Use Only">
            <p>AI Guide is provided for educational and informational purposes only.</p>
            <p>
              The app does not provide professional, legal, financial, medical, or business advice. You should not rely on the app as your only source of information when making important decisions.
            </p>
          </LegalSection>

          <LegalSection title="6. Course Content Disclaimer">
            <p>
              The lessons and guides in AI Guide are prepared using publicly available sources, mainly official documentation and official websites of AI tools and companies when available.
            </p>
            <p>
              However, AI tools may change quickly. Features, prices, limits, terms, model behavior, and documentation may change at any time.
            </p>
            <p>
              We do our best to keep content accurate and useful, but we do not guarantee that all information is always complete, current, or error-free.
            </p>
            <p>
              You should always check the official website or official documentation of each AI tool before relying on the information.
            </p>
          </LegalSection>

          <LegalSection title="7. No Official Affiliation">
            <p>
              AI Guide may mention third-party AI tools, platforms, products, logos, or company names for educational purposes.
            </p>
            <p>All trademarks, logos, and brand names belong to their respective owners.</p>
            <p>
              AI Guide is not affiliated with, endorsed by, sponsored by, or officially connected to OpenAI, Anthropic, Perplexity, Meta, DeepSeek, Notion, or any other third-party company unless clearly stated.
            </p>
          </LegalSection>

          <LegalSection title="8. Third-Party Services">
            <p>AI Guide uses third-party services, including:</p>
            <ul>
              <li>Supabase for login, authentication, database storage, course content, and progress tracking;</li>
              <li>Google AdMob for advertising.</li>
            </ul>
            <p>
              Your use of the app may also be subject to the privacy policies and terms of those third-party services.
            </p>
            <p>
              We are not responsible for the content, policies, actions, or availability of third-party services.
            </p>
          </LegalSection>

          <LegalSection title="9. Advertisements">
            <p>AI Guide may display advertisements through Google AdMob.</p>
            <p>
              Ads help support the app and keep content available. We do not guarantee the accuracy, quality, or suitability of products or services shown in ads.
            </p>
            <p>Any interaction with an advertisement is between you and the advertiser.</p>
          </LegalSection>

          <LegalSection title="10. User Conduct">
            <p>You agree not to:</p>
            <ul>
              <li>use the app for illegal purposes;</li>
              <li>attempt to hack, damage, overload, or disrupt the app;</li>
              <li>copy, scrape, or misuse app content without permission;</li>
              <li>reverse engineer or attempt to extract the source code;</li>
              <li>create fake accounts or impersonate another person;</li>
              <li>use the app in a way that harms other users or the service.</li>
            </ul>
          </LegalSection>

          <LegalSection title="11. Intellectual Property">
            <p>
              All original content, design, layout, text, graphics, and app features created by AI Guide are owned by itkeys.net or licensed to us.
            </p>
            <p>You may use the app for personal learning purposes only.</p>
            <p>
              You may not copy, resell, redistribute, or reproduce our content without written permission, except where allowed by law.
            </p>
          </LegalSection>

          <LegalSection title="12. Third-Party Content and Trademarks">
            <p>
              Some content may refer to third-party products, services, documentation, names, or trademarks.
            </p>
            <p>
              Those materials remain the property of their respective owners. Their mention in AI Guide does not imply endorsement, partnership, or official approval.
            </p>
          </LegalSection>

          <LegalSection title="13. App Availability">
            <p>We may update, modify, pause, or discontinue any part of the app at any time.</p>
            <p>
              We do not guarantee that the app will always be available, uninterrupted, secure, or free from errors.
            </p>
          </LegalSection>

          <LegalSection title="14. Limitation of Liability">
            <p>To the maximum extent allowed by law, AI Guide and its owner will not be responsible for:</p>
            <ul>
              <li>indirect or accidental damages;</li>
              <li>loss of data;</li>
              <li>loss of progress;</li>
              <li>incorrect or outdated educational content;</li>
              <li>issues caused by third-party services;</li>
              <li>problems caused by internet connection failure;</li>
              <li>decisions made based on app content.</li>
            </ul>
            <p>Use the app at your own risk.</p>
          </LegalSection>

          <LegalSection title="15. Account Suspension or Termination">
            <p>
              We may suspend or terminate access to the app if you violate these Terms, misuse the app, create risk for other users, or break applicable laws.
            </p>
            <p>You may stop using the app at any time.</p>
          </LegalSection>

          <LegalSection title="16. Changes to These Terms">
            <p>We may update these Terms of Use from time to time.</p>
            <p>
              When we update them, we will change the "Last updated" date above. Continued use of the app after changes means you accept the updated Terms.
            </p>
          </LegalSection>

          <LegalSection title="17. Governing Law">
            <p>
              These Terms are governed by applicable law. Consumer protection laws of your country may also apply.
            </p>
          </LegalSection>

          <LegalSection title="18. Contact Us">
            <p>For questions about these Terms, contact us at:</p>
            <div className="mt-3 space-y-1">
              <p><span className="text-white font-medium">itkeys.net</span></p>
              <p>Email: <a href="mailto:contact@itkeys.net" className="text-[#16D9F5] hover:text-white transition-colors">contact@itkeys.net</a></p>
              <p>Website: <a href="https://aiguidia.com" target="_blank" rel="noopener noreferrer" className="text-[#16D9F5] hover:text-white transition-colors">aiguidia.com</a></p>
            </div>
          </LegalSection>

        </article>
      </Section>
    </SiteLayout>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-6 space-y-3">
      <h2 className="text-white text-base font-bold">{title}</h2>
      <div className="text-muted-foreground space-y-3 [&_ul]:mt-2 [&_ul]:space-y-1.5 [&_ul]:pl-4 [&_li]:list-disc [&_li]:marker:text-[#16D9F5]">
        {children}
      </div>
    </div>
  );
}
