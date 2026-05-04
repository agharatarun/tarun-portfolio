// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH — edit here, reflected everywhere automatically:
//   • Hero section          • TechStack section       • Experience section
//   • Projects section      • StatsBar                • PrintResume document
// ─────────────────────────────────────────────────────────────────────────────

// ── Personal ────────────────────────────────────────────────────────────────
export const personal = {
  name:        "Tarunkumar Aghara",
  initials:    "TA",
  title:       "Java Tech Lead & Cloud Architect",
  location:    "Pune, India",
  phone:       "+91-9327133900",
  email:       "agharatarun@gmail.com",
  linkedin:    "https://www.linkedin.com/in/tarunkumar-aghara",
  photo:       "/profile.jpg",
  available:   true,
  summary:
    "Results-driven Java Tech Lead with 13+ years delivering enterprise-grade, cloud-native solutions for AT&T and HCLTech. " +
    "Expert in Azure AKS microservices, real-time stream processing (Kafka & Spark), and monolith-to-cloud modernization. " +
    "GitHub Copilot certified (GH-300); hands-on with GenAI integration. " +
    "Recognized mentor and go-to POC expert; multiple ACE & SDU awards.",
};

// ── Stats bar ────────────────────────────────────────────────────────────────
export const stats = [
  { num: "13+",  label: "Years Enterprise Java"  },
  { num: "5+",   label: "Years Azure Cloud"       },
  { num: "6+",   label: "Apps Shipped on AKS"     },
  { num: "ACE",  label: "×2 · BEST SDU · Bravo"  },
];

// ── Hero card rows ───────────────────────────────────────────────────────────
export const heroCardRows = [
  { label: "Role",   value: "Java Tech Lead"       },
  { label: "Domain", value: "Telecom · FinTech"    },
  { label: "Client", value: "AT&T · Mastercard"    },
  { label: "Stack",  value: "Azure · Kafka · K8s"  },
];

// ── Certifications ───────────────────────────────────────────────────────────
export const certifications = [
  {
    code:  "GH-300",
    name:  "GitHub Copilot",
    issuer: "Microsoft / GitHub",
    color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10 hover:bg-emerald-400/20",
    url:   "https://credentials.example.com/gh-300", // ← replace with your real URL
  },
  {
    code:  "AI-900",
    name:  "Azure AI Fundamentals",
    issuer: "Microsoft",
    color: "text-indigo-400 border-indigo-400/30 bg-indigo-400/10 hover:bg-indigo-400/20",
    url:   "https://credentials.example.com/ai-900", // ← replace with your real URL
  },
  {
    code:  "AZ-104",
    name:  "Azure Administrator",
    issuer: "Microsoft",
    color: "text-orange-400 border-orange-400/30 bg-orange-400/10 hover:bg-orange-400/20",
    url:   "https://credentials.example.com/az-104", // ← replace with your real URL
  },
];

// ── Education ────────────────────────────────────────────────────────────────
export const education = {
  degree:  "B.E. Information Technology",
  college: "LD College of Engineering",
  univ:    "Gujarat University",
  years:   "2007 – 2011",
  score:   "68.25%",
};

// ── Tech skills ──────────────────────────────────────────────────────────────
export interface TechChip { label: string; yrs?: string; color?: string }
export interface TechCategory {
  icon:      string;   // lucide icon name
  title:     string;
  subtitle:  string;
  glowClass: string;
  iconBg:    string;
  chips:     TechChip[];
}

export const techCategories: TechCategory[] = [
  {
    icon:      "Server",
    title:     "Backend",
    subtitle:  "Core Technologies",
    glowClass: "glow-sky",
    iconBg:    "bg-sky-400/10 text-sky-400",
    chips: [
      { label: "Java",          yrs: "13 yrs", color: "text-sky-400 border-sky-400/30" },
      { label: "Spring Boot",   yrs: "10 yrs", color: "text-sky-400 border-sky-400/30" },
      { label: "Microservices",              color: "text-sky-300/70 border-sky-400/20" },
      { label: "REST APIs" },
      { label: "PL/SQL",        yrs: "13 yrs" },
      { label: "JUnit · Mockito" },
      { label: "Maven" },
      { label: "EJB · DAO/DTO" },
    ],
  },
  {
    icon:      "Cloud",
    title:     "Cloud & DevOps",
    subtitle:  "Azure-Native & Pipelines",
    glowClass: "glow-indigo",
    iconBg:    "bg-indigo-400/10 text-indigo-400",
    chips: [
      { label: "Azure AKS",        yrs: "5 yrs", color: "text-indigo-400 border-indigo-400/30" },
      { label: "Azure Functions",               color: "text-indigo-400 border-indigo-400/30" },
      { label: "Azure Key Vault",               color: "text-indigo-400 border-indigo-400/30" },
      { label: "Kubernetes" },
      { label: "Docker" },
      { label: "Apache Kafka" },
      { label: "Apache Spark" },
      { label: "Jenkins · SonarQube" },
      { label: "ArcGIS · IBM MQ" },
      { label: "GitHub Copilot", color: "text-emerald-400 border-emerald-400/30" },
    ],
  },
  {
    icon:      "Monitor",
    title:     "Frontend & Full Stack",
    subtitle:  "Modern UI Development",
    glowClass: "glow-emerald",
    iconBg:    "bg-emerald-400/10 text-emerald-400",
    chips: [
      { label: "React · Angular",     color: "text-emerald-400 border-emerald-400/30" },
      { label: "Tailwind CSS",        color: "text-emerald-400 border-emerald-400/30" },
      { label: "HTML5 · CSS3" },
      { label: "JavaScript" },
      { label: "jQuery · AJAX" },
      { label: "Bootstrap" },
      { label: "Google Apps Script",  color: "text-orange-400 border-orange-400/30" },
      { label: "Google Sheets API",   color: "text-orange-400 border-orange-400/30" },
    ],
  },
];

// ── Experience ───────────────────────────────────────────────────────────────
export interface Role {
  title:    string;
  company:  string;
  period:   string;
  location: string;
  current:  boolean;
  bullets:  string[];
}

export const roles: Role[] = [
  {
    title:   "Java Tech Lead",
    company: "HCLTech · GenAI & Mastercard Proposals",
    period:  "2025 – Present",
    location:"Pune, MH",
    current: true,
    bullets: [
      "Architecting GenAI-powered enterprise solutions integrating LLM capabilities into Spring Boot microservices for Mastercard proposals.",
      "Accelerating development velocity with GitHub Copilot (GH-300); evaluating and productionizing AI tooling at scale.",
      "Applying Azure AI (AI-900) knowledge to position HCL's offerings at the forefront of enterprise AI adoption.",
    ],
  },
  {
    title:   "Java Tech Lead",
    company: "Tech Mahindra · Client: AT&T Services Inc.",
    period:  "Feb 2019 – 2025",
    location:"Pune / Plano TX / Middletown NJ / Chicago IL",
    current: false,
    bullets: [
      "Architected 6+ mission-critical apps (Vehicle Tracking, Smart Geofence, Tech Tracker, iLocate) on Azure AKS — Docker, Kubernetes, CI/CD via Jenkins & SonarQube.",
      "Engineered real-time IoT stream processing with Apache Spark & Kafka, building dynamic technician-to-vehicle associations from live sensor data.",
      "Designed serverless Azure Functions (queue, timer & blob triggers) integrated with Key Vault, App Insights, ArcGIS & IBM MQ.",
      "Led monolith → microservices modernization and on-prem → Azure cloud migration across multiple AT&T Business systems.",
      "Mentored 5+ engineers; recognized with ACE (×2), SPOT, Project Person of the Month, and BEST SDU Award.",
    ],
  },
  {
    title:   "Java Full Stack Developer",
    company: "Tech Mahindra · Client: AT&T Services Inc.",
    period:  "Oct 2014 – Feb 2019",
    location:"Pune, MH",
    current: false,
    bullets: [
      "Built OPUS — core AT&T platform handling activation, sales & back-office ops across wireless, IPTV & VoIP using Spring, REST, jQuery & PL/SQL.",
      "Created Sitemover (automated deployment tool, nominated Best Innovative Product) and Torus (responsive bid management app).",
      "Developed enterprise apps supporting Circuit IDs, BTNs, BANs, SOR tracking and contract management.",
    ],
  },
  {
    title:   "Java Developer (Early Career)",
    company: "Tech Mahindra · Mumbai, MH",
    period:  "Apr 2012 – Sep 2014",
    location:"Mumbai, MH",
    current: false,
    bullets: [
      "Completed ITP training (Java, PL/SQL, Shell Scripting, Telecom OSS/BSS); built Mobius (DAS ops app) and Acme Advertising Service — ranked 2nd best ITP tech app.",
    ],
  },
];

// ── Projects ─────────────────────────────────────────────────────────────────
export interface Demo  { label: string; href: string }
export interface Project {
  icon:    string;   // lucide icon name
  tag:     string;
  name:    string;
  desc:    string;
  stack:   string[];
  demos:   Demo[];
  images?: string[]; // paths under /public
}

export const projects: Project[] = [
  {
    icon:  "Trophy",
    tag:   "Sports · Community",
    name:  "BHCPL S7 Women — Cricket Auction",
    desc:  "Full-featured live cricket player auction portal for BHCPL Season 7 Women's league — real-time bidding, team budgets, and player roster management on a zero-infra stack.",
    stack: ["HTML", "Tailwind CSS", "Google Apps Script", "Google Sheets"],
    demos: [{ label: "Live Demo", href: "https://tinyurl.com/bhcpls7women" }],
    images: [], // no screenshots yet — add when available
  },
  {
    icon:  "IndianRupee",
    tag:   "FinTech · Utility",
    name:  "FundHelper — Loan Tracker",
    desc:  "Personal finance app tracking loans, EMIs and repayment schedules. Google Sheets as the backend database with a clean Tailwind UI for intuitive money management.",
    stack: ["HTML", "Tailwind CSS", "Google Apps Script", "Google Sheets"],
    demos: [{ label: "Live Demo", href: "https://tinyurl.com/fundhelper" }],
    images: [
      "/projects/FundHelper1.png",
      "/projects/FundHelper2.png",
      "/projects/FundHelper3.png",
      "/projects/FundHelper4.png",
      "/projects/FundHelper5.png",
      "/projects/FundHelper6.png",
      "/projects/FundHelper7.png",
      "/projects/FundHelper8.png",
      "/projects/FundHelper9.png",
      "/projects/FundHelper10.png",
    ],
  },
  {
    icon:  "Truck",
    tag:   "Logistics · Operations",
    name:  "TankerBoard & TankerLog",
    desc:  "End-to-end logistics suite — TankerBoard provides a live dispatch dashboard for tanker fleet ops; TankerLog tracks trip entries, driver logs and fuel records in real time.",
    stack: ["HTML", "Tailwind CSS", "Google Apps Script", "Google Sheets"],
    demos: [
      { label: "TankerBoard", href: "https://tinyurl.com/tankerBoard" },
      { label: "TankerLog",   href: "https://tinyurl.com/tankerLog"   },
    ],
    images: [
      "/projects/Tanker1.png",
      "/projects/Tanker2.png",
      "/projects/Tanker3.png",
    ],
  },
  {
    icon:  "GraduationCap",
    tag:   "Education · Portal",
    name:  "LPSR School Result Portal",
    desc:  "Complete school result management system — students look up exam results by seat number; admins manage data via a secure entry portal. Serverless, zero-cost hosting.",
    stack: ["HTML", "Tailwind CSS", "Google Apps Script", "Google Sheets"],
    demos: [
      { label: "Result Portal", href: "https://tinyurl.com/lpsrschool"      },
      { label: "Entry Portal",  href: "https://tinyurl.com/lpsrresultentry" },
    ],
    images: [
      "/projects/LPSR1.png",
      "/projects/LPSR2.png",
      "/projects/LPSR3.png",
    ],
  },
  {
    icon:  "BarChart3",
    tag:   "Industrial · Dashboard",
    name:  "Transmission Ltd — Operations Dashboard",
    desc:  "Business intelligence dashboard for an electrical transmission company — visualizing operational KPIs, maintenance schedules and project status in a responsive interface.",
    stack: ["HTML", "Tailwind CSS", "Google Apps Script", "Google Sheets"],
    demos: [{ label: "Live Demo", href: "https://tinyurl.com/kps3hvdctransmissionltd" }],
    images: [
      "/projects/Transmission1.png",
      "/projects/Transmission2.png",
      "/projects/Transmission3.png",
    ],
  },
];

// ── Achievements ─────────────────────────────────────────────────────────────
export const achievements = [
  "ACE ×2",
  "BEST SDU Award",
  "Pat on the Back ×3",
  "SPOT Award",
  "Project Person of the Month",
  "Best Innovative Product (Sitemover)",
  "Bravo Award",
  "Runner-up – AAS ITP",
  "Runner-up – Code Mania",
];
