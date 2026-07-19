import { GOOGLE_PLAY_URL, APP_STORE_URL, isPlaceholder } from "@/config/site";
import { Apple, Smartphone } from "lucide-react";

type Variant = "default" | "compact";

export function DownloadButtons({ variant = "default" }: { variant?: Variant }) {
  const playReady = !isPlaceholder(GOOGLE_PLAY_URL);
  const appStoreReady = !isPlaceholder(APP_STORE_URL);

  const base =
    variant === "compact"
      ? "px-4 py-2 text-sm"
      : "px-6 py-3.5 text-base";

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {playReady ? (
        <a
          href={GOOGLE_PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand font-semibold text-[#07112F] hover:opacity-90 transition-opacity ${base}`}
        >
          <Smartphone className="h-5 w-5" />
          Download on Google Play
        </a>
      ) : (
        <button
          type="button"
          disabled
          className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand font-semibold text-[#07112F] opacity-80 cursor-not-allowed ${base}`}
          aria-label="Google Play link coming soon"
        >
          <Smartphone className="h-5 w-5" />
          Google Play: Coming soon
        </button>
      )}

      {appStoreReady ? (
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 font-semibold text-white hover:bg-white/10 transition-colors ${base}`}
        >
          <Apple className="h-5 w-5" />
          Download on the App Store
        </a>
      ) : (
        <button
          type="button"
          disabled
          className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 font-semibold text-white opacity-80 cursor-not-allowed ${base}`}
          aria-label="App Store link coming soon"
        >
          <Apple className="h-5 w-5" />
          App Store: Coming soon
        </button>
      )}
    </div>
  );
}
