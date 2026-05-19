import { Mail, MessageSquare, Clock, Send } from "lucide-react";
import { SiteLayout, Section } from "./Layout";
import { PageHero } from "./PageHero";
import { translations, type Lang } from "@/i18n/translations";
import { SITE } from "@/config/site";

export function ContactPageContent({ lang }: { lang: Lang }) {
  const T = translations[lang];
  const h = T.pageHeroContact;

  return (
    <SiteLayout dir={T.dir}>
      <PageHero eyebrow={h.eyebrow} title={h.title} description={h.description} />

      <Section className="!pt-0">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <ContactCard
              icon={Mail}
              title={T.contactEmailTitle}
              description={T.contactEmailDesc}
              action={
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#16D9F5] hover:text-white transition-colors"
                >
                  {SITE.email}
                </a>
              }
            />
            <ContactCard icon={MessageSquare} title={T.contactFeedbackTitle} description={T.contactFeedbackDesc} />
            <ContactCard icon={Clock} title={T.contactResponseTitle} description={T.contactResponseDesc} />

            <div className="glass rounded-2xl p-5">
              <p className="text-xs text-muted-foreground leading-relaxed">
                AI Guide is operated at{" "}
                <span className="text-white font-medium">aiguidia.com</span>. We
                are an independent educational product and are not affiliated with
                any of the AI tools mentioned in the app.
              </p>
            </div>
          </div>

          <form
            className="lg:col-span-3 glass rounded-2xl p-6 sm:p-8 space-y-5"
            action={`https://formsubmit.co/${SITE.email}`}
            method="POST"
          >
            <input type="hidden" name="_subject" value="New message from aiguidia.com" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={`${SITE.domain}/contact?sent=1`} />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} aria-hidden="true" />

            <div>
              <h2 className="text-xl font-bold text-white">{T.contactFormTitle}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{T.contactFormDesc}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label={T.contactFieldName} name="name" placeholder={T.contactNamePlaceholder} required />
              <Field label={T.contactFieldEmail} name="email" type="email" placeholder={T.contactEmailPlaceholder} required />
            </div>

            <Field label={T.contactFieldSubject} name="subject" placeholder={T.contactSubjectPlaceholder} required />

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                {T.contactFieldMessage}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder={T.contactMessagePlaceholder}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#16D9F5]/50 focus:border-[#16D9F5]/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-[#07112F] hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20 w-full sm:w-auto"
            >
              <Send className="h-4 w-4" />
              {T.contactSubmitButton}
            </button>

            <p className="text-xs text-muted-foreground">
              {T.contactConsentText}{" "}
              <span className="text-white/70">{SITE.email}</span>.
            </p>
          </form>
        </div>
      </Section>
    </SiteLayout>
  );
}

function ContactCard({
  icon: Icon,
  title,
  description,
  action,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#16D9F5]/10 text-[#16D9F5] mb-3">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{description}</p>
      {action}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-white mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#16D9F5]/50 focus:border-[#16D9F5]/50 transition-colors"
      />
    </div>
  );
}
