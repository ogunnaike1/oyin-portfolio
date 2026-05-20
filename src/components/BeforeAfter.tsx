"use client";
import { useCallback, useEffect, useRef, useState } from "react";

const thumbs = [
  { label: "01 — Founder Film", before: "raw camera footage", after: "graded · scored · cut" },
  { label: "02 — Café Reel", before: "phone capture, mixed light", after: "warm grade · letterbox" },
  { label: "03 — YouTube Short", before: "long interview · 18 min", after: "tight cut · 1 min hero" },
  { label: "04 — Fragrance Spot", before: "product b-roll, flat", after: "cinemascope · sound design" },
];

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const [pct, setPct] = useState(50);
  const [labels, setLabels] = useState(thumbs[0]);
  const dragging = useRef(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);

  const setBA = useCallback((value: number) => {
    setPct(Math.max(2, Math.min(98, value)));
  }, []);

  const onMove = useCallback(
    (clientX: number) => {
      if (!wrapRef.current) return;
      const r = wrapRef.current.getBoundingClientRect();
      setBA(((clientX - r.left) / r.width) * 100);
    },
    [setBA]
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => { if (dragging.current) onMove(e.clientX); };
    const onMouseUp = () => { dragging.current = false; };
    const onTouchMove = (e: TouchEvent) => { if (dragging.current) onMove(e.touches[0].clientX); };
    const onTouchEnd = () => { dragging.current = false; };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [onMove]);

  // Auto-sweep on enter view
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          let startPct = 100;
          const startTime = performance.now();
          function step(now: number) {
            const p = Math.min(1, (now - startTime) / 1400);
            const eased = 1 - Math.pow(1 - p, 4);
            setPct(100 - eased * 50);
            if (p < 1) animRef.current = requestAnimationFrame(step);
          }
          animRef.current = requestAnimationFrame(step);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => { io.disconnect(); if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  function selectThumb(i: number) {
    setActive(i);
    setLabels(thumbs[i]);
    if (animRef.current) cancelAnimationFrame(animRef.current);
    const startTime = performance.now();
    function step(now: number) {
      const p = Math.min(1, (now - startTime) / 900);
      const eased = 1 - Math.pow(1 - p, 4);
      setPct(100 - eased * 50);
      if (p < 1) animRef.current = requestAnimationFrame(step);
    }
    setPct(100);
    animRef.current = requestAnimationFrame(step);
  }

  return (
    <section id="ba" className="relative" style={{ padding: "140px 0" }}>
      <div className="w-full max-w-[1440px] mx-auto px-12 max-sm:px-6">
        <div className="flex justify-between items-end mb-16 gap-10 flex-wrap">
          <div>
            <div className="reveal font-mono text-[11px] tracking-[.22em] uppercase" style={{ color: "var(--fg-dim)" }}>
              § 05 — Before / After
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
              The <em>edit</em> is
              <br />
              the brand.
            </h2>
          </div>
          <p
            className="reveal delay-2 max-w-[380px] text-[15px] leading-[1.6]"
            style={{ color: "var(--fg-dim)" }}
          >
            Drag the divider to compare raw footage with the finished cut. Colour, sound, pacing and motion type,
            treated as one system.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={wrapRef}
          className="reveal relative border overflow-hidden cursor-ew-resize select-none min-h-60"
          style={{
            aspectRatio: "16 / 8",
            borderColor: "var(--line)",
          }}
          onMouseDown={(e) => { dragging.current = true; onMove(e.clientX); }}
          onTouchStart={(e) => { dragging.current = true; onMove(e.touches[0].clientX); }}
        >
          {/* Before */}
          <div
            className="absolute inset-0 grid place-items-center overflow-hidden"
            style={{
              background: `repeating-linear-gradient(45deg, color-mix(in oklab, var(--fg) 6%, transparent), color-mix(in oklab, var(--fg) 6%, transparent) 1px, transparent 1px, transparent 22px), #2a2724`,
              color: "#b8b1a3",
            }}
          >
            <span
              className="absolute top-[18px] left-[18px] font-mono text-[10px] tracking-[.26em] uppercase px-[10px] py-[6px] rounded-full border opacity-70"
              style={{ borderColor: "currentColor" }}
            >
              Before — RAW
            </span>
            <span className="font-serif italic opacity-65" style={{ fontSize: "clamp(28px,4vw,56px)" }}>
              {labels.before}
            </span>
          </div>

          {/* After */}
          <div
            className="absolute inset-0 grid place-items-center overflow-hidden"
            style={{
              background: `radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--accent) 50%, transparent), transparent 60%), radial-gradient(circle at 70% 70%, color-mix(in oklab, #d4b27e 30%, transparent), transparent 60%), #14110f`,
              color: "#f4ecd9",
              clipPath: `inset(0 0 0 ${pct}%)`,
            }}
          >
            <span
              className="absolute top-[18px] right-[18px] font-mono text-[10px] tracking-[.26em] uppercase px-[10px] py-[6px] rounded-full border opacity-70"
              style={{ borderColor: "currentColor" }}
            >
              After — FINAL CUT
            </span>
            <span className="font-serif italic opacity-65" style={{ fontSize: "clamp(28px,4vw,56px)" }}>
              {labels.after}
            </span>
          </div>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] pointer-events-none -translate-x-1/2"
            style={{
              left: `${pct}%`,
              background: "var(--fg)",
              boxShadow: "0 0 0 1px color-mix(in oklab, var(--bg) 50%, transparent)",
            }}
          />

          {/* Handle */}
          <div
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full grid place-items-center font-mono text-[14px] tracking-[.1em] pointer-events-none"
            style={{
              left: `${pct}%`,
              background: "var(--fg)",
              color: "var(--bg)",
            }}
          >
            ↔
          </div>
        </div>

        {/* Thumbs */}
        <div className="reveal delay-1 flex gap-3 mt-6 flex-wrap">
          {thumbs.map((t, i) => (
            <button
              key={i}
              onClick={() => selectThumb(i)}
              className="relative w-[132px] border cursor-pointer transition-[border-color] duration-300"
              style={{
                aspectRatio: "16/9",
                background: `repeating-linear-gradient(-30deg, color-mix(in oklab, var(--fg) 8%, transparent), color-mix(in oklab, var(--fg) 8%, transparent) 1px, transparent 1px, transparent 8px), var(--bg-2)`,
                borderColor: active === i ? "var(--accent)" : "var(--line)",
                padding: 0,
              }}
            >
              <span
                className="absolute bottom-[6px] left-2 right-2 font-mono text-[9px] tracking-[.18em] uppercase text-left"
                style={{ color: "var(--fg-dim)" }}
              >
                {t.label}
              </span>
            </button>
          ))}
        </div>

        {/* Meta */}
        <div
          className="ba-meta reveal delay-2 grid gap-5 mt-8 pt-6"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid var(--line)",
          }}
        >
          {[
            { l: "Tools", v: "Premiere · DaVinci · AE" },
            { l: "Avg. Turnaround", v: "72 hours" },
            { l: "Formats", v: "9:16 · 1:1 · 16:9" },
            { l: "Delivery", v: "Master + cutdowns" },
          ].map((b) => (
            <div key={b.l}>
              <div className="font-mono text-[10px] tracking-[.2em] uppercase mb-2" style={{ color: "var(--fg-dim)" }}>
                {b.l}
              </div>
              <div className="font-serif font-light text-[26px]">{b.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
