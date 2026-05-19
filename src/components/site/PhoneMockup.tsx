import type { ReactNode } from "react";

export function PhoneMockup({
  label,
  children,
  className = "",
  imageSrc,
  imageAlt,
  featured = false,
}: {
  label?: string;
  children?: ReactNode;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  featured?: boolean;
}) {
  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      <div
        className={`relative mx-auto phone-tilt ${
          featured
            ? "w-[230px] h-[490px] border-2 border-[#16D9F5]/50 glow-cyan"
            : "w-[200px] h-[430px] border border-white/15"
        } rounded-[2.6rem] bg-[#060d22] p-2.5 shadow-2xl`}
      >
        {/* Dynamic Island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-[22px] w-[90px] rounded-full bg-black z-20" />

        {/* Screen area */}
        <div className="h-full w-full rounded-[2.1rem] overflow-hidden bg-[#0a1638] relative">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt ?? label ?? "App screen"}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          ) : (
            children
          )}
        </div>

        {/* Side button reflections */}
        <div className="absolute right-[-3px] top-[80px] h-12 w-1.5 rounded-r-full bg-white/10" />
        <div className="absolute left-[-3px] top-[72px] h-8 w-1.5 rounded-l-full bg-white/10" />
        <div className="absolute left-[-3px] top-[92px] h-8 w-1.5 rounded-l-full bg-white/10" />
      </div>

      {label && (
        <p className="mt-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-widest">
          {label}
        </p>
      )}
    </div>
  );
}
