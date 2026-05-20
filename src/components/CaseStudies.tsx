"use client";

const cases = [
  {
    client: "— Maison Otun, fragrance",
    tag: "DTC / Luxury",
    visual: "Feed grid — 9 posts",
    title: "Re-launching a heritage brand with a quieter, more editorial voice.",
    body: "Repositioned the feed around object photography and founder-led narrative. Cut posting cadence in half; tripled average reach.",
    metrics: [
      { v: "+312", pct: "%", k: "Avg. Reach" },
      { v: "+47", pct: "%", k: "Saves" },
      { v: "2.1", pct: "x", k: "CVR Lift" },
    ],
    span: 6,
  },
  {
    client: "— Sade Wellness, founder brand",
    tag: "Personal / B2B",
    visual: "Reel series — 12 cuts",
    title: "Turning a founder's POV into a recognisable visual language.",
    body: "Built a 4-pillar content engine with weekly capture days, then edited and shipped short-form. From 4k to 38k followers in five months.",
    metrics: [
      { v: "9.4", pct: "M", k: "Views" },
      { v: "+850", pct: "%", k: "Followers" },
      { v: "63", pct: "", k: "Inbound Leads" },
    ],
    span: 6,
  },
  {
    client: "— Lagos Coffee Co.",
    tag: "Hospitality",
    visual: "Campaign hero — Open House",
    title: "Filling a new café for six weeks straight with one campaign, one creator and a single editing system.",
    body: "Designed an 'open house' content arc — daily reels, behind-the-counter cuts and locally-targeted ads. Sustained sell-through on opening weeks without paid amplification.",
    metrics: [
      { v: "+1.4", pct: "M", k: "Organic Reach" },
      { v: "28", pct: "%", k: "Foot Traffic ↑" },
      { v: "0", pct: "$", k: "Ad Spend" },
    ],
    span: 12,
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="relative" style={{ padding: "140px 0" }}>
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
        04
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-12 max-sm:px-6">
        <div className="flex justify-between items-end mb-16 gap-10 flex-wrap">
          <div>
            <div className="reveal font-mono text-[11px] tracking-[.22em] uppercase" style={{ color: "var(--fg-dim)" }}>
              § 04 — Case Studies
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
              Selected <em>social</em>
              <br />
              media work.
            </h2>
          </div>
          <p
            className="reveal delay-2 max-w-[380px] text-[15px] leading-[1.6]"
            style={{ color: "var(--fg-dim)" }}
          >
            Three engagements, three different scales. Numbers are over the engagement window — not lifetime vanity totals.
          </p>
        </div>

        <div
          className="cases-grid grid gap-6"
          style={{ gridTemplateColumns: "repeat(12, 1fr)" }}
        >
          {cases.map((c, i) => (
            <article
              key={i}
              className={`reveal${i === 1 ? " delay-1" : i === 2 ? " delay-2" : ""} border overflow-hidden relative`}
              style={{
                gridColumn: `span ${c.span}`,
                padding: "28px",
                background: "var(--bg-2)",
                borderColor: "var(--line)",
                transition: "transform 0.6s cubic-bezier(.16,1,.3,1), border-color 0.4s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.borderColor = "color-mix(in oklab, var(--fg) 30%, transparent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
              }}
            >
              <div className="flex justify-between items-center mb-7">
                <div className="font-serif italic text-[20px]" style={{ color: "var(--fg)" }}>
                  {c.client}
                </div>
                <div
                  className="font-mono text-[10px] tracking-[.2em] uppercase px-[10px] py-[5px] rounded-full border"
                  style={{ color: "var(--fg-dim)", borderColor: "var(--line)" }}
                >
                  {c.tag}
                </div>
              </div>

              <div
                className="relative mb-7 border grid place-items-center"
                style={{
                  aspectRatio: "16/9",
                  background: `repeating-linear-gradient(-30deg, color-mix(in oklab, var(--fg) 8%, transparent), color-mix(in oklab, var(--fg) 8%, transparent) 1px, transparent 1px, transparent 12px), var(--bg)`,
                  borderColor: "var(--line)",
                }}
              >
                <span className="font-mono text-[10px] tracking-[.2em] uppercase" style={{ color: "var(--fg-dim)" }}>
                  {c.visual}
                </span>
              </div>

              <h3
                className="font-serif font-light mb-[14px]"
                style={{
                  fontSize: "clamp(24px,2.4vw,34px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                }}
              >
                {c.title}
              </h3>
              <p className="text-[14px] leading-[1.6] mb-6" style={{ color: "var(--fg-dim)" }}>
                {c.body}
              </p>

              <div
                className="grid pt-5 gap-3"
                style={{
                  gridTemplateColumns: "repeat(3, 1fr)",
                  borderTop: "1px solid var(--line)",
                }}
              >
                {c.metrics.map((m, mi) => (
                  <div key={mi}>
                    <div className="font-serif font-light text-[32px] leading-none">
                      {m.v}
                      <span className="text-[18px]" style={{ color: "var(--accent)" }}>
                        {m.pct}
                      </span>
                    </div>
                    <div
                      className="font-mono text-[10px] tracking-[.18em] uppercase mt-[6px]"
                      style={{ color: "var(--fg-dim)" }}
                    >
                      {m.k}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
