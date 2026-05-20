"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[14px] transition-[border-color,background] duration-400"
      style={{
        background: "color-mix(in oklab, var(--bg) 70%, transparent)",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <div className="flex items-center justify-between px-12 py-[18px] max-sm:px-6 max-sm:py-4">
        <a href="#top" className="font-serif text-[22px] italic" style={{ color: "var(--fg)" }}>
          Oyin<span className="inline-block w-[5px] h-[5px] rounded-full mx-[6px] mb-[3px] align-middle" style={{ background: theme === "dark" ? "var(--accent)" : "#5C1A1B" }} />
          <span className="not-italic font-mono text-[11px] tracking-[.18em] uppercase align-middle">Studio</span>
        </a>

        <div className="flex items-center gap-8">
          {["About", "Services", "Work", "Insights", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-[12px] tracking-[.14em] uppercase no-underline transition-colors duration-300 max-[820px]:hidden"
              style={{ color: "var(--fg-dim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-dim)")}
            >
              {label}
            </a>
          ))}

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="inline-flex items-center gap-2 rounded-full px-3 py-[7px] cursor-pointer bg-transparent text-[11px] tracking-[.18em] uppercase transition-colors"
            style={{ border: "1px solid var(--line)", color: "var(--fg-dim)" }}
          >
            <span className="inline-flex gap-[3px]">
              {(["light", "dark"] as const).map((t) => (
                <span
                  key={t}
                  className="w-[6px] h-[6px] rounded-full transition-opacity duration-300"
                  style={{
                    background: theme === t ? "var(--fg)" : "var(--fg-dim)",
                    opacity: theme === t ? 1 : 0.35,
                  }}
                />
              ))}
            </span>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-[10px] rounded-full px-[18px] py-[9px] text-[12px] tracking-[.14em] uppercase no-underline transition-transform duration-300 hover:-translate-y-px"
            style={{ background: "var(--fg)", color: "var(--bg)" }}
          >
            Book a Call{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
