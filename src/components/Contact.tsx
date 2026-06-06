"use client";

const socials = [
  { label: "Instagram",  href: "https://www.instagram.com/zabeth__a" },
  { label: "Twitter",    href: "https://x.com/zabeth__a" },
  { label: "WhatsApp",   href: "https://wa.me/2349025158865" },
  { label: "TikTok",     href: "https://www.tiktok.com/@zabeth___" },
  { label: "YouTube",    href: "#" },
  { label: "LinkedIn",   href: "https://www.linkedin.com/in/oyindamola-amosu-8a894a353" },
];

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        style={{ padding: "100px 0", background: "var(--accent)" }}
      >
        <div className="w-full max-w-[1200px] mx-auto px-8 max-sm:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <p className="reveal font-mono text-[11px] tracking-[.22em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                Let&apos;s Talk
              </p>
              <h2
                className="reveal delay-1 font-serif font-light m-0 mb-4"
                style={{ fontSize: "clamp(32px,5vw,64px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff" }}
              >
                Available for new
                <br />
                clients <em>&amp; opportunities</em>
              </h2>
              <p className="reveal delay-2 text-[15px] leading-[1.65] mb-0 max-w-[44ch]" style={{ color: "rgba(255,255,255,0.75)" }}>
                Whether you need someone to manage your social media, create content, or interpret your analytics — reach out.
              </p>
            </div>

            {/* Right — contact details */}
            <div className="reveal delay-2 flex flex-col gap-4">
              <a
                href="mailto:elizabethoyindamola1@gmail.com"
                className="flex items-center gap-4 p-5 no-underline group"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.2)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; }}
              >
                <span className="font-mono text-[11px] tracking-[.16em] uppercase shrink-0" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Email
                </span>
                <span className="font-mono text-[13px] tracking-[.06em]" style={{ color: "#fff" }}>
                  elizabethoyindamola1@gmail.com
                </span>
              </a>

              <a
                href="https://wa.me/2349025158865"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 no-underline"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.2)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; }}
              >
                <span className="font-mono text-[11px] tracking-[.16em] uppercase shrink-0" style={{ color: "rgba(255,255,255,0.55)" }}>
                  WhatsApp
                </span>
                <span className="font-mono text-[13px] tracking-[.06em]" style={{ color: "#fff" }}>
                  +234 902 515 8865
                </span>
              </a>

              <div
                className="flex items-center gap-4 p-5"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)" }}
              >
                <span className="font-mono text-[11px] tracking-[.16em] uppercase shrink-0" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Location
                </span>
                <span className="font-mono text-[13px] tracking-[.06em]" style={{ color: "#fff" }}>
                  Lagos, Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "var(--accent)", borderTop: "1px solid rgba(255,255,255,0.12)", padding: "32px 0" }}>
        <div className="w-full max-w-[1200px] mx-auto px-8 max-sm:px-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            {/* Social links */}
            <div className="flex flex-wrap gap-5">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-mono text-[11px] tracking-[.18em] uppercase no-underline transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  {label} ↗
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="font-mono text-[11px] tracking-[.14em]" style={{ color: "rgba(255,255,255,0.4)" }}>
              © MMXXVI — Oyindamola Amosu
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
