const mono = "var(--font-mono), monospace";

const items = [
  "NIST CSF", "ISO 27001", "MITRE ATT&CK", "SEBI IT Governance",
  "COBIT", "OWASP Top 10", "AI Governance", "Model Risk", "Zero Trust",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(255,255,255,.06)",
        borderBottom: "1px solid rgba(255,255,255,.06)",
        padding: "16px 0",
        overflow: "hidden",
        background: "#0a0c0f",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "obMarquee 34s linear infinite",
          fontFamily: mono,
          fontSize: 12,
          letterSpacing: ".24em",
          textTransform: "uppercase",
          color: "#5a636d",
        }}
      >
        {row.map((it, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
            <span style={{ padding: "0 28px" }}>{it}</span>
            <span style={{ color: "var(--accent)" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
