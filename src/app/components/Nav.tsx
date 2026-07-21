"use client";

import { useEffect, useState } from "react";

const mono = "var(--font-mono), monospace";
const links = [
  ["Work", "#work"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Writing", "#writing"],
  ["Contact", "#contact"],
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setOpen(false);
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll, { capture: true } as EventListenerOptions);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(8,9,11,.88)" : "rgba(8,9,11,.72)",
        backdropFilter: scrolled ? "blur(18px) saturate(150%)" : "blur(14px)",
        WebkitBackdropFilter: scrolled ? "blur(18px) saturate(150%)" : "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,.06)",
        boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,.35)" : "none",
        transition: "background .4s ease, box-shadow .4s ease, backdrop-filter .4s ease",
      }}
    >
      <div
        style={{
          height: 2,
          background: "linear-gradient(90deg, transparent, var(--accent) 25%, var(--accent) 75%, transparent)",
        }}
      />
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "16px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              width: 30,
              height: 30,
              border: "1px solid var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent)",
              fontFamily: mono,
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: ".5px",
            }}
          >
            GR
          </span>
          <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "#8a9099" }}>
            Gowtham Revanur
          </span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          <div
            className="desknav"
            style={{ alignItems: "center", gap: 30, fontFamily: mono, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase" }}
          >
            {links.map(([label, href]) => (
              <a key={href} href={href} className="navlink" style={{ color: "#8a9099" }}>
                {label}
              </a>
            ))}
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: mono,
              fontSize: 11,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "var(--accent)",
              border: "1px solid color-mix(in srgb, var(--accent) 45%, transparent)",
              padding: "8px 14px",
            }}
          >
            Résumé ↓
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="mobnav"
            style={{ flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4 }}
          >
            <span style={{ width: 22, height: 1.5, background: "#e6e9ec", display: "block" }} />
            <span style={{ width: 22, height: 1.5, background: "#e6e9ec", display: "block" }} />
            <span style={{ width: 22, height: 1.5, background: "#e6e9ec", display: "block" }} />
          </button>
        </div>
      </div>

      {open && (
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.06)",
            padding: "8px 28px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            fontFamily: mono,
            fontSize: 13,
            letterSpacing: ".16em",
            textTransform: "uppercase",
          }}
        >
          {links.map(([label, href], i) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                color: "#c5cbd1",
                padding: "12px 0",
                borderBottom: i < links.length - 1 ? "1px solid rgba(255,255,255,.05)" : "none",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
