import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Student, founder, college club, or sponsor — tell us a bit about you and we'll follow up.",
};

const channels = [
  { icon: "✉️", label: "EMAIL", value: "startupknect@gmail.com", href: "mailto:startupknect@gmail.com" },
  { icon: "◎", label: "INSTAGRAM", value: "@startupknect", href: "https://instagram.com/startupknect" },
  { icon: "in", label: "LINKEDIN", value: "StartupKnect", href: "https://linkedin.com/company/startupknect" },
];

export default function ContactPage() {
  return (
    <section className="px-6 py-24 md:px-14">
      <Reveal className="mb-2">
        <span className="eyebrow mb-5">Get involved</span>
        <h1 className="section-title max-w-[720px]">
          Let&apos;s build <span className="editorial">together.</span>
        </h1>
        <p className="mt-5 max-w-[600px] text-base leading-[1.7]" style={{ color: "var(--grey)" }}>
          Whether you&apos;re a student, a founder, running a college club, or
          exploring sponsorship — tell us a bit about you and we&apos;ll follow up.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full rounded-3xl p-10 md:p-11" style={{ background: "var(--surface-dark)" }}>
            <h2 className="font-display mb-6 text-xl font-bold text-white">Reach us directly</h2>
            <div className="flex flex-col gap-5">
              {channels.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="flex items-center gap-3.5 group">
                  <span
                    className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full text-[15px]"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    {c.icon}
                  </span>
                  <span>
                    <span className="block text-[11px] tracking-[0.06em]" style={{ color: "#8A87B8" }}>
                      {c.label}
                    </span>
                    <span className="block text-sm font-semibold text-white group-hover:underline">
                      {c.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
            <p
              className="mt-8 border-t pt-7 text-[13px] leading-[1.7]"
              style={{ borderColor: "rgba(255,255,255,0.1)", color: "#9D9AC4" }}
            >
              Sponsor and partnership outreach is welcome for any event format — free
              or paid for students.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
