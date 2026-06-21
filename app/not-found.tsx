import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <span className="eyebrow purple mb-5">404</span>
      <h1 className="section-title">
        That page took an <span className="editorial">unscripted</span> turn.
      </h1>
      <p className="mt-4 max-w-md text-base" style={{ color: "var(--grey)" }}>
        The page you&apos;re looking for isn&apos;t here. Let&apos;s get you back to
        the community.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back home →
      </Link>
    </section>
  );
}
