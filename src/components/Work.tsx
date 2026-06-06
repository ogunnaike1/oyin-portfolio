"use client";

const tiktop = [
  { title: "Nigerian companies expanding into the UK", date: "11 May", views: "1,200" },
  { title: "You don't need big money to build wealth", date: "19 Mar", views: "1,100" },
  { title: "Your 20s aren't for being perfect with money", date: "15 Apr", views: "669" },
  { title: "Bible money lessons that still work today", date: "10 Mar", views: "310" },
  { title: "So landlords can't just tell you to leave", date: "04 May", views: "278" },
  { title: "Everybody wants soft life…", date: "27 Apr", views: "267" },
  { title: "Money is funny — if you don't control it", date: "01 May", views: "265" },
  { title: "Airlines aren't just selling seats", date: "12 May", views: "220" },
];

const instagram = [
  { title: "What I wish I knew about money in my early 20s", views: "639" },
  { title: "Financial red flags (ft. Anthony Joshua ref)", views: "396" },
  { title: "You need this reset", views: "377" },
  { title: "Cultural differences in money habits (UK vs Nigeria)", views: "377" },
  { title: "Nigerian companies expanding into the UK", views: "371" },
];

export default function Work() {
  return (
    <section id="work" style={{ padding: "100px 0", background: "var(--bg-soft)" }}>
      <div className="w-full max-w-[1200px] mx-auto px-8 max-sm:px-5">
        {/* Header */}
        <div className="mb-12">
          <p className="reveal font-mono text-[11px] tracking-[.22em] uppercase mb-3" style={{ color: "var(--accent-2)" }}>
            Content Performance
          </p>
          <h2
            className="reveal delay-1 font-serif font-light m-0"
            style={{ fontSize: "clamp(32px,5vw,60px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--fg)" }}
          >
            Top performing <em>content</em>
          </h2>
          <p className="reveal delay-2 mt-4 text-[15px] leading-[1.6] max-w-[52ch]" style={{ color: "var(--fg-dim)" }}>
            News-anchored and culturally relevant content consistently outperformed across both platforms. Reporting period: March – May 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* TikTok */}
          <div className="reveal">
            <div
              className="flex items-center justify-between mb-4 pb-3"
              style={{ borderBottom: "1px solid var(--line-mid)" }}
            >
              <span className="font-mono text-[12px] tracking-[.18em] uppercase font-medium" style={{ color: "var(--fg)" }}>TikTok</span>
              <span className="font-mono text-[11px] tracking-[.14em]" style={{ color: "var(--fg-mute)" }}>Mar – May 2026</span>
            </div>
            <table className="w-full text-[14px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="text-left font-mono text-[10px] tracking-[.16em] uppercase pb-3 pr-4" style={{ color: "var(--fg-mute)", fontWeight: 400 }}>Title</th>
                  <th className="text-right font-mono text-[10px] tracking-[.16em] uppercase pb-3" style={{ color: "var(--fg-mute)", fontWeight: 400 }}>Views</th>
                </tr>
              </thead>
              <tbody>
                {tiktop.map((r, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--line)" }}>
                    <td className="py-3 pr-4 leading-[1.4]" style={{ color: "var(--fg)" }}>{r.title}</td>
                    <td className="py-3 text-right font-mono text-[13px]" style={{ color: "var(--accent)" }}>{r.views}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Instagram */}
          <div className="reveal delay-1">
            <div
              className="flex items-center justify-between mb-4 pb-3"
              style={{ borderBottom: "1px solid var(--line-mid)" }}
            >
              <span className="font-mono text-[12px] tracking-[.18em] uppercase font-medium" style={{ color: "var(--fg)" }}>Instagram Reels</span>
              <span className="font-mono text-[11px] tracking-[.14em]" style={{ color: "var(--fg-mute)" }}>Feb – May 2026</span>
            </div>
            <table className="w-full text-[14px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="text-left font-mono text-[10px] tracking-[.16em] uppercase pb-3 pr-4" style={{ color: "var(--fg-mute)", fontWeight: 400 }}>Title</th>
                  <th className="text-right font-mono text-[10px] tracking-[.16em] uppercase pb-3" style={{ color: "var(--fg-mute)", fontWeight: 400 }}>Views</th>
                </tr>
              </thead>
              <tbody>
                {instagram.map((r, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--line)" }}>
                    <td className="py-3 pr-4 leading-[1.4]" style={{ color: "var(--fg)" }}>{r.title}</td>
                    <td className="py-3 text-right font-mono text-[13px]" style={{ color: "var(--accent)" }}>{r.views}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Audience callout */}
            <div
              className="mt-8 p-5 text-[14px] leading-[1.65]"
              style={{ background: "var(--bg-2)", border: "1px solid var(--line)", color: "var(--fg-dim)" }}
            >
              Over 81% of the TikTok audience falls in the <strong style={{ color: "var(--fg)" }}>25–44 age bracket</strong>. The UK and Nigeria together account for <strong style={{ color: "var(--fg)" }}>over 80% of viewers</strong> — a dual-market footprint suited to UK financial products and diaspora money perspectives.
            </div>
          </div>
        </div>

        {/* Content Samples */}
        <div className="mt-16">
          <div className="mb-8 pb-4" style={{ borderBottom: "1px solid var(--line-mid)" }}>
            <p className="font-mono text-[11px] tracking-[.22em] uppercase m-0" style={{ color: "var(--accent-2)" }}>
              Content Samples
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="reveal flex flex-col gap-0" style={{ borderRadius: "6px", overflow: "hidden", border: "1px solid var(--line-mid)", background: "var(--bg-2)", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
              <div className="relative" style={{ background: "#0a0a0a" }}>
                {/* Header bar */}
                <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f56" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#27c840" }} />
                  <span className="ml-auto font-mono text-[10px] tracking-[.14em]" style={{ color: "rgba(255,255,255,0.3)" }}>Short-Form Video</span>
                </div>
                <video
                  src="https://res.cloudinary.com/dhmqhless/video/upload/q_auto,f_mp4/v1780782523/vid1_nge1ii.mov"
                  controls
                  playsInline
                  muted
                  preload="metadata"
                  style={{ width: "100%", display: "block", maxHeight: "480px", objectFit: "cover" }}
                />
              </div>
              <div className="flex items-start justify-between gap-3 px-5 py-4">
                <div>
                  <p className="font-mono text-[11px] tracking-[.16em] uppercase m-0 mb-1" style={{ color: "var(--accent-2)" }}>TikTok Edit</p>
                  <p className="text-[13px] leading-[1.5] m-0" style={{ color: "var(--fg-dim)" }}>Edited for pacing, cuts, and hooks.</p>
                </div>
                <span
                  className="shrink-0 font-mono text-[10px] tracking-[.12em] uppercase px-2 py-1 mt-[2px]"
                  style={{ background: "var(--chip-bg)", color: "var(--accent)", borderRadius: "2px", whiteSpace: "nowrap" }}
                >
                  Edit
                </span>
              </div>
            </div>

            {/* Video 2 */}
            <div className="reveal delay-1 flex flex-col gap-0" style={{ borderRadius: "6px", overflow: "hidden", border: "1px solid var(--line-mid)", background: "var(--bg-2)", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
              <div className="relative" style={{ background: "#0a0a0a" }}>
                {/* Header bar */}
                <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f56" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#27c840" }} />
                  <span className="ml-auto font-mono text-[10px] tracking-[.14em]" style={{ color: "rgba(255,255,255,0.3)" }}>Instagram Reel</span>
                </div>
                <video
                  src="https://res.cloudinary.com/dhmqhless/video/upload/q_auto,f_mp4/v1780782523/vid2_pvjhfg.mov"
                  controls
                  playsInline
                  muted
                  preload="metadata"
                  style={{ width: "100%", display: "block", maxHeight: "480px", objectFit: "cover" }}
                />
              </div>
              <div className="flex items-start justify-between gap-3 px-5 py-4">
                <div>
                  <p className="font-mono text-[11px] tracking-[.16em] uppercase m-0 mb-1" style={{ color: "var(--accent-2)" }}>Instagram Edit</p>
                  <p className="text-[13px] leading-[1.5] m-0" style={{ color: "var(--fg-dim)" }}>Edited for pacing, cuts, and hooks.</p>
                </div>
                <span
                  className="shrink-0 font-mono text-[10px] tracking-[.12em] uppercase px-2 py-1 mt-[2px]"
                  style={{ background: "var(--chip-bg)", color: "var(--accent)", borderRadius: "2px", whiteSpace: "nowrap" }}
                >
                  Edit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
