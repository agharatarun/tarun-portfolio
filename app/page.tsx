'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { 
  Sun, Moon, Download, Mail, 
  ExternalLink, Server, Cloud, Monitor, Trophy, 
  Briefcase, Send, Layers, Award
} from 'lucide-react';

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid Hydration Mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Replace with your actual Google Drive Direct Link
  const resumeLink = "https://your-google-drive-direct-download-link-here";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* --- FLOATING NAV --- */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold font-syne">TA<span className="text-sky-500">.</span></div>
          
          <div className="flex items-center gap-6">
            {/* THEME TOGGLE BUTTON */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:scale-110 transition-transform"
            >
              {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-600" />}
            </button>

            {/* RESUME DOWNLOAD BUTTON */}
            <a 
              href={resumeLink} 
              target="_blank" 
              className="hidden md:flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-lg shadow-sky-500/20"
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 text-sky-500 font-mono text-sm uppercase tracking-widest">
              <span className="h-px w-8 bg-sky-500"></span> Available for Senior Roles
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
              Tarunkumar <br/> <span className="text-slate-400">Aghara</span>
            </h1>
            <p className="text-xl font-medium text-indigo-400">Java Tech Lead & Cloud Architect</p>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              13+ years engineering enterprise-grade, cloud-native systems for AT&T. 
              Specializing in Azure microservices, real-time stream processing, and full-stack modernization.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Badge text="GH-300 Copilot" color="bg-emerald-500/10 text-emerald-500" />
              <Badge text="AI-900 Azure AI" color="bg-indigo-500/10 text-indigo-500" />
              <Badge text="AZ-104 Azure Admin" color="bg-sky-500/10 text-sky-500" />
            </div>
          </div>

          {/* BENTO AVATAR CARD */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] shadow-xl space-y-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-sky-500/20">
              TA
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg">Tarunkumar Aghara</h3>
              <p className="text-sm text-slate-500">Pune, India</p>
            </div>
            <div className="w-full space-y-3">
              <StatRow label="Experience" val="13+ Years" />
              <StatRow label="Certs" val="3x Azure" />
              <StatRow label="Awards" val="ACE Winner" />
            </div>
          </div>
        </div>

        {/* --- PROJECTS BENTO GRID --- */}
        <section className="mt-32 space-y-8">
          <SectionHeader label="Innovations & POCs" title="Side Projects & Live Apps" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="Cricket Auction Platform"
              link="https://tinyurl.com/bhcpls7women"
              stack={["HTML", "Tailwind", "Apps Script"]}
            />
            <ProjectCard 
              title="FundHelper Tracker"
              link="https://tinyurl.com/fundhelper"
              stack={["FinTech", "Google Sheets API"]}
            />
            <ProjectCard 
              title="Logistics TankerBoard"
              link="https://tinyurl.com/tankerBoard"
              stack={["Real-time Ops", "Dashboard"]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function Badge({ text, color }: { text: string, color: string }) {
  return (
    <span className={`px-4 py-1.5 rounded-full font-mono text-[10px] font-bold border border-current ${color}`}>
      {text}
    </span>
  );
}

function StatRow({ label, val }: { label: string, val: string }) {
  return (
    <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
      <span className="text-xs text-slate-500 uppercase font-bold tracking-tighter">{label}</span>
      <span className="font-mono text-sky-500 font-bold">{val}</span>
    </div>
  );
}

function ProjectCard({ title, link, stack }: { title: string, link: string, stack: string[] }) {
  return (
    <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl hover:border-sky-500 transition-all hover:-translate-y-2">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {stack.map(s => <span key={s} className="text-[10px] font-mono text-slate-400 uppercase">{s}</span>)}
      </div>
      <a href={link} target="_blank" className="flex items-center justify-between w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 group-hover:bg-sky-500 group-hover:text-white transition-colors">
        <span className="text-sm font-bold">View POC</span>
        <ExternalLink size={16} />
      </a>
    </div>
  );
}

function SectionHeader({ label, title }: { label: string, title: string }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sky-500 font-mono text-xs uppercase font-bold tracking-widest">
        <Layers size={14} /> {label}
      </div>
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
}