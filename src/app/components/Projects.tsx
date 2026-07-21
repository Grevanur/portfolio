const mono = "var(--font-mono), monospace";
const space = "var(--font-space), sans-serif";

type Project = {
  tag: string;
  year: string;
  name: string;
  desc: string;
  highlight: React.ReactNode;
  stack: string[];
  href: string;
};

const projects: Project[] = [
  {
    tag: "AI · Security",
    year: "2026",
    name: "LLM Security Assistant",
    desc: "Full-stack RAG application that lets users query application, network, and firewall logs in natural language. Designed the ingestion pipeline, vector store, API, and frontend end-to-end.",
    highlight: (
      <>
        FAISS-backed retrieval with LangChain grounds every answer in verifiable log sources —{" "}
        <span style={{ color: "var(--accent)" }}>hallucination eliminated by design</span>.
      </>
    ),
    stack: ["RAG", "LangChain", "FAISS", "FastAPI", "Streamlit", "Docker"],
    href: "https://github.com/Grevanur/AI-LLM-security",
  },
  {
    tag: "Machine Learning",
    year: "2025",
    name: "AI-Based DDoS Detection System",
    desc: "End-to-end ML intrusion detection system with real-time packet sniffing, attack simulation, and a live monitoring dashboard, trained on the CIC-IDS dataset.",
    highlight: (
      <>
        <span style={{ color: "var(--accent)" }}>99.97% detection accuracy</span> using ensemble models
        under adversarial traffic conditions.
      </>
    ),
    stack: ["Python", "Scapy", "XGBoost", "FastAPI", "Streamlit"],
    href: "https://github.com/Grevanur/ai-ddos-detection-system",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ position: "relative", zIndex: 1, maxWidth: 1160, margin: "0 auto", padding: "80px 28px 40px" }}>
      <div data-reveal style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 56 }}>
        <span style={{ fontFamily: mono, fontSize: 12, color: "var(--accent)", letterSpacing: ".1em" }}>02</span>
        <h2 style={{ margin: 0, fontFamily: space, fontWeight: 500, fontSize: "clamp(30px,4vw,46px)", letterSpacing: "-.02em", color: "#f4f6f8" }}>
          Selected Projects
        </h2>
        <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,.08)", marginBottom: 10 }} />
        <a href="https://github.com/Grevanur" target="_blank" rel="noopener noreferrer" style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#5a636d" }}>
          All repos ↗
        </a>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 24 }}>
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#0a0c0f",
              border: "1px solid rgba(255,255,255,.07)",
              padding: 30,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
              <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--accent)", border: "1px solid color-mix(in srgb, var(--accent) 35%, transparent)", padding: "4px 9px" }}>
                {p.tag}
              </span>
              <span style={{ fontFamily: mono, fontSize: 12, color: "#5a636d" }}>{p.year}</span>
            </div>
            <h3 style={{ margin: 0, fontFamily: space, fontSize: 22, fontWeight: 500, color: "#f4f6f8" }}>{p.name}</h3>
            <p style={{ margin: "14px 0 0", fontSize: 14, lineHeight: 1.65, color: "#a2a9b0" }}>{p.desc}</p>
            <div style={{ marginTop: 20, padding: 14, background: "color-mix(in srgb, var(--accent) 7%, transparent)", borderLeft: "2px solid var(--accent)" }}>
              <span style={{ fontSize: 13, color: "#c8ced4", lineHeight: 1.55 }}>{p.highlight}</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 22 }}>
              {p.stack.map((t) => (
                <span key={t} style={{ fontFamily: mono, fontSize: 10.5, color: "#7a828b", border: "1px solid rgba(255,255,255,.09)", padding: "4px 8px" }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ marginTop: 24, fontFamily: mono, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--accent)" }}>
              View on GitHub →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
