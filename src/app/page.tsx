import ScrollFx from "./components/ScrollFx";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Marquee from "./components/Marquee";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Writing from "./components/Writing";
import Contact from "./components/Contact";

const mono = "var(--font-mono), monospace";

export default function Home() {
  return (
    <main style={{ position: "relative", minHeight: "100vh" }}>
      <ScrollFx />

      {/* scroll-progress line */}
      <div
        data-scrollbar
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 2,
          width: 0,
          background: "var(--accent)",
          zIndex: 60,
          boxShadow: "0 0 10px var(--accent)",
          transition: "width .1s linear",
        }}
      />

      {/* subtle grid backdrop */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 120% 80% at 50% 0%, #000 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 120% 80% at 50% 0%, #000 30%, transparent 80%)",
        }}
      />

      <Nav />
      <Hero />
      <Journey />
      <Marquee />
      <Experience />
      <Projects />
      <Skills />
      <Writing />
      <Contact />

      <footer
        style={{
          position: "relative",
          zIndex: 1,
          borderTop: "1px solid rgba(255,255,255,.06)",
          background: "#0a0c0f",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: 28,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                width: 22,
                height: 22,
                border: "1px solid var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent)",
                fontFamily: mono,
                fontSize: 9,
              }}
            >
              GR
            </span>
            <span
              style={{
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "#5a636d",
              }}
            >
              © 2026 Gowtham Revanur
            </span>
          </div>
          <span
            style={{
              fontFamily: mono,
              fontSize: 11,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#3f464e",
            }}
          >
            Governed intelligence · Built with intent
          </span>
        </div>
      </footer>
    </main>
  );
}
