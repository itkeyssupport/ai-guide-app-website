import type { ReactNode } from "react";
import { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll("[data-reveal]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export function SiteLayout({ children, dir }: { children: ReactNode; dir?: "ltr" | "rtl" }) {
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col" dir={dir}>
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 ${className}`}
    >
      {children}
    </section>
  );
}
