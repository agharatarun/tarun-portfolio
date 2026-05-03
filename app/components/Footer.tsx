export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="font-mono text-[11px] tracking-wide text-[var(--text-3)]">
          © {new Date().getFullYear()} · Tarunkumar Aghara · Built with ♥ in Pune, India
        </p>
        <p className="font-mono text-[10px] text-[var(--text-3)] opacity-60 mt-1.5">
          Java Tech Lead · Azure Certified · GitHub Copilot GH-300
        </p>
      </div>
    </footer>
  );
}
