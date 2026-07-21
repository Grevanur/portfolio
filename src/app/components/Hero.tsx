const mono = "var(--font-mono), monospace";
const space = "var(--font-space), sans-serif";

const stats = [
  { label: "GPA", value: "3.90", sub: "/4.00", subInline: true },
  { label: "Recognition", value: "Hagan Scholar", sub: "1 of 20 globally" },
  { label: "Scope", value: "180M+", sub: "demat accounts safeguarded" },
  { label: "Certified", value: "Security+", sub: "+ 4 more" },
];

export default function Hero() {
  return (
    <header
      id="top"
      style={{ position: "relative", zIndex: 1, maxWidth: 1160, margin: "0 auto", padding: "180px 28px 90px" }}
    >
      <div
        style={{
          position: "absolute",
          top: 60,
          right: -120,
          width: 520,
          height: 520,
          background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 16%, transparent), transparent 62%)",
          filter: "blur(20px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          className="obf obf1"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 34,
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: ".28em",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", animation: "obPulse 2.4s ease-in-out infinite" }} />
          Open to full-time roles · May 2027
          <span style={{ color: "#4a525b" }}>/</span>
          <span style={{ color: "#6b7178" }}>Atlanta, GA</span>
        </div>

        <h1
          className="obf obf2"
          style={{ margin: 0, fontFamily: space, fontWeight: 500, fontSize: "clamp(48px,8.5vw,110px)", lineHeight: 0.94, letterSpacing: "-.03em", color: "#f4f6f8" }}
        >
          Gowtham
          <br />
          <span style={{ color: "#7a828b" }}>Revanur</span>
        </h1>

        <p
          className="obf obf3"
          style={{ margin: "30px 0 0", fontFamily: space, fontSize: "clamp(19px,2.6vw,30px)", fontWeight: 400, lineHeight: 1.35, letterSpacing: "-.01em", color: "#c8ced4", maxWidth: 720 }}
        >
          AI Governance &amp; IT Risk. I build the controls that let organizations{" "}
          <span style={{ color: "var(--accent)" }}>trust</span> the intelligence they deploy — from
          financial-market AI policy to source-verifiable LLM systems.
        </p>

        <p className="obf obf3" style={{ margin: "22px 0 0", fontSize: 15, lineHeight: 1.7, color: "#8a9099", maxWidth: 640 }}>
          M.S. Computer Science at Georgia State University · Hagan Scholar · drafting one of India&apos;s
          first comprehensive AI governance frameworks for the financial markets at CDSL.
        </p>

        <div className="obf obf4" style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 38 }}>
          <a href="#work" style={{ fontFamily: mono, fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", background: "var(--accent)", color: "#08090b", padding: "14px 24px", fontWeight: 500 }}>
            View Work →
          </a>
          <a href="#contact" style={{ fontFamily: mono, fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#c5cbd1", border: "1px solid rgba(255,255,255,.16)", padding: "14px 24px" }}>
            Get in Touch
          </a>
        </div>

        <div
          className="obf obf5"
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, marginTop: 56, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.06)" }}
        >
          {stats.map((s) => (
            <div key={s.label} style={{ background: "#0a0c0f", padding: "20px 22px" }}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 8 }}>
                {s.label}
              </div>
              <div style={{ fontFamily: space, fontSize: 22, color: "#e6e9ec" }}>
                {s.value}
                {s.subInline && <span style={{ color: "#5a636d", fontSize: 14 }}>{s.sub}</span>}
              </div>
              {!s.subInline && <div style={{ fontSize: 11, color: "#5a636d", marginTop: 3 }}>{s.sub}</div>}
            </div>
          ))}
        </div>

        <a href="#loop" className="obf obf5" style={{ display: "flex", justifyContent: "center", marginTop: 64 }} aria-label="Scroll to see how I approach AI governance">
          <span className="scroll-cue">
            <span className="line" />
            <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: "#5a636d" }}>Scroll</span>
          </span>
        </a>
      </div>
    </header>
  );
}
