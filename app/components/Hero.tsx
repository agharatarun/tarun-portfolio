import Image from "next/image";
import { MapPin, CheckCircle, ExternalLink } from "lucide-react";
import { personal, certifications, heroCardRows } from "../data/resume";

export function Hero() {
  return (
    <section className="flex items-center pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="animate-fade-up bg-[var(--bg2)] border border-[var(--border-hi)] rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,.4)] relative overflow-hidden p-6 sm:p-8">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400" />
          <div className="flex flex-col sm:flex-row gap-8 items-start">

            {/* Photo + quick stats */}
            <div className="flex flex-col items-center gap-3 shrink-0 w-full sm:w-[160px]">
              <div className="relative w-[110px] h-[110px] rounded-full ring-2 ring-sky-400/60 shadow-[0_0_24px_rgba(56,189,248,.4)] animate-pulse-glow overflow-hidden">
                <Image src={personal.photo} alt={personal.name} fill className="object-cover object-top" sizes="110px" priority />
              </div>
              <div className="flex items-center gap-1 font-mono text-[11px] text-[var(--text-2)]">
                <MapPin size={10} className="text-sky-400" /> {personal.location}
              </div>
              <div className="w-full flex flex-col gap-1.5">
                {heroCardRows.map((r) => (
                  <div key={r.label} className="flex items-center justify-between bg-[var(--bg3)] rounded-lg px-2.5 py-1.5 font-mono text-[10px]">
                    <span className="text-[var(--text-2)]">{r.label}</span>
                    <span className="text-[var(--text)] font-semibold">{r.value}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                Open to Opportunities
              </div>
            </div>

            {/* Copy */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-5 h-px bg-sky-400 shrink-0" />
                <span className="font-mono text-[11px] tracking-[2px] uppercase text-sky-400">Available for Senior Roles</span>
              </div>
              <h1 className="animate-fade-up delay-100 font-display font-extrabold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] tracking-tight bg-gradient-to-br from-[var(--text)] via-[var(--text)] to-[var(--text-2)] bg-clip-text text-transparent mb-2">
                {personal.name}
              </h1>
              <p className="animate-fade-up delay-200 font-display text-base sm:text-lg font-semibold text-indigo-400 mb-4">
                {personal.title}
              </p>
              <p className="animate-fade-up delay-300 text-[var(--text-2)] text-[0.9rem] leading-relaxed mb-5">
                13+ years engineering enterprise-grade, cloud-native systems for AT&amp;T — one of the world&apos;s largest telecoms. Specializing in{" "}
                <span className="text-sky-400 font-medium">Azure AKS</span>, real-time stream processing with{" "}
                <span className="text-indigo-400 font-medium">Kafka &amp; Spark</span>, and full-stack modernization from monolith to microservices.
              </p>
              <div className="animate-fade-up delay-300 flex flex-wrap gap-2">
                {certifications.map((c) => (
                  <a key={c.code} href={c.url} target="_blank" rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border font-mono text-[11px] font-medium transition-all duration-200 hover:-translate-y-0.5 ${c.color}`}>
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
