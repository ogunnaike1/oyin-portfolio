"use client";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const PROFILE_SRC =
  "https://res.cloudinary.com/dhmqhless/image/upload/v1779306220/oyin-port_aueylu.jpg";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 1.0 } },
};

const lineReveal = {
  hidden: { y: "108%", skewY: 3 },
  visible: {
    y: 0,
    skewY: 0,
    transition: { duration: 1.05, ease: EASE },
  },
};

function Clip({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ overflow: "hidden", display: "block" }}>{children}</div>
  );
}

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const orb1X = useSpring(mouseX, { stiffness: 18, damping: 35 });
  const orb1Y = useSpring(mouseY, { stiffness: 18, damping: 35 });
  const orb2X = useTransform(orb1X, (v) => -v * 0.55);
  const orb2Y = useTransform(orb1Y, (v) => -v * 0.55);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - left) / width - 0.5) * 56);
    mouseY.set(((e.clientY - top) / height - 0.5) * 56);
  };

  return (
    <header
      id="top"
      className="relative min-h-screen overflow-hidden flex flex-col"
      onMouseMove={handleMouseMove}
    >
      {/* ── Entry curtain ── */}
      <motion.div
        className="fixed inset-0 z-[100] pointer-events-none"
        style={{ background: "var(--bg)", transformOrigin: "top" }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.45, ease: EASE }}
        aria-hidden
      />

      {/* ── Background gradient orbs — clipped so blur can't cause horizontal scroll ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle, rgba(139,38,53,0.26) 0%, transparent 70%)",
            filter: "blur(80px)",
            top: "-10%",
            right: "-5%",
            x: orb1X,
            y: orb1Y,
          }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 360,
            height: 360,
            background:
              "radial-gradient(circle, rgba(90,20,30,0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
            bottom: "10%",
            left: "10%",
            x: orb2X,
            y: orb2Y,
          }}
        />
      </div>

      {/* ── Top meta bar ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-12 max-sm:px-6 pt-24 md:pt-[140px]">
        <motion.div
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 1.1 }}
        >
          <span
            className="font-mono text-[11px] tracking-[.22em] uppercase"
            style={{ color: "var(--fg-dim)" }}
          >
            Portfolio — MMXXVI
          </span>
          <span
            className="font-mono text-[11px] tracking-[.14em] uppercase hidden sm:block"
            style={{ color: "var(--fg-dim)" }}
          >
            Based in Lagos · Working worldwide
          </span>
        </motion.div>
      </div>

      {/* ── Main grid ── */}
      <div className="relative z-10 flex-1 w-full max-w-[1440px] mx-auto px-12 max-sm:px-6 grid grid-cols-12 gap-6 items-end pb-20 pt-10">

        {/* Left column — content */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-8">
          {/* Role chip */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.9 }}
            className="inline-flex items-center gap-3 self-start"
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: "var(--accent-2)" }}
            />
            <span
              className="font-mono text-[11px] tracking-[.22em] uppercase"
              style={{ color: "var(--fg-dim)" }}
            >
              Social Media Manager × Video Editor
            </span>
          </motion.div>

          {/* Headline — staggered mask reveal */}
          <motion.h1
            className="m-0 leading-[0.9]"
            style={{ letterSpacing: "-0.03em" }}
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Line 1: display font */}
            <Clip>
              <motion.span
                className="block font-display font-bold"
                style={{
                  fontSize: "clamp(48px, 12vw, 190px)",
                  color: "var(--fg)",
                  display: "block",
                }}
                variants={lineReveal}
              >
                Crafting
              </motion.span>
            </Clip>

            {/* Line 2: serif italic contrast */}
            <Clip>
              <motion.span
                className="font-serif font-light italic"
                style={{
                  fontSize: "clamp(48px, 12vw, 190px)",
                  color: "var(--fg)",
                  display: "block",
                  paddingLeft: "clamp(8px, 2vw, 40px)",
                }}
                variants={lineReveal}
              >
                stories &amp;
              </motion.span>
            </Clip>

            {/* Line 3: display font + accent dot */}
            <Clip>
              <motion.span
                className="font-display font-bold"
                style={{
                  fontSize: "clamp(48px, 12vw, 190px)",
                  color: "var(--fg)",
                  display: "block",
                }}
                variants={lineReveal}
              >
                strategy
                <span style={{ color: "var(--accent-2)" }}>.</span>
              </motion.span>
            </Clip>
          </motion.h1>

          {/* Bio */}
          <motion.p
            className="max-w-[480px] text-[15px] leading-[1.65] font-sans"
            style={{ color: "var(--fg-dim)" }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: 1.5 }}
          >
            I&apos;m Oyindamola — a social media &amp; content manager, video
            editor and broadcaster based in Lagos. I grow audiences on Instagram
            and TikTok through short-form video, sharp copy, and data I actually
            read.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex items-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: 1.7 }}
          >
            {/* Primary */}
            <motion.a
              href="#work"
              className="relative overflow-hidden inline-flex items-center gap-3 px-8 py-[14px] cursor-pointer select-none"
              style={{ background: "var(--accent-2)" }}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
            >
              <motion.span
                className="absolute inset-0"
                style={{
                  background: "rgba(255,255,255,0.09)",
                  transformOrigin: "left",
                }}
                variants={{
                  rest: { scaleX: 0 },
                  hover: { scaleX: 1, transition: { duration: 0.45, ease: EASE } },
                }}
              />
              <span
                className="relative z-10 font-mono text-[11px] tracking-[.22em] uppercase"
                style={{ color: "var(--fg)" }}
              >
                View Work
              </span>
              <svg
                className="relative z-10 w-3 h-3 flex-shrink-0"
                style={{ color: "var(--fg)" }}
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M1 11L11 1M11 1H3M11 1V9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>

            {/* Secondary — background-slide reveal */}
            <motion.a
              href="#contact"
              className="relative overflow-hidden inline-flex items-center gap-3 px-8 py-[14px] border cursor-pointer select-none"
              style={{ borderColor: "var(--line)" }}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
            >
              <motion.span
                className="absolute inset-0"
                style={{ background: "var(--fg)", transformOrigin: "left" }}
                variants={{
                  rest: { scaleX: 0 },
                  hover: { scaleX: 1, transition: { duration: 0.48, ease: EASE } },
                }}
              />
              {/* Base text */}
              <span
                className="relative z-10 font-mono text-[11px] tracking-[.22em] uppercase"
                style={{ color: "var(--fg-dim)" }}
              >
                Start a Project
              </span>
              {/* Overlay text — dark, clips in sync with bg fill */}
              <motion.span
                className="absolute left-8 z-20 font-mono text-[11px] tracking-[.22em] uppercase whitespace-nowrap"
                style={{ color: "#1A0A0D" }}
                variants={{
                  rest: { clipPath: "inset(0 100% 0 0)" },
                  hover: {
                    clipPath: "inset(0 0% 0 0)",
                    transition: { duration: 0.48, ease: EASE },
                  },
                }}
              >
                Start a Project
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* Right column — profile image */}
        <motion.div
          className="col-span-12 md:col-span-5 flex justify-end items-end"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.85 }}
        >
          <div className="relative">
            {/* Offset decorative frame */}
            <span
              className="absolute border pointer-events-none"
              style={{
                inset: "-9px 9px 9px -9px",
                borderColor: "var(--accent)",
                opacity: 0.4,
              }}
              aria-hidden
            />

            {/* Image container */}
            <figure
              className="relative overflow-hidden m-0"
              style={{
                width: "clamp(240px, 26vw, 360px)",
                height: "clamp(320px, 34vw, 470px)",
                border: "1px solid var(--line)",
              }}
            >
              <Image
                src={PROFILE_SRC}
                alt="Oyin"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
              {/* Bottom fade-to-bg gradient */}
              <span
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{
                  height: "38%",
                  background:
                    "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
                }}
                aria-hidden
              />
            </figure>

            {/* Image caption row */}
            <div
              className="mt-3 flex justify-between items-center"
              style={{ width: "clamp(240px, 26vw, 360px)" }}
            >
              <span
                className="font-mono text-[10px] tracking-[.2em] uppercase"
                style={{ color: "var(--fg-dim)" }}
              >
                Oyin
              </span>
              <span
                className="font-mono text-[10px] tracking-[.14em] uppercase"
                style={{
                  color: "var(--accent-2)",
                  border: "1px solid var(--accent)",
                  padding: "3px 8px",
                }}
              >
                Available — Q3 / Q4
              </span>
              <span
                className="font-mono text-[10px] tracking-[.2em] uppercase"
                style={{ color: "var(--fg-dim)" }}
              >
                Lagos, NG
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom scroll indicator ── */}
      <motion.div
        className="relative z-10 w-full max-w-[1440px] mx-auto px-12 max-sm:px-6 pb-8 md:pb-10 flex justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 2.0 }}
      >
        <div
          className="inline-flex items-center gap-[10px] font-mono text-[11px] tracking-[.22em] uppercase"
          style={{ color: "var(--fg-dim)" }}
        >
          <span>Scroll</span>
          <span
            className="relative w-9 h-px overflow-hidden"
            style={{ background: "var(--fg-dim)" }}
          >
            <span
              className="absolute inset-0 animate-scroll-line"
              style={{ background: "var(--fg)" }}
            />
          </span>
          <span>01 / 09</span>
        </div>

        {/* Vertical label — editorial detail */}
        <span
          className="hidden lg:block font-mono text-[10px] tracking-[.28em] uppercase"
          style={{
            color: "var(--fg-dim)",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            opacity: 0.5,
          }}
        >
          SMM × VE × Strategy
        </span>
      </motion.div>
    </header>
  );
}
