import { CheckCircle2 } from "lucide-react";
import { SiteLayout, Section } from "./Layout";
import { PageHero } from "./PageHero";
import { DownloadButtons } from "./DownloadButtons";
import { translations, type Lang } from "@/i18n/translations";
import { GOOGLE_PLAY_URL, SITE } from "@/config/site";

export function DownloadPageContent({ lang }: { lang: Lang }) {
  const T = translations[lang];
  const h = T.pageHeroDownload;

  return (
    <SiteLayout dir={T.dir}>
      <PageHero eyebrow={h.eyebrow} title={h.title} description={h.description} />
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="glass rounded-3xl p-8 sm:p-10 glow-purple">
            <h2 className="text-2xl font-bold text-white">{T.downloadInstallTitle}</h2>
            <p className="mt-3 text-muted-foreground">{T.downloadInstallDesc}</p>
            <ul className="mt-6 space-y-2">
              {T.downloadFeatureItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-[#16D9F5]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <DownloadButtons />
            </div>
            <p className="mt-6 text-xs text-muted-foreground">{SITE.disclaimer}</p>
          </div>

          <div className="glass rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center justify-center">
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white p-4 block hover:scale-105 transition-transform"
              aria-label="Scan QR code to download AI Guide on Google Play"
            >
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(GOOGLE_PLAY_URL)}&qzone=1&margin=4`}
                alt="QR code for AI Guide on Google Play"
                width={160}
                height={160}
                className="rounded-lg"
              />
            </a>
            <h3 className="mt-6 text-lg font-semibold text-white">{T.downloadScanTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">{T.downloadScanDesc}</p>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
