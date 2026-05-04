"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ExternalLink, Trophy, IndianRupee, Truck, GraduationCap, BarChart3, Code2, ChevronLeft, ChevronRight, X } from "lucide-react";
import { projects } from "../data/resume";
import type { Project } from "../data/resume";

const iconMap: Record<string, React.ReactNode> = {
  Trophy:        <Trophy        size={11} />,
  IndianRupee:   <IndianRupee   size={11} />,
  Truck:         <Truck         size={11} />,
  GraduationCap: <GraduationCap size={11} />,
  BarChart3:     <BarChart3     size={11} />,
};

function ImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [idx, setIdx]       = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  if (!images || images.length === 0) return null;

  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setIdx((i) => (i - 1 + images.length) % images.length); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setIdx((i) => (i + 1) % images.length); };

  return (
    <>
      {/* Thumbnail strip */}
      <div className="relative w-full aspect-[9/16] max-h-52 rounded-xl overflow-hidden bg-[var(--bg3)] cursor-pointer group mb-3" onClick={() => setLightbox(true)}>
        <Image src={images[idx]} alt={`${name} screenshot ${idx + 1}`} fill className="object-cover object-top transition-transform duration-300 group-hover:scale-105" sizes="400px" />
        {/* overlay hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white font-mono text-[10px] bg-black/50 px-2 py-1 rounded-full">Click to expand</span>
        </div>
        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors">
              <ChevronLeft size={13} />
            </button>
            <button onClick={next} className="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors">
              <ChevronRight size={13} />
            </button>
            {/* Dots */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
              {images.map((_, i) => (
                <button key={i} onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === idx ? "bg-white scale-125" : "bg-white/50"}`} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && mounted && createPortal(
        <div className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-sm" onClick={() => setLightbox(false)}>
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent z-[10000]" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-white font-display font-bold text-xl tracking-wide">{name}</h3>
            <button className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors" onClick={(e) => { e.stopPropagation(); setLightbox(false); }}>
              <X size={24} />
            </button>
          </div>

          <div className="relative w-full max-w-6xl h-[75vh] mt-12" onClick={(e) => e.stopPropagation()}>
            <Image src={images[idx]} alt={`${name} screenshot ${idx + 1}`} fill className="object-contain" sizes="100vw" quality={100} />
          </div>
          {images.length > 1 && (
            <>
              <button onClick={prev} className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-[10000]">
                <ChevronLeft size={28} />
              </button>
              <button onClick={next} className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-[10000]">
                <ChevronRight size={28} />
              </button>
            </>
          )}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-[10000]" onClick={(e) => e.stopPropagation()}>
            {images.map((_, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === idx ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"}`} />
            ))}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const hasImages = p.images && p.images.length > 0;
  return (
    <div className={`reveal project-card relative flex flex-col bg-[var(--bg2)] border border-[var(--border)] rounded-2xl p-5 hover:border-[var(--border-hi)] hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,.5)] transition-all duration-250 overflow-hidden ${hasImages ? "" : ""}`}>
      <div className="inline-flex items-center gap-1.5 mb-3 w-fit px-2.5 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 font-mono text-[10px] text-sky-400">
        {iconMap[p.icon]} {p.tag}
      </div>
      <h3 className="font-display font-bold text-[var(--text)] text-[0.95rem] leading-snug mb-2">{p.name}</h3>
      <p className="text-[var(--text-2)] text-[0.8rem] leading-relaxed mb-3">{p.desc}</p>

      {/* Screenshots */}
      {hasImages && <ImageCarousel images={p.images!} name={p.name} />}

      <div className="flex flex-wrap gap-1.5 mb-4">
        {p.stack.map((s) => (
          <span key={s} className="px-2 py-0.5 rounded bg-[var(--bg3)] border border-[var(--border-hi)] font-mono text-[10px] text-[var(--text-3)]">{s}</span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {p.demos.map((d) => (
          <a key={d.href} href={d.href} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-400/10 border border-sky-400/25 text-sky-400 font-semibold text-[0.75rem] hover:bg-sky-400/20 hover:border-sky-400 hover:-translate-y-0.5 transition-all duration-200">
            <ExternalLink size={12} /> {d.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal flex items-center gap-3 mb-2">
          <Code2 size={13} className="text-sky-400" />
          <span className="font-mono text-[11px] tracking-[3px] uppercase text-sky-400">Innovations &amp; POCs</span>
          <div className="flex-1 h-px bg-[var(--border-hi)]" />
        </div>
        <h2 className="reveal font-display font-extrabold text-[clamp(1.6rem,3vw,2.2rem)] tracking-tight text-[var(--text)] mb-2">Side Projects &amp; Live Apps</h2>
        <p className="reveal text-[var(--text-2)] text-sm mb-8 max-w-[560px] leading-relaxed">
          Real-world applications built with HTML, Tailwind CSS, Google Apps Script &amp; Google Sheets — solving genuine problems for community and business.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => <ProjectCard key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  );
}
