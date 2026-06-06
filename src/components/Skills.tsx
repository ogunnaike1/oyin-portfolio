"use client";

const SKILL_GROUPS = [
  {
    category: "Platforms",
    skills: ["Instagram", "TikTok"],
  },
  {
    category: "Video Editing",
    skills: ["CapCut", "Reels & TikToks", "Short-Form Video", "Subtitles & Text", "Pacing & Transitions", "Start-to-Finish Editing"],
  },
  {
    category: "Design",
    skills: ["Canva", "Graphics & Carousels", "Story Templates", "Branded Visuals"],
  },
  {
    category: "Content",
    skills: ["Scripting", "Caption Writing", "Hashtag Research", "Content Scheduling", "Content Calendars"],
  },
  {
    category: "Analytics",
    skills: ["Platform Data Analysis", "Monthly Reporting", "Performance Tracking", "Growth Strategy"],
  },
  {
    category: "Broadcasting",
    skills: ["Live Radio Presenting", "Script Writing", "Studio Operations", "On-Air Delivery"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 0", background: "var(--bg)" }}>
      <div className="w-full max-w-[1200px] mx-auto px-8 max-sm:px-5">
        {/* Header */}
        <div className="mb-12">
          <p className="reveal font-mono text-[11px] tracking-[.22em] uppercase mb-3" style={{ color: "var(--accent-2)" }}>
            What I Work With
          </p>
          <h2
            className="reveal delay-1 font-serif font-light m-0"
            style={{ fontSize: "clamp(32px,5vw,60px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--fg)" }}
          >
            Skills <em>&amp; tools</em>
          </h2>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-px"
          style={{ background: "var(--line-mid)" }}
        >
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.category}
              className={`reveal${i > 0 ? ` delay-${Math.min(i % 3 + 1, 4)}` : ""} p-7 flex flex-col gap-4`}
              style={{ background: "var(--bg-2)" }}
            >
              <div>
                <span className="font-mono text-[10px] tracking-[.2em] uppercase" style={{ color: "var(--accent-2)" }}>
                  {group.category}
                </span>
              </div>
              <ul className="flex flex-col gap-2 list-none m-0 p-0">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-[14px] leading-snug"
                    style={{ color: "var(--fg-dim)" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ background: "var(--accent-2)" }}
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
