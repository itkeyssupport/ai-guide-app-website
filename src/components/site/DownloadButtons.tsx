import { GOOGLE_PLAY_URL, isPlaceholder } from "@/config/site";
import { Smartphone } from "lucide-react";

type Variant = "default" | "compact";

export function DownloadButtons({ variant = "default" }: { variant?: Variant }) {
  const playReady = !isPlaceholder(GOOGLE_PLAY_URL);

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
    </div>
  );
}