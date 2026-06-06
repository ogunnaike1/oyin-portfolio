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
    name: ["Content ", "Strategy"],
    desc: "Positioning, pillars, channel mix, content calendars and a 90-day operating plan you can actually run.",
  },
  {
    idx: "04",
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
              § 04 — Services
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
      className="reveal group cursor-pointer"
      style={{
        padding: "32px 0",
        borderBottom: "1px solid var(--line)",
        transition: "padding-left 0.4s cubic-bezier(.16,1,.3,1)",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.paddingLeft = "16px"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.paddingLeft = "0"; }}
    >
      <div className="sr-grid">
        <div className="font-mono text-[11px] tracking-[.2em]" style={{ color: "var(--fg-dim)" }}>
          {idx}
        </div>
        <div
          className="font-serif font-light leading-none"
          style={{ fontSize: "clamp(28px,3.6vw,52px)", letterSpacing: "-0.01em" }}
        >
          {name[0]}<em>{name[1]}</em>
        </div>
        <div className="sr-desc text-[14px] leading-[1.55] max-w-[44ch]" style={{ color: "var(--fg-dim)" }}>
          {desc}
        </div>
        <div
          className="sr-arrow justify-self-end w-9 h-9 rounded-full border grid place-items-center text-[14px]"
          style={{ borderColor: "var(--line)" }}
        >
          ↗
        </div>
      </div>
    </div>
  );
}
