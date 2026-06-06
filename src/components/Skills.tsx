"use client";

const SKILL_GROUPS = [
  {
    category: "Social Media",
    skills: ["Instagram", "TikTok", "Twitter / X", "LinkedIn", "YouTube Shorts", "Facebook"],
  },
  {
    category: "Content & Copy",
    skills: ["Short-Form Video", "Caption Writing", "Hashtag Research", "Content Calendars", "Brand Voice", "Storytelling"],
  },
  {
    category: "Video Editing",
    skills: ["CapCut", "Adobe Premiere Pro", "Reels & TikToks", "Subtitles & Text", "Transitions", "Sound Design"],
  },
  {
    category: "Strategy & Data",
    skills: ["Audience Growth", "Analytics & Insights", "Content Planning", "Competitor Research", "A/B Testing", "Reporting"],
  },
  {
    category: "Broadcasting",
    skills: ["Live Radio Presenting", "Script Writing", "Show Timing", "Voice Performance", "Interview Technique", "On-Air Delivery"],
  },
  {
    category: "Tools",
    skills: ["Notion", "Canva", "Google Analytics", "Meta Business Suite", "TikTok Studio", "Scheduling Tools"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative" style={{ padding: "140px 0" }}>
      {/* Watermark number */}
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
        03
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-12 max-sm:px-6">
        {/* Section head */}
        <div className="flex justify-between items-end mb-16 gap-10 flex-wrap">
          <div>
            <div className="reveal font-mono text-[11px] tracking-[.22em] uppercase" style={{ color: "var(--fg-dim)" }}>
              § 03 — Skills
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
              The craft
              <br />
              behind the{" "}
              <em>content.</em>
            </h2>
          </div>
          <p
            className="reveal delay-2 max-w-[380px] text-[15px] leading-[1.6]"
            style={{ color: "var(--fg-dim)" }}
          >
            Every tool and discipline I bring to the table — from the camera roll
            to the dashboard.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 gap-px" style={{ background: "var(--line)" }}>
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.category}
              className={`reveal delay-${(i % 3) + 1} p-8 flex flex-col gap-5`}
              style={{ background: "var(--bg)" }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="font-mono text-[10px] tracking-[.2em] uppercase"
                  style={{ color: "var(--accent-2)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-mono text-[11px] tracking-[.18em] uppercase"
                  style={{ color: "var(--fg)" }}
                >
                  {group.category}
                </span>
              </div>

              <ul className="flex flex-col gap-[10px] list-none m-0 p-0">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-[14px] leading-none"
                    style={{ color: "var(--fg-dim)" }}
                  >
                    <span
                      className="w-[3px] h-[3px] rounded-full flex-shrink-0"
                      style={{ background: "var(--accent)" }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
