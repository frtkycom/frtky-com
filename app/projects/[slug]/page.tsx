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
    <main className="min-h-screen bg-[#070711] text-white px-6 py-24">
      <section className="mx-auto max-w-4xl">
        <Link href="/projects" className="text-violet-400 hover:text-violet-300">
          ← Back to Projects
        </Link>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-violet-400 text-sm">{project.category}</p>

          <h1 className="mt-4 text-5xl font-bold">{project.title}</h1>

          <p className="mt-6 text-zinc-300 leading-8">
            {project.description}
          </p>

          <div className="mt-10 rounded-2xl bg-violet-500/10 border border-violet-500/20 p-6">
            <h2 className="text-xl font-semibold">Business Impact</h2>
            <p className="mt-3 text-zinc-300">{project.impact}</p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold">Key Highlights</h2>

            <ul className="mt-4 space-y-3 text-zinc-300">
              {project.details.map((item) => (
                <li key={item}>✦ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}