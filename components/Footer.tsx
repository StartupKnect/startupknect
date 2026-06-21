import Link from "next/link";
import { Logo } from "./Logo";

const pages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

const formats = [
  { href: "/events#knect-live", label: "Knect Live" },
  { href: "/events#club-collabs", label: "Club Collabs" },
  { href: "/events#knect-circles", label: "Knect Circles" },
  { href: "/events#knect-pitch", label: "Knect Pitch" },
];

const connect = [
  { href: "mailto:hello@startupknect.in", label: "hello@startupknect.in", external: true },
  { href: "https://instagram.com/startupknect", label: "Instagram", external: true },
  { href: "https://linkedin.com/company/startupknect", label: "LinkedIn", external: true },
];

export function Footer() {
  return (
    <footer
      className="px-6 pb-9 pt-[70px] md:px-14"
      style={{ background: "var(--surface-dark)" }}
    >
      <div className="grid gap-10 border-b pb-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <Logo onDark />
            <span className="font-display text-[19px] font-bold text-white">
              Startup<span style={{ color: "#5DCAA5" }}>Knect</span>
            </span>
          </div>
          <p className="max-w-[280px] text-[13.5px] leading-relaxed" style={{ color: "#9D9AC4" }}>
            Knowledge shared. Network built. Futures connected.
          </p>
        </div>

        <FooterCol title="Pages">
          {pages.map((p) => (
            <Link key={p.href} href={p.href} className="footer-link">
              {p.label}
            </Link>
          ))}
        </FooterCol>

        <FooterCol title="Formats">
          {formats.map((f) => (
            <Link key={f.label} href={f.href} className="footer-link">
              {f.label}
            </Link>
          ))}
        </FooterCol>

        <FooterCol title="Connect">
          {connect.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="footer-link"
              {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {c.label}
            </a>
          ))}
        </FooterCol>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 pt-7 sm:flex-row sm:items-center">
        <p className="text-[12.5px]" style={{ color: "#6E6A9E" }}>
          © {new Date().getFullYear()} StartupKnect. A student–founder community.
        </p>
        <div className="flex gap-3.5">
          <SocialLink href="mailto:hello@startupknect.in" label="Email">✉</SocialLink>
          <SocialLink href="https://instagram.com/startupknect" label="Instagram">◎</SocialLink>
          <SocialLink href="https://linkedin.com/company/startupknect" label="LinkedIn">in</SocialLink>
        </div>
      </div>

      <style>{`
        .footer-link {
          display: block;
          font-size: 13.5px;
          color: #C9C7E8;
          padding: 6px 0;
          transition: color 0.2s ease;
        }
        .footer-link:hover { color: #FFFFFF; }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div
        className="font-display mb-4 text-xs font-bold uppercase tracking-[0.08em]"
        style={{ color: "#7A76B0" }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="flex h-[34px] w-[34px] items-center justify-center rounded-full text-[13px] transition-colors duration-200"
      style={{ background: "rgba(255,255,255,0.06)", color: "#C9C7E8" }}
    >
      {children}
    </a>
  );
}
