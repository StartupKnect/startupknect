import type { Metadata, Viewport } from "next";
import { Sora, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const siteUrl = "https://startupknect.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "StartupKnect — Where students meet startup founders",
    template: "%s — StartupKnect",
  },
  description:
    "StartupKnect connects college students with startup founders through real, unscripted conversations — Knect Live, Club Collabs, Knect Circles and Knect Pitch.",
  keywords: [
    "StartupKnect",
    "students",
    "startup founders",
    "student community",
    "founder talks",
    "pitch night",
  ],
  openGraph: {
    title: "StartupKnect — Where students meet startup founders",
    description:
      "A student–founder community built on real conversations, honest feedback and informal mentorship.",
    url: siteUrl,
    siteName: "StartupKnect",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StartupKnect — Where students meet startup founders",
    description:
      "A student–founder community built on real conversations, honest feedback and informal mentorship.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#131218" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sora.variable} ${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-[var(--purple)] focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
          >
            Skip to content
          </a>
          <Nav />
          <main id="main" className="flex-1 pt-[68px]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
