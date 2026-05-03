import { Server, Cloud, Monitor } from "lucide-react";
import { ReactNode } from "react";

interface Chip {
  label: string;
  yrs?: string;
  color?: string;
}

interface Category {
  icon: ReactNode;
  title: string;
  subtitle: string;
  glowClass: string;
  iconBg: string;
  chips: Chip[];
}

const categories: Category[] = [
  {
    icon: <Server size={18} />,
    title: "Backend",
    subtitle: "Core Technologies",
    glowClass: "glow-sky",
    iconBg: "bg-sky-400/10 text-sky-400",
    chips: [
      { label: "Java",        yrs: "13 yrs", color: "text-sky-400 border-sky-400/30" },
      { label: "Spring Boot", yrs: "10 yrs", color: "text-sky-400 border-sky-400/30" },
      { label: "Microservices",              color: "text-sky-300/70 border-sky-400/20" },
      { label: "REST APIs" },
      { label: "PL/SQL",      yrs: "13 yrs" },
      { label: "JUnit · Mockito" },
      { label: "Maven" },
      { label: "EJB · DAO/DTO" },
    ],
  },
  {
    icon: <Cloud size={18} />,
    title: "Cloud & DevOps",
    subtitle: "Azure-Native & Pipelines",
    glowClass: "glow-indigo",
    iconBg: "bg-indigo-400/10 text-indigo-400",
    chips: [
      { label: "Azure AKS",       yrs: "5 yrs", color: "text-indigo-400 border-indigo-400/30" },
      { label: "Azure Functions",              color: "text-indigo-400 border-indigo-400/30" },
      { label: "Azure Key Vault",              color: "text-indigo-400 border-indigo-400/30" },
      { label: "Kubernetes" },
      { label: "Docker" },
      { label: "Apache Kafka" },
      { label: "Apache Spark" },
      { label: "Jenkins · SonarQube" },
      { label: "ArcGIS · IBM MQ" },
      { label: "GitHub Copilot", color: "text-emerald-400 border-emerald-400/30" },
    ],
  },
  {
    icon: <Monitor size={18} />,
    title: "Frontend & Full Stack",
    subtitle: "Modern UI Development",
    glowClass: "glow-emerald",
    iconBg: "bg-emerald-400/10 text-emerald-400",
    chips: [
      { label: "React · Angular",    color: "text-emerald-400 border-emerald-400/30" },
      { label: "Tailwind CSS",       color: "text-emerald-400 border-emerald-400/30" },
      { label: "HTML5 · CSS3" },
      { label: "JavaScript" },
      { label: "jQuery · AJAX" },
      { label: "Bootstrap" },
      { label: "Google Apps Script", color: "text-orange-400 border-orange-400/30" },
      { label: "Google Sheets API",  color: "text-orange-400 border-orange-400/30" },
    ],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-2">
          <Server size={13} className="text-sky-400" />
          <span className="font-mono text-[11px] tracking-[3px] uppercase text-sky-400">
            Tech Stack
          </span>
          <div className="flex-1 h-px bg-[var(--border-hi)]" />
        </div>
        <h2 className="reveal font-display font-extrabold text-[clamp(1.6rem,3vw,2.2rem)] tracking-tight text-[var(--text)] mb-2">
          Full-Spectrum Engineering
        </h2>
        <p className="reveal text-[var(--text-2)] text-sm mb-8 max-w-[920px] leading-relaxed">
          From cloud-native backend systems to modern reactive UIs — 13 years of deliberate
          skill-building across the entire stack.
        </p>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`
                reveal relative overflow-hidden
                bg-[var(--bg2)] border border-[var(--border)] rounded-2xl p-6
                hover:border-[var(--border-hi)]
                hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,.35)]
                transition-all duration-250
                ${cat.glowClass}
              `}
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${cat.iconBg}`}>
                {cat.icon}
              </div>

              <h3 className="font-display font-bold text-[var(--text)] text-[0.97rem] mb-1">
                {cat.title}
              </h3>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)] mb-4">
                {cat.subtitle}
              </p>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {cat.chips.map((chip) => (
                  <span
                    key={chip.label}
                    className={`
                      tech-chip inline-flex items-center gap-1.5
                      px-2.5 py-1 rounded-full border
                      font-mono text-[11px] cursor-default
                      ${chip.color
                        ? chip.color
                        : "text-[var(--text-2)] border-[var(--border-hi)]"
                      }
                      bg-[var(--bg3)]
                    `}
                  >
                    {chip.label}
                    {chip.yrs && (
                      <span className="opacity-60">· {chip.yrs}</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
