import { Navbar }      from "./components/Navbar";
import { Hero }        from "./components/Hero";
import { StatsBar }    from "./components/StatsBar";
import { TechStack }   from "./components/TechStack";
import { Projects }    from "./components/Projects";
import { Experience }  from "./components/Experience";
import { Contact }     from "./components/Contact";
import { Footer }      from "./components/Footer";
import { ScrollReveal } from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Noise overlay for depth */}
      <div
        aria-hidden
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Ambient glow orbs */}
      <div
        aria-hidden
        className="fixed top-[-100px] left-[-150px] w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-[0.10]"
        style={{ background: "#38bdf8", filter: "blur(130px)" }}
      />
      <div
        aria-hidden
        className="fixed top-[40%] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-[0.09]"
        style={{ background: "#818cf8", filter: "blur(130px)" }}
      />
      <div
        aria-hidden
        className="fixed bottom-[5%] left-[30%] w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-[0.06]"
        style={{ background: "#34d399", filter: "blur(120px)" }}
      />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <StatsBar />
          <TechStack />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Scroll reveal observer (client) */}
      <ScrollReveal />
    </>
  );
}
