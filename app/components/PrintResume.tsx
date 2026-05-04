"use client";

import { Printer } from "lucide-react";
import {
  personal, certifications, education,
  techCategories, roles, projects, achievements,
} from "../data/resume";

export function PrintResume() {
  const handlePrint = () => {
    const win = window.open("", "_blank", "width=900,height=700");
    if (!win) return;

    // Build skills rows from data
    const skillRows = techCategories.map((cat) => {
      const chips = cat.chips.map((c) => c.label + (c.yrs ? ` (${c.yrs})` : "")).join(" · ");
      return `<div>
        <div class="skill-group-label">${cat.title}</div>
        <div class="skill-chips">${chips}</div>
      </div>`;
    }).join("");

    // Build experience rows from data
    const expRows = roles.map((r) => `
      <div class="job">
        <div class="job-header">
          <span class="job-title">${r.title}</span>
          <span class="job-period">${r.period}</span>
        </div>
        <div class="job-company">${r.company}</div>
        <div class="job-location">${r.location}</div>
        <ul class="bullets">
          ${r.bullets.map((b) => `<li>${b}</li>`).join("")}
        </ul>
      </div>`).join("");

    // Build project rows from data (2-col grid, no images in print)
    const projRows = projects.map((p) => `
      <div class="project">
        <span class="project-name">${p.name}</span>
        <div class="project-stack">${p.stack.join(" · ")}</div>
        <div class="project-desc">${p.desc}</div>
      </div>`).join("");

    // Build achievement chips from data
    const achChips = achievements.map((a) => `<span class="ach-chip">${a}</span>`).join("");

    // Build cert rows from data
    const certRows = certifications.map((c) =>
      `<div class="cert-item"><strong>${c.code}</strong> – ${c.name} (${c.issuer})</div>`
    ).join("");

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>${personal.name} – Resume</title>
<style>
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  @page{size:A4;margin:14mm 16mm 14mm 16mm}
  body{font-family:"Segoe UI",Arial,sans-serif;font-size:9.5pt;line-height:1.45;color:#1a1a1a;background:#fff}
  .header{border-bottom:2.5px solid #0ea5e9;padding-bottom:8px;margin-bottom:10px}
  .header h1{font-size:18pt;font-weight:800;letter-spacing:-.5px;color:#0f172a;line-height:1;margin-bottom:3px}
  .header .title{font-size:10.5pt;font-weight:600;color:#0ea5e9;margin-bottom:4px}
  .contact-row{font-size:8.5pt;color:#475569;display:flex;flex-wrap:wrap;gap:4px 14px}
  .contact-row a{color:#0ea5e9;text-decoration:none}
  .section{margin-bottom:10px}
  .section-title{font-size:9pt;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;color:#0ea5e9;border-bottom:1px solid #e2e8f0;padding-bottom:2px;margin-bottom:7px}
  .summary{font-size:9.5pt;color:#334155;line-height:1.5}
  .skills-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:4px 16px}
  .skill-group-label{font-weight:700;font-size:8.5pt;color:#0f172a;margin-bottom:2px}
  .skill-chips{font-size:8.5pt;color:#334155;line-height:1.6}
  .job{margin-bottom:9px}
  .job-header{display:flex;justify-content:space-between;align-items:baseline;gap:8px;flex-wrap:wrap}
  .job-title{font-weight:700;font-size:10pt;color:#0f172a}
  .job-period{font-size:8pt;color:#64748b;white-space:nowrap;font-style:italic}
  .job-company{font-size:8.5pt;color:#0ea5e9;font-weight:600;margin-bottom:1px}
  .job-location{font-size:8pt;color:#64748b;margin-bottom:4px}
  ul.bullets{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:2px}
  ul.bullets li{font-size:9pt;color:#334155;padding-left:12px;position:relative;line-height:1.45}
  ul.bullets li::before{content:"▸";position:absolute;left:0;color:#0ea5e9;font-size:8pt}
  .projects-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px 20px}
  .project{margin-bottom:7px}
  .project-name{font-weight:700;font-size:9.5pt;color:#0f172a}
  .project-stack{font-size:8pt;color:#64748b;margin-bottom:2px}
  .project-desc{font-size:9pt;color:#334155}
  .two-col{display:grid;grid-template-columns:1fr 1fr;gap:0 24px}
  .cert-item,.edu-item{font-size:9pt;color:#334155;padding-left:12px;position:relative;line-height:1.5}
  .cert-item::before,.edu-item::before{content:"▸";position:absolute;left:0;color:#0ea5e9;font-size:8pt}
  .cert-item strong,.edu-item strong{color:#0f172a}
  .ach-row{display:flex;flex-wrap:wrap;gap:4px 10px;font-size:8.5pt;color:#334155}
  .ach-chip{background:#f0f9ff;border:1px solid #bae6fd;border-radius:4px;padding:1px 7px;color:#0369a1;font-weight:600;font-size:8pt}
  @media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
</style>
</head>
<body>
<div class="header">
  <h1>${personal.name.toUpperCase()}</h1>
  <div class="title">${personal.title}</div>
  <div class="contact-row">
    <span>${personal.phone}</span>
    <a href="mailto:${personal.email}">${personal.email}</a>
    <a href="${personal.linkedin}">${personal.linkedin.replace("https://", "")}</a>
    <span>${personal.location}</span>
  </div>
</div>

<div class="section">
  <div class="section-title">Profile Summary</div>
  <p class="summary">${personal.summary}</p>
</div>

<div class="section">
  <div class="section-title">Key Skills</div>
  <div class="skills-grid">${skillRows}</div>
</div>

<div class="section">
  <div class="section-title">Professional Experience</div>
  ${expRows}
</div>

<div class="section">
  <div class="section-title">Side Projects &amp; Live Applications</div>
  <div class="projects-grid">${projRows}</div>
</div>

<div class="section">
  <div class="section-title">Achievements</div>
  <div class="ach-row">${achChips}</div>
</div>

<div class="section">
  <div class="section-title">Certifications &amp; Education</div>
  <div class="two-col">
    <div>${certRows}</div>
    <div>
      <div class="edu-item"><strong>${education.degree}</strong></div>
      <div class="edu-item">${education.college}, ${education.univ}</div>
      <div class="edu-item">${education.years} · ${education.score}</div>
    </div>
  </div>
</div>

<script>window.onload=function(){window.print()}</script>
</body>
</html>`;

    win.document.open();
    win.document.write(html);
    win.document.close();
  };

  return (
    <button
      onClick={handlePrint}
      aria-label="Print Resume"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-indigo-400/40 bg-indigo-400/10 text-indigo-400 font-mono text-[11px] font-medium hover:bg-indigo-400/20 hover:border-indigo-400 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
    >
      <Printer size={13} />
      <span className="hidden sm:inline">Print</span>
    </button>
  );
}
