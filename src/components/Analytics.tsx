"use client";
import { useEffect, useRef } from "react";

function useCounter(selector: string, container: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const parent = container.current;
    if (!parent) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const target  = parseFloat(el.dataset.counter!);
        const decimals = parseInt(el.dataset.decimals ?? "0", 10);
        const dur = 1400;
        const start = performance.now();
        function step(now: number) {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (eased * target).toFixed(decimals);
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        io.unobserve(e.target);
      });
    }, { threshold: 0.4 });
    parent.querySelectorAll<HTMLElement>(selector).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector, container]);
}

const tiktokStats = [
  { value: "7817",   decimals: "0", label: "Video Views",       change: "+265.6%" },
  { value: "5824",   decimals: "0", label: "Reached Audience",  change: "+190.2%" },
  { value: "847",    decimals: "0", label: "Engaged Audience",  change: "+257.4%" },
  { value: "308",    decimals: "0", label: "Total Likes",       change: "+600%"   },
  { value: "47",     decimals: "0", label: "New Followers",     change: "+235.7%" },
];

const igStats = [
  { value: "3495",   decimals: "0", label: "Total Views",       change: "—"       },
  { value: "707",    decimals: "0", label: "Accounts Reached",  change: "+128.8%" },
  { value: "142",    decimals: "0", label: "Total Interactions",change: "—"       },
  { value: "73",     decimals: "0", label: "Profile Visits",    change: "+55.3%"  },
];

const platforms = [
  { name: "Instagram", w: "88%", v: "88%" },
  { name: "TikTok",    w: "72%", v: "72%" },
  { name: "YouTube",   w: "40%", v: "40%" },
];

export default function Analytics() {
  const ref = useRef<HTMLElement>(null);
  useCounter("[data-counter]", ref as React.RefObject<HTMLElement | null>);

  return (
    <section id="insights" ref={ref} style={{ padding: "100px 0", background: "var(--bg)" }}>
      <div className="w-full max-w-[1200px] mx-auto px-8 max-sm:px-5">
        {/* Header */}
        <div className="mb-12">
          <p className="reveal font-mono text-[11px] tracking-[.22em] uppercase mb-3" style={{ color: "var(--accent-2)" }}>
            Platform Analytics
          </p>
          <h2
            className="reveal delay-1 font-serif font-light m-0"
            style={{ fontSize: "clamp(32px,5vw,60px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--fg)" }}
          >
            Full performance <em>breakdown</em>
          </h2>
          <p className="reveal delay-2 mt-4 text-[15px] leading-[1.6] max-w-[52ch]" style={{ color: "var(--fg-dim)" }}>
            Real numbers from platform data — no estimates. Reporting period: March – May 2026.
          </p>
        </div>

        {/* Two-platform grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* TikTok */}
          <div
            className="reveal p-7"
            style={{ background: "var(--bg-2)", border: "1px solid var(--line)" }}
          >
            <div className="flex items-center justify-between mb-6 pb-4" style={{ borderBottom: "1px solid var(--line)" }}>
              <span className="font-mono text-[12px] tracking-[.18em] uppercase font-medium" style={{ color: "var(--fg)" }}>TikTok</span>
              <span className="font-mono text-[10px]" style={{ color: "var(--fg-mute)" }}>Mar 1 – May 23, 2026</span>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {tiktokStats.map((s) => (
                <div key={s.label}>
                  <div
                    className="font-serif font-light"
                    style={{ fontSize: "clamp(28px,4vw,44px)", lineHeight: 1, letterSpacing: "-0.02em", color: "var(--fg)" }}
                  >
                    <span data-counter={s.value} data-decimals={s.decimals}>0</span>
                  </div>
                  <div className="font-mono text-[10px] tracking-[.14em] mt-1" style={{ color: "var(--accent)", fontVariantNumeric: "tabular-nums" }}>
                    {s.change}
                  </div>
                  <div className="font-mono text-[10px] tracking-[.14em] uppercase mt-[2px]" style={{ color: "var(--fg-mute)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instagram */}
          <div
            className="reveal delay-1 p-7"
            style={{ background: "var(--bg-2)", border: "1px solid var(--line)" }}
          >
            <div className="flex items-center justify-between mb-6 pb-4" style={{ borderBottom: "1px solid var(--line)" }}>
              <span className="font-mono text-[12px] tracking-[.18em] uppercase font-medium" style={{ color: "var(--fg)" }}>Instagram</span>
              <span className="font-mono text-[10px]" style={{ color: "var(--fg-mute)" }}>Feb 28 – May 28, 2026</span>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {igStats.map((s) => (
                <div key={s.label}>
                  <div
                    className="font-serif font-light"
                    style={{ fontSize: "clamp(28px,4vw,44px)", lineHeight: 1, letterSpacing: "-0.02em", color: "var(--fg)" }}
                  >
                    <span data-counter={s.value} data-decimals={s.decimals}>0</span>
                  </div>
                  <div className="font-mono text-[10px] tracking-[.14em] mt-1" style={{ color: "var(--accent)" }}>
                    {s.change}
                  </div>
                  <div className="font-mono text-[10px] tracking-[.14em] uppercase mt-[2px]" style={{ color: "var(--fg-mute)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform mix + key insight */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className="ana-card reveal p-7"
            style={{ background: "var(--bg-2)", border: "1px solid var(--line)" }}
          >
            <div className="font-mono text-[11px] tracking-[.18em] uppercase mb-6" style={{ color: "var(--fg-mute)" }}>
              Platform Focus
            </div>
            <div className="flex flex-col gap-5">
              {platforms.map((pl) => (
                <div key={pl.name} className="grid items-center gap-4" style={{ gridTemplateColumns: "96px 1fr 52px" }}>
                  <div className="font-serif italic text-[18px]" style={{ color: "var(--fg)" }}>{pl.name}</div>
                  <div className="pbar relative h-[2px]" style={{ background: "var(--line-mid)", ["--w" as string]: pl.w }} />
                  <div className="font-mono text-[11px] text-right" style={{ color: "var(--fg-dim)" }}>{pl.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="reveal delay-1 p-7 flex flex-col justify-between"
            style={{ background: "var(--accent)", border: "1px solid var(--accent)" }}
          >
            <div className="font-mono text-[11px] tracking-[.18em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Key Insight
            </div>
            <p className="text-[15px] leading-[1.65] m-0" style={{ color: "#fff" }}>
              Over 81% of the audience falls in the <strong>25–44 age bracket</strong>. The UK and Nigeria together account for over <strong>80% of viewers</strong> — news-anchored and culturally relevant content consistently outperformed standalone advice formats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
