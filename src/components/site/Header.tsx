import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Download } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { useCurrentLang } from "@/hooks/useCurrentLang";
import { translations } from "@/i18n/translations";
import { NAV_LINKS, GOOGLE_PLAY_URL } from "@/config/site";

function langPrefix(lang: string) {
  if (lang === "fr") return "/fr";
  if (lang === "ar") return "/ar";
  return "";
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const lang = useCurrentLang();
  const T = translations[lang];
  const prefix = langPrefix(lang);

  const navItems = NAV_LINKS.map((l, i) => {
    const base = l.to === "/" ? "" : l.to;
    const to = prefix ? (base ? `${prefix}${base}` : prefix) : (l.to as string);
    return { to, label: T.navLabels[i] ?? l.label };
  });


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07112F]/80 backdrop-blur-2xl border-b border-white/8 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to={prefix || "/"} aria-label="AI Guide home" className="transition-opacity hover:opacity-85">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main">
            {navItems.map((l) => (
              <Link
                key={l.to}
                to={l.to as any}
                activeOptions={{ exact: l.to === "/" || l.to === "/fr" || l.to === "/ar" }}
                className="relative px-3.5 py-2 text-sm text-muted-foreground hover:text-white transition-colors rounded-lg hover:bg-white/6"
                activeProps={{
                  className: "relative px-3.5 py-2 text-sm text-white rounded-lg bg-white/8",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-1">
            <ThemeToggle />
            <LanguageSwitcher />
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-[#07112F] hover:opacity-90 transition-opacity shadow-md shadow-purple-500/20"
            >
              <Download className="h-3.5 w-3.5" />
              {T.headerDownload}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/8 bg-[#07112F]/95 backdrop-blur-2xl">
          <nav
            className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile"
          >
            {navItems.map((l) => (
              <Link
                key={l.to}
                to={l.to as any}
                className="px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-white hover:bg-white/6 transition-colors"
                activeProps={{ className: "px-4 py-2.5 rounded-xl text-sm text-white bg-white/8" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 px-2">
              <ThemeToggle />
              <LanguageSwitcher inline />
            </div>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-[#07112F] shadow-md"
            >
              <Download className="h-4 w-4" />
              {T.headerDownload}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
