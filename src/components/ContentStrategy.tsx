"use client";

const pillars = [
  {
    num: "i.",
    title: "Authority",
    body: "Founder-led essays, breakdowns, frameworks. The substance the brand wants to be known for.",
    chips: ["Carousels", "Talking Head", "Long-form"],
  },
  {
    num: "ii.",
    title: "Atmosphere",
    body: "Texture, world, taste. Editorial photography, b-roll and ambient cuts — the brand's mood without the sales pitch.",
    chips: ["Reels", "Stills", "B-roll"],
  },
  {
    num: "iii.",
    title: "Audience",
    body: "UGC, testimonials, customer stories, replies-in-public. Where the brand listens out loud.",
    chips: ["UGC", "Q&A", "Lives"],
  },
  {
    num: "iv.",
    title: "Action",
    body: "Launches, drops, offers, events. The pillar that pays for the rest. Calibrated to never feel like everything.",
    chips: ["Campaigns", "Ads", "Email"],
  },
];

export default function ContentStrategy() {
  return (
    <section id="strategy" className="relative" style={{ padding: "140px 0" }}>
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
        06
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-12 max-sm:px-6">
        <div className="flex justify-between items-end mb-16 gap-10 flex-wrap">
          <div>
            <div className="reveal font-mono text-[11px] tracking-[.22em] uppercase" style={{ color: "var(--fg-dim)" }}>
              § 06 — Strategy
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
              How the <em>content</em>
              <br />
              actually gets made.
            </h2>
          </div>
          <p
            className="reveal delay-2 max-w-[380px] text-[15px] leading-[1.6]"
            style={{ color: "var(--fg-dim)" }}
          >
            Every brand I work with runs on the same four-pillar architecture. The themes change. The discipline
            doesn&apos;t.
          </p>
        </div>

        <div
          className="grid gap-[80px] items-start max-[900px]:grid-cols-1 max-[900px]:gap-8"
          style={{ gridTemplateColumns: "1fr 1.4fr" }}
        >
          {/* Sticky left */}
          <div className="reveal" style={{ position: "sticky", top: 120 }}>
            <div
              className="font-mono text-[11px] tracking-[.22em] uppercase"
              style={{ color: "var(--fg-dim)" }}
            >
              The Operating System
            </div>
            <h3
              className="font-serif font-light mt-[14px] mb-6"
              style={{
                fontSize: "clamp(32px,4vw,56px)",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
              }}
            >
              One <em>framework</em>, four pillars, ninety-day cycles.
            </h3>
            <p className="text-[16px] leading-[1.65] max-w-[38ch]" style={{ color: "var(--fg-dim)" }}>
              Pillars give the team a shared vocabulary. Capture days give the calendar a rhythm. Reviews give every
              cycle a sharper edge than the last.
            </p>
          </div>

          {/* Pillars */}
          <div className="flex flex-col gap-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`reveal${i > 0 ? ` delay-${i}` : ""} grid border`}
                style={{
                  gridTemplateColumns: "60px 1fr",
                  gap: "28px",
                  padding: "28px",
                  background: "var(--bg-2)",
                  borderColor: "var(--line)",
                  transition: "transform 0.6s cubic-bezier(.16,1,.3,1), border-color 0.4s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateX(-6px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "color-mix(in oklab, var(--fg) 30%, transparent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
                }}
              >
                <div
                  className="font-serif italic font-light text-[44px] leading-[.9]"
                  style={{ color: "var(--accent)" }}
                >
                  {p.num}
                </div>
                <div>
                  <h4
                    className="font-serif font-normal text-[26px] mb-2 mt-0"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {p.title}
                  </h4>
                  <p className="text-[14px] leading-[1.6] mb-[14px]" style={{ color: "var(--fg-dim)" }}>
                    {p.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.chips.map((chip) => (
                      <span
                        key={chip}
                        className="font-mono text-[10px] tracking-[.15em] uppercase px-[10px] py-[5px] rounded-full"
                        style={{
                          background: "var(--chip-bg)",
                          color: "var(--fg-dim)",
                        }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
