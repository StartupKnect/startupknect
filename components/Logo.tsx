type LogoProps = {
  className?: string;
  /** Use lighter strokes when placed on a dark surface (e.g. footer). */
  onDark?: boolean;
};

/**
 * SK monogram — S (student) flows into K (Knect); the central node is the
 * point of connection. Decorative: the accessible name lives on the wordmark.
 */
export function Logo({ className = "h-[30px] w-[30px]", onDark = false }: LogoProps) {
  const sStroke = onDark ? "#AFA9EC" : "#534AB7";
  const kStroke = onDark ? "#5DCAA5" : "#1D9E75";
  const node = onDark ? "#FFFFFF" : "#26215C";

  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M9 23C9 23 9 9 16 9C20 9 20 13 16 13C12 13 9 17 9 21C9 25 13 27 17 25"
        stroke={sStroke}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M21 9L26 16L21 23"
        stroke={kStroke}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18.5" cy="16" r="2.2" fill={node} />
    </svg>
  );
}

export function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span
      className="font-display text-[19px] font-bold tracking-[-0.3px]"
      style={{ color: onDark ? "#FFFFFF" : "var(--ink)" }}
    >
      Startup<span style={{ color: onDark ? "#5DCAA5" : "var(--teal)" }}>Knect</span>
    </span>
  );
}
