import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { EVENT_FORMATS } from "@/lib/events";

const principles = [
  {
    num: "01",
    title: "Real conversations",
    desc: "Founder talks and AMAs that go past the highlight reel — the real version, not the pitch-deck version.",
  },
  {
    num: "02",
    title: "Honest feedback",
    desc: "Direct responses and informal mentorship from people actively building — not theory from a textbook.",
  },
  {
    num: "03",
    title: "Relationships that last",
    desc: "Events designed to turn one meeting into a network you keep coming back to — not a one-off you forget.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="grid min-h-[calc(100vh-68px)] grid-cols-1 px-6 md:grid-cols-[1.1fr_1fr] md:px-14">
        <div
          className="flex flex-col justify-center border-b py-12 md:border-b-0 md:border-r md:py-20 md:pr-16"
          style={{ borderColor: "var(--border)" }}
        >
          <Reveal>
            <span className="eyebrow purple mb-5">A student–founder community</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="hero-h1">
              Where students<br />
              meet <span style={{ color: "var(--purple)" }}>startup</span>
              <br />
              <span style={{ color: "var(--teal)" }}>founders</span>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p
              className="mt-6 max-w-[480px] text-[17px] leading-[1.7]"
              style={{ color: "var(--grey)" }}
            >
              We connect college students with startup founders through real
              conversations — not cold intros. No corporate fluff, no scripted
              panels. Just founders, students, and honest exchange.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/events" className="btn-primary">
                Explore events →
              </Link>
              <Link href="/about" className="btn-secondary">
                Our mission
              </Link>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-7 text-[13px]" style={{ color: "var(--grey-lt)" }}>
              Knect Live and Club Collabs are always free for students.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center gap-3.5 py-12 md:py-20 md:pl-16">
          {EVENT_FORMATS.map((f, i) => (
            <Reveal key={f.id} delay={i * 90}>
              <Link
                href={`/events#${f.id}`}
                className="group flex items-center gap-3.5 rounded-2xl border p-4 transition-[transform,background-color] duration-300 hover:translate-x-1"
                style={{ background: "var(--off-white)", borderColor: "var(--border)" }}
              >
                <span
                  className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-[10px] text-base"
                  style={{
                    background: f.accent === "teal" ? "var(--teal-tint)" : "var(--purple-tint)",
                  }}
                >
                  {f.icon}
                </span>
                <span className="flex-1">
                  <span className="font-display block text-[14.5px] font-bold" style={{ color: "var(--ink)" }}>
                    {f.name}
                  </span>
                  <span className="block text-[12.5px]" style={{ color: "var(--grey)" }}>
                    {f.teaser}
                  </span>
                </span>
                <span
                  className="font-display whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-bold"
                  style={{
                    background: f.pricing === "free" ? "var(--teal-tint)" : "var(--purple-tint)",
                    color: f.pricing === "free" ? "var(--teal)" : "var(--purple)",
                  }}
                >
                  {f.pricing === "free" ? "FREE" : "VARIES"}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ──────────────────── WHAT WE'RE BUILT ON ──────────────────── */}
      <section className="px-6 py-20 md:px-14">
        <Reveal className="mb-14">
          <span className="eyebrow purple mb-5">What we&apos;re built on</span>
          <h2 className="section-title max-w-[720px]">
            Built for the long game, <span className="editorial">not the calendar.</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.num} delay={i * 100}>
              <div className="card h-full p-9">
                <div
                  className="font-display mb-4 text-xs font-bold"
                  style={{ color: "var(--purple-lt)" }}
                >
                  {p.num}
                </div>
                <h3 className="font-display mb-2.5 text-lg font-bold" style={{ color: "var(--ink)" }}>
                  {p.title}
                </h3>
                <p className="text-[14px] leading-[1.6]" style={{ color: "var(--grey)" }}>
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ──────────────────── BE OUR FIRST STORY ──────────────────── */}
      <section className="px-6 pb-24 md:px-14">
        <Reveal>
          <div
            className="rounded-3xl px-8 py-16 text-center md:px-14"
            style={{ background: "var(--off-white)" }}
          >
            <div
              className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
              style={{ background: "var(--purple-tint)" }}
            >
              ✨
            </div>
            <h2 className="font-display mb-3 text-2xl font-bold md:text-[26px]" style={{ color: "var(--ink)" }}>
              Be our first story.
            </h2>
            <p
              className="mx-auto mb-7 max-w-[480px] text-[15px] leading-[1.7]"
              style={{ color: "var(--grey)" }}
            >
              We haven&apos;t run an event yet — so instead of fake testimonials,
              here&apos;s an honest invitation. Come to a Knect Live or Club Collabs
              session, and if it&apos;s worth telling, your story could be the first
              one featured here.
            </p>
            <Link href="/events" className="btn-secondary">
              See upcoming formats
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
