// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH — edit here, reflected everywhere automatically:
//   • Hero section          • TechStack section       • Experience section
//   • Projects section      • StatsBar                • PrintResume document
// ─────────────────────────────────────────────────────────────────────────────

// ── Personal ────────────────────────────────────────────────────────────────
export const personal = {
  name:        "Tarunkumar Aghara",
  initials:    "TA",
  title:       "JAVA MICROSERVICES & CLOUD SPECIALIST · FULL STACK LEAD",
  location:    "Pune, India",
  phone:       "+91-9327133900",
  email:       "agharatarun@gmail.com",
  linkedin:    "https://www.linkedin.com/in/agharatarun",
  photo:       "/profile.jpg",
  available:   true,
  portfolio:   "https://tarun-portfolio-sooty.vercel.app/",
  summary:
    "I bring over 14 years of experience building scalable, high-performance solutions for enterprise-grade systems. I've specialized in web & backend development, with a strong focus on REST APIs, microservices, real-time stream processing (Kafka & Spark) & monolith-to-cloud modernization. I combine deep backend expertise with growing Full Stack capabilities (React/Tailwind) and a passion for mentoring teams to deliver value at scale.",
};

// ── Stats bar ────────────────────────────────────────────────────────────────
export const stats = [
  { num: "14+",  label: "Years Enterprise Java"  },
  { num: "6+",   label: "Years Azure Cloud"       },
  { num: "6+",   label: "Apps Shipped on AKS"     },
  { num: "×2 ACE",  label: "×3 POB · Best Innovation · BEST SDU"  },
];

// ── Hero card rows ───────────────────────────────────────────────────────────
export const heroCardRows = [
  { label: "Role",   value: "Sr. Tech Specialist"       },
  { label: "Domain", value: "Telecom · FinTech"    },
  { label: "Client", value: "AT&T · Mastercard"    },
  { label: "Stack",  value: "Java · SpringBoot"  },
];

// ── Certifications ───────────────────────────────────────────────────────────
export const certifications = [
  {
    code:  "GH-300",
    name:  "GitHub Copilot",
    issuer: "Microsoft / GitHub",
    color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10 hover:bg-emerald-400/20",
    url:   "https://www.credly.com/badges/1a6693b8-3eba-4eef-9b9c-5439b12fa780/public_url",
  },
  {
    code:  "AI-900",
    name:  "Azure AI Fundamentals",
    issuer: "Microsoft",
    color: "text-indigo-400 border-indigo-400/30 bg-indigo-400/10 hover:bg-indigo-400/20",
    url:   "https://learn.microsoft.com/en-us/users/tarunkumaraghara-2866/credentials/ff3f709da1c61e89",
  },
  {
    code:  "AZ-104",
    name:  "Azure Administrator",
    issuer: "Microsoft",
    color: "text-orange-400 border-orange-400/30 bg-orange-400/10 hover:bg-orange-400/20",
    url:   "https://learn.microsoft.com/api/credentials/share/en-us/tarunaghara/228F208F5E5BB928?sharingId=2D1AA2ADFEEA7C15",
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
      { label: "Java", color: "text-sky-400 border-sky-400/30" },
      { label: "Spring Boot", color: "text-sky-400 border-sky-400/30" },
      { label: "Microservices", color: "text-sky-400 border-sky-400/30" },
      { label: "REST APIs" },
      { label: "Database · PL/SQL", },
      { label: "JUnit · Mockito" },
      { label: "Maven" },
      { label: "gRPC · Beginner" },
      { label: "Scripting" },
      { label: "Web Server · App Server" },
      { label: "ArcGIS" },
    ],
  },
  {
    icon:      "Cloud",
    title:     "Cloud & DevOps",
    subtitle:  "Azure-Native & Pipelines",
    glowClass: "glow-indigo",
    iconBg:    "bg-indigo-400/10 text-indigo-400",
    chips: [
      { label: "Microsoft Azure - SaaS · PaaS · IaaS", color: "text-indigo-400 border-indigo-400/30" },
      { label: "Azure - Functions · App Service", color: "text-indigo-400 border-indigo-400/30" },
      { label: "Azure - Key Vault · Storage", color: "text-indigo-400 border-indigo-400/30" },
      { label: "Azure DevOps · CI/CD · App Insights", color: "text-indigo-400 border-indigo-400/30" },
      { label: "Kubernetes · Docker" },
      { label: "Apache Kafka  · Spark",  color: "text-emerald-400 border-emerald-400/30" },
      { label: "Jenkins · SonarQube" },
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
      { label: "Tailwind · Bootstrap",        color: "text-emerald-400 border-emerald-400/30" },
      { label: "HTML5 · CSS" },
      { label: "JavaScript · Typescript", color: "text-blue-400 border-blue-400/30" },
      { label: "jQuery · AJAX" },
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
    title:   "Sr. Tech Specialist",
    company: "HCLTech · GenAI & Mastercard Proposals",
    period:  "OCT 2025 – Present",
    location:"Pune, MH",
    current: true,
    bullets: [
      "Architecting GenAI-powered enterprise solutions integrating LLM capabilities into Spring Boot microservices for Mastercard proposals.",
      "GenAI Innovation & Architecture: Conceptualized and architected a GenAI-driven Talent Management solution aimed at optimizing resource upskilling and reducing bench time; designed end-to-end wireframes and spearheaded technical feasibility collaborations with GenAI COE experts.",
      "Strategic Initiatives & POCs: rapidly evaluating and validating new technologies (AI/Copilot tooling, streaming frameworks, serverless patterns etc.) that shaped project architecture decisions.",
      "Foundational exposure to gRPC, understanding protocol buffers, contract-first API design and suitability for high-performance inter-service communication.",
      "Basic understanding on reactive programming, including non-blocking execution, event-driven flows, back-pressure concepts, with readiness to apply using Project reactor/Rx based implementation as required.",
      "Proactively pursue technical growth through certifications, self-paced learning and expert-led tutorials to ensure precise and up-to-date project execution.",
      "Talent Acquisition & Mentorship: Actively participated in the recruitment lifecycle, evaluating senior technical talent on system design, problem-solving etc. to ensure the onboarding of top-tier engineering teams.",
    ],
  },
  {
    title:   "Java Technical Lead",
    company: "Tech Mahindra · Client: AT&T Services Inc.",
    period:  "Feb 2019 – OCT 2025",
    location:"Pune, MH",
    current: false,
    bullets: [
      "Architected 6+ mission-critical apps (Vehicle Tracking, Smart Geofence, Tech Tracker, iLocate) on Azure AKS — Docker, Kubernetes, CI/CD via Jenkins & SonarQube; enabled zero-downtime CI/CD deployments at enterprise scale for AT&T Business dispatch operations.",
      "These apps significantly optimize dispatch area operations through real-time insights, location intelligence, and technician efficiency metrics.",
      "Led monolith → microservices modernization and on-prem → Azure cloud migration across multiple AT&T Business systems.",
      "Engineered real-time IoT stream processing with Apache Spark & Kafka, building real-time dynamic associations from live sensor data.",
      "Designed serverless Azure Functions (queue, timer & blob triggers) integrated with table/container storage, Key Vault, Kafka, IBM MQ, App Insights and ArcGIS enabling serverless, event-driven processing for high-throughput scenarios enhancing security, data management, and geospatial intelligence within the application ecosystem",
      "Experienced in designing and developing RESTful APIs using the Spring Boot framework, implementing robust and scalable solutions to facilitate efficient communication between applications.",
      "Proficient in unit testing methodologies using JUnit, Mockito, Azurite, and MockRunner JMS to ensure the robustness and reliability of software components, with a focus on comprehensive testing and quality assurance.",
    ],
  },
  {
    title:   "Java Full Stack Developer",
    company: "Tech Mahindra · Client: AT&T Services Inc.",
    period:  "Oct 2014 – Feb 2019",
    location:"Plano TX · Middletown NJ · Chicago IL",
    current: false,
    bullets: [
      "OPUS Platform (Mission-Critical): Engineered full-stack features for AT&T's flagship sales and activation engine, integrating Spring, JSP, JQuery, REST APIs, and PL/SQL to support Wireless, IPTV, and VoIP operations.",
      "Developed and maintained multiple enterprise web applications supporting Circuit IDs, BTNs, BANs, SOR tracking, and contract management.",
      "Developed enterprise apps supporting Circuit IDs, BTNs, BANs, SOR tracking and contract management.",
    ],
  },
  {
    title:   "Java Developer (Early Career)",
    company: "Tech Mahindra · Client: AT&T Services Inc.",
    period:  "Apr 2012 – Sep 2014",
    location:"Mumbai, MH",
    current: false,
    bullets: [
      "Mobius (OSS/BSS Integration): Designed and launched a Java-based application to streamline Distributed Antenna System (DAS) operations, boosting site-build efficiency via responsive Bootstrap and jQuery modernization using Java backend.",
      "Built Torus, a responsive bid management web app using Java, SQL, HTML5, CSS3, Bootstrap, and jQuery, adopting mobile-first and adaptive design principles.",
      "Created Sitemover, an automated deployment tool with tracking and reporting features – nominated for Best Innovative Product.",
      "Completed ITP training (Java, PL/SQL, Shell Scripting, Software Engineering, Telecom OSS/BSS)",
      "Designed and developed Acme Advertising Service (AAS), a product promotion portal, ranked 2nd best tech app by the ITP group.",
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
