import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gowtham Revanur — Security Engineer & Embedded Systems Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0d0d",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Red top bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: "#DC0000" }} />

        {/* Scuderia tag */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <div style={{ background: "#DC0000", padding: "6px 14px" }}>
            <span style={{ color: "white", fontSize: 14, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Scuderia
            </span>
          </div>
          <span style={{ color: "#555", fontSize: 13, letterSpacing: "0.3em", textTransform: "uppercase" }}>
            Atlanta, GA · Georgia State University
          </span>
        </div>

        {/* Name */}
        <div style={{ fontSize: 96, fontWeight: 900, color: "white", lineHeight: 1, letterSpacing: "0.03em", textTransform: "uppercase" }}>
          Gowtham
        </div>
        <div style={{ fontSize: 96, fontWeight: 900, color: "#DC0000", lineHeight: 1, letterSpacing: "0.03em", textTransform: "uppercase", marginBottom: 40 }}>
          Revanur
        </div>

        {/* Stripe */}
        <div style={{ display: "flex", marginBottom: 40 }}>
          <div style={{ height: 3, width: 200, background: "#DC0000" }} />
          <div style={{ height: 3, width: 60, background: "#FFF200" }} />
        </div>

        {/* Tagline */}
        <div style={{ color: "#888", fontSize: 22, letterSpacing: "0.05em" }}>
          Security Engineering · Embedded Systems · Real-Time Detection
        </div>
      </div>
    ),
    { ...size }
  );
}
