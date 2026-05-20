"use client";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="relative text-center overflow-hidden"
        style={{ padding: "180px 0 80px" }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-12 max-sm:px-6">
          <span
            className="reveal block font-mono text-[11px] tracking-[.22em] uppercase mb-10"
            style={{ color: "var(--fg-dim)" }}
          >
            § 09 — Contact · Booking Q3 / Q4 2026
          </span>

          <h2
            className="reveal delay-1 font-serif font-light m-0"
            style={{
              fontSize: "clamp(36px,10vw,220px)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
            }}
          >
            <span>Let&apos;s make</span>
            <br />
            <em>something</em>
            <br />
            <span>
              worth{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                &amp;
              </span>{" "}
              watching.
            </span>
          </h2>

          <a
            href="mailto:elizabethoyindamola1@gmail.com"
            className="reveal delay-2 inline-block font-serif italic relative pb-2 no-underline mt-14"
            style={{
              fontSize: "clamp(14px,3.8vw,48px)",
              color: "var(--fg)",
              wordBreak: "break-all",
            }}
          >
            elizabethoyindamola1@gmail.com
            <span
              className="absolute left-0 right-0 bottom-0 h-px"
              style={{
                background: "var(--fg)",
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.6s cubic-bezier(.16,1,.3,1)",
              }}
              ref={(el) => {
                if (!el) return;
                const parent = el.parentElement!;
                parent.addEventListener("mouseenter", () => (el.style.transform = "scaleX(1)"));
                parent.addEventListener("mouseleave", () => (el.style.transform = "scaleX(0)"));
              }}
            />
          </a>

          <div className="reveal delay-3 flex justify-center gap-9 flex-wrap mt-16">
            {[
              ["Instagram", "#"],
              ["TikTok", "#"],
              ["YouTube", "#"],
              ["LinkedIn", "#"],
              ["Read.cv", "#"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="no-underline font-mono text-[12px] tracking-[.2em] uppercase transition-colors duration-300"
                style={{ color: "var(--fg-dim)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-dim)")}
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer
        className="font-mono text-[11px] tracking-[.18em] uppercase"
        style={{
          borderTop: "1px solid var(--line)",
          padding: "28px 0",
          color: "var(--fg-dim)",
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-12 max-sm:px-6 flex justify-between gap-6 flex-wrap">
          <div>© MMXXVI — Oyin Studio</div>
          <div>Designed &amp; built in Lagos, NG</div>
          <div>Last updated · May 2026</div>
        </div>
      </footer>
    </>
  );
}
