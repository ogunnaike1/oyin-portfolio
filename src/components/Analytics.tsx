"use client";
import { useEffect, useRef } from "react";

function useAnalyticsReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    el.querySelectorAll<HTMLElement>(".ana-card").forEach((card) => io.observe(card));
    return () => io.disconnect();
  }, [ref]);
}

function useCounter(selector: string, container: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const parent = container.current;
    if (!parent) return;

    const counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const target = parseFloat(el.dataset.counter!);
          const decimals = parseInt(el.dataset.decimals ?? "0", 10);
          const dur = 1600;
          const start = performance.now();
          function step(now: number) {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = (eased * target).toFixed(decimals);
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          counterIO.unobserve(e.target);
        });
      },
      { threshold: 0.4 }
    );

    parent.querySelectorAll<HTMLElement>(selector).forEach((el) => counterIO.observe(el));
    return () => counterIO.disconnect();
  }, [selector, container]);
}

const bars = [22, 34, 28, 46, 38, 52, 60, 48, 92, 70, 58, 64];

const platforms = [
  { name: "Instagram", w: "88%", v: "88%" },
  { name: "TikTok", w: "72%", v: "72%" },
  { name: "YouTube", w: "54%", v: "54%" },
  { name: "LinkedIn", w: "36%", v: "36%" },
];

export default function Analytics() {
  const sectionRef = useRef<HTMLElement>(null);
  useAnalyticsReveal(sectionRef as React.RefObject<HTMLElement | null>);
  useCounter("[data-counter]", sectionRef as React.RefObject<HTMLElement | null>);

  return (
    <section id="insights" className="relative" style={{ padding: "140px 0" }} ref={sectionRef}>
      <div className="w-full max-w-[1440px] mx-auto px-12 max-sm:px-6">
        <div className="flex justify-between items-end mb-16 gap-10 flex-wrap">
          <div>
            <div className="reveal font-mono text-[11px] tracking-[.22em] uppercase" style={{ color: "var(--fg-dim)" }}>
              § 07 — Analytics
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
              Numbers,
              <br />
              with <em>conclusions</em>.
            </h2>
          </div>
          <p
            className="reveal delay-2 max-w-[380px] text-[15px] leading-[1.6]"
            style={{ color: "var(--fg-dim)" }}
          >
            A representative quarter across active clients. Reporting goes deeper — what you see here is the headline.
          </p>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(12, 1fr)" }}>
          {/* Big card — reach */}
          <div
            className="ana-card reveal border relative overflow-hidden"
            style={{
              gridColumn: "span 6",
              aspectRatio: "16/11",
              padding: "32px",
              background: "var(--bg-2)",
              borderColor: "var(--line)",
            }}
          >
            <div className="font-mono text-[11px] tracking-[.2em] uppercase" style={{ color: "var(--fg-dim)" }}>
              Total Reach · Q1 2026
            </div>
            <div
              className="font-serif font-light mt-6"
              style={{
                fontSize: "clamp(48px,7vw,108px)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              <span data-counter="14.8" data-decimals="1">0.0</span>
              <span className="italic text-[.55em]" style={{ color: "var(--accent)" }}>M</span>
            </div>
            <p className="text-[13px] mt-4 max-w-[32ch]" style={{ color: "var(--fg-dim)" }}>
              Aggregated organic reach across managed accounts. 68% short-form video; 22% carousels; 10% stills.
            </p>

            {/* Chart */}
            <div className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none opacity-90">
              <div className="ana-bars flex gap-[6px] items-end h-full px-8 pb-8">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className={`bar flex-1 rounded-t-[1px]${h === 92 ? " peak" : ""}`}
                    style={{
                      height: `${h}%`,
                      background: h === 92 ? "var(--accent)" : "var(--fg)",
                      opacity: h === 92 ? 0.9 : 0.14,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Engagement */}
          <div
            className="ana-card reveal delay-1 border"
            style={{
              gridColumn: "span 3",
              aspectRatio: "1",
              padding: "32px",
              background: "var(--bg-2)",
              borderColor: "var(--line)",
            }}
          >
            <div className="font-mono text-[11px] tracking-[.2em] uppercase" style={{ color: "var(--fg-dim)" }}>
              Engagement
            </div>
            <div
              className="font-serif font-light mt-6"
              style={{
                fontSize: "clamp(40px,5vw,72px)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              <span data-counter="7.2" data-decimals="1">0.0</span>
              <span className="italic text-[.55em]" style={{ color: "var(--accent)" }}>%</span>
            </div>
            <p className="text-[13px] mt-4" style={{ color: "var(--fg-dim)" }}>
              Avg. across feed + reels. Industry median sits at 1.4%.
            </p>
          </div>

          {/* Saves */}
          <div
            className="ana-card reveal delay-2 border"
            style={{
              gridColumn: "span 3",
              aspectRatio: "1",
              padding: "32px",
              background: "var(--bg-2)",
              borderColor: "var(--line)",
            }}
          >
            <div className="font-mono text-[11px] tracking-[.2em] uppercase" style={{ color: "var(--fg-dim)" }}>
              Saves / 1k
            </div>
            <div
              className="font-serif font-light mt-6"
              style={{
                fontSize: "clamp(40px,5vw,72px)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              <span data-counter="84">0</span>
            </div>
            <p className="text-[13px] mt-4" style={{ color: "var(--fg-dim)" }}>
              A truer signal of brand fit than likes — what we optimise to.
            </p>
          </div>

          {/* Platform mix */}
          <div
            className="ana-card reveal border"
            style={{
              gridColumn: "span 6",
              padding: "32px",
              background: "var(--bg-2)",
              borderColor: "var(--line)",
            }}
          >
            <div className="font-mono text-[11px] tracking-[.2em] uppercase" style={{ color: "var(--fg-dim)" }}>
              Platform Mix
            </div>
            <div className="flex flex-col gap-[18px] mt-7">
              {platforms.map((pl) => (
                <div
                  key={pl.name}
                  className="grid items-center gap-4"
                  style={{ gridTemplateColumns: "100px 1fr 70px" }}
                >
                  <div className="font-serif italic text-[20px]">{pl.name}</div>
                  <div className="pbar relative h-[2px]" style={{ background: "var(--line)", ["--w" as string]: pl.w }} />
                  <div
                    className="font-mono text-[11px] tracking-[.14em] text-right"
                    style={{ color: "var(--fg-dim)" }}
                  >
                    {pl.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top format */}
          <div
            className="ana-card reveal delay-1 border"
            style={{
              gridColumn: "span 6",
              padding: "32px",
              background: "var(--bg-2)",
              borderColor: "var(--line)",
            }}
          >
            <div className="font-mono text-[11px] tracking-[.2em] uppercase" style={{ color: "var(--fg-dim)" }}>
              Top Performing Format
            </div>
            <div
              className="font-serif font-light italic mt-6"
              style={{
                fontSize: "clamp(36px,4vw,60px)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              Founder-led
              <br />
              Reels, 22–34s.
            </div>
            <p className="text-[13px] mt-4 max-w-[32ch]" style={{ color: "var(--fg-dim)" }}>
              Tight talking-head into b-roll into pay-off frame. Holds 68% retention to end-card.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
