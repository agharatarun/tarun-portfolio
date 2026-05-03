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
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-2">
          <Briefcase size={13} className="text-sky-400" />
          <span className="font-mono text-[11px] tracking-[3px] uppercase text-sky-400">
            Experience
          </span>
          <div className="flex-1 h-px bg-[var(--border-hi)]" />
        </div>
        <h2 className="reveal font-display font-extrabold text-[clamp(1.6rem,3vw,2.2rem)] tracking-tight text-[var(--text)] mb-2">
          Career Timeline
        </h2>
        <p className="reveal text-[var(--text-2)] text-sm mb-12 max-w-[520px] leading-relaxed">
          A decade-plus of delivering measurable value across enterprise telecom systems,
          cloud modernization, and AI-driven initiatives.
        </p>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="tl-line" />

          <div className="flex flex-col gap-10">
            {roles.map((r) => (
              <div key={r.title + r.period} className="reveal relative">
                {/* Dot */}
                <div className={`
                  absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full border-2
                  ${r.current
                    ? "border-sky-400 bg-[var(--bg)] shadow-[0_0_12px_rgba(56,189,248,.6)]"
                    : "border-[var(--border-hi)] bg-[var(--bg2)]"
                  }
                `} />

                {/* Card */}
                <div className="
                  bg-[var(--bg2)] border border-[var(--border)] rounded-2xl p-5
                  hover:border-[var(--border-hi)] transition-colors duration-200
                ">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-display font-bold text-[var(--text)] text-[1rem]">
                      {r.title}
                    </h3>
                    <span className={`
                      font-mono text-[10px] px-2.5 py-1 rounded-full border
                      ${r.current
                        ? "text-sky-400 bg-sky-400/10 border-sky-400/25"
                        : "text-[var(--text-3)] bg-[var(--bg3)] border-[var(--border)]"
                      }
                    `}>
                      {r.period}
                    </span>
                  </div>

                  <p className="text-indigo-400 text-[0.85rem] font-medium mb-1">
                    {r.company}
                  </p>
                  <p className="font-mono text-[10px] text-[var(--text-3)] mb-4">
                    {r.location}
                  </p>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2">
                    {r.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="
                          relative pl-4 text-[var(--text-2)] text-[0.82rem] leading-relaxed
                          before:content-['→'] before:absolute before:left-0
                          before:text-sky-400 before:text-[0.75rem]
                        "
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
