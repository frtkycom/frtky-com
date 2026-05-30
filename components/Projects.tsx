const projects = [
  {
    title: "NPS Program Management",
    category: "Customer Experience",
    description:
      "Managed recurring NPS programs, analyzed customer feedback, identified experience gaps and shared actionable insights with business stakeholders.",
    impact: "Experience insights",
    tags: ["NPS", "CX", "Feedback Analysis"],
  },
  {
    title: "SLA Analytics & Pareto Studies",
    category: "Operational Performance",
    description:
      "Built SLA-focused analysis models to identify long-running tickets, waiting statuses, bottlenecks and high-impact operational problem areas.",
    impact: "Bottleneck visibility",
    tags: ["SLA", "Pareto", "Power BI"],
  },
  {
    title: "AI First Update Assessment",
    category: "AI Quality Evaluation",
    description:
      "Designed an AI-supported quality evaluation approach for first customer updates by checking whether responses include diagnosis, action and roadmap clarity.",
    impact: "Quality scoring",
    tags: ["AI", "LLM", "Ticket Quality"],
  },
  {
    title: "Process Excellence & Documentation",
    category: "Process Improvement",
    description:
      "Mapped operational processes, simplified workflows, documented standards and supported continuous improvement initiatives across support operations.",
    impact: "Process clarity",
    tags: ["Process", "Documentation", "Improvement"],
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-8 py-24 text-white">
      <div className="glow-bg" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-violet-300">
          Selected Work
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Projects focused on quality, data and customer experience.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
          A selection of initiatives combining operational quality, customer
          insights, SLA performance analysis and AI-supported evaluation.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/[0.07]"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-200">
                  {project.category}
                </span>

                <span className="text-sm text-zinc-500">
                  {project.impact}
                </span>
              </div>

              <h2 className="text-2xl font-semibold text-white">
                {project.title}
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300 ring-1 ring-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}