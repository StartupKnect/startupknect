"use client";

import { useId, useState } from "react";
import { SITE } from "@/lib/site";

const ROLES = [
  "Student",
  "Founder",
  "College club / E-cell representative",
  "Sponsor / brand partner",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-colors focus:border-[var(--purple)]";

export function ContactForm() {
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fallbackHref, setFallbackHref] = useState<string | null>(null);

  // Build a prefilled mailto so a submission is never lost if the API can't
  // deliver (e.g. email provider not yet configured).
  function buildMailto(data: Record<string, FormDataEntryValue>) {
    const role = String(data.role ?? "Not specified");
    const name = String(data.name ?? "");
    const subject = `New StartupKnect enquiry — ${role}`;
    const body = `Role: ${role}\nName: ${name}\nEmail: ${String(
      data.email ?? ""
    )}\n\n${String(data.message ?? "")}`;
    return `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    setFallbackHref(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(json?.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
      setFallbackHref(buildMailto(data));
      setStatus("error");
    }
  }

  const labelCls = "font-display mb-2 block text-xs font-bold";
  const labelStyle = { color: "var(--charcoal)" } as const;
  const fieldStyle = {
    borderColor: "var(--grey-lt)",
    background: "var(--surface)",
    color: "var(--ink)",
    fontFamily: "var(--font-inter), sans-serif",
  } as const;

  if (status === "success") {
    return (
      <div
        role="status"
        className="card flex h-full flex-col items-start justify-center gap-3 p-10"
      >
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full text-xl text-white"
          style={{ background: "var(--teal)" }}
        >
          ✓
        </div>
        <h3 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>
          Message sent — thank you.
        </h3>
        <p className="text-[14.5px] leading-[1.6]" style={{ color: "var(--grey)" }}>
          We&apos;ve got it and will follow up at the email you shared. In the
          meantime, feel free to explore the formats.
        </p>
        <button type="button" className="btn-secondary mt-2" onClick={() => setStatus("idle")}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Honeypot — hidden from real users, catches bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div>
        <label htmlFor={`${formId}-role`} className={labelCls} style={labelStyle}>
          I AM A…
        </label>
        <select id={`${formId}-role`} name="role" className={inputBase} style={fieldStyle} defaultValue={ROLES[0]}>
          {ROLES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${formId}-name`} className={labelCls} style={labelStyle}>
          NAME
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your full name"
          className={inputBase}
          style={fieldStyle}
        />
      </div>

      <div>
        <label htmlFor={`${formId}-email`} className={labelCls} style={labelStyle}>
          EMAIL
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@email.com"
          className={inputBase}
          style={fieldStyle}
        />
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className={labelCls} style={labelStyle}>
          MESSAGE
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          required
          placeholder="Tell us what you're looking for…"
          className={`${inputBase} resize-y`}
          style={fieldStyle}
        />
      </div>

      <button type="submit" className="btn-primary mt-1 w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message →"}
      </button>

      <div aria-live="polite" className="min-h-[1.25rem]">
        {status === "error" && (
          <div className="text-[13px]" style={{ color: "#B4413F" }}>
            <p>{error}</p>
            {fallbackHref && (
              <a
                href={fallbackHref}
                className="mt-2 inline-flex font-semibold underline"
                style={{ color: "var(--purple)" }}
              >
                Open your email app to send →
              </a>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
