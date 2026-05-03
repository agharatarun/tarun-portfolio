"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#stack",      label: "Stack"      },
  { href: "#experience", label: "Experience" },
  { href: "#projects",   label: "Projects"   },
  { href: "#contact",    label: "Contact"    },
];

// Replace this with your actual Google Drive direct-download link.
// Format: https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
const RESUME_URL =
  "https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID";

export function Navbar() {
  return (
    <nav className="
      fixed top-0 left-0 right-0 z-50
      backdrop-blur-xl
      bg-[var(--bg)]/80
      border-b border-[var(--border)]
    ">
      <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-bold text-[var(--text)] tracking-wide text-sm shrink-0"
        >
          TA<span className="text-sky-400">.</span>
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="
                  font-mono text-[11px] tracking-widest uppercase
                  text-[var(--text-2)] hover:text-sky-400
                  transition-colors duration-200
                "
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Resume download */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            className="
              inline-flex items-center gap-1.5
              px-3 py-1.5 rounded-lg
              border border-sky-400/40 bg-sky-400/10
              text-sky-400 font-mono text-[11px] font-medium
              hover:bg-sky-400/20 hover:border-sky-400
              hover:-translate-y-0.5
              transition-all duration-200
            "
          >
            <Download size={13} />
            <span className="hidden sm:inline">Resume</span>
          </a>

          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
