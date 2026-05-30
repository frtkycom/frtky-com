import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-8 py-20 text-white">
      <div className="glow-bg" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-violet-300">
          Selected Work
        </p>

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h1 className="max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
              Selected Projects & Case Studies
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
              Customer Experience • SLA Analytics • AI Evaluation • Operational
              Intelligence
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-zinc-400 backdrop-blur">
            Focus areas
            <div className="mt-2 text-white">
              Quality • Data • Process • CX
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className="group rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/[0.07]"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-200">
                  {project.category}
                </span>

                <span className="text-sm text-zinc-500">0{index + 1}</span>
              </div>

              <h2 className="text-2xl font-semibold text-white">
                {project.title}
              </h2>

              <p className="mt-4 min-h-[88px] leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Business Impact
                </p>

                <p className="mt-2 text-sm font-medium text-zinc-200">
                  {project.impact}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300 ring-1 ring-white/10"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-zinc-500">
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}