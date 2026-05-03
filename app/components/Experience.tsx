import { Briefcase } from "lucide-react";

interface Role {
  title:    string;
  company:  string;
  period:   string;
  location: string;
  current:  boolean;
  bullets:  string[];
}

const roles: Role[] = [
  {
    title:    "Java Tech Lead",
    company:  "HCLTech · GenAI & Mastercard Proposals",
    period:   "2025 – Present",
    location: "Pune, MH",
    current:  true,
    bullets: [
      "Leading GenAI-powered solution design for enterprise proposals, integrating LLM capabilities into Java/Spring Boot microservice architectures.",
      "Driving Mastercard project proposal delivery — architecting cloud-native, security-first backend systems aligned to payment industry standards.",
      "Leveraging GitHub Copilot (GH-300 certified) to accelerate development velocity and evaluate AI tooling for production suitability.",
      "Bridging AI-900 Azure AI knowledge with practical GenAI implementation — positioning HCL offerings at the forefront of enterprise AI adoption.",
    ],
  },
  {
    title:    "Java Tech Lead",
    company:  "Tech Mahindra · Client: AT&T Services Inc.",
    period:   "Feb 2019 – 2025",
    location: "Pune / Plano TX / Middletown NJ / Chicago IL",
    current:  false,
    bullets: [
      "Architected 6+ mission-critical apps (Vehicle Tracking, Smart Geofence, Tech Tracker, iLocate) on Azure AKS — containerized with Docker/Kubernetes, CI/CD via Jenkins & SonarQube.",
      "Engineered real-time IoT stream processing with Apache Spark & Kafka, building dynamic technician-to-vehicle associations from live sensor data.",
      "Designed serverless Azure Functions (queue, timer & blob triggers) integrated with Key Vault, App Insights, ArcGIS & IBM MQ.",
      "Led monolith → microservices modernization and on-prem → Azure cloud migration across multiple AT&T Business systems.",
      "Mentored 5+ engineers; recognized with ACE (×2), SPOT, Project Person of the Month, and BEST SDU Award.",
    ],
  },
  {
    title:    "Java Full Stack Developer",
    company:  "Tech Mahindra · Client: AT&T Services Inc.",
    period:   "Oct 2014 – Feb 2019",
    location: "Pune, MH",
    current:  false,
    bullets: [
      "Built OPUS — core AT&T platform handling activation, sales & back-office ops across wireless, IPTV & VoIP using Spring, REST, jQuery & PL/SQL.",
      "Created Sitemover (automated deployment tool, nominated Best Innovative Product) and Torus (responsive bid management app).",
      "Developed enterprise apps supporting Circuit IDs, BTNs, BANs, SOR tracking and contract management.",
    ],
  },
  {
    title:    "Java Developer (Early Career)",
    company:  "Tech Mahindra · Mumbai, MH",
    period:   "Apr 2012 – Sep 2014",
    location: "Mumbai, MH",
    current:  false,
    bullets: [
      "Completed ITP training (Java, PL/SQL, Shell Scripting, Telecom OSS/BSS); built Mobius (DAS ops app) and Acme Advertising Service — ranked 2nd best ITP tech app.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-2">
          <Briefcase size={13} className="text-sky-400" />
          <span className="font-mono text-[11px] tracking-[3px] uppercase text-sky-400">Experience</span>
          <div className="flex-1 h-px bg-[var(--border-hi)]" />
        </div>
        <h2 className="reveal font-display font-extrabold text-[clamp(1.6rem,3vw,2.2rem)] tracking-tight text-[var(--text)] mb-2">
          Career Timeline
        </h2>
        <p className="reveal text-[var(--text-2)] text-sm mb-8 max-w-[920px] leading-relaxed">
          A decade-plus of delivering measurable value across enterprise telecom systems,
          cloud modernization, and AI-driven initiatives.
        </p>

        {/* Timeline — vertical line lives INSIDE each card now */}
        <div className="flex flex-col gap-4">
          {roles.map((r, idx) => (
            <div key={r.title + r.period} className="reveal">
              <div className={`
                relative bg-[var(--bg2)] border rounded-2xl p-5 overflow-hidden
                hover:shadow-[0_8px_32px_rgba(0,0,0,.3)] transition-all duration-200
                ${r.current ? "border-sky-400/40" : "border-[var(--border)] hover:border-[var(--border-hi)]"}
              `}>
                {/* Left accent bar — replaces external dot+line */}
                <div className={`
                  absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl
                  ${r.current
                    ? "bg-gradient-to-b from-sky-400 to-indigo-400"
                    : "bg-[var(--border-hi)]"
                  }
                `} />

                <div className="pl-4">
                  {/* Top row: title + period badge */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-bold text-[var(--text)] text-[1rem]">
                        {r.title}
                      </h3>
                      {r.current && (
                        <span className="inline-flex items-center gap-1 font-mono text-[9px] px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/25 text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <span className={`
                      font-mono text-[10px] px-2.5 py-1 rounded-full border shrink-0
                      ${r.current
                        ? "text-sky-400 bg-sky-400/10 border-sky-400/25"
                        : "text-[var(--text-2)] bg-[var(--bg3)] border-[var(--border-hi)]"
                      }
                    `}>
                      {r.period}
                    </span>
                  </div>

                  <p className="text-indigo-400 text-[0.85rem] font-medium mb-0.5">{r.company}</p>
                  <p className="font-mono text-[10px] text-[var(--text-2)] mb-3">{r.location}</p>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-1.5">
                    {r.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="relative pl-4 text-[var(--text-2)] text-[0.82rem] leading-relaxed before:content-['→'] before:absolute before:left-0 before:text-sky-400 before:text-[0.75rem]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
