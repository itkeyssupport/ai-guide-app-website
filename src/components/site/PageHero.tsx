import { Section } from "./Layout";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Section className="!py-20 sm:!py-28 text-center relative">
      {/* Subtle background glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7A4DFF]/40 to-transparent" />

      {eyebrow && (
        <div
          className="inline-flex items-center rounded-full border border-[#16D9F5]/25 bg-[#16D9F5]/8 px-4 py-1.5 text-xs font-semibold text-[#16D9F5] uppercase tracking-wider"
          data-reveal
        >
          {eyebrow}
        </div>
      )}
      <h1
        className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
        data-reveal
        data-delay="100"
      >
        {title}
      </h1>
      {description && (
        <p
          className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed"
          data-reveal
          data-delay="200"
        >
          {description}
        </p>
      )}
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent"
        aria-hidden="true"
      />
    </Section>
  );
}
