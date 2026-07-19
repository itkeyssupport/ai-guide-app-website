import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: buildMeta({
      title: "Privacy Policy - AI Guide",
      description:
        "Read the AI Guide privacy policy. Learn how we collect, use, and protect your information when you use our app and website.",
      path: "/privacy-policy",
    }),
    links: buildLinks("/privacy-policy"),
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: July 19, 2026"
      />
      <Section className="!pt-0">
        <article className="max-w-3xl mx-auto space-y-8 text-sm leading-7">

          <div className="glass rounded-2xl p-6 space-y-3 text-muted-foreground">
            <p><span className="text-white font-medium">App name:</span> AI Guide</p>
            <p><span className="text-white font-medium">Website:</span> aiguidia.com</p>
            <p><span className="text-white font-medium">Owner:</span> itkeys.net</p>
            <p><span className="text-white font-medium">Contact:</span> contact@itkeys.net</p>
          </div>

          <LegalSection title="1. Introduction">
            <p>
              This Privacy Policy explains how AI Guide collects, uses, stores, and protects information when you use our mobile application and related website.
            </p>
            <p>
              AI Guide is an educational application that helps users learn about artificial intelligence tools through guides, lessons, comparisons, quizzes, and related content.
            </p>
            <p>By using AI Guide, you agree to the practices described in this Privacy Policy.</p>
          </LegalSection>

          <LegalSection title="2. Internet Connection Requirement">
            <p>AI Guide requires an internet connection to work properly. We use internet access permission to:</p>
            <ul>
              <li>load lessons, guides, AI tool information, and course content;</li>
              <li>allow users to sign in or create an account;</li>
              <li>save and sync learning progress;</li>
              <li>display advertisements;</li>
              <li>check connection status and prevent use of the app when no internet connection is available.</li>
            </ul>
            <p>If your device is offline, some or all parts of the app may not be available until the connection is restored.</p>
          </LegalSection>

          <LegalSection title="3. Information We Collect">
            <p>We may collect the following types of information depending on how you use the app.</p>

            <h3 className="text-white font-semibold mt-4">Account Information</h3>
            <p>You can create an account or sign in using email and password, Google Sign-In, or Sign in with Apple. Depending on the method you choose, we may collect:</p>
            <ul>
              <li>email address (or a private, anonymous relay email address if you choose to hide your email with Sign in with Apple);</li>
              <li>authentication ID;</li>
              <li>display name, if provided;</li>
              <li>profile information, if provided;</li>
              <li>login and account status information.</li>
            </ul>
            <p>
              If you use Sign in with Apple, Apple shares with us only the name and email address you approve at sign-in, and we use this information solely to create and manage your AI Guide account. Authentication is handled using Supabase, which securely manages sign-in for all supported methods.
            </p>

            <h3 className="text-white font-semibold mt-4">Learning and Progress Data</h3>
            <p>To provide learning features, we may store:</p>
            <ul>
              <li>lessons or guides you open;</li>
              <li>completed lessons or pages;</li>
              <li>quiz progress and quiz results;</li>
              <li>bookmarks or saved content;</li>
              <li>streaks or learning activity;</li>
              <li>app preferences related to your learning experience.</li>
            </ul>
            <p>This information is used to save your progress and sync it across devices when you are signed in.</p>

            <h3 className="text-white font-semibold mt-4">Technical and Device Information</h3>
            <p>We and our third-party service providers may process technical information such as:</p>
            <ul>
              <li>device type;</li>
              <li>operating system;</li>
              <li>app version;</li>
              <li>crash or diagnostic information;</li>
              <li>IP address;</li>
              <li>advertising identifiers, where applicable;</li>
              <li>interaction data related to ads or app usage.</li>
            </ul>
            <p>
              Google states that the Google Mobile Ads SDK may automatically collect and share certain data for advertising, analytics, and fraud prevention, including IP address, user product interactions, diagnostic information, and device/account identifiers.
            </p>
          </LegalSection>

          <LegalSection title="4. How We Use Information">
            <p>We use information to:</p>
            <ul>
              <li>provide and improve the app;</li>
              <li>create and manage user accounts;</li>
              <li>save learning progress;</li>
              <li>sync lessons, streaks, bookmarks, and profile data;</li>
              <li>load course content from our database;</li>
              <li>display advertisements;</li>
              <li>improve app performance and fix errors;</li>
              <li>prevent fraud, abuse, or unauthorized access;</li>
              <li>comply with legal obligations.</li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Third-Party Services We Use">
            <p>AI Guide uses third-party services to operate the app.</p>

            <h3 className="text-white font-semibold mt-4">Supabase</h3>
            <p>We use Supabase for:</p>
            <ul>
              <li>user authentication;</li>
              <li>account management;</li>
              <li>storing course content;</li>
              <li>storing user progress;</li>
              <li>storing profile-related data;</li>
              <li>syncing data across devices.</li>
            </ul>
            <p>
              Supabase Auth provides authentication and user-management tools, and Supabase explains that its services may process personal information according to its privacy notice and, for customer data, as a processor under customer instructions.
            </p>

            <h3 className="text-white font-semibold mt-4">Sign in with Apple</h3>
            <p>
              We offer Sign in with Apple as a sign-in option. When you use it, Apple shares only the information you approve, typically your name and email address, or an anonymous, private relay email address if you choose to keep your email hidden. This information is used only to create and manage your account and is not used for advertising profiling.
            </p>

            <h3 className="text-white font-semibold mt-4">Google Sign-In</h3>
            <p>
              We offer Google Sign-In as a sign-in option. When you use it, Google shares the basic profile information you approve, such as your name and email address, which we use to create and manage your account.
            </p>

            <h3 className="text-white font-semibold mt-4">Google AdMob</h3>
            <p>
              We use Google AdMob to display ads in the app. AdMob may collect or process information such as advertising identifiers, IP address, device information, ad interactions, and diagnostic data.
            </p>
            <p>
              Google may use this information to provide ads, measure ad performance, prevent fraud, and improve its advertising services. Users can manage some ad personalization choices through Google and device settings.
            </p>
          </LegalSection>

          <LegalSection title="6. Advertising">
            <p>
              AI Guide may show banner ads, native ads, interstitial ads, or other ad formats through Google AdMob.
            </p>
            <p>
              Ads may be personalized or non-personalized depending on your location, consent choices, device settings, and applicable law.
            </p>
            <p>
              We do not control every ad shown by Google AdMob, but we aim to use advertising in a way that does not interfere with the main learning experience.
            </p>
            <p>
              On iOS, before any data is used to track you across other companies' apps or websites for advertising purposes, we request your permission through Apple's App Tracking Transparency framework. You can change this permission at any time in your device Settings.
            </p>
          </LegalSection>

          <LegalSection title="7. Course Content and Data Sources Disclaimer">
            <p>The educational content in AI Guide is created for informational and learning purposes.</p>
            <p>
              The sources used to prepare lessons, guides, and descriptions are mainly official documentation, official websites, and public materials from the relevant AI tools and companies when available.
            </p>
            <p>However:</p>
            <ul>
              <li>AI tools and services change frequently;</li>
              <li>official documentation may be updated after our content is published;</li>
              <li>some information may become outdated;</li>
              <li>AI Guide is not the official app of any third-party AI company unless clearly stated.</li>
            </ul>
            <p>
              Users should always check the official website or official documentation of each AI tool for the most current and authoritative information.
            </p>
          </LegalSection>

          <LegalSection title="8. No Affiliation With AI Tool Companies">
            <p>AI Guide may mention third-party AI tools, products, services, or company names for educational purposes.</p>
            <p>
              Names such as ChatGPT, Claude, Perplexity, Meta AI, DeepSeek, Notion AI, and other tool names belong to their respective owners.
            </p>
            <p>
              AI Guide is not affiliated with, endorsed by, sponsored by, or officially connected to those companies unless we clearly state otherwise.
            </p>
          </LegalSection>

          <LegalSection title="9. Data Sharing">
            <p>We do not sell your personal information directly.</p>
            <p>We may share or process information with trusted service providers only when needed to operate the app, including:</p>
            <ul>
              <li>Supabase for authentication, database, and storage;</li>
              <li>Apple and Google for Sign in with Apple and Google Sign-In authentication;</li>
              <li>Google AdMob for advertising;</li>
              <li>analytics, hosting, or security providers if added in the future;</li>
              <li>legal authorities if required by law.</li>
            </ul>
          </LegalSection>

          <LegalSection title="10. Data Retention">
            <p>
              We keep your information only as long as necessary to provide the app, maintain your account, comply with legal obligations, resolve disputes, or improve our services.
            </p>
            <p>
              If you delete your account, we will delete or anonymize personal information connected to your account, unless we are required to keep certain information for legal, security, or fraud-prevention reasons.
            </p>
          </LegalSection>

          <LegalSection title="11. Account Deletion">
            <p>You may request deletion of your account and related personal data by:</p>
            <ul>
              <li>using the account deletion option inside the app, available in your Profile; or</li>
              <li>contacting us at contact@itkeys.net.</li>
            </ul>
            <p>
              After deletion, your saved progress, profile data, and account-related information may no longer be recoverable.
            </p>
          </LegalSection>

          <LegalSection title="12. Security">
            <p>
              We take reasonable technical and organizational steps to protect your information.
            </p>
            <p>
              However, no method of internet transmission or electronic storage is completely secure. We cannot guarantee absolute security.
            </p>
          </LegalSection>

          <LegalSection title="13. Your Rights">
            <p>Depending on your location, you may have rights to:</p>
            <ul>
              <li>access your personal information;</li>
              <li>correct inaccurate information;</li>
              <li>delete your personal information;</li>
              <li>object to certain processing;</li>
              <li>withdraw consent where processing is based on consent;</li>
              <li>request a copy of your data.</li>
            </ul>
            <p>To make a request, contact us at contact@itkeys.net.</p>
          </LegalSection>

          <LegalSection title="14. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time.
            </p>
            <p>
              When we update it, we will change the "Last updated" date above. Continued use of the app after changes means you accept the updated policy.
            </p>
          </LegalSection>

          <LegalSection title="15. Contact Us">
            <p>For questions about this Privacy Policy, contact us at:</p>
            <div className="mt-3 space-y-1">
              <p><span className="text-white font-medium">itkeys.net</span></p>
              <p>Email: <a href="mailto:contact@itkeys.net" className="text-[#16D9F5] hover:text-white transition-colors">contact@itkeys.net</a></p>
              <p>Website: <a href="https://itkeys.net" target="_blank" rel="noopener noreferrer" className="text-[#16D9F5] hover:text-white transition-colors">itkeys.net</a></p>
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
