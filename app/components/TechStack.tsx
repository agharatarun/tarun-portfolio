import { Server, Cloud, Monitor } from "lucide-react";
import { techCategories } from "../data/resume";

const iconMap: Record<string, React.ReactNode> = {
  Server:  <Server  size={18} />,
  Cloud:   <Cloud   size={18} />,
  Monitor: <Monitor size={18} />,
};

export function TechStack() {
  return (
    <section id="stack" className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal flex items-center gap-3 mb-2">
          <Server size={13} className="text-sky-400" />
          <span className="font-mono text-[11px] tracking-[3px] uppercase text-sky-400">Tech Stack</span>
          <div className="flex-1 h-px bg-[var(--border-hi)]" />
        </div>
        <h2 className="reveal font-display font-extrabold text-[clamp(1.6rem,3vw,2.2rem)] tracking-tight text-[var(--text)] mb-2">Full-Spectrum Engineering</h2>
        <p className="reveal text-[var(--text-2)] text-sm mb-8 max-w-[920px] leading-relaxed">
          From cloud-native backend systems to modern reactive UIs — 14 years of deliberate skill-building across the entire stack.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {techCategories.map((cat) => (
            <div key={cat.title} className={`reveal relative overflow-hidden bg-[var(--bg2)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--border-hi)] hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,.35)] transition-all duration-250 ${cat.glowClass}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${cat.iconBg}`}>{iconMap[cat.icon]}</div>
                <div>
                  <h3 className="font-display font-bold text-[var(--text)] text-[0.97rem] mb-0.5">{cat.title}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)]">{cat.subtitle}</p>   
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.chips.map((chip) => (
                  <span key={chip.label} className={`tech-chip inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-mono text-[11px] cursor-default bg-[var(--bg3)] ${chip.color ?? "text-[var(--text-2)] border-[var(--border-hi)]"}`}>
                    {chip.label}{chip.yrs && <span className="opacity-60">· {chip.yrs}</span>}
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
