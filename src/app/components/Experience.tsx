const mono = "var(--font-mono), monospace";
const space = "var(--font-space), sans-serif";

type Job = {
  dates: string;
  current?: boolean;
  role: string;
  org: string;
  location: string;
  bullets: string[];
};

const jobs: Job[] = [
  {
    dates: "May 2026 — Present",
    current: true,
    role: "IT Risk Intern — Risk Management",
    org: "Central Depository Services (India) Ltd · CDSL",
    location: "Mumbai, MH",
    bullets: [
      "Spearheading AI Governance policy drafting for one of India's first comprehensive AI governance frameworks in financial markets — covering model risk, ethical AI use, data integrity, and regulatory alignment.",
      "Partnering with SEBI on regulatory compliance; translating circulars into actionable internal controls for a Market Infrastructure Institution safeguarding 180M+ demat accounts.",
      "Trained HR & compliance teams to use Microsoft Copilot for onboarding and regulatory drafting; designed prompting workflows adopted across departments in a regulated environment.",
      "Executing enterprise-wide IT risk assessments against ISO 27001, NIST CSF, and SEBI frameworks; maintaining the IT Risk Register, BCP/DR reviews, vendor risk assessments, and audit-readiness documentation.",
    ],
  },
  {
    dates: "Jan 2026 — Present",
    role: "Graduate Research Intern — Cybersecurity Engineering",
    org: "Georgia State University",
    location: "Atlanta, GA",
    bullets: [
      "Built a cloud-native threat detection platform ingesting logs from network, endpoint, and cloud systems; developed AI-driven anomaly detection models mapped to NIST CSF and MITRE ATT&CK with automated alert triage.",
    ],
  },
  {
    dates: "Jun 2024 — Sep 2024",
    role: "Java Backend Intern — Application Security",
    org: "TechMojo Solutions Pvt Ltd",
    location: "Remote",
    bullets: [
      "Developed secure REST APIs (Spring Boot, Spring Security) with RBAC; mitigated OWASP Top 10 vulnerabilities and built audit-ready logging infrastructure supporting compliance and incident response.",
    ],
  },
];

const education = [
  {
    period: "Education · 2025—2027",
    degree: "M.S. Computer Science",
    school: "Georgia State University — Atlanta, GA · GPA 3.90",
    detail: "Cybersecurity · Network Security · Cryptography · Cloud Computing · Risk Management",
  },
  {
    period: "Education · 2021—2025",
    degree: "B.Tech Computer Science & Engineering",
    school: "Mahindra University — Hyderabad, India",
    detail: "Foundations in systems, algorithms, and software engineering.",
  },
];

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ position: "relative", paddingLeft: 22, fontSize: 14.5, lineHeight: 1.65, color: "#a2a9b0" }}>
      <span style={{ position: "absolute", left: 0, top: 9, width: 6, height: 6, background: "var(--accent)" }} />
      {children}
    </li>
  );
}

export default function Experience() {
  return (
    <section id="work" style={{ position: "relative", zIndex: 1, maxWidth: 1160, margin: "0 auto", padding: "110px 28px 40px" }}>
      <div data-reveal style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 56 }}>
        <span style={{ fontFamily: mono, fontSize: 12, color: "var(--accent)", letterSpacing: ".1em" }}>01</span>
        <h2 style={{ margin: 0, fontFamily: space, fontWeight: 500, fontSize: "clamp(30px,4vw,46px)", letterSpacing: "-.02em", color: "#f4f6f8" }}>
          Experience
        </h2>
        <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,.08)", marginBottom: 10 }} />
      </div>

      {jobs.map((job, idx) => (
        <div
          key={job.role}
          data-reveal
          className="exp-row"
          style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: 36,
            padding: "32px 0",
            borderTop: "1px solid rgba(255,255,255,.08)",
            borderBottom: idx === jobs.length - 1 ? "1px solid rgba(255,255,255,.08)" : undefined,
          }}
        >
          <div>
            <div style={{ fontFamily: mono, fontSize: 12, color: "#8a9099", letterSpacing: ".06em" }}>{job.dates}</div>
            {job.current && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  marginTop: 12,
                  fontFamily: mono,
                  fontSize: 10,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  border: "1px solid color-mix(in srgb, var(--accent) 40%, transparent)",
                  padding: "4px 9px",
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", animation: "obPulse 2s ease-in-out infinite" }} />
                Current
              </div>
            )}
          </div>
          <div>
            <h3 style={{ margin: 0, fontFamily: space, fontSize: 23, fontWeight: 500, color: "#f4f6f8" }}>{job.role}</h3>
            <div style={{ marginTop: 5, fontSize: 14, color: "var(--accent)" }}>
              {job.org} <span style={{ color: "#5a636d" }}>— {job.location}</span>
            </div>
            <ul style={{ margin: "20px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 13 }}>
              {job.bullets.map((b, i) => (
                <Bullet key={i}>{b}</Bullet>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 1,
          marginTop: 40,
          background: "rgba(255,255,255,.06)",
          border: "1px solid rgba(255,255,255,.06)",
        }}
      >
        {education.map((e) => (
          <div key={e.degree} data-reveal style={{ background: "#0a0c0f", padding: 26 }}>
            <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>
              {e.period}
            </div>
            <h4 style={{ margin: 0, fontFamily: space, fontSize: 18, fontWeight: 500, color: "#f4f6f8" }}>{e.degree}</h4>
            <div style={{ marginTop: 5, fontSize: 13.5, color: "#8a9099" }}>{e.school}</div>
            <div style={{ marginTop: 12, fontSize: 12.5, color: "#6b7178", lineHeight: 1.6 }}>{e.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
