"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const PROFILE_SRC =
  "https://res.cloudinary.com/dhmqhless/image/upload/v1780705271/oyin-porfolio1_zsgcrh.png";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function Hero() {
  return (
    <header
      id="top"
      className="relative min-h-screen flex flex-col"
      style={{ background: "var(--bg)" }}
    >
      <div className="flex-1 w-full max-w-[1200px] mx-auto px-8 max-sm:px-5 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center pt-32 pb-16">

        {/* Content */}
        <motion.div
          className="flex flex-col gap-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {/* Role badge */}
          <div
            className="self-start inline-flex items-center gap-2 px-4 py-2 font-mono text-[11px] tracking-[.2em] uppercase"
            style={{ border: "1px solid var(--line-mid)", color: "var(--accent-2)", borderRadius: "2px" }}
          >
            Social Media Manager · Video Editor
          </div>

          {/* Headline */}
          <h1 className="m-0 font-serif font-light" style={{ fontSize: "clamp(40px,7vw,88px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--fg)" }}>
            Growing accounts,
            <br />
            <em style={{ color: "var(--accent)" }}>one month</em>
            <br />
            at a time.
          </h1>

          {/* Bio */}
          <div className="flex flex-col gap-4 max-w-[52ch]">
            <p className="text-[16px] leading-[1.65] m-0" style={{ color: "var(--fg-dim)" }}>
              I help brands and creators grow on Instagram and TikTok through content that connects with people.
            </p>
            <p className="text-[15px] leading-[1.7] m-0" style={{ color: "var(--fg-dim)" }}>
              From content planning and scripting to editing, posting, and analytics, I manage the entire process. My background in live radio taught me how to communicate clearly and keep an audience engaged.
            </p>
            <p className="text-[15px] leading-[1.7] m-0" style={{ color: "var(--fg-dim)" }}>
              I&apos;m highly detail-oriented and believe the small things matter. Every caption, edit, thumbnail, and post serves a purpose. I combine creativity with data to create content that not only looks good but performs.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="#stats"
              className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[11px] tracking-[.16em] uppercase no-underline transition-opacity hover:opacity-80"
              style={{ background: "var(--accent)", color: "#fff", borderRadius: "2px" }}
            >
              See My Analytics
            </a>
            <a
              href="https://wa.me/2349025158865"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[11px] tracking-[.16em] uppercase no-underline transition-colors duration-200"
              style={{ border: "1px solid var(--line-mid)", color: "var(--accent)", borderRadius: "2px" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--line)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              Get in Touch
            </a>
            <a
              href="/Oyindamola%20Elizabeth%20Amosu_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[11px] tracking-[.16em] uppercase no-underline transition-colors duration-200"
              style={{ border: "1px solid var(--line-mid)", color: "var(--fg-mute)", borderRadius: "2px" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--fg)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--fg-mute)"; }}
            >
              ↓ CV
            </a>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap gap-5 pt-2" style={{ borderTop: "1px solid var(--line)" }}>
            <a
              href="mailto:elizabethoyindamola1@gmail.com"
              className="font-mono text-[12px] tracking-[.1em] no-underline transition-colors duration-200"
              style={{ color: "var(--accent-2)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent-2)")}
            >
              elizabethoyindamola1@gmail.com
            </a>
            <span className="font-mono text-[12px] tracking-[.1em]" style={{ color: "var(--fg-mute)" }}>
              +234 902 515 8865 · Lagos, Nigeria
            </span>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.2 }}
        >
          <figure
            className="relative overflow-hidden m-0"
            style={{
              width: "clamp(260px, 70vw, 340px)",
              height: "clamp(340px, 55vw, 440px)",
              border: "1px solid var(--line-mid)",
              borderRadius: "2px",
            }}
          >
            <Image
              src={PROFILE_SRC}
              alt="Oyindamola Amosu"
              fill
              sizes="(max-width: 1024px) 70vw, 340px"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </figure>
        </motion.div>
      </div>
    </header>
  );
}
