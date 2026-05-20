"use client";

const quotes = [
  "She thinks like a partner, not a freelancer.",
  "Made our brand feel expensive again.",
  "Edits arrive better than the brief.",
  "A quiet kind of obsessive.",
];

const cards = [
  {
    quote:
      "Oyin doesn't just manage the channel — she manages the standard. Six months in and our feed has become the brand's best sales document.",
    name: "Adaeze O.",
    role: "Founder, Maison Otun",
  },
  {
    quote:
      "The edits arrive better than the brief. Every single time. We stopped reviewing for changes — now we review for praise.",
    name: "Tomi B.",
    role: "Head of Brand, Sade Wellness",
  },
  {
    quote:
      "She filled a café for six weeks with content. I have run paid for three years and never seen numbers like that off organic.",
    name: "Femi K.",
    role: "Owner, Lagos Coffee Co.",
  },
];

export default function Testimonials() {
  const doubled = [...quotes, ...quotes];

  return (
    <section id="testimonials" className="relative" style={{ padding: "140px 0" }}>
      <div className="w-full max-w-[1440px] mx-auto px-12 max-sm:px-6">
        <div className="flex justify-between items-end mb-16 gap-10 flex-wrap">
          <div>
            <div className="reveal font-mono text-[11px] tracking-[.22em] uppercase" style={{ color: "var(--fg-dim)" }}>
              § 08 — Words
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
              From the
              <br />
              people I&apos;ve <em>built</em>
              <br />
              with.
            </h2>
          </div>
          <p
            className="reveal delay-2 max-w-[380px] text-[15px] leading-[1.6]"
            style={{ color: "var(--fg-dim)" }}
          >
            A small, careful client list. Long engagements, real relationships, and the occasional 2am voice note.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="reveal overflow-hidden py-9"
        style={{
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          className="flex animate-marquee"
          style={{ width: "max-content" }}
        >
          {doubled.map((q, i) => (
            <span key={i} className="flex-shrink-0 inline-flex items-center">
              <span
                className="font-serif italic font-light whitespace-nowrap px-16"
                style={{
                  fontSize: "clamp(36px,5vw,64px)",
                  letterSpacing: "-0.01em",
                  color: "var(--fg)",
                }}
              >
                {q}
              </span>
              <span
                className="text-[14px] flex-shrink-0"
                style={{ color: "var(--accent)" }}
              >
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="w-full max-w-[1440px] mx-auto px-12 max-sm:px-6">
        <div className="grid grid-cols-3 gap-6 mt-24 max-[900px]:grid-cols-1">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`reveal${i > 0 ? ` delay-${i}` : ""} border flex flex-col justify-between`}
              style={{
                padding: "36px",
                background: "var(--bg-2)",
                borderColor: "var(--line)",
                minHeight: "320px",
              }}
            >
              <div
                className="font-serif text-[22px] leading-[1.4] font-light"
                style={{ color: "var(--fg)", letterSpacing: "-0.005em" }}
              >
                <span
                  className="font-serif text-[36px] leading-none align-[-0.2em]"
                  style={{ color: "var(--accent)" }}
                >
                  &ldquo;{" "}
                </span>
                {c.quote}
              </div>
              <div className="flex items-center gap-[14px] mt-7">
                <div
                  className="w-11 h-11 rounded-full border flex-shrink-0"
                  style={{
                    background: `repeating-linear-gradient(45deg, color-mix(in oklab, var(--fg) 18%, transparent), color-mix(in oklab, var(--fg) 18%, transparent) 1px, transparent 1px, transparent 4px), var(--bg)`,
                    borderColor: "var(--line)",
                  }}
                />
                <div>
                  <div className="font-serif italic text-[18px]">{c.name}</div>
                  <div
                    className="font-mono text-[11px] tracking-[.18em] uppercase mt-[2px]"
                    style={{ color: "var(--fg-dim)" }}
                  >
                    {c.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
