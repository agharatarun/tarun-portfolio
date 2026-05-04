"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { PrintResume } from "./PrintResume";

const links = [
  { href: "#stack",      label: "Stack"      },
  { href: "#experience", label: "Experience" },
  { href: "#projects",   label: "Projects"   },
  { href: "#contact",    label: "Contact"    },
];

const RESUME_URL =
  //"https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID";
  "https://drive.google.com/file/d/16_TOLR69OwWarV99EMX3UDdM-0avfn6z";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[var(--bg)]/90 border-b border-[var(--border)]">
      {/* Main row */}
      <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/#" className="font-display font-bold text-[var(--text)] tracking-wide text-sm shrink-0">
          TA<span className="text-sky-400">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-mono text-[11px] tracking-widest uppercase text-[var(--text-2)] hover:text-sky-400 transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Print resume */}
          <PrintResume />

          {/* Download from Drive */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-sky-400/40 bg-sky-400/10 text-sky-400 font-mono text-[11px] font-medium hover:bg-sky-400/20 hover:border-sky-400 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Download size={13} />
            <span className="hidden sm:inline">Resume</span>
          </a>
          <ThemeToggle />
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-[var(--border-hi)] bg-[var(--bg2)] text-[var(--text-2)] hover:text-sky-400 hover:border-sky-400 transition-all duration-200"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg2)]">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center py-2.5 font-mono text-[12px] tracking-widest uppercase text-[var(--text-2)] hover:text-sky-400 transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
