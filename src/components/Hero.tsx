"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < window.innerHeight && titleRef.current) {
        titleRef.current.style.transform = `translateY(${y * 0.18}px)`;
        titleRef.current.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.9)));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ padding: "140px 0 60px" }}
    >
      {/* Background mark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden" aria-hidden>
        <svg
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid meet"
          className="w-[110%] h-auto opacity-[.06] dark:opacity-[.08]"
          style={{ color: "var(--fg)" }}
        >
          <circle cx="600" cy="300" r="280" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="600" cy="300" r="200" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="600" cy="300" r="120" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-12 max-sm:px-6">
        {/* Meta row */}
        <div className="flex justify-between items-end mb-7 reveal in-view">
          <div className="font-mono text-[11px] tracking-[.22em] uppercase" style={{ color: "var(--fg-dim)" }}>
            Portfolio — MMXXVI
          </div>
          <div
            className="text-right font-mono text-[12px] tracking-[.14em] uppercase leading-[1.8]"
            style={{ color: "var(--fg-dim)" }}
          >
            <div>Based in Lagos · Working worldwide</div>
            <div>Available — Q3 / Q4</div>
          </div>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="font-serif font-light m-0 relative"
          style={{
            fontSize: "clamp(72px, 16.5vw, 260px)",
            lineHeight: 0.88,
            letterSpacing: "-0.03em",
            color: "var(--fg)",
          }}
        >
          <span className="reveal in-view block">Crafting</span>
          <span className="reveal in-view delay-1">
            <em>stories</em>
          </span>{" "}
          <span className="reveal in-view delay-2 italic font-light" style={{ color: "var(--accent)" }}>
            &amp;
          </span>
          <br />
          <span className="reveal in-view delay-3 block">strategy.</span>
        </h1>

        {/* Footer row */}
        <div className="flex justify-between items-end mt-9 gap-8 flex-wrap">
          <p
            className="reveal in-view delay-3 max-w-[460px] text-[15px] leading-[1.6]"
            style={{ color: "var(--fg-dim)" }}
          >
            I&apos;m Oyin — a social media manager &amp; video editor building brand worlds for founders, creatives and
            culture-led companies. Selected work below.
          </p>

          <div
            className="reveal in-view delay-4 inline-flex items-center gap-[10px] font-mono text-[11px] tracking-[.22em] uppercase"
            style={{ color: "var(--fg-dim)" }}
          >
            <span>Scroll</span>
            <span className="relative w-9 h-px overflow-hidden" style={{ background: "var(--fg-dim)" }}>
              <span
                className="absolute inset-0 animate-scroll-line"
                style={{ background: "var(--fg)" }}
              />
            </span>
            <span>01 / 09</span>
          </div>
        </div>
      </div>
    </header>
  );
}
