"use client";

import { useEffect, useRef } from "react";

const mono = "var(--font-mono), monospace";
const space = "var(--font-space), sans-serif";

const STAGES = [
  {
    rail: "Observe",
    eyebrow: "01 · Map the surface",
    heading: "See what's actually running.",
    body: "Inventory the models, data flows, and third-party AI in use before governing any of it — the step most programs skip.",
  },
  {
    rail: "Assess",
    eyebrow: "02 · Weigh the risk",
    heading: "Score it against a framework, not a feeling.",
    body: "NIST CSF, ISO 27001, SEBI IT Governance, COBIT — every system measured the same way, so the ranking survives an audit.",
  },
  {
    rail: "Govern",
    eyebrow: "03 · Write the controls",
    heading: "Turn policy into something people follow.",
    body: "Translate circulars and frameworks into playbooks and prompting workflows a compliance team will actually use.",
  },
  {
    rail: "Prove",
    eyebrow: "04 · Show the evidence",
    heading: "Leave a trail an auditor can walk.",
    body: "Continuous monitoring and audit-ready documentation, so \"trust us\" is never the answer to \"how do you know.\"",
  },
] as const;

/** Scroll-driven story: sticky viewport + canvas network that reorganizes around
 *  whichever stage is active. Falls back to a plain stacked layout via CSS when
 *  prefers-reduced-motion is set (see .journey rules in globals.css). */
export default function Journey() {
  const wrapRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const railRefs = useRef<Array<HTMLDivElement | null>>([]);
  const barRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas || reduce) return;

    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let seed = 42;
    const rand = () => {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return (seed % 1000) / 1000;
    };
    const nodes = Array.from({ length: 48 }, (_, i) => ({
      cluster: i % STAGES.length,
      x: rand(),
      y: rand(),
      r: 1.4 + rand() * 1.6,
      phase: rand() * Math.PI * 2,
    }));

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#6fd6e8";

    let progress = 0;
    let activeIndex = 0;
    let visible = false;
    let raf = 0;

    const draw = (t: number) => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const rot = (progress - 0.5) * 0.12;
      const cx = width / 2;
      const cy = height / 2;
      const cos = Math.cos(rot);
      const sin = Math.sin(rot);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          if (a.cluster !== b.cluster) continue;
          const ax = a.x * width;
          const ay = a.y * height;
          const bx = b.x * width;
          const by = b.y * height;
          const d = Math.hypot(ax - bx, ay - by);
          if (d > Math.min(width, height) * 0.16) continue;
          const active = a.cluster === activeIndex;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.strokeStyle = active ? accent : "rgba(255,255,255,.35)";
          ctx.globalAlpha = active ? 0.22 : 0.05;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;

      for (const n of nodes) {
        const active = n.cluster === activeIndex;
        const px = n.x * width;
        const py = n.y * height;
        const dx = px - cx;
        const dy = py - cy;
        const rx = cx + dx * cos - dy * sin;
        const ry = cy + dx * sin + dy * cos;
        const twinkle = 0.55 + 0.45 * Math.sin(t / 900 + n.phase);
        ctx.beginPath();
        ctx.arc(rx, ry, n.r * (active ? 1.6 : 1), 0, Math.PI * 2);
        ctx.fillStyle = active ? accent : "rgba(255,255,255,.35)";
        ctx.globalAlpha = active ? 0.5 + 0.4 * twinkle : 0.12 * twinkle;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const tick = (t: number) => {
      raf = 0;
      if (!visible) return;
      draw(t);
      raf = requestAnimationFrame(tick);
    };

    const seg = 1 / STAGES.length;

    const updateProgress = () => {
      const r = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height - vh;
      progress = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      activeIndex = Math.min(STAGES.length - 1, Math.floor(progress / seg));

      STAGES.forEach((_, i) => {
        const panel = panelRefs.current[i];
        if (!panel) return;
        const start = i * seg;
        const end = start + seg;
        const mid = (start + end) / 2;
        const dist = Math.abs(progress - mid) / (seg * 0.62);
        const opacity = Math.max(0, 1 - dist);
        panel.style.opacity = String(opacity);
        panel.style.transform = `translateY(${(1 - opacity) * 22}px)`;
        panel.style.pointerEvents = opacity > 0.5 ? "auto" : "none";
      });

      railRefs.current.forEach((el, i) => {
        if (!el) return;
        el.style.color = i === activeIndex ? "var(--accent)" : i < activeIndex ? "#8a9099" : "#4a525b";
      });
      barRefs.current.forEach((el, i) => {
        if (!el) return;
        const fill = i < activeIndex ? 100 : i === activeIndex ? Math.min(100, ((progress - i * seg) / seg) * 100) : 0;
        el.style.height = fill + "%";
      });

      if (!raf && visible) raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !raf) raf = requestAnimationFrame(tick);
      },
      { threshold: 0 }
    );
    io.observe(wrap);

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="loop" ref={wrapRef} aria-label="How I approach AI governance" className="journey">
      <div className="jview">
        <canvas ref={canvasRef} aria-hidden="true" />

        <div style={{ position: "absolute", left: 0, right: 0, top: 40, textAlign: "center", zIndex: 2 }}>
          <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: "#5a636d" }}>
            The Governed Intelligence Loop
          </span>
        </div>

        {STAGES.map((s, i) => (
          <div
            key={s.rail}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            className="jpanel"
          >
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>
              {s.eyebrow}
            </div>
            <h3 style={{ margin: 0, fontFamily: space, fontWeight: 500, fontSize: "clamp(28px,4vw,50px)", lineHeight: 1.1, letterSpacing: "-.02em", color: "#f4f6f8" }}>
              {s.heading}
            </h3>
            <p style={{ margin: "18px 0 0", fontSize: 15.5, lineHeight: 1.7, color: "#a2a9b0", maxWidth: "54ch" }}>{s.body}</p>
          </div>
        ))}

        <div className="jrail">
          {STAGES.map((s, i) => (
            <div key={s.rail} style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <div
                ref={(el) => {
                  railRefs.current[i] = el;
                }}
                className="lbl"
              >
                {s.rail}
              </div>
              {i < STAGES.length - 1 && (
                <div className="bar">
                  <i
                    ref={(el) => {
                      barRefs.current[i] = el;
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
