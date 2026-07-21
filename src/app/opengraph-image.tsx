import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gowtham Revanur — AI Governance & IT Risk";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#6fd6e8";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#08090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* accent top line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: ACCENT }} />

        {/* status tag */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 34 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, border: `1px solid ${ACCENT}`, padding: "6px 14px" }}>
            <div style={{ width: 10, height: 10, borderRadius: 5, background: ACCENT }} />
            <span style={{ color: ACCENT, fontSize: 14, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>
              Open to roles · May 2027
            </span>
          </div>
          <span style={{ color: "#6b7178", fontSize: 13, letterSpacing: "0.28em", textTransform: "uppercase" }}>
            Atlanta, GA · Georgia State University
          </span>
        </div>

        {/* name */}
        <div style={{ fontSize: 92, fontWeight: 600, color: "#f4f6f8", lineHeight: 1, letterSpacing: "-0.02em", display: "flex" }}>
          Gowtham
        </div>
        <div style={{ fontSize: 92, fontWeight: 600, color: "#7a828b", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: 36, display: "flex" }}>
          Revanur
        </div>

        {/* accent divider */}
        <div style={{ display: "flex", marginBottom: 30 }}>
          <div style={{ height: 2, width: 220, background: ACCENT }} />
        </div>

        {/* tagline */}
        <div style={{ color: "#c8ced4", fontSize: 30, letterSpacing: "-0.01em", display: "flex" }}>
          AI Governance &amp; IT Risk
        </div>
        <div style={{ color: "#8a9099", fontSize: 20, letterSpacing: "0.02em", marginTop: 14, display: "flex" }}>
          GRC · LLM Security · Trustworthy AI · Hagan Scholar
        </div>
      </div>
    ),
    { ...size }
  );
}
