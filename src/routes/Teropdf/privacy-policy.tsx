import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/Teropdf/privacy-policy")({
  head: () => ({
    meta: buildMeta({
      title: "Privacy Policy - TeroPDF",
      description:
        "Read the TeroPDF privacy policy and learn how IT-Keys processes information when you use the TeroPDF app and related services.",
      path: "/Teropdf/privacy-policy",
    }),
    links: buildLinks("/Teropdf/privacy-policy"),
  }),
  component: TeroPdfPrivacyPolicyPage,
});

function TeroPdfPrivacyPolicyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="TeroPDF Privacy Policy"
        description="Effective date: July 11, 2026. Last updated: July 11, 2026."
      />
      <Section className="!pt-0">
        <article className="mx-auto max-w-3xl space-y-8 text-sm leading-7">
          <div className="glass rounded-2xl p-6 space-y-3 text-muted-foreground">
            <p><span className="text-white font-medium">Application:</span> TeroPDF</p>
            <p><span className="text-white font-medium">Company:</span> IT-Keys LLC</p>
            <p><span className="text-white font-medium">Website:</span> aiguidia.com/Teropdf</p>
            <p><span className="text-white font-medium">Contact:</span> contact@itkeys.net</p>
          </div>

          <LegalSection title="1. Introduction">
            <p>
              This Privacy Policy explains how IT-Keys LLC ("IT-Keys," "we," "us," or "our")
              collects, accesses, uses, stores, protects, discloses, and otherwise processes
              information when you use the TeroPDF mobile application, related websites and web
              applications, customer-support services, and any other product, feature, or service
              that links to this Privacy Policy.
            </p>
            <p>
              TeroPDF provides tools for creating, viewing, scanning, organizing, editing,
              converting, compressing, signing, protecting, unlocking, annotating, redacting, and
              otherwise working with PDF files and related document formats.
            </p>
            <p>
              This Privacy Policy applies only to information processed through the Services. It
              does not apply to third-party websites, applications, or services that have their own
              privacy policies.
            </p>
          </LegalSection>

          <LegalSection title="2. Data Controller">
            <p>For purposes of applicable data-protection laws, the controller responsible for your personal information is:</p>
            <div className="space-y-1">
              <p><span className="text-white font-medium">IT-Keys LLC</span></p>
              <p>Application: TeroPDF</p>
              <p>
                Email:{" "}
                <a href="mailto:contact@itkeys.net" className="text-[#16D9F5] hover:text-white transition-colors">
                  contact@itkeys.net
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://aiguidia.com/Teropdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#16D9F5] hover:text-white transition-colors"
                >
                  aiguidia.com/Teropdf
                </a>
              </p>
            </div>
            <p>
              Where IT-Keys processes information only on the instructions of another
              organization, that organization may be the controller and IT-Keys may act as its
              service provider or processor.
            </p>
          </LegalSection>

          <LegalSection title="3. Information We Process">
            <p>
              The information processed by TeroPDF depends on the features you use, the
              permissions you grant, the version of the application, your device settings, and
              whether particular operations are performed locally or through remote infrastructure.
            </p>

            <h3 className="mt-4 font-semibold text-white">Documents and user content</h3>
            <p>When you use document-processing features, TeroPDF may access or process:</p>
            <ul>
              <li>PDF files;</li>
              <li>photographs and scanned images;</li>
              <li>text files, Markdown files, CSV files, and form data;</li>
              <li>signatures or initials that you add to a document;</li>
              <li>annotations, comments, drawings, stamps, and highlights;</li>
              <li>watermarks, document metadata, OCR input, and extracted text;</li>
              <li>file names, file types, page numbers, and file sizes;</li>
              <li>other content you choose to import, create, edit, convert, or export.</li>
            </ul>
            <p>
              Depending on the selected feature, document processing may occur entirely on your
              device, through temporary processing on infrastructure operated by us, or through a
              contracted document-processing, OCR, hosting, storage, or conversion provider.
            </p>

            <h3 className="mt-4 font-semibold text-white">Account information</h3>
            <p>If TeroPDF offers account creation or authentication, we may process:</p>
            <ul>
              <li>your name and email address;</li>
              <li>account identifier and profile information;</li>
              <li>authentication provider, login date, and account status;</li>
              <li>subscription or entitlement status;</li>
              <li>account preferences and language or regional settings.</li>
            </ul>

            <h3 className="mt-4 font-semibold text-white">Device permissions and local storage</h3>
            <p>TeroPDF may request device access when necessary to provide a feature you choose.</p>
            <ul>
              <li>Camera access may be used to scan documents or create PDFs from captured images.</li>
              <li>Photo or media access may be used to import images, add signatures, or save exports.</li>
              <li>Files or storage access may be used to open, save, import, export, and manage documents.</li>
            </ul>
            <p>
              TeroPDF does not require contacts, precise location, call logs, or SMS access for
              its standard PDF-processing functionality.
            </p>

            <h3 className="mt-4 font-semibold text-white">Technical, device, usage, and purchase information</h3>
            <p>We or our service providers may process technical and usage information such as:</p>
            <ul>
              <li>device manufacturer and model;</li>
              <li>operating-system type and version;</li>
              <li>application version, language, region, screen size, time zone, and network type;</li>
              <li>IP address and approximate location inferred from IP;</li>
              <li>crash reports, diagnostic logs, performance information, and error codes;</li>
              <li>features used, operation types, general file-size range, and processing duration;</li>
              <li>purchase identifiers, subscription status, renewal dates, and refund or cancellation status.</li>
            </ul>

            <h3 className="mt-4 font-semibold text-white">Support information</h3>
            <p>When you contact us, we may process:</p>
            <ul>
              <li>your name and email address;</li>
              <li>message content and screenshots;</li>
              <li>documents you voluntarily attach;</li>
              <li>device, application, and purchase information related to your request.</li>
            </ul>
          </LegalSection>

          <LegalSection title="4. How We Use Information">
            <p>We may use information to:</p>
            <ul>
              <li>provide requested PDF and document-processing features;</li>
              <li>authenticate users and manage account sessions;</li>
              <li>deliver updates, troubleshoot issues, and improve performance;</li>
              <li>protect against abuse, fraud, malware, and unauthorized access;</li>
              <li>measure feature usefulness and improve conversion quality or interface design;</li>
              <li>respond to questions and provide customer support;</li>
              <li>send transactional, security, or legally required communications;</li>
              <li>comply with legal obligations and protect our rights.</li>
            </ul>
            <p>
              Private document content will not be used to train a general-purpose artificial
              intelligence model unless we provide a separate disclosure and obtain any consent
              required by applicable law.
            </p>
          </LegalSection>

          <LegalSection title="5. Legal Bases for Processing">
            <p>Where applicable law requires a legal basis, we may rely on:</p>
            <ul>
              <li>performance of a contract to provide the features or subscription you request;</li>
              <li>your consent for optional permissions, certain analytics, or marketing where required;</li>
              <li>our legitimate interests in securing, operating, and improving the Services;</li>
              <li>legal obligations such as tax, accounting, regulatory, or law-enforcement requirements;</li>
              <li>protection of vital interests or legal claims in limited circumstances.</li>
            </ul>
          </LegalSection>

          <LegalSection title="6. Document Processing and Temporary Files">
            <h3 className="mt-4 font-semibold text-white">On-device processing</h3>
            <p>
              Where a feature operates locally, the selected document remains on your device unless
              you choose to save, export, share, synchronize, or upload it.
            </p>

            <h3 className="mt-4 font-semibold text-white">Remote processing</h3>
            <p>Some operations may require files to be transmitted securely to remote infrastructure.</p>
            <ul>
              <li>The file is transmitted only to complete the operation you requested.</li>
              <li>Access is limited to systems and authorized providers that require it.</li>
              <li>We do not permit providers to use document content for unrelated purposes.</li>
              <li>Temporary copies are retained only for the period reasonably required for processing, security, troubleshooting, or legal compliance.</li>
            </ul>

            <h3 className="mt-4 font-semibold text-white">Saved or synchronized files</h3>
            <p>
              If TeroPDF offers optional cloud storage, history, backup, or synchronization, files
              you intentionally save may remain until you delete them, delete your account, the
              applicable storage period expires, or retention is required by law.
            </p>

            <h3 className="mt-4 font-semibold text-white">Document passwords</h3>
            <p>
              A password entered to open, protect, or unlock a document is used only to perform the
              requested operation. You are responsible for remembering passwords applied to your
              files.
            </p>
          </LegalSection>

          <LegalSection title="7. Automated Technologies, OCR, and AI">
            <p>
              TeroPDF may use automated technologies to recognize text, classify document elements,
              improve scans, detect page boundaries, remove backgrounds, compress content, or
              perform other requested operations.
            </p>
            <p>Automated results may be incomplete or inaccurate, so you should review important output before relying on it.</p>
            <ul>
              <li>Document content is processed only to provide the selected feature.</li>
              <li>Document content is not used for targeted advertising.</li>
              <li>Document content is not used to train general-purpose AI models unless separately disclosed.</li>
              <li>Automated processing does not produce legal or similarly significant decisions about you.</li>
            </ul>
          </LegalSection>

          <LegalSection title="8. Sharing and Disclosure of Information">
            <p>We may disclose information only as described below.</p>
            <ul>
              <li>Service providers that support hosting, authentication, storage, OCR, analytics, support, or fraud prevention.</li>
              <li>App stores and payment providers that process purchases and subscriptions under their own policies.</li>
              <li>Third parties you choose when using your device's share function.</li>
              <li>Legal or safety disclosures where reasonably necessary to comply with law or protect rights and security.</li>
              <li>Business transaction counterparties in connection with a merger, acquisition, financing, or sale.</li>
            </ul>
            <p>
              We may also use and disclose aggregated or de-identified information that cannot
              reasonably identify an individual.
            </p>
          </LegalSection>

          <LegalSection title="9. Advertising and Tracking">
            <p>
              A version of TeroPDF may include advertising. Where advertising is enabled,
              advertising partners may process information such as advertising identifiers, IP
              address, device information, ad impressions and interactions, approximate location,
              and consent choices.
            </p>
            <p>
              Advertising partners are not permitted to access the contents of your private
              documents through TeroPDF.
            </p>
            <p>
              Where legally required, TeroPDF will request consent before enabling personalized
              advertising or non-essential tracking.
            </p>
          </LegalSection>

          <LegalSection title="10. Data Retention and Security">
            <p>
              We retain information only for as long as reasonably necessary for the purposes
              described in this Privacy Policy, including to provide services, maintain security,
              comply with law, resolve disputes, and enforce agreements.
            </p>
            <p>
              We use reasonable administrative, technical, and organizational safeguards designed to
              protect information, including controls such as encryption in transit, access
              controls, authentication controls, secure development practices, monitoring, and
              automated deletion of temporary files where appropriate.
            </p>
            <p>
              No storage or transmission method is completely secure, and we cannot guarantee
              absolute security.
            </p>
          </LegalSection>

          <LegalSection title="11. International Transfers and Privacy Rights">
            <p>
              IT-Keys and its service providers may process information in countries other than the
              country in which you reside. Where required, we use an appropriate transfer mechanism
              recognized by applicable law.
            </p>
            <p>Depending on your location and applicable law, you may have the right to:</p>
            <ul>
              <li>request access to personal information;</li>
              <li>request correction or deletion;</li>
              <li>restrict or object to certain processing;</li>
              <li>withdraw consent;</li>
              <li>receive information in a portable format;</li>
              <li>opt out of targeted advertising, sale, or sharing where applicable;</li>
              <li>appeal a denied privacy request or lodge a complaint.</li>
            </ul>
            <p>
              To submit a request, email{" "}
              <a href="mailto:contact@itkeys.net" className="text-[#16D9F5] hover:text-white transition-colors">
                contact@itkeys.net
              </a>{" "}
              with the subject line "TeroPDF Privacy Request."
            </p>
          </LegalSection>

          <LegalSection title="12. Children, Third Parties, and Business Use">
            <p>
              TeroPDF is a general-purpose productivity application and is not directed to children
              under 13. We do not knowingly collect personal information from children under 13
              without legally valid parental consent.
            </p>
            <p>
              TeroPDF may allow you to open, save, or share documents through third-party services.
              We do not control those third parties' privacy or security practices.
            </p>
            <p>
              If you use TeroPDF through an employer, school, or other organization, that
              organization may control account access, retention settings, and information
              associated with the organization-managed environment.
            </p>
          </LegalSection>

          <LegalSection title="13. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy to reflect new features, changes to service
              providers, security improvements, legal requirements, or business changes.
            </p>
            <p>
              The updated policy will display a revised "Last updated" date. Where required, we
              will provide additional notice through the application, website, email, or another
              appropriate method.
            </p>
          </LegalSection>

          <LegalSection title="14. Contact Us">
            <p>For privacy questions, requests, or complaints, contact:</p>
            <div className="mt-3 space-y-1">
              <p><span className="text-white font-medium">IT-Keys LLC</span></p>
              <p>TeroPDF Privacy Team</p>
              <p>
                Email:{" "}
                <a href="mailto:contact@itkeys.net" className="text-[#16D9F5] hover:text-white transition-colors">
                  contact@itkeys.net
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://aiguidia.com/Teropdf/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#16D9F5] hover:text-white transition-colors"
                >
                  aiguidia.com/Teropdf/privacy-policy
                </a>
              </p>
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
      <h2 className="text-base font-bold text-white">{title}</h2>
      <div className="space-y-3 text-muted-foreground [&_ul]:mt-2 [&_ul]:space-y-1.5 [&_ul]:pl-4 [&_li]:list-disc [&_li]:marker:text-[#16D9F5]">
        {children}
      </div>
    </div>
  );
}
