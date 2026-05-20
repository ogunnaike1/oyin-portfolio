"use client";

const services = [
  {
    idx: "01",
    name: ["Social Media ", "Management"],
    desc: "Strategy, calendars, copy, daily community work and reporting. Run as if it were our own brand.",
  },
  {
    idx: "02",
    name: ["Short-Form ", "Video Editing"],
    desc: "Reels, TikTok, YouTube Shorts — colour, sound, pacing and motion type, finished to a master grade.",
  },
  {
    idx: "03",
    name: ["Long-Form ", "& Brand Films"],
    desc: "Documentary cuts, founder films and YouTube essays. Story structure first, polish second.",
  },
  {
    idx: "04",
    name: ["Content ", "Strategy"],
    desc: "Positioning, pillars, channel mix, capture days and a 90-day operating plan you can actually run.",
  },
  {
    idx: "05",
    name: ["Analytics ", "& Reporting"],
    desc: "Monthly insights with real conclusions — what worked, what didn't, what we're testing next.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative" style={{ padding: "0 0 140px" }}>
      <div className="w-full max-w-[1440px] mx-auto px-12 max-sm:px-6">
        <div className="flex justify-between items-end mb-16 gap-10 flex-wrap">
          <div>
            <div className="reveal font-mono text-[11px] tracking-[.22em] uppercase" style={{ color: "var(--fg-dim)" }}>
              § 03 — Services
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
              What I do,
              <br />
              in <em>full</em>.
            </h2>
          </div>
          <p
            className="reveal delay-2 max-w-[380px] text-[15px] leading-[1.6]"
            style={{ color: "var(--fg-dim)" }}
          >
            A boutique offer — limited slots, end-to-end ownership, and the kind of finish you can put on a billboard.
          </p>
        </div>

        <div style={{ borderTop: "1px solid var(--line)" }}>
          {services.map((s) => (
            <ServiceRow key={s.idx} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ idx, name, desc }: { idx: string; name: string[]; desc: string }) {
  return (
    <div
      className="reveal group relative overflow-hidden cursor-pointer"
      style={{
        display: "grid",
        gridTemplateColumns: "60px 1fr 1.2fr 80px",
        gap: "32px",
        padding: "32px 0",
        borderBottom: "1px solid var(--line)",
        alignItems: "center",
        transition: "padding 0.5s cubic-bezier(.2,.7,.2,1)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.paddingLeft = "18px";
        el.style.color = "var(--bg)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.paddingLeft = "0";
        el.style.color = "var(--fg)";
      }}
    >
      {/* Invert fill */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "var(--fg)",
          transform: "translateY(101%)",
          transition: "transform 0.6s cubic-bezier(.16,1,.3,1)",
        }}
        ref={(el) => {
          if (!el) return;
          const parent = el.parentElement!;
          const enter = () => (el.style.transform = "translateY(0)");
          const leave = () => (el.style.transform = "translateY(101%)");
          parent.addEventListener("mouseenter", enter);
          parent.addEventListener("mouseleave", leave);
        }}
      />

      <div className="relative z-10 font-mono text-[11px] tracking-[.2em]" style={{ color: "var(--fg-dim)" }}>
        {idx}
      </div>
      <div
        className="relative z-10 font-serif font-light leading-none"
        style={{ fontSize: "clamp(28px,3.6vw,52px)", letterSpacing: "-0.01em" }}
      >
        {name[0]}
        <em>{name[1]}</em>
      </div>
      <div className="relative z-10 text-[14px] leading-[1.55] max-w-[44ch]" style={{ color: "var(--fg-dim)" }}>
        {desc}
      </div>
      <div
        className="relative z-10 justify-self-end w-9 h-9 rounded-full border grid place-items-center text-[14px]"
        style={{
          borderColor: "var(--line)",
          transition: "transform 0.5s cubic-bezier(.2,.7,.2,1)",
        }}
      >
        ↗
      </div>
    </div>
  );
}
