"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

function Counter({ target, decimals = 0 }: { target: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const observed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || observed.current) return;
    observed.current = true;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const dur = 1600;
          const start = performance.now();
          function step(now: number) {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            el!.textContent = (eased * target).toFixed(decimals);
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, decimals]);

  return <span ref={ref}>0</span>;
}

export default function About() {
  return (
    <section id="about" className="relative" style={{ padding: "140px 0" }}>
      <div
        className="absolute font-serif italic font-light pointer-events-none z-0"
        style={{
          top: 80,
          right: 48,
          fontSize: "clamp(80px,12vw,180px)",
          lineHeight: 1,
          color: "var(--accent)",
          opacity: 0.12,
        }}
        aria-hidden
      >
        02
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-12 max-sm:px-6">
        {/* Section head */}
        <div className="flex justify-between items-end mb-16 gap-10 flex-wrap">
          <div>
            <div className="reveal font-mono text-[11px] tracking-[.22em] uppercase" style={{ color: "var(--fg-dim)" }}>
              § 02 — About
            </div>
            <h2
              className="reveal delay-1 font-serif font-light mt-[18px] mb-0"
              style={{
                fontSize: "clamp(40px,6vw,88px)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                maxWidth: "14ch",
              }}
            >
              A <em>quiet</em>
              <br />
              obsession with
              <br />
              the details.
            </h2>
          </div>
          <p
            className="reveal delay-2 max-w-[380px] text-[15px] leading-[1.6]"
            style={{ color: "var(--fg-dim)" }}
          >
            Across radio, short-form video, and social — building real audiences
            for brands that mean business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[1fr_1.2fr] gap-20 items-start max-[900px]:grid-cols-1 max-[900px]:gap-12">
          {/* Portrait */}
          <div
            className="reveal relative overflow-hidden border"
            style={{
              height: "clamp(420px, 60vw, 620px)",
              borderColor: "var(--line)",
            }}
          >
            <Image
              src="https://res.cloudinary.com/dhmqhless/image/upload/v1779306220/oyin-port_aueylu.jpg"
              alt="Oyindamola Amosu"
              fill
              sizes="(max-width: 900px) 90vw, 40vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(180deg, transparent 60%, color-mix(in oklab, var(--bg) 60%, transparent))",
              }}
            />
          </div>

          {/* Copy */}
          <div>
            <h3
              className="reveal delay-1 font-serif font-light mt-0 mb-7"
              style={{
                fontSize: "clamp(28px,3.4vw,44px)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              I help brands grow on social — and keep the numbers honest.
            </h3>
            <p className="reveal delay-2 text-[17px] leading-[1.7] mb-[18px]" style={{ color: "var(--fg-dim)" }}>
              My work lives in the scroll. I plan content, edit every video in CapCut, write the captions, research
              hashtags, and schedule posts. Then I track what the platform data says and use it to make the next
              month sharper — not just busier.
            </p>
            <p className="reveal delay-3 text-[17px] leading-[1.7] mb-0" style={{ color: "var(--fg-dim)" }}>
              Before social media, I ran live radio at Pensioners 106.7FM — presenting on air, writing scripts and
              keeping shows on time every day. That year sharpened the storytelling instinct I bring to everything
              I make now.
            </p>

            <div className="reveal delay-3 font-serif italic text-[36px] mt-9" style={{ color: "var(--fg)" }}>
              — Oyin A.
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 max-[480px]:grid-cols-1 max-[640px]:grid-cols-2 gap-6 mt-12 pt-8"
              style={{ borderTop: "1px solid var(--line)" }}
            >
              <div className="reveal delay-2">
                <div className="font-serif text-[44px] font-light leading-none">
                  <Counter target={1070} /><span className="italic" style={{ color: "var(--accent)" }}>%</span>
                </div>
                <div className="mt-[6px] font-mono text-[11px] tracking-[.18em] uppercase" style={{ color: "var(--fg-dim)" }}>
                  Instagram Reach (1 Month)
                </div>
              </div>
              <div className="reveal delay-3">
                <div className="font-serif text-[44px] font-light leading-none">
                  999<span className="italic" style={{ color: "var(--accent)" }}>%+</span>
                </div>
                <div className="mt-[6px] font-mono text-[11px] tracking-[.18em] uppercase" style={{ color: "var(--fg-dim)" }}>
                  TikTok Reach Growth
                </div>
              </div>
              <div className="reveal delay-4">
                <div className="font-serif text-[44px] font-light leading-none">
                  40<span className="italic" style={{ color: "var(--accent)" }}>%</span>
                </div>
                <div className="mt-[6px] font-mono text-[11px] tracking-[.18em] uppercase" style={{ color: "var(--fg-dim)" }}>
                  New Instagram Audience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
