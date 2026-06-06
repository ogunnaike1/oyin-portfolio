"use client";

const jobs = [
  {
    title: "Social Media Manager",
    company: "Freelance",
    period: "Feb 2026 – Present",
    points: [
      "Managed Instagram and TikTok accounts, planning and posting content consistently every month.",
      "Edited all videos using CapCut and designed all graphics and visual assets using Canva.",
      "Covered personal finance, lifestyle, and current affairs, with content tailored for UK and diaspora audiences.",
      "Tracked monthly analytics on both platforms and used the data to improve the next month's content.",
      "Handled everything independently: ideas, editing, Canva graphics, captions, hashtags, and posting schedule.",
    ],
  },
  {
    title: "Studio Manager",
    company: "Pensioners 106.7FM — Ibadan, Nigeria",
    period: "Aug 2024 – Aug 2025",
    points: [
      "Kept live radio broadcasts running on time every day with no missed shows.",
      "Wrote scripts, recorded voiceovers, and presented on air to a large, diverse audience.",
      "Managed studio admin and coordinated the team to keep daily operations running smoothly.",
    ],
  },
  {
    title: "Administrative Assistant",
    company: "John Diamond Studios — Lagos, Nigeria",
    period: "May 2023 – Jul 2024",
    points: [
      "Managed schedules, emails, and client calls for a busy creative studio.",
      "Prepared reports and kept all files neatly organised.",
    ],
  },
];

const education = {
  degree: "B.Sc. Mass Communication",
  school: "Lagos State University, Lagos, Nigeria",
};

const volunteering = {
  title: "Radio & Production Intern",
  org: "LASU Radio — Lagos, Nigeria",
  period: "Apr 2022 – Jun 2022",
  point: "Supported live broadcasts, including scripting, guest coordination, and studio setup.",
};

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 0", background: "var(--bg-soft)" }}>
      <div className="w-full max-w-[1200px] mx-auto px-8 max-sm:px-5">
        {/* Header */}
        <div className="mb-12">
          <p className="reveal font-mono text-[11px] tracking-[.22em] uppercase mb-3" style={{ color: "var(--accent-2)" }}>
            Background
          </p>
          <h2
            className="reveal delay-1 font-serif font-light m-0"
            style={{ fontSize: "clamp(32px,5vw,60px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--fg)" }}
          >
            <em>Experience</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">
          {/* Jobs */}
          <div style={{ borderTop: "1px solid var(--line-mid)" }}>
            {jobs.map((j, i) => (
              <div
                key={j.title}
                className={`reveal${i > 0 ? ` delay-${i}` : ""} py-8`}
                style={{ borderBottom: "1px solid var(--line)" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                  <div>
                    <div className="font-serif text-[20px] font-normal" style={{ color: "var(--fg)", letterSpacing: "-0.01em" }}>
                      {j.title}
                    </div>
                    <div className="font-mono text-[11px] tracking-[.14em] uppercase mt-1" style={{ color: "var(--accent-2)" }}>
                      {j.company}
                    </div>
                  </div>
                  <div className="font-mono text-[11px] tracking-[.12em] shrink-0" style={{ color: "var(--fg-mute)" }}>
                    {j.period}
                  </div>
                </div>
                <ul className="m-0 p-0 flex flex-col gap-[6px]" style={{ listStyle: "none" }}>
                  {j.points.map((pt, k) => (
                    <li key={k} className="flex gap-3 text-[14px] leading-[1.6]" style={{ color: "var(--fg-dim)" }}>
                      <span className="mt-[7px] w-[5px] h-[5px] rounded-full shrink-0" style={{ background: "var(--accent-2)" }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sidebar — Education + Volunteering */}
          <div className="reveal delay-2 flex flex-col gap-6">
            {/* Education */}
            <div
              className="p-6"
              style={{ background: "var(--bg-2)", border: "1px solid var(--line)" }}
            >
              <div className="font-mono text-[10px] tracking-[.2em] uppercase mb-4" style={{ color: "var(--accent-2)" }}>
                Education
              </div>
              <div className="font-serif text-[18px]" style={{ color: "var(--fg)", letterSpacing: "-0.01em" }}>
                {education.degree}
              </div>
              <div className="font-mono text-[11px] tracking-[.12em] mt-2" style={{ color: "var(--fg-mute)" }}>
                {education.school}
              </div>
            </div>

            {/* Volunteering */}
            <div
              className="p-6"
              style={{ background: "var(--bg-2)", border: "1px solid var(--line)" }}
            >
              <div className="font-mono text-[10px] tracking-[.2em] uppercase mb-4" style={{ color: "var(--accent-2)" }}>
                Volunteering
              </div>
              <div className="font-serif text-[18px]" style={{ color: "var(--fg)", letterSpacing: "-0.01em" }}>
                {volunteering.title}
              </div>
              <div className="font-mono text-[11px] tracking-[.14em] uppercase mt-1" style={{ color: "var(--accent-2)" }}>
                {volunteering.org}
              </div>
              <div className="font-mono text-[11px] tracking-[.12em] mt-1 mb-3" style={{ color: "var(--fg-mute)" }}>
                {volunteering.period}
              </div>
              <p className="text-[13px] leading-[1.6] m-0" style={{ color: "var(--fg-dim)" }}>
                {volunteering.point}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
