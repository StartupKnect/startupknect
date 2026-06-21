# StartupKnect

The production website for **StartupKnect** — a student–founder community.
_Where students meet startup founders._

Built with **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS v4**,
deployed on **Vercel**.

## Stack & architecture

- **Routing** — file-based App Router. Four pages: Home (`/`), About (`/about`),
  Events (`/events`), Contact (`/contact`), plus `not-found`, `sitemap` and `robots`.
- **Components** — `components/` holds the shared UI (`Nav`, `Footer`, `Logo`,
  `ThemeToggle`, `Reveal`, `ContactForm`). Event content lives in `lib/events.ts`
  so the home hero and the events page stay in sync from one source.
- **Theming** — light/dark mode via `next-themes` (class strategy), no flash on
  load, respects system preference. All brand colors are CSS variables in
  `app/globals.css` and mapped to Tailwind tokens via `@theme`.
- **Typography** — Sora (headings/UI), Inter (body), Instrument Serif (editorial
  accents only), loaded with `next/font`.
- **Contact form** — posts to the `POST /api/contact` route handler, which
  validates input, blocks spam via a honeypot, and emails submissions through
  Resend when configured.

## Accessibility & motion

- Keyboard focus is always visible; a "Skip to content" link starts the tab order.
- Nav exposes `aria-current`, the mobile menu manages `aria-expanded` / `Escape` /
  scroll-lock, and the theme toggle is a labelled `aria-pressed` button.
- Scroll-reveal animations and smooth scrolling are disabled under
  `prefers-reduced-motion`.

## Brand

- **Colors** — Purple `#534AB7`, Emerald `#1D9E75`, Midnight `#26215C`,
  Light Lavender `#EEEDFE`, Soft Mint `#E1F5EE`, White.
- **Logo** — SK monogram (S = student, K = Knect, central node = connection).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Environment

Copy `.env.example` to `.env.local` and fill in the Resend keys to enable real
email delivery from the contact form. Without them the form still works and
submissions are logged server-side. See `.env.example` for details.
