const projects = [
  {
    name: "AI Cloud Threat Detection",
    description:
      "Adaptive threat detection backend with behavioral trust modeling and MITRE ATT&CK mapping. Processes distributed telemetry with real-time anomaly detection, automated triage, and severity classification.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    link: "https://github.com/Grevanur/AI-CloudThreatDetection",
    tag: "Security",
  },
  {
    name: "AI DDoS Detection System",
    description:
      "ML-based intrusion detection system that identifies DDoS attacks through real-time network traffic analysis and machine learning — achieving high accuracy under adversarial conditions.",
    stack: ["Python", "scikit-learn", "Wireshark", "Linux"],
    link: "https://github.com/Grevanur/ai-ddos-detection-system",
    tag: "Machine Learning",
  },
  {
    name: "Linux Packet Analyzer",
    description:
      "Low-level packet capture and protocol parsing tool written in C for Linux. Captures raw network traffic at the socket level and dissects Ethernet, IP, TCP, and UDP headers.",
    stack: ["C", "libpcap", "Linux Sockets", "GDB"],
    link: "https://github.com/Grevanur/linux-packet-analyzer",
    tag: "Systems",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-sm text-blue-400 tracking-widest uppercase mb-3">Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col p-6 bg-white/[0.03] border border-white/[0.07] rounded-xl hover:border-blue-500/40 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full">
                  {project.tag}
                </span>
                <svg
                  className="w-4 h-4 text-[#555] group-hover:text-blue-400 transition-colors duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M7 7h10v10"
                  />
                </svg>
              </div>

              <h3 className="text-base font-semibold text-white mb-3 leading-snug">
                {project.name}
              </h3>

              <p className="text-sm text-[#888] leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-[#666] bg-white/[0.04] border border-white/[0.06] px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/Grevanur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-white transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            See all repos on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
