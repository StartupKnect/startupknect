"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [switching, setSwitching] = useState(false);

  // Avoid hydration mismatch — the resolved theme is only known on the client.
  // next-themes' canonical mount guard; the one-time flip is intentional.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  function toggle() {
    setSwitching(true);
    window.setTimeout(() => {
      setTheme(isDark ? "light" : "dark");
      setSwitching(false);
    }, 160);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      aria-pressed={mounted ? isDark : undefined}
      title="Toggle day / night mode"
      className="group relative flex h-[38px] w-[38px] items-center justify-center overflow-hidden rounded-full border transition-[transform,border-color] duration-200 hover:rotate-12 hover:scale-105"
      style={{ borderColor: "var(--grey-lt)" }}
    >
      <span
        className="inline-block text-base leading-none transition-[transform,opacity] duration-300"
        style={
          switching
            ? { transform: "scale(0) rotate(180deg)", opacity: 0 }
            : { transform: "none", opacity: 1 }
        }
      >
        {mounted ? (isDark ? "🌙" : "☀️") : "☀️"}
      </span>
    </button>
  );
}
