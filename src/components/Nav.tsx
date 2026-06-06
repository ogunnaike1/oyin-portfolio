"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const LINKS = ["About", "Skills", "Services", "Projects", "Testimonials", "Contact"];
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      {/* ── Bar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[14px] transition-[border-color,background] duration-400"
        style={{
          background: "color-mix(in oklab, var(--bg) 80%, transparent)",
          borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-4 md:py-[18px]">
          {/* Logo */}
          <a
            href="#top"
            onClick={close}
            className="font-serif text-[22px] italic shrink-0"
            style={{ color: "var(--fg)" }}
          >
            Oyin
            <span
              className="inline-block w-[5px] h-[5px] rounded-full mx-[6px] mb-[3px] align-middle"
              style={{ background: "var(--accent)" }}
            />
            <span className="not-italic font-mono text-[11px] tracking-[.18em] uppercase align-middle">
              Studio
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-[12px] tracking-[.14em] uppercase no-underline transition-colors duration-300"
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
              className="inline-flex items-center gap-2 rounded-full px-3 py-[7px] cursor-pointer bg-transparent text-[11px] tracking-[.18em] uppercase"
              style={{ border: "1px solid var(--line)", color: "var(--fg-dim)" }}
            >
              <span className="inline-flex gap-[3px]">
                {(["light", "dark"] as const).map((t) => (
                  <span
                    key={t}
                    className="w-[6px] h-[6px] rounded-full"
                    style={{
                      background: theme === t ? "var(--fg)" : "var(--fg-dim)",
                      opacity: theme === t ? 1 : 0.35,
                    }}
                  />
                ))}
              </span>
              {theme === "dark" ? "Dark" : "Light"}
            </button>

            <a
              href="https://wa.me/2349025158865" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-[18px] py-[9px] text-[12px] tracking-[.14em] uppercase no-underline hover:-translate-y-px transition-transform duration-300"
              style={{ background: "var(--fg)", color: "var(--bg)" }}
            >
              Let&apos;s Talk →
            </a>
          </div>

          {/* Mobile right */}
          <div className="flex md:hidden items-center gap-4">
            {/* Theme toggle — dots only */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="inline-flex gap-[5px] items-center cursor-pointer p-1"
            >
              {(["light", "dark"] as const).map((t) => (
                <span
                  key={t}
                  className="w-2 h-2 rounded-full transition-opacity duration-300"
                  style={{
                    background: theme === t ? "var(--fg)" : "var(--fg-dim)",
                    opacity: theme === t ? 1 : 0.3,
                  }}
                />
              ))}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex flex-col justify-center items-end w-8 h-8 gap-[5px] cursor-pointer"
            >
              <motion.span
                className="block h-px"
                style={{ background: "var(--fg)" }}
                animate={open ? { width: 24, rotate: 45, y: 6 } : { width: 24, rotate: 0, y: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
              />
              <motion.span
                className="block h-px"
                style={{ background: "var(--fg)" }}
                animate={open ? { width: 0, opacity: 0 } : { width: 16, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-px"
                style={{ background: "var(--fg)" }}
                animate={open ? { width: 24, rotate: -45, y: -6 } : { width: 20, rotate: 0, y: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-between px-6 pt-24 pb-10 overflow-y-auto"
            style={{ background: "var(--bg)" }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {/* Nav links */}
            <div className="flex flex-col" style={{ borderTop: "1px solid var(--line)" }}>
              {LINKS.map((label, i) => (
                <motion.a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  onClick={close}
                  className="flex justify-between items-center py-5 no-underline"
                  style={{
                    borderBottom: "1px solid var(--line)",
                    color: "var(--fg)",
                  }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + i * 0.06, ease: EASE }}
                >
                  <span
                    className="font-serif italic font-light"
                    style={{
                      fontSize: "clamp(36px, 10vw, 56px)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {label}
                  </span>
                  <span
                    className="font-mono text-[11px] tracking-[.2em]"
                    style={{ color: "var(--fg-dim)" }}
                  >
                    0{i + 2}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Footer row */}
            <motion.div
              className="flex items-center justify-between pt-8 flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.38 }}
            >
              <span
                className="font-mono text-[11px] tracking-[.2em] uppercase"
                style={{ color: "var(--fg-dim)" }}
              >
                Lagos, NG · MMXXVI
              </span>
              <a
                  href="https://wa.me/2349025158865" target="_blank" rel="noopener noreferrer"
                  onClick={close}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[12px] tracking-[.14em] uppercase no-underline"
                  style={{ background: "var(--fg)", color: "var(--bg)" }}
                >
                  Let&apos;s Talk →
                </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
