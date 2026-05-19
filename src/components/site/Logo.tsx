type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  className?: string;
};

export function Logo({ size = 36, withWordmark = true, className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <img
        src="/app-logo.png"
        alt="AI Guide logo"
        width={size}
        height={size}
        className="rounded-xl object-contain flex-shrink-0"
        style={{ width: size, height: size }}
      />
      {withWordmark && (
        <span className="text-lg font-semibold tracking-tight text-white">
          AI <span className="text-gradient">Guide</span>
        </span>
      )}
    </div>
  );
}
