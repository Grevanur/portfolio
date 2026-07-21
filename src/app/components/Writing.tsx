const mono = "var(--font-mono), monospace";
const space = "var(--font-space), sans-serif";

const posts = [
  {
    date: "Mar 27, 2026",
    tag: "AI · Security",
    title: "Building a Fully Local LLM-Powered Security Assistant Using RAG",
    summary: "Combining LLMs with retrieval-augmented generation to analyze system logs entirely on-device — no paid APIs, no data leaving the machine.",
    href: "https://medium.com/@gautam.revanur/building-a-fully-local-llm-powered-security-assistant-using-rag-no-apis-required-55d1e3b07502",
  },
  {
    date: "Mar 4, 2026",
    tag: "Cloud · Security",
    title: "Building an AI-Driven Cloud Threat Detection Platform",
    summary: "An adaptive detection platform that catches subtle attack signals traditional rule-based systems miss across millions of daily cloud events.",
    href: "https://medium.com/@gautam.revanur/building-an-ai-driven-cloud-threat-detection-platform-e82b8d6d28e0",
  },
  {
    date: "Mar 9, 2026",
    tag: "Systems · C",
    title: "Building a Linux Network Packet Analyzer in C",
    summary: "Capturing and parsing raw network traffic at the socket level in C — Ethernet, IP, TCP, and UDP dissection from first principles.",
    href: "https://medium.com/@gautam.revanur/building-a-linux-network-packet-analyzer-in-c-a-systems-programming-journey-95e651994cf1",
  },
];

export default function Writing() {
  return (
    <section id="writing" style={{ position: "relative", zIndex: 1, maxWidth: 1160, margin: "0 auto", padding: "80px 28px 40px" }}>
      <div data-reveal style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 56 }}>
        <span style={{ fontFamily: mono, fontSize: 12, color: "var(--accent)", letterSpacing: ".1em" }}>04</span>
        <h2 style={{ margin: 0, fontFamily: space, fontWeight: 500, fontSize: "clamp(30px,4vw,46px)", letterSpacing: "-.02em", color: "#f4f6f8" }}>
          Writing
        </h2>
        <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,.08)", marginBottom: 10 }} />
        <a href="https://medium.com/@gautam.revanur" target="_blank" rel="noopener noreferrer" style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#5a636d" }}>
          All articles ↗
        </a>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {posts.map((p, i) => (
          <a
            key={p.href}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="write-row"
            style={{
              display: "grid",
              gridTemplateColumns: "150px 1fr auto",
              gap: 28,
              alignItems: "center",
              padding: "26px 4px",
              borderTop: "1px solid rgba(255,255,255,.08)",
              borderBottom: i === posts.length - 1 ? "1px solid rgba(255,255,255,.08)" : undefined,
            }}
          >
            <div style={{ fontFamily: mono, fontSize: 11, color: "#5a636d" }}>
              {p.date}
              <br />
              <span style={{ color: "var(--accent)" }}>{p.tag}</span>
            </div>
            <div>
              <h3 style={{ margin: 0, fontFamily: space, fontSize: 19, fontWeight: 500, color: "#e6e9ec", lineHeight: 1.35 }}>{p.title}</h3>
              <p style={{ margin: "8px 0 0", fontSize: 13.5, color: "#8a9099", lineHeight: 1.6 }}>{p.summary}</p>
            </div>
            <span className="write-cta" style={{ fontFamily: mono, fontSize: 11, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--accent)" }}>
              Read →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
