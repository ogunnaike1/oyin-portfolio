"use client";

const quotes = [
  "She thinks like a partner, not a freelancer.",
  "Made our brand feel expensive again.",
  "Edits arrive better than the brief.",
  "A quiet kind of obsessive.",
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
        className="overflow-hidden py-9"
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

    </section>
  );
}
