import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { SITE } from "@/config/site";
import { Mail } from "lucide-react";
import { useCurrentLang } from "@/hooks/useCurrentLang";
import { translations } from "@/i18n/translations";

const PRODUCT_BASE = ["/features", "/ai-tools", "/compare", "/learn", "/download"];
const COMPANY_BASE = ["/contact", "/privacy-policy", "/terms", "/delete-account"];
const RESOURCES_BASE = ["/learn", "/compare", "/ai-tools", "/features"];

// Routes that have translated versions
const TRANSLATED_ROUTES = new Set(["/features", "/ai-tools", "/compare", "/learn", "/download", "/contact", "/privacy-policy", "/terms", "/delete-account"]);

export function Footer() {
  const lang = useCurrentLang();
  const T = translations[lang];
  const p = lang === "fr" ? "/fr" : lang === "ar" ? "/ar" : "";

  function prefixed(route: string) {
    return p && TRANSLATED_ROUTES.has(route) ? `${p}${route}` : route;
  }

  const PRODUCT_ROUTES = PRODUCT_BASE.map(prefixed);
  const COMPANY_ROUTES = COMPANY_BASE.map(prefixed);
  const RESOURCES_ROUTES = RESOURCES_BASE.map(prefixed);

  return (
    <footer className="border-t border-white/8 mt-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7A4DFF]/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">

        {/* Grid: 2 cols on mobile, 5 cols on desktop */}
        <div className="grid gap-8 grid-cols-2 md:grid-cols-5">

          {/* Brand — full width on mobile, 2/5 on desktop */}
          <div className="col-span-2 md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              {T.footerTagline}
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#16D9F5] transition-colors"
            >
              <Mail className="h-4 w-4" />
              {SITE.email}
            </a>
          </div>

          {/* Product */}
          <FooterCol
            title={T.footerProduct}
            links={T.footerProductLinks.map((label, i) => ({ to: PRODUCT_ROUTES[i], label }))}
          />

          {/* Company */}
          <FooterCol
            title={T.footerCompany}
            links={T.footerCompanyLinks.map((label, i) => ({ to: COMPANY_ROUTES[i], label }))}
          />

          {/* Resources — spans 2 cols on mobile to avoid orphan, 1/5 on desktop */}
          <div className="col-span-2 md:col-span-1">
            <FooterCol
              title={T.footerResources}
              links={T.footerResourcesLinks.map((label, i) => ({ to: RESOURCES_ROUTES[i], label }))}
            />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
          <p>
            © 2026{" "}
            <a href={SITE.domain} className="text-white/70 hover:text-white transition-colors">
              {SITE.domain.replace("https://", "")}
            </a>
            . {T.footerCopyright}
          </p>
          <p className="max-w-lg sm:text-right">
            {T.footerDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.to + l.label}>
            <Link
              to={l.to as any}
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
