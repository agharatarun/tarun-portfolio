import { stats } from "../data/resume";

export function StatsBar() {
  return (
    <div className="max-w-5xl mx-auto px-6 mb-10 reveal">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden">
        {stats.map((s) => (
          <div key={s.label} className="bg-[var(--bg2)] px-6 py-5 text-center hover:bg-[var(--bg3)] transition-colors duration-200">
            <div className="font-display font-extrabold text-3xl text-sky-400 leading-none mb-1">{s.num}</div>
            <div className="font-mono text-[10px] tracking-wider uppercase text-[var(--text-3)]">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
