"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo, Wordmark } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { SITE } from "@/lib/site";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  // Lock body scroll and allow Escape to close while the menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="fixed inset-x-0 top-0 z-[200] flex h-[68px] items-center justify-between border-b px-6 backdrop-blur-xl md:px-14"
      style={{ background: "var(--nav-bg)", borderColor: "var(--border)" }}
    >
      <Link href="/" className="flex items-center gap-2.5" aria-label="StartupKnect home">
        <Logo />
        <Wordmark />
      </Link>

      {/* Desktop nav */}
      <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive(link.href) ? "page" : undefined}
            className="font-display border-b-[1.5px] pb-1 text-[13.5px] font-medium transition-colors duration-200"
            style={{
              color: isActive(link.href) ? "var(--ink)" : "var(--grey)",
              borderColor: isActive(link.href) ? "var(--purple)" : "transparent",
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3.5">
        <ThemeToggle />
        <Link
          href="/contact"
          className="font-display hidden rounded-full border px-5 py-2 text-[13px] font-semibold transition-colors duration-200 hover:border-[var(--purple)] hover:text-[var(--purple)] md:inline-flex"
          style={{ borderColor: "var(--grey-lt)", color: "var(--ink)" }}
        >
          Partner with us
        </Link>
        <a
          href={SITE.whatsappCommunity}
          target="_blank"
          rel="noreferrer"
          className="btn-primary hidden !px-5 !py-2.5 md:inline-flex"
        >
          Join community
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-[38px] w-[38px] items-center justify-center rounded-full border md:hidden"
          style={{ borderColor: "var(--grey-lt)" }}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className="absolute left-0 block h-0.5 w-4 rounded-full transition-all duration-300"
              style={{
                background: "var(--ink)",
                top: open ? "6px" : "0px",
                transform: open ? "rotate(45deg)" : "none",
              }}
            />
            <span
              className="absolute left-0 top-1.5 block h-0.5 w-4 rounded-full transition-opacity duration-200"
              style={{ background: "var(--ink)", opacity: open ? 0 : 1 }}
            />
            <span
              className="absolute left-0 block h-0.5 w-4 rounded-full transition-all duration-300"
              style={{
                background: "var(--ink)",
                top: open ? "6px" : "12px",
                transform: open ? "rotate(-45deg)" : "none",
              }}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-[68px] z-[199] border-b px-6 py-6 backdrop-blur-xl md:hidden"
        style={{ background: "var(--nav-bg)", borderColor: "var(--border)" }}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              aria-current={isActive(link.href) ? "page" : undefined}
              className="font-display rounded-xl px-3 py-3 text-base font-medium transition-colors"
              style={{
                color: isActive(link.href) ? "var(--purple)" : "var(--ink)",
                background: isActive(link.href) ? "var(--purple-tint)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-3">
            <Link href="/contact" onClick={closeMenu} className="btn-secondary w-full">
              Partner with us
            </Link>
            <a
              href={SITE.whatsappCommunity}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="btn-primary w-full"
            >
              Join community
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
