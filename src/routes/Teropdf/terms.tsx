import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/Teropdf/terms")({
  head: () => ({
    meta: buildMeta({
      title: "Terms of Use - TeroPDF",
      description:
        "Read the TeroPDF Terms of Use governing access to the TeroPDF app and related document-processing services.",
      path: "/Teropdf/terms",
    }),
    links: buildLinks("/Teropdf/terms"),
  }),
  component: TeroPdfTermsPage,
});

function TeroPdfTermsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="TeroPDF Terms of Use"
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

          <LegalSection title="1. Agreement to These Terms">
            <p>
              These Terms of Use ("Terms") form a legally binding agreement between you and
              IT-Keys LLC ("IT-Keys," "we," "us," or "our") governing your access to and use of
              the TeroPDF mobile application, websites and web applications, document-processing
              features, accounts, subscriptions, customer support, and any related service that
              links to these Terms.
            </p>
            <p>
              By downloading, installing, accessing, purchasing, or using the Services, you agree
              to these Terms and acknowledge that you have read our Privacy Policy.
            </p>
            <p>If you do not agree, do not access or use the Services.</p>
          </LegalSection>

          <LegalSection title="2. Eligibility">
            <p>You must be legally capable of entering into a binding agreement.</p>
            <p>
              If you are below the legal age of majority where you live, you may use TeroPDF only
              with the permission and supervision of a parent or legal guardian.
            </p>
            <p>TeroPDF is not directed to children under 13.</p>
          </LegalSection>

          <LegalSection title="3. About TeroPDF">
            <p>TeroPDF is a document-productivity application that may provide features such as:</p>
            <ul>
              <li>viewing, merging, splitting, and organizing PDFs;</li>
              <li>rotating, cropping, extracting, and deleting pages;</li>
              <li>adding page numbers, watermarks, annotations, and redactions;</li>
              <li>compressing and optimizing PDFs;</li>
              <li>converting images, text, Markdown, CSV files, and PDF pages;</li>
              <li>scanning documents, performing OCR, and editing metadata;</li>
              <li>filling forms, adding signatures or initials, and protecting or unlocking documents;</li>
              <li>exporting or sharing processed documents.</li>
            </ul>
            <p>
              Features may vary according to device, operating system, country, application
              version, subscription plan, file format, technical limitations, applicable law, and
              availability of third-party infrastructure.
            </p>
          </LegalSection>

          <LegalSection title="4. License to Use TeroPDF">
            <p>
              Subject to these Terms, IT-Keys grants you a limited, personal, non-exclusive,
              non-transferable, non-sublicensable, and revocable license to install and use
              TeroPDF on devices you own or control.
            </p>
            <p>This license is solely for lawful personal or internal business use.</p>
            <p>You may not:</p>
            <ul>
              <li>sell, rent, lease, sublicense, or distribute the application;</li>
              <li>reverse engineer, decompile, or attempt to derive source code except where law permits;</li>
              <li>circumvent technical protections or subscription restrictions;</li>
              <li>modify or create derivative works from the application;</li>
              <li>remove copyright, trademark, or ownership notices;</li>
              <li>access non-public systems, APIs, or infrastructure without authorization.</li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Accounts and Your Content">
            <p>Certain features may require an account.</p>
            <p>You agree to provide accurate information and keep it reasonably current.</p>
            <p>As between you and IT-Keys, you retain ownership of documents and other content you submit or create through TeroPDF ("User Content").</p>
            <p>
              You grant IT-Keys and its contracted service providers a limited, non-exclusive
              license to receive, copy, transmit, store temporarily, convert, analyze, modify,
              render, display to you, return, and delete your User Content solely as reasonably
              necessary to provide the feature you requested, maintain and secure the Services,
              troubleshoot an operation, comply with law, or enforce these Terms.
            </p>
            <p>You represent and warrant that you have the right and authority to process the content through TeroPDF.</p>
          </LegalSection>

          <LegalSection title="6. Acceptable Use">
            <p>You may use TeroPDF only for lawful purposes.</p>
            <p>You may not use the Services to:</p>
            <ul>
              <li>infringe copyright, privacy, confidentiality, or other rights;</li>
              <li>forge, falsify, or fraudulently alter documents;</li>
              <li>unlock a password-protected PDF without authorization or another lawful basis;</li>
              <li>upload malware, malicious scripts, or unlawful content;</li>
              <li>overload, disrupt, or abuse the Services;</li>
              <li>bypass usage limits, payment requirements, or trials;</li>
              <li>process highly sensitive material unlawfully or without appropriate safeguards.</li>
            </ul>
          </LegalSection>

          <LegalSection title="7. Local and Remote Processing">
            <p>
              Some features may operate entirely on your device. Other features may require remote
              infrastructure or third-party processing.
            </p>
            <p>
              You authorize the necessary transfer and temporary processing of a file when you
              select a feature that requires remote processing.
            </p>
            <p>
              You are responsible for deciding whether remote processing is appropriate for a
              particular document.
            </p>
          </LegalSection>

          <LegalSection title="8. Storage, Accuracy, Signatures, and Passwords">
            <p>
              TeroPDF is not a permanent document-storage or backup service unless a feature
              expressly states otherwise. You are responsible for keeping independent copies of
              important files.
            </p>
            <p>
              Processing results may vary because of source quality, layout, language, encryption,
              unsupported features, or third-party limitations. You must review the result before
              relying on, publishing, signing, filing, or distributing it.
            </p>
            <p>
              Signature, redaction, form-editing, metadata-editing, password-protection, and
              unlocking features are technical tools only. They do not guarantee legal validity,
              completeness, or suitability for every official, professional, or regulated use case.
            </p>
          </LegalSection>

          <LegalSection title="9. Paid Features, Billing, and Fair Use">
            <p>
              TeroPDF may offer free features, advertising-supported features, one-time purchases,
              monthly subscriptions, annual subscriptions, free trials, promotional access, or
              business plans.
            </p>
            <p>
              Purchases made through Google Play or Apple's App Store are processed by the
              applicable store. Refund eligibility is generally determined under the store's rules,
              applicable consumer law, or any additional refund commitment we expressly provide.
            </p>
            <p>Plans may be subject to reasonable limits involving:</p>
            <ul>
              <li>file size, page count, and processing time;</li>
              <li>storage, OCR volume, and batch-processing volume;</li>
              <li>concurrent requests and supported formats;</li>
              <li>server availability and anti-abuse limits.</li>
            </ul>
          </LegalSection>

          <LegalSection title="10. Third-Party Services and Advertising">
            <p>
              The Services may interact with third-party services such as application stores,
              authentication providers, cloud-storage providers, OCR providers, payment processors,
              analytics providers, advertising providers, and customer-support services.
            </p>
            <p>
              Third-party services operate under their own terms and privacy policies. IT-Keys is
              not responsible for third-party outages, changes, files after you share them
              externally, or purchases made outside authorized channels.
            </p>
            <p>A version of TeroPDF may contain advertisements provided by third parties.</p>
          </LegalSection>

          <LegalSection title="11. Intellectual Property, Updates, and Termination">
            <p>
              The Services and all associated intellectual property, excluding User Content, belong
              to IT-Keys or its licensors. This includes the TeroPDF software, design, text,
              graphics, documentation, branding, and service architecture.
            </p>
            <p>
              We may provide updates containing security fixes, bug fixes, interface changes, new
              features, removed features, compatibility changes, or performance improvements.
            </p>
            <p>
              We may restrict, suspend, or terminate access where reasonably necessary because of a
              material violation of these Terms, unlawful use, a security risk, fraud, non-payment,
              service disruption, or legal or technical necessity.
            </p>
          </LegalSection>

          <LegalSection title="12. Privacy, Warranties, and Liability">
            <p>Our Privacy Policy explains how we process personal information and forms part of your relationship with us.</p>
            <p>
              To the maximum extent permitted by law, the Services are provided on an "as is" and
              "as available" basis. We disclaim warranties including merchantability, fitness for a
              particular purpose, title, non-infringement, accuracy, availability, reliability,
              security, and compatibility.
            </p>
            <p>
              To the maximum extent permitted by applicable law, IT-Keys and its affiliates,
              officers, employees, contractors, licensors, and service providers will not be liable
              for indirect, incidental, special, consequential, exemplary, or punitive damages, or
              for loss of documents, data, revenue, profits, business, opportunity, reputation,
              productivity, confidentiality, or expected savings.
            </p>
            <p>
              This limitation does not apply where liability cannot legally be limited, including
              where applicable for fraud, willful misconduct, gross negligence, death, personal
              injury, or mandatory consumer rights.
            </p>
          </LegalSection>

          <LegalSection title="13. General Terms">
            <p>
              These Terms do not limit rights that cannot be waived under applicable consumer law.
            </p>
            <p>
              If a provision of these Terms is held invalid or unenforceable, it will be enforced
              to the maximum extent permitted and the remaining provisions will remain in effect.
            </p>
            <p>
              Failure to enforce a provision does not waive our right to enforce it later. These
              Terms, the Privacy Policy, and any applicable purchase terms constitute the entire
              agreement between you and IT-Keys concerning TeroPDF.
            </p>
          </LegalSection>

          <LegalSection title="14. Changes to These Terms">
            <p>
              We may update these Terms to reflect new features, subscription changes, security
              needs, legal requirements, business changes, or changes to third-party services.
            </p>
            <p>
              The updated Terms will include a revised "Last updated" date. Where required, we will
              provide notice of material changes.
            </p>
            <p>
              Continued use after the effective date constitutes acceptance where permitted by law.
              If you do not agree to the updated Terms, you must stop using the Services and cancel
              any subscription before its next renewal.
            </p>
          </LegalSection>

          <LegalSection title="15. Contact">
            <p>Questions about these Terms may be sent to:</p>
            <div className="mt-3 space-y-1">
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
                  href="https://aiguidia.com/Teropdf/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#16D9F5] hover:text-white transition-colors"
                >
                  aiguidia.com/Teropdf/terms
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
