const mono = "var(--font-mono), monospace";
const space = "var(--font-space), sans-serif";

const groups = [
  { title: "AI & LLM", items: ["RAG Pipelines", "LangChain", "FAISS", "LLM Integration", "Prompt Engineering", "AI Governance", "Anthropic Claude"] },
  { title: "IT Risk & GRC", items: ["Risk Assessment", "Risk Register", "Risk Treatment", "Third-Party Risk", "BCP/DR", "Audit Support", "Regulatory Compliance"] },
  { title: "Frameworks", items: ["NIST CSF", "ISO 27001", "SEBI IT Governance", "COBIT", "MITRE ATT&CK", "OWASP Top 10"] },
  { title: "Tools & Programming", items: ["Python", "FastAPI", "Docker", "Splunk", "ELK Stack", "Git", "Java", "SQL", "Bash"] },
];

const certs = [
  "CompTIA Security+",
  "Google Cybersecurity Professional",
  "ERM — IRM Global Level 1",
  "Anthropic Claude — AI Fluency",
  "CodePath Scholar 2026",
];

export default function Skills() {
  return (
    <section id="skills" style={{ position: "relative", zIndex: 1, maxWidth: 1160, margin: "0 auto", padding: "80px 28px 40px" }}>
      <div data-reveal style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 56 }}>
        <span style={{ fontFamily: mono, fontSize: 12, color: "var(--accent)", letterSpacing: ".1em" }}>03</span>
        <h2 style={{ margin: 0, fontFamily: space, fontWeight: 500, fontSize: "clamp(30px,4vw,46px)", letterSpacing: "-.02em", color: "#f4f6f8" }}>
          Capabilities
        </h2>
        <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,.08)", marginBottom: 10 }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: 1,
          background: "rgba(255,255,255,.06)",
          border: "1px solid rgba(255,255,255,.06)",
        }}
      >
        {groups.map((g) => (
          <div key={g.title} data-reveal style={{ background: "#0a0c0f", padding: 28 }}>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 20 }}>
              {g.title}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {g.items.map((it) => (
                <span key={it} style={{ fontSize: 13, color: "#a2a9b0", border: "1px solid rgba(255,255,255,.09)", padding: "6px 11px" }}>
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div data-reveal style={{ marginTop: 40 }}>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "#8a9099", marginBottom: 20 }}>
          Certifications
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {certs.map((c) => (
            <span
              key={c}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                fontFamily: mono,
                fontSize: 12,
                color: "#c8ced4",
                background: "#0a0c0f",
                border: "1px solid rgba(255,255,255,.09)",
                padding: "11px 16px",
              }}
            >
              <span style={{ width: 6, height: 6, background: "var(--accent)" }} />
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
