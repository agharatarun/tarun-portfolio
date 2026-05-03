import { Mail, Phone, Link2, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-[520px] mx-auto text-center">
          {/* Label */}
          <div className="reveal flex items-center justify-center gap-3 mb-3">
            <Send size={13} className="text-sky-400" />
            <span className="font-mono text-[11px] tracking-[3px] uppercase text-sky-400">
              Contact
            </span>
          </div>

          {/* Heading */}
          <h2 className="reveal font-display font-extrabold text-[clamp(1.6rem,3vw,2.2rem)] tracking-tight text-[var(--text)] mb-3">
            Let&apos;s Build Something{" "}
            <span className="text-sky-400">Extraordinary</span>
          </h2>

          <p className="reveal text-[var(--text-2)] text-sm leading-relaxed mb-8">
            Open to senior tech lead, cloud architect, and full-stack leadership roles.
            Let&apos;s connect and create something impactful.
          </p>

          {/* Buttons */}
          <div className="reveal flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:agharatarun@gmail.com"
              className="
                inline-flex items-center justify-center gap-2
                px-5 py-3 rounded-xl
                bg-sky-400 text-slate-950 font-semibold text-sm
                hover:-translate-y-0.5
                hover:shadow-[0_0_32px_rgba(56,189,248,.45)]
                transition-all duration-200
              "
            >
              <Mail size={15} /> agharatarun@gmail.com
            </a>
            <a
              href="tel:+919327133900"
              className="
                inline-flex items-center justify-center gap-2
                px-5 py-3 rounded-xl
                border border-[var(--border-hi)] text-[var(--text-2)]
                font-semibold text-sm
                hover:border-indigo-400 hover:text-indigo-400
                hover:-translate-y-0.5
                transition-all duration-200
              "
            >
              <Phone size={15} /> +91-9327133900
            </a>
          </div>

          <div className="reveal mt-3 flex justify-center">
            <a
              href="https://www.linkedin.com/in/tarunkumar-aghara"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-5 py-3 rounded-xl
                border border-[var(--border-hi)] text-[var(--text-2)]
                font-semibold text-sm
                hover:border-emerald-400 hover:text-emerald-400
                hover:-translate-y-0.5
                transition-all duration-200
              "
            >
              <Link2 size={15} /> LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
