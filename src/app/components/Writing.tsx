const posts = [
  {
    title: "Building a Fully Local LLM-Powered Security Assistant Using RAG (No APIs Required)",
    date: "Mar 27, 2026",
    summary:
      "How I combined LLMs with Retrieval-Augmented Generation to build an AI security assistant that analyzes system logs entirely on-device — no paid APIs, no data leaving the machine.",
    href: "https://medium.com/@gautam.revanur/building-a-fully-local-llm-powered-security-assistant-using-rag-no-apis-required-55d1e3b07502",
    tag: "AI · Security",
  },
  {
    title: "Building an AI-Driven Cloud Threat Detection Platform",
    date: "Mar 4, 2026",
    summary:
      "Modern cloud environments generate millions of security events daily. How I built an adaptive detection platform that catches subtle attack signals that traditional rule-based systems miss.",
    href: "https://medium.com/@gautam.revanur/building-an-ai-driven-cloud-threat-detection-platform-e82b8d6d28e0",
    tag: "Cloud · Security",
  },
  {
    title: "Building a Linux Network Packet Analyzer in C: A Systems Programming Journey",
    date: "Mar 9, 2026",
    summary:
      "A deep dive into capturing and parsing raw network traffic at the socket level in C — covering Ethernet, IP, TCP, and UDP dissection from first principles on Linux.",
    href: "https://medium.com/@gautam.revanur/building-a-linux-network-packet-analyzer-in-c-a-systems-programming-journey-95e651994cf1",
    tag: "Systems · C",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="px-6 py-24 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] text-[#DC0000] tracking-[0.3em] uppercase mb-3 font-semibold">
              — Debrief
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">Writing</h2>
          </div>
          <a
            href="https://medium.com/@gautam.revanur"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-[#555] hover:text-[#DC0000] transition-colors tracking-widest uppercase"
          >
            All Articles ↗
          </a>
        </div>

        <div className="racing-stripe-full mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-6 bg-[#111] hover:bg-[#161616] transition-all duration-300 hover:border-l-2 hover:border-l-[#DC0000]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-[#DC0000] tracking-widest uppercase bg-[#DC0000]/10 px-2 py-1">
                  {post.tag}
                </span>
                <span className="text-[10px] text-[#444] tracking-widest uppercase">{post.date}</span>
              </div>

              <h3 className="text-sm font-bold text-white mb-3 leading-snug group-hover:text-[#f0f0f0] transition-colors">
                {post.title}
              </h3>

              <p className="text-xs text-[#666] leading-relaxed flex-1 mb-5">{post.summary}</p>

              <div className="flex items-center gap-2 text-[#DC0000] group-hover:gap-3 transition-all duration-200">
                <span className="text-[10px] uppercase tracking-widest font-bold">Read on Medium</span>
                <span className="text-sm">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
