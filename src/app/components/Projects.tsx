"use client";

const projects = [
  {
    number: "01",
    name: "AI Cloud Threat Detection",
    description:
      "Adaptive threat detection backend with behavioral trust modeling and MITRE ATT&CK mapping. Processes distributed telemetry with real-time anomaly detection and automated severity classification.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    link: "https://github.com/Grevanur/AI-CloudThreatDetection",
    demo: "https://github.com/Grevanur/AI-CloudThreatDetection",
    tag: "Security",
    stat: ">95% accuracy",
    metric: "Reduced mean detection time ~40% vs rule-based baselines",
  },
  {
    number: "02",
    name: "AI DDoS Detection System",
    description:
      "ML-based intrusion detection system identifying DDoS attacks through real-time network traffic analysis and machine learning under adversarial conditions.",
    stack: ["Python", "scikit-learn", "Wireshark", "Linux"],
    link: "https://github.com/Grevanur/ai-ddos-detection-system",
    demo: "https://github.com/Grevanur/ai-ddos-detection-system",
    tag: "Machine Learning",
    stat: "Real-time",
    metric: "Maintained >92% F1-score under adversarial traffic conditions",
  },
  {
    number: "03",
    name: "Linux Packet Analyzer",
    description:
      "Low-level packet capture and protocol parsing tool in C for Linux. Captures raw network traffic at the socket level and dissects Ethernet, IP, TCP, and UDP headers.",
    stack: ["C", "libpcap", "Linux Sockets", "GDB"],
    link: "https://github.com/Grevanur/linux-packet-analyzer",
    demo: "https://github.com/Grevanur/linux-packet-analyzer",
    tag: "Systems",
    stat: "Kernel-level",
    metric: "Processes >10k packets/sec at <2% CPU overhead",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 carbon-bg">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] text-[#DC0000] tracking-[0.3em] uppercase mb-3 font-semibold">
              — Technical Build Sheet
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">Projects</h2>
          </div>
          <a
            href="https://github.com/Grevanur"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-xs text-[#555] hover:text-[#DC0000] transition-colors tracking-widest uppercase"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            All Repos
          </a>
        </div>

        <div className="racing-stripe-full mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="card-ferrari group relative flex flex-col bg-[#111] hover:bg-[#161616] transition-all duration-300"
            >
              {/* Screenshot preview area */}
              <div className="relative w-full h-36 bg-[#0d0d0d] border-b border-white/5 overflow-hidden flex items-center justify-center">
                <img
                  src={`https://opengraph.githubassets.com/1/Grevanur/${project.link.split("/").pop()}`}
                  alt={`${project.name} preview`}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
                {/* Fallback overlay always shown */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-black text-white/5 group-hover:text-[#DC0000]/15 transition-colors duration-300" style={{ fontFamily: "var(--font-bebas)" }}>
                      {project.number}
                    </div>
                    <div className="text-[9px] text-[#333] uppercase tracking-widest mt-1">{project.tag}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                {/* Tag + arrow */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-[#DC0000] tracking-widest uppercase bg-[#DC0000]/10 px-2 py-1">
                    {project.tag}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wide leading-snug">
                  {project.name}
                </h3>

                <p className="text-xs text-[#666] leading-relaxed mb-4">{project.description}</p>

                {/* Quantified metric */}
                <div className="flex items-start gap-2 mb-4 p-2.5 bg-[#DC0000]/5 border border-[#DC0000]/15">
                  <div className="w-1 h-1 rounded-full bg-[#DC0000] mt-1.5 shrink-0" />
                  <span className="text-[10px] text-[#DC0000]/80 leading-relaxed font-medium">{project.metric}</span>
                </div>

                {/* Telemetry stat */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DC0000]" />
                  <span className="text-[10px] text-[#DC0000] tracking-widest uppercase font-semibold">
                    {project.stat}
                  </span>
                </div>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-4 mb-4 flex-1 items-end">
                  <div className="flex flex-wrap gap-1.5 w-full">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] text-[#555] bg-white/[0.03] border border-white/[0.05] px-2 py-1 uppercase tracking-wider font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 border-t border-white/5 pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 border border-white/10 text-[#666] hover:border-white/25 hover:text-white text-[10px] uppercase tracking-widest font-bold transition-all duration-200"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#DC0000]/10 border border-[#DC0000]/30 text-[#DC0000] hover:bg-[#DC0000] hover:text-white text-[10px] uppercase tracking-widest font-bold transition-all duration-200"
                  >
                    View Demo ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
