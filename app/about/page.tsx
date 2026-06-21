import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "StartupKnect closes the access gap between college students and the founders actually building startups — through honest, unscripted conversations.",
};

const pillars = [
  {
    num: "01",
    title: "Conversations",
    desc: "Founder talks and AMAs that go past the highlight reel — the real version, not the pitch-deck version.",
  },
  {
    num: "02",
    title: "Networking",
    desc: "Warm introductions across campuses, clubs and the wider startup ecosystem.",
  },
  {
    num: "03",
    title: "Learning",
    desc: "Practical playbooks from people actively building — not theory from a textbook.",
  },
  {
    num: "04",
    title: "Community",
    desc: "Events designed to turn one meeting into a network you keep coming back to.",
  },
];

const audiences = [
  "College students, 18–25",
  "Startup founders",
  "College clubs & E-cells",
  "Ecosystem partners",
];

export default function AboutPage() {
  return (
    <>
      <section className="px-6 py-24 md:px-14">
        <Reveal className="mb-2">
          <span className="eyebrow mb-5">Who we are</span>
          <h1 className="section-title max-w-[720px]">
            The gap was access. <span className="editorial">So we closed it.</span>
          </h1>
          <p className="mt-5 max-w-[600px] text-base leading-[1.7]" style={{ color: "var(--grey)" }}>
            Most college students hear about startups — but never actually meet the
            people building them. StartupKnect brings emerging founders directly to
            students for honest, unscripted conversations.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border md:grid-cols-2 lg:grid-cols-4"
          style={{ background: "var(--border)", borderColor: "var(--border)" }}>
          {pillars.map((p, i) => (
            <Reveal key={p.num} delay={i * 90}>
              <div className="h-full p-9" style={{ background: "var(--surface)" }}>
                <div className="font-display mb-4 text-xs font-bold" style={{ color: "var(--purple-lt)" }}>
                  {p.num}
                </div>
                <h3 className="font-display mb-2.5 text-lg font-bold" style={{ color: "var(--ink)" }}>
                  {p.title}
                </h3>
                <p className="text-[13.5px] leading-[1.6]" style={{ color: "var(--grey)" }}>
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="px-6 pb-4 md:px-14">
        <Reveal>
          <span className="eyebrow purple">Who we serve</span>
          <div className="mt-8 flex flex-wrap gap-3">
            {audiences.map((a) => (
              <span
                key={a}
                className="font-display rounded-full border px-5 py-2.5 text-[13px] font-semibold"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--charcoal)",
                }}
              >
                {a}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FOUNDER NOTE */}
      <section className="px-6 py-20 md:px-14">
        <Reveal>
          <div
            className="grid items-center gap-9 rounded-3xl p-10 md:grid-cols-[auto_1fr] md:p-14"
            style={{ background: "var(--surface-dark)" }}
          >
            <div
              className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full text-2xl"
              style={{ background: "var(--purple)" }}
            >
              💡
            </div>
            <div>
              <p className="font-serif text-xl italic leading-[1.5] text-white md:text-[22px]">
                &ldquo;I worked at a startup as a student and saw both worlds. The
                students who changed their thinking were the ones who got access to
                founders early. StartupKnect is that access — for everyone.&rdquo;
              </p>
              <div className="font-display mt-4 text-sm font-bold" style={{ color: "#5DCAA5" }}>
                Founder, StartupKnect
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
