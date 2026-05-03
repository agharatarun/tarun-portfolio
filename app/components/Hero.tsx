import { MapPin, Zap, Briefcase, Mail, CheckCircle } from "lucide-react";

const certs = [
  { code: "GH-300", name: "GitHub Copilot", color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10" },
  { code: "AI-900", name: "Azure AI",        color: "text-indigo-400 border-indigo-400/30 bg-indigo-400/10" },
  { code: "AZ-104", name: "Azure Admin",     color: "text-orange-400 border-orange-400/30 bg-orange-400/10" },
];

const cardRows = [
  { label: "Role",   value: "Java Tech Lead"     },
  { label: "Domain", value: "Telecom · FinTech"  },
  { label: "Client", value: "AT&T · Mastercard"  },
  { label: "Stack",  value: "Azure · Kafka · K8s" },
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12 items-center">

          {/* ── Left copy ── */}
          <div>
            {/* Eyebrow */}
            <div className="animate-fade-up flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-sky-400" />
              <span className="font-mono text-[11px] tracking-[3px] uppercase text-sky-400">
                Available for Senior Roles
              </span>
            </div>

            {/* Name */}
            <h1 className="
              animate-fade-up delay-100
              font-display font-extrabold
              text-[clamp(2.6rem,6vw,4rem)]
              leading-[1.05] tracking-tight
              bg-gradient-to-br from-[var(--text)] via-[var(--text)] to-[var(--text-2)]
              bg-clip-text text-transparent
              mb-3
            ">
              Tarunkumar<br />Aghara
            </h1>

            {/* Title */}
            <p className="animate-fade-up delay-200 font-display text-lg font-semibold text-indigo-400 mb-5">
              Java Tech Lead &amp; Cloud Architect
            </p>

            {/* Description */}
            <p className="
              animate-fade-up delay-300
              text-[var(--text-2)] text-[0.92rem] leading-relaxed
              max-w-[520px] mb-6
            ">
              13+ years engineering enterprise-grade, cloud-native systems for AT&amp;T — one of the world&apos;s
              largest telecoms. Specializing in <span className="text-sky-400 font-medium">Azure AKS</span>,
              real-time stream processing with <span className="text-indigo-400 font-medium">Kafka &amp; Spark</span>,
              and full-stack modernization from monolith to microservices.
            </p>

            {/* Cert badges */}
            <div className="animate-fade-up delay-300 flex flex-wrap gap-2.5 mb-7">
              {certs.map((c) => (
                <span
                  key={c.code}
                  className={`
                    inline-flex items-center gap-2 px-3.5 py-1.5
                    rounded-full border font-mono text-[11px] font-medium
                    ${c.color}
                  `}
                >
                  <CheckCircle size={11} />
                  {c.code} · {c.name}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="animate-fade-up delay-400 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="
                  inline-flex items-center gap-2 px-5 py-2.5
                  bg-sky-400 text-slate-950 font-semibold text-sm rounded-xl
                  hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(56,189,248,.45)]
                  transition-all duration-200
                "
              >
                <Zap size={14} /> View Projects
              </a>
              <a
                href="#experience"
                className="
                  inline-flex items-center gap-2 px-5 py-2.5
                  border border-[var(--border-hi)] text-[var(--text-2)]
                  font-semibold text-sm rounded-xl
                  hover:border-indigo-400 hover:text-indigo-400
                  hover:-translate-y-0.5
                  transition-all duration-200
                "
              >
                <Briefcase size={14} /> Experience
              </a>
              <a
                href="mailto:agharatarun@gmail.com"
                className="
                  inline-flex items-center gap-2 px-5 py-2.5
                  border border-[var(--border-hi)] text-[var(--text-2)]
                  font-semibold text-sm rounded-xl
                  hover:border-emerald-400 hover:text-emerald-400
                  hover:-translate-y-0.5
                  transition-all duration-200
                "
              >
                <Mail size={14} /> Contact
              </a>
            </div>
          </div>

          {/* ── Avatar card ── */}
          <div className="
            hidden lg:flex animate-fade-up delay-300 animate-float
            flex-col items-center gap-3
            bg-[var(--bg2)] border border-[var(--border-hi)]
            rounded-2xl p-6
            shadow-[0_24px_60px_rgba(0,0,0,.4)]
            relative overflow-hidden
          ">
            {/* Top gradient stripe */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400" />

            {/* Avatar initials */}
            <div className="
              w-[88px] h-[88px] rounded-full
              bg-gradient-to-br from-sky-400 to-indigo-400
              flex items-center justify-center
              font-display font-extrabold text-3xl text-slate-950
              animate-pulse-glow flex-shrink-0
            ">
              TA
            </div>

            {/* Location only — name already prominent in hero heading */}
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--text-3)]">
              <MapPin size={10} /> Pune, India
            </div>

            {/* Role & domain snapshot — unique info not in StatsBar */}
            {cardRows.map((r) => (
              <div
                key={r.label}
                className="
                  flex items-center justify-between w-full
                  bg-[var(--bg3)] rounded-lg px-3 py-2
                  font-mono text-[10px]
                "
              >
                <span className="text-[var(--text-3)]">{r.label}</span>
                <span className="text-[var(--text-2)] font-medium">{r.value}</span>
              </div>
            ))}

            {/* Open-to-work status */}
            <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to Opportunities
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
