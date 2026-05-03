import Image from "next/image";
import { MapPin, CheckCircle, ExternalLink } from "lucide-react";

const certs = [
  {
    code: "GH-300",
    name: "GitHub Copilot",
    color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10 hover:bg-emerald-400/20",
    url: "https://credentials.example.com/gh-300",
  },
  {
    code: "AI-900",
    name: "Azure AI",
    color: "text-indigo-400 border-indigo-400/30 bg-indigo-400/10 hover:bg-indigo-400/20",
    url: "https://credentials.example.com/ai-900",
  },
  {
    code: "AZ-104",
    name: "Azure Admin",
    color: "text-orange-400 border-orange-400/30 bg-orange-400/10 hover:bg-orange-400/20",
    url: "https://credentials.example.com/az-104",
  },
];

const cardRows = [
  { label: "Role",   value: "Java Tech Lead"      },
  { label: "Domain", value: "Telecom · FinTech"   },
  { label: "Client", value: "AT&T · Mastercard"   },
  { label: "Stack",  value: "Azure · Kafka · K8s" },
];

export function Hero() {
  return (
    <section className="flex items-center pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-6 w-full">

        {/* ── unified card: photo left, copy right on desktop; stacked on mobile ── */}
        <div className="
          animate-fade-up
          bg-[var(--bg2)] border border-[var(--border-hi)] rounded-2xl
          shadow-[0_24px_60px_rgba(0,0,0,.4)]
          relative overflow-hidden
          p-6 sm:p-8
        ">
          {/* Top gradient stripe */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400" />

          <div className="flex flex-col sm:flex-row gap-8 items-start">

            {/* ── Photo + quick stats column ── */}
            <div className="flex delay-300 animate-float flex-col items-center gap-3 shrink-0 w-full sm:w-[160px]">
              {/* Photo */}
              <div className="relative w-[110px] h-[110px] rounded-full ring-2 ring-sky-400/60 shadow-[0_0_24px_rgba(56,189,248,.4)] animate-pulse-glow overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Tarunkumar Aghara"
                  fill
                  className="object-cover object-top"
                  sizes="110px"
                  priority
                />
              </div>

              {/* Location */}
              <div className="flex items-center gap-1 font-mono text-[11px] text-[var(--text-2)]">
                <MapPin size={10} className="text-sky-400" /> Pune, India
              </div>

              {/* Stat rows */}
              <div className="w-full flex flex-col gap-1.5">
                {cardRows.map((r) => (
                  <div key={r.label} className="flex items-center justify-between w-full bg-[var(--bg3)] rounded-lg px-2.5 py-1.5 font-mono text-[9px]">
                    <span className="text-[var(--text-2)]">{r.label}</span>
                    <span className="text-[var(--text)] font-semibold">{r.value}</span>
                  </div>
                ))}
              </div>

              {/* Status */}
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                Open to Opportunities
              </div>
            </div>

            {/* ── Main copy ── */}
            <div className="flex-1 min-w-0">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-5 h-px bg-sky-400 shrink-0" />
                <span className="font-mono text-[11px] tracking-[2px] uppercase text-sky-400">
                  Available for Senior Roles
                </span>
              </div>

              {/* Name */}
              <h1 className="
                animate-fade-up delay-100
                font-display font-extrabold
                text-[clamp(1.2rem,5vw,2.6rem)]
                leading-[1.05] tracking-tight
                bg-gradient-to-br from-[var(--text)] via-[var(--text)] to-[var(--text-2)]
                bg-clip-text text-transparent mb-2
              ">
                Tarunkumar Aghara
              </h1>

              {/* Title */}
              <p className="animate-fade-up delay-200 font-display text-base sm:text-lg font-semibold text-indigo-400 mb-4">
                Java Tech Lead &amp; Cloud Architect
              </p>

              {/* Description */}
              <p className="animate-fade-up delay-300 text-[var(--text-2)] text-[0.9rem] leading-relaxed mb-5">
                13+ years engineering enterprise-grade, cloud-native systems for AT&amp;T — one of the world&apos;s
                largest telecoms. Specializing in{" "}
                <span className="text-sky-400 font-medium">Azure AKS</span>, real-time stream processing with{" "}
                <span className="text-indigo-400 font-medium">Kafka &amp; Spark</span>, and full-stack
                modernization from monolith to microservices.
              </p>

              {/* Cert badges */}
              <div className="animate-fade-up delay-300 flex flex-wrap gap-2 mb-2">
                {certs.map((c) => (
                  <a
                    key={c.code}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border font-mono text-[11px] font-medium transition-all duration-200 hover:-translate-y-0.5 ${c.color}`}
                  >
                    <CheckCircle size={10} />
                    {c.code} · {c.name}
                    <ExternalLink size={9} className="opacity-60" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
