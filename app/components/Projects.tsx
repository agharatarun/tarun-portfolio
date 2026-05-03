import { ExternalLink, Trophy, IndianRupee, Truck, GraduationCap, BarChart3, Code2 } from "lucide-react";
import { ReactNode } from "react";

interface Demo {
  label: string;
  href:  string;
}

interface Project {
  icon:    ReactNode;
  tag:     string;
  name:    string;
  desc:    string;
  stack:   string[];
  demos:   Demo[];
}

const projects: Project[] = [
  {
    icon:  <Trophy size={11} />,
    tag:   "Sports · Community",
    name:  "BHCPL S7 Women — Cricket Auction",
    desc:  "A full-featured live cricket player auction portal for BHCPL Season 7 Women's league — with real-time bidding, team budgets, and player roster management built on a zero-infra stack.",
    stack: ["HTML", "Tailwind CSS", "Google Apps Script", "Google Sheets"],
    demos: [{ label: "Live Demo", href: "https://tinyurl.com/bhcpls7women" }],
  },
  {
    icon:  <IndianRupee size={11} />,
    tag:   "FinTech · Utility",
    name:  "FundHelper — Loan Tracker",
    desc:  "Personal finance app for tracking loans, EMIs, and repayment schedules. Google Sheets powers the backend database with a clean Tailwind UI for intuitive money management.",
    stack: ["HTML", "Tailwind CSS", "Google Apps Script", "Google Sheets"],
    demos: [{ label: "Live Demo", href: "https://tinyurl.com/fundhelper" }],
  },
  {
    icon:  <Truck size={11} />,
    tag:   "Logistics · Operations",
    name:  "TankerBoard & TankerLog",
    desc:  "End-to-end logistics suite — TankerBoard provides a live dispatch dashboard for tanker fleet ops; TankerLog tracks trip entries, driver logs, and fuel records in real time.",
    stack: ["HTML", "Tailwind CSS", "Google Apps Script", "Google Sheets"],
    demos: [
      { label: "TankerBoard", href: "https://tinyurl.com/tankerBoard" },
      { label: "TankerLog",   href: "https://tinyurl.com/tankerLog"   },
    ],
  },
  {
    icon:  <GraduationCap size={11} />,
    tag:   "Education · Portal",
    name:  "LPSR School Result Portal",
    desc:  "Complete school result management system — students look up exam results by ID; admins manage result data via a secure entry portal. Google Sheets backend for zero-cost hosting.",
    stack: ["HTML", "Tailwind CSS", "Google Apps Script", "Google Sheets"],
    demos: [
      { label: "Result Portal", href: "https://tinyurl.com/lpsrschool"       },
      { label: "Entry Portal",  href: "https://tinyurl.com/lpsrresultentry"  },
    ],
  },
  {
    icon:  <BarChart3 size={11} />,
    tag:   "Industrial · Dashboard",
    name:  "Transmission Ltd — Operations Dashboard",
    desc:  "Business intelligence dashboard for an electrical transmission company — visualizing operational KPIs, maintenance schedules, and project status in a responsive interface.",
    stack: ["HTML", "Tailwind CSS", "Google Apps Script", "Google Sheets"],
    demos: [{ label: "Live Demo", href: "https://tinyurl.com/kps3hvdctransmissionltd" }],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-2">
          <Code2 size={13} className="text-sky-400" />
          <span className="font-mono text-[11px] tracking-[3px] uppercase text-sky-400">
            Innovations &amp; POCs
          </span>
          <div className="flex-1 h-px bg-[var(--border-hi)]" />
        </div>
        <h2 className="reveal font-display font-extrabold text-[clamp(1.6rem,3vw,2.2rem)] tracking-tight text-[var(--text)] mb-2">
          Side Projects &amp; Live Apps
        </h2>
        <p className="reveal text-[var(--text-2)] text-sm mb-12 max-w-[560px] leading-relaxed">
          Real-world applications built with HTML, Tailwind CSS, Google Apps Script &amp; Google Sheets —
          solving genuine problems for community and business.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <div
              key={p.name}
              className="
                reveal project-card
                relative flex flex-col
                bg-[var(--bg2)] border border-[var(--border)] rounded-2xl p-5
                hover:border-[var(--border-hi)] hover:-translate-y-1
                hover:shadow-[0_24px_48px_rgba(0,0,0,.5)]
                transition-all duration-250 overflow-hidden
              "
            >
              {/* Tag */}
              <div className="
                inline-flex items-center gap-1.5 mb-4 w-fit
                px-2.5 py-1 rounded-full
                bg-sky-400/10 border border-sky-400/20
                font-mono text-[10px] text-sky-400
              ">
                {p.icon} {p.tag}
              </div>

              {/* Name */}
              <h3 className="font-display font-bold text-[var(--text)] text-[0.95rem] leading-snug mb-2">
                {p.name}
              </h3>

              {/* Desc */}
              <p className="text-[var(--text-2)] text-[0.8rem] leading-relaxed flex-1 mb-4">
                {p.desc}
              </p>

              {/* Stack chips */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="
                      px-2 py-0.5 rounded
                      bg-[var(--bg3)] border border-[var(--border-hi)]
                      font-mono text-[10px] text-[var(--text-3)]
                    "
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Demo buttons */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.demos.map((d) => (
                  <a
                    key={d.href}
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-1.5
                      px-3.5 py-1.5 rounded-lg
                      bg-sky-400/10 border border-sky-400/25 text-sky-400
                      font-semibold text-[0.75rem]
                      hover:bg-sky-400/20 hover:border-sky-400
                      hover:-translate-y-0.5
                      transition-all duration-200
                    "
                  >
                    <ExternalLink size={12} /> {d.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
