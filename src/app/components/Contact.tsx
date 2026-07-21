import Image from "next/image";

const mono = "var(--font-mono), monospace";
const space = "var(--font-space), sans-serif";

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#8a9099">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#8a9099">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8a9099" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8a9099" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293a.75.75 0 01-.933.253A12.05 12.05 0 016.75 12.06a.75.75 0 01.253-.933l1.293-.97c.362-.271.527-.734.417-1.173L7.606 4.56c-.125-.501-.575-.852-1.091-.852H5.25A2.25 2.25 0 003 6a.75.75 0 000 .75z" />
  </svg>
);

const links = [
  { label: "GitHub", value: "@Grevanur", href: "https://github.com/Grevanur", icon: <GitHubIcon />, external: true, cue: "arrow" },
  { label: "LinkedIn", value: "in/gowthamrevanur", href: "https://www.linkedin.com/in/gowthamrevanur/", icon: <LinkedInIcon />, external: true, cue: "arrow" },
  { label: "Email", value: "gautam.revanur@gmail.com", href: "mailto:gautam.revanur@gmail.com", icon: <MailIcon />, cue: "mail" },
  { label: "Phone", value: "+1 469 400 2247", href: "tel:+14694002247", icon: <PhoneIcon /> },
];

const hobbies = [
  { title: "Basketball", sub: "LeBron James" },
  { title: "Tennis & Pickleball", sub: "Court time year-round" },
  { title: "Movies", sub: "Thriller genre" },
  { title: "Formula 1", sub: "Forza Ferrari" },
  { title: "Community", sub: "Ocean cleanup · Mid-Day Meals volunteer" },
];

export default function Contact() {
  return (
    <section id="contact" style={{ position: "relative", zIndex: 1, maxWidth: 1160, margin: "0 auto", padding: "80px 28px 60px" }}>
      <div data-reveal style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 56 }}>
        <span style={{ fontFamily: mono, fontSize: 12, color: "var(--accent)", letterSpacing: ".1em" }}>05</span>
        <h2 style={{ margin: 0, fontFamily: space, fontWeight: 500, fontSize: "clamp(30px,4vw,46px)", letterSpacing: "-.02em", color: "#f4f6f8" }}>
          Get in Touch
        </h2>
        <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,.08)", marginBottom: 10 }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "start" }}>
        <div>
          <p style={{ margin: "0 0 28px", fontSize: 15, lineHeight: 1.7, color: "#a2a9b0", maxWidth: 440 }}>
            Open to full-time roles in AI governance, IT risk &amp; GRC, and security engineering starting
            May 2027. Always happy to talk about trustworthy AI and the controls behind it.
          </p>
          <div data-reveal style={{ display: "flex", flexDirection: "column", gap: 2, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.06)" }}>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="spot"
                style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 22px", background: "#0a0c0f" }}
              >
                {l.icon}
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: mono, fontSize: 9.5, letterSpacing: ".2em", textTransform: "uppercase", color: "#5a636d" }}>{l.label}</div>
                  <div style={{ fontSize: 13.5, color: "#c8ced4", marginTop: 2 }}>{l.value}</div>
                </div>
                {l.cue === "arrow" && <span style={{ color: "#4a525b" }}>↗</span>}
                {l.cue === "mail" && <span style={{ color: "var(--accent)", fontFamily: mono, fontSize: 10, textTransform: "uppercase", letterSpacing: ".1em" }}>Mail</span>}
              </a>
            ))}
          </div>
        </div>

        <div data-reveal style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: -8, left: -8, width: 22, height: 22, borderTop: "1px solid var(--accent)", borderLeft: "1px solid var(--accent)" }} />
            <div style={{ position: "absolute", top: -8, right: -8, width: 22, height: 22, borderTop: "1px solid var(--accent)", borderRight: "1px solid var(--accent)" }} />
            <div style={{ position: "absolute", bottom: -8, left: -8, width: 22, height: 22, borderBottom: "1px solid var(--accent)", borderLeft: "1px solid var(--accent)" }} />
            <div style={{ position: "absolute", bottom: -8, right: -8, width: 22, height: 22, borderBottom: "1px solid var(--accent)", borderRight: "1px solid var(--accent)" }} />
            <Image
              src="/dp.jpeg"
              alt="Gowtham Revanur"
              width={220}
              height={220}
              style={{ width: 220, height: 220, objectFit: "cover", filter: "grayscale(1) contrast(1.05)" }}
            />
          </div>
          <div style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: ".16em", textTransform: "uppercase", color: "#5a636d", textAlign: "center" }}>
            Gowtham Revanur · GSU
          </div>
        </div>
      </div>

      <div data-reveal style={{ marginTop: 64, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,.08)" }}>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "#8a9099", marginBottom: 24 }}>
          Off the Clock
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 1, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.06)" }}>
          {hobbies.map((h) => (
            <div key={h.title} style={{ background: "#0a0c0f", padding: 22 }}>
              <div style={{ fontFamily: space, fontSize: 16, color: "#e6e9ec" }}>{h.title}</div>
              <div style={{ fontSize: 12, color: "#5a636d", marginTop: 4 }}>{h.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
