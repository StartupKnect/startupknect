/* Brand logo (horizontal lockup). Two variants are rendered and toggled by the
   `.dark` class so theme switching never flashes or mismatches on hydration. */

const W = 1878;
const H = 546;

export function BrandLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/startupknect-logo-light.svg"
        alt="StartupKnect"
        width={W}
        height={H}
        className={`${className} block dark:hidden`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/startupknect-logo-dark.svg"
        alt=""
        aria-hidden="true"
        width={W}
        height={H}
        className={`${className} hidden dark:block`}
      />
    </>
  );
}

/** Always-dark lockup, for placement on dark surfaces (e.g. the footer). */
export function BrandLogoOnDark({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/brand/startupknect-logo-dark.svg"
      alt="StartupKnect"
      width={W}
      height={H}
      className={className}
    />
  );
}
