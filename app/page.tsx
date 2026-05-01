'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { 
  Sun, Moon, Download, Mail, ExternalLink, 
  Server, Cloud, Monitor, Trophy, Briefcase, Send, Layers, 
  Award, Zap, IndianRupee, Truck, GraduationCap, BarChart3, Phone
} from 'lucide-react';

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Replace YOUR_FILE_ID with your actual Google Drive ID
  const resumeLink = "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-body transition-colors duration-300">
      
      {/* --- NAV --- */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between font-mono text-sm">
          <div className="font-syne text-xl font-bold tracking-tighter">TA<span className="text-sky-400">.</span></div>
          <div className="hidden md:flex gap-8 text-slate-500">
            <a href="#stack" className="hover:text-sky-400 transition-colors">Stack</a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-sky-400 transition-colors">Experience</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-yellow-400" /> 
              ) : (
                <Moon size={18} />
              )}
            </button>
            <a href={resumeLink} className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-lg font-bold text-xs shadow-lg shadow-sky-500/20">
              <Download size={14} /> RESUME
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 space-y-24">
        
        {/* --- HERO --- */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 text-sky-500 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
              <span className="h-px w-8 bg-sky-500"></span> Available for Senior Roles
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold font-syne tracking-tighter leading-tight dark:text-white">
              Tarunkumar <br/> <span className="text-slate-400">Aghara</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              13+ years engineering enterprise-grade, cloud-native systems for AT&T. 
              Java Tech Lead specializing in Azure microservices and full-stack modernization.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge icon={<Award size={12}/>} text="GH-300 · GitHub Copilot" />
              <Badge icon={<Award size={12}/>} text="AI-900 · Azure AI" />
              <Badge icon={<Award size={12}/>} text="AZ-104 · Azure Admin" />
            </div>
            <div className="flex gap-4 pt-6">
              <button className="bg-sky-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-sky-500/20"><Zap size={18}/> View Projects</button>
              <button className="border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-xl font-bold dark:text-slate-300">Experience</button>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-[2.5rem] shadow-2xl flex flex-col items-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 via-indigo-500 to-emerald-400"></div>
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-sky-500/30">TA</div>
            <div className="text-center space-y-1">
              <h3 className="font-syne font-bold text-lg">Tarunkumar Aghara</h3>
              <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Pune, India</p>
            </div>
            <div className="w-full space-y-2">
              <StatRow label="Experience" val="13+ Yrs" />
              <StatRow label="Certifications" val="3x Azure" />
              <StatRow label="Recognition" val="ACE Winner" />
            </div>
          </div>
        </section>

        {/* --- STATS BAR --- */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl">
          <StatBox num="13+" label="Years Expertise" />
          <StatBox num="3" label="Cloud Certs" />
          <StatBox num="6+" label="Live POCs" />
          <StatBox num="ACE" label="x2 Excellence" />
        </section>

        {/* --- TECH STACK --- */}
        <section id="stack" className="space-y-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sky-500 font-mono text-xs uppercase font-bold tracking-widest"><Layers size={14}/> Tech Stack</div>
            <h2 className="text-4xl font-bold font-syne tracking-tight">Full-Spectrum Engineering</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TechCard title="Backend" icon={<Server size={20} className="text-sky-400"/>} items={["Java (13 yrs)", "Spring Boot (10 yrs)", "Microservices", "PL/SQL", "REST APIs"]} border="border-sky-500/20" />
            <TechCard title="Cloud & DevOps" icon={<Cloud size={20} className="text-indigo-400"/>} items={["Azure AKS", "Kubernetes", "Docker", "Kafka", "Apache Spark"]} border="border-indigo-500/20" />
            <TechCard title="Frontend" icon={<Monitor size={20} className="text-emerald-400"/>} items={["React / Angular", "Tailwind CSS", "JavaScript", "Google Apps Script"]} border="border-emerald-500/20" />
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects" className="space-y-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sky-500 font-mono text-xs uppercase font-bold tracking-widest"><Monitor size={14}/> Innovations & POCs</div>
            <h2 className="text-4xl font-bold font-syne tracking-tight">Side Projects & Live Apps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard title="Cricket Auction" icon={<Trophy size={16}/>} tag="Sports" link="https://tinyurl.com/bhcpls7women" desc="Real-time bidding portal for BHCPL league." />
            <ProjectCard title="FundHelper" icon={<IndianRupee size={16}/>} tag="FinTech" link="https://tinyurl.com/fundhelper" desc="Group loan and repayment tracker." />
            <ProjectCard title="TankerBoard" icon={<Truck size={16}/>} tag="Logistics" link="https://tinyurl.com/tankerBoard" desc="Live fleet dispatch and driver logs." />
            <ProjectCard title="LPSR Portal" icon={<GraduationCap size={16}/>} tag="Education" link="https://tinyurl.com/lpsrschool" desc="Student result lookup and management." />
            <ProjectCard title="Transmission Ltd" icon={<BarChart3 size={16}/>} tag="Industrial" link="https://tinyurl.com/kps3hvdctransmissionltd" desc="Operational KPI visualization dashboard." />
          </div>
        </section>

        {/* --- CONTACT --- */}
        <section id="contact" className="pb-20 text-center space-y-8">
          <h2 className="text-5xl font-extrabold font-syne leading-tight">Let's Build Something <br/> <span className="text-sky-500 underline decoration-sky-500/30">Extraordinary</span></h2>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <ContactBtn icon={<Mail size={18}/>} text="Email Me" href="mailto:agharatarun@gmail.com" primary />
            <ContactBtn icon={<Phone size={18}/>} text="Call Me" href="tel:+919327133900" />
            {/* <ContactBtn icon={<Linkedin size={18}/>} text="LinkedIn" href="https://linkedin.com" /> */}
          </div>
        </section>
      </main>
      
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center font-mono text-[10px] text-slate-500">
        <p>© 2026 · Tarunkumar Aghara · Built with Next.js & Tailwind CSS</p>
      </footer>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function Badge({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 font-mono text-[9px] font-bold text-slate-500 uppercase tracking-tighter">
      {icon} {text}
    </span>
  );
}

function StatRow({ label, val }: { label: string, val: string }) {
  return (
    <div className="flex justify-between w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
      <span className="text-[9px] font-bold uppercase tracking-tighter text-slate-400">{label}</span>
      <span className="text-[10px] font-bold font-mono text-sky-500">{val}</span>
    </div>
  );
}

function StatBox({ num, label }: { num: string, label: string }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-8 text-center space-y-1">
      <div className="text-3xl font-syne font-extrabold text-sky-500">{num}</div>
      <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400">{label}</div>
    </div>
  );
}

function TechCard({ title, icon, items, border }: { title: string, icon: React.ReactNode, items: string[], border: string }) {
  return (
    <div className={`p-8 rounded-[2rem] bg-white dark:bg-slate-900 border ${border} space-y-6 shadow-lg shadow-slate-200/50 dark:shadow-none`}>
      <div className="flex items-center gap-3 font-syne font-bold text-lg">{icon} {title}</div>
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <span key={item} className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-500">{item}</span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, icon, tag, link, desc }: { title: string, icon: React.ReactNode, tag: string, link: string, desc: string }) {
  return (
    <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] hover:-translate-y-2 transition-all hover:border-sky-500/50 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex justify-between items-center text-sky-500 font-mono text-[9px] font-bold uppercase tracking-[0.2em]">{tag} {icon}</div>
        <h3 className="font-syne font-bold text-xl leading-tight">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
        <div className="flex gap-1 pt-2">
          {["HTML", "Tailwind", "Apps Script"].map(t => <span key={t} className="text-[8px] font-bold text-slate-400 px-2 py-0.5 border border-slate-200 dark:border-slate-800 rounded uppercase">{t}</span>)}
        </div>
      </div>
      <a href={link} target="_blank" className="mt-8 flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-950 group-hover:bg-sky-500 group-hover:text-white transition-all">
        <span className="font-bold text-xs uppercase tracking-widest">Live Demo</span>
        <ExternalLink size={16}/>
      </a>
    </div>
  );
}

function ContactBtn({ icon, text, href, primary }: { icon: React.ReactNode, text: string, href: string, primary?: boolean }) {
  return (
    <a href={href} className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm transition-all ${primary ? 'bg-sky-500 text-white shadow-xl shadow-sky-500/20 hover:scale-105' : 'bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500'}`}>
      {icon} {text}
    </a>
  );
}