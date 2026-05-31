import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#070711] px-6 py-24 text-white">
      <section className="mx-auto max-w-5xl">
        <Link
          href="/projects"
          className="text-violet-400 transition hover:text-violet-300"
        >
          ← Back to Projects
        </Link>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <p className="text-sm text-violet-400">{project.category}</p>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-300">
            {project.description}
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-6">
            <h2 className="text-xl font-semibold">The Challenge</h2>
            <p className="mt-3 leading-8 text-zinc-300">
              {project.challenge}
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-6">
            <h2 className="text-xl font-semibold">Business Impact</h2>
            <p className="mt-3 leading-8 text-zinc-300">{project.impact}</p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold">Key Metrics</h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {project.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold">Key Findings</h2>

            <ul className="mt-4 space-y-4 text-zinc-300">
              {project.findings.map((item) => (
                <li key={item}>✦ {item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold">Key Highlights</h2>

            <ul className="mt-4 space-y-4 text-zinc-300">
              {project.details.map((item) => (
                <li key={item}>✦ {item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold">Technologies & Methods</h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/5 px-4 py-2 text-sm text-zinc-300 ring-1 ring-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}