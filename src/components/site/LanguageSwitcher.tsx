import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "@tanstack/react-router";
import { Globe, Check } from "lucide-react";

const LANGS = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
] as const;

function getTargetPath(targetLang: string, currentPath: string): string {
  // Strip current language prefix
  let base = currentPath;
  if (base.startsWith("/fr")) base = base.slice(3) || "/";
  else if (base.startsWith("/ar")) base = base.slice(3) || "/";

  if (targetLang === "en") return base || "/";
  if (targetLang === "fr") return base === "/" ? "/fr" : `/fr${base}`;
  if (targetLang === "ar") return base === "/" ? "/ar" : `/ar${base}`;
  return "/";
}

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const active = pathname.startsWith("/ar")
    ? "ar"
    : pathname.startsWith("/fr")
    ? "fr"
    : "en";

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-white hover:bg-white/6 transition-colors"
        aria-label="Switch language"
        aria-expanded={open}
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase text-xs font-semibold tracking-wide">{active}</span>
      </button>

      {open && (
        <div className="absolute top-full mt-2 right-0 z-50 min-w-[140px] rounded-xl border border-white/10 bg-[#07112F]/95 backdrop-blur-2xl shadow-xl shadow-black/30 py-1 overflow-hidden">
          {LANGS.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                setOpen(false);
                navigate({ to: getTargetPath(lang.code, pathname) as any });
              }}
              className="flex w-full items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-white/6 transition-colors"
            >
              <span className={`flex-1 text-left ${active === lang.code ? "text-white font-semibold" : "text-muted-foreground"}`}>
                {lang.label}
              </span>
              {active === lang.code && <Check className="h-3.5 w-3.5 text-[#16D9F5]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
