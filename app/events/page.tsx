import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { EVENT_FORMATS } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Four formats, one community: Knect Live, Club Collabs, Knect Circles and Knect Pitch — each connecting students with real startup founders.",
};

export default function EventsPage() {
  return (
    <>
      <section className="px-6 py-24 md:px-14">
        <Reveal className="mb-2">
          <span className="eyebrow mb-5">What we run</span>
          <h1 className="section-title max-w-[720px]">
            Four formats. <span className="editorial">One community.</span>
          </h1>
          <p className="mt-5 max-w-[620px] text-base leading-[1.7]" style={{ color: "var(--grey)" }}>
            Every format connects students with real founders. They differ in
            mode and scale — but the goal is the same, and sponsor and venue
            partnerships apply to all four.
          </p>
        </Reveal>

        {/* FORMAT CARDS */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {EVENT_FORMATS.map((f, i) => {
            const isTeal = f.accent === "teal";
            return (
              <Reveal key={f.id} delay={i * 80}>
                <article
                  id={f.id}
                  className="card group h-full scroll-mt-24 p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(38,33,92,0.12)]"
                  style={f.flagship ? { borderColor: "var(--purple-lt)" } : undefined}
                >
                  <div
                    className="mb-5 flex items-center justify-center rounded-2xl text-[22px]"
                    style={{
                      width: 52,
                      height: 52,
                      background: isTeal ? "var(--teal-tint)" : "var(--purple-tint)",
                    }}
                  >
                    {f.icon}
                  </div>
                  <div className="mb-4">
                    <span
                      className="font-display rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide"
                      style={
                        f.flagship
                          ? { background: "var(--surface-dark)", color: "#5DCAA5" }
                          : {
                              background: isTeal ? "var(--teal-tint)" : "var(--purple-tint)",
                              color: isTeal ? "var(--teal)" : "var(--purple)",
                            }
                      }
                    >
                      {f.modeBadge}
                    </span>
                  </div>
                  <h2 className="font-display mb-2.5 text-xl font-bold" style={{ color: "var(--ink)" }}>
                    {f.name}
                  </h2>
                  <p className="mb-5 text-[14px] leading-[1.65]" style={{ color: "var(--grey)" }}>
                    {f.description}
                  </p>
                  <dl
                    className="flex flex-col gap-2 border-t"
                    style={{ borderColor: "var(--border)", paddingTop: 18 }}
                  >
                    <div className="flex justify-between text-[12.5px]">
                      <dt style={{ color: "var(--grey-lt)" }}>Mode</dt>
                      <dd className="font-semibold" style={{ color: "var(--charcoal)" }}>
                        {f.mode}
                      </dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* FLAGSHIP DEEP DIVE */}
        <Reveal>
          <div
            className="relative mt-14 grid items-center gap-9 overflow-hidden rounded-3xl p-10 md:grid-cols-[1fr_auto] md:p-14"
            style={{ background: "var(--surface-dark)" }}
          >
            <div
              className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full blur-3xl"
              style={{ background: "#1D9E75", opacity: 0.14 }}
            />
            <div className="relative">
              <div
                className="font-display mb-4 text-[11px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "#5DCAA5" }}
              >
                Flagship format
              </div>
              <h2 className="font-display mb-3.5 text-2xl font-bold text-white md:text-[32px]">
                Knect Pitch: built to scale
              </h2>
              <p className="max-w-[520px] text-[15px] leading-[1.7]" style={{ color: "#C9C7E8" }}>
                Students pitch their ideas to a panel that includes founders.
                Founders give honest, direct feedback — and if an idea is strong,
                they may choose to offer informal mentorship to help it go further.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary relative whitespace-nowrap"
              style={{ background: "#5DCAA5", color: "#1C1845" }}
            >
              Get notified →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* SPONSOR CTA */}
      <section className="px-6 py-20 md:px-14">
        <Reveal>
          <div
            className="flex flex-col items-start gap-4 rounded-3xl p-9 sm:flex-row sm:items-center md:p-10"
            style={{ background: "var(--teal-tint)" }}
          >
            <div
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full font-bold text-white"
              style={{ background: "var(--teal)" }}
            >
              $
            </div>
            <p className="text-[14.5px] leading-[1.7]" style={{ color: "var(--charcoal)" }}>
              <b style={{ color: "var(--midnight)" }}>Sponsoring StartupKnect?</b> Every
              format is a sponsorship opportunity.{" "}
              <Link
                href="/contact"
                className="font-semibold underline"
                style={{ color: "var(--teal)" }}
              >
                Get in touch
              </Link>{" "}
              for our current rate card.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
