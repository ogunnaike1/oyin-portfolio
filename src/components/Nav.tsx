"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const LINKS = [
  { label: "About",      href: "#top" },
  { label: "Numbers",    href: "#stats" },
  { label: "Analytics",  href: "#insights" },
  { label: "Work",       href: "#work" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-[border-color,background] duration-300"
        style={{
          background: scrolled ? "rgba(238,235,240,0.90)" : "transparent",
          backdropFilter: "blur(14px)",
          borderBottom: scrolled ? "1px solid var(--line-mid)" : "1px solid transparent",
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-4 md:py-[18px] max-w-[1200px] mx-auto">
          {/* Logo */}
          <a
            href="#top"
            onClick={close}
            className="font-serif text-[20px] italic no-underline"
            style={{ color: "var(--fg)" }}
          >
            Oyin
            <span
              className="inline-block w-[5px] h-[5px] rounded-full mx-[6px] mb-[3px] align-middle"
              style={{ background: "var(--accent-2)" }}
            />
            <span className="not-italic font-mono text-[10px] tracking-[.18em] uppercase align-middle" style={{ color: "var(--fg-mute)" }}>
         
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[12px] tracking-[.12em] uppercase no-underline transition-colors duration-200"
                style={{ color: "var(--fg-mute)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-mute)")}
              >
                {label}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="inline-flex items-center gap-[6px] px-3 py-2 font-mono text-[11px] tracking-[.14em] uppercase cursor-pointer transition-colors duration-200"
              style={{
                border: "1px solid var(--line-mid)",
                borderRadius: "2px",
                background: "transparent",
                color: "var(--fg-mute)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--fg)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--fg-mute)"; }}
            >
              {theme === "dark" ? "☀ Light" : "☾ Dark"}
            </button>

            <a
              href="https://wa.me/2349025158865"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-[11px] tracking-[.14em] uppercase no-underline font-mono transition-opacity duration-200 hover:opacity-80"
              style={{ background: "var(--accent)", color: "#fff", borderRadius: "2px" }}
            >
              Let&apos;s Talk →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex lg:hidden flex-col justify-center items-end w-8 h-8 gap-[5px] cursor-pointer bg-transparent border-none p-0"
          >
            <motion.span className="block h-px w-6" style={{ background: "var(--fg)" }} animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
            <motion.span className="block h-px w-4" style={{ background: "var(--fg)" }} animate={open ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} />
            <motion.span className="block h-px w-5" style={{ background: "var(--fg)" }} animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col px-6 pt-24 pb-10 overflow-y-auto"
            style={{ background: "var(--bg)" }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <div className="flex flex-col" style={{ borderTop: "1px solid var(--line-mid)" }}>
              {LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={close}
                  className="flex justify-between items-center py-5 no-underline"
                  style={{ borderBottom: "1px solid var(--line)", color: "var(--fg)" }}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.04 + i * 0.05, ease: EASE }}
                >
                  <span className="font-serif italic font-light" style={{ fontSize: "clamp(28px,8vw,48px)", letterSpacing: "-0.02em" }}>
                    {label}
                  </span>
                  <span className="font-mono text-[11px]" style={{ color: "var(--fg-mute)" }}>
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="flex items-center justify-between mt-auto pt-8 flex-wrap gap-4">
              <span className="font-mono text-[11px] tracking-[.18em] uppercase" style={{ color: "var(--fg-mute)" }}>
                Lagos, NG · MMXXVI
              </span>
              <a
                href="https://wa.me/2349025158865"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="inline-flex items-center gap-2 px-5 py-3 text-[11px] tracking-[.14em] uppercase no-underline font-mono"
                style={{ background: "var(--accent)", color: "#fff", borderRadius: "2px" }}
              >
                Let&apos;s Talk →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
