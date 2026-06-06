"use client";

const stats = [
  {
    value: "1,070%",
    label: "Instagram Reach Growth",
    desc: "Instagram reach growth in one month — reaching brand-new audiences, not just existing followers.",
  },
  {
    value: "+265.6%",
    label: "TikTok Video Views",
    desc: "TikTok video views grew period-on-period, reaching 7,817 total views.",
  },
  {
    value: "5,824",
    label: "Unique People Reached",
    desc: "Unique people reached on TikTok — up 190.2% from the previous period.",
  },
  {
    value: "+600%",
    label: "TikTok Likes Growth",
    desc: "TikTok likes grew by 600%, alongside a 257% rise in engaged audience.",
  },
  {
    value: "30%",
    label: "Non-Follower Views",
    desc: "Of Instagram views came from people who don't follow the page — content reaching beyond the existing base.",
  },
];

export default function Stats() {
  return (
    <section id="stats" style={{ padding: "100px 0", background: "var(--bg)" }}>
      <div className="w-full max-w-[1200px] mx-auto px-8 max-sm:px-5">
        {/* Header */}
        <div className="mb-12">
          <p className="reveal font-mono text-[11px] tracking-[.22em] uppercase mb-3" style={{ color: "var(--accent-2)" }}>
            By the Numbers
          </p>
          <h2
            className="reveal delay-1 font-serif font-light m-0"
            style={{ fontSize: "clamp(32px,5vw,60px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--fg)" }}
          >
            What I&apos;ve actually <em>delivered</em>
          </h2>
          <p className="reveal delay-2 mt-4 text-[15px] leading-[1.6] max-w-[52ch]" style={{ color: "var(--fg-dim)" }}>
            These numbers come directly from TikTok and Instagram analytics across my first three months managing both accounts.
          </p>
        </div>

        {/* Stats list */}
        <div style={{ borderTop: "1px solid var(--line-mid)" }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal${i > 0 ? ` delay-${Math.min(i, 4)}` : ""} flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12 py-8`}
              style={{ borderBottom: "1px solid var(--line)" }}
            >
              <div
                className="font-serif font-light shrink-0"
                style={{ fontSize: "clamp(40px,6vw,72px)", lineHeight: 1, letterSpacing: "-0.02em", color: "var(--accent)", minWidth: "200px" }}
              >
                {s.value}
              </div>
              <div>
                <div className="font-mono text-[11px] tracking-[.18em] uppercase mb-1" style={{ color: "var(--accent-2)" }}>
                  {s.label}
                </div>
                <p className="text-[15px] leading-[1.6] m-0" style={{ color: "var(--fg-dim)" }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
