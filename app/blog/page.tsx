import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white px-6 py-24">
      <section className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400 mb-4">
            Blog
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Thoughts on Quality, AI and Customer Experience
          </h1>

          <p className="max-w-3xl text-white/60 text-lg leading-relaxed">
            Articles and notes about quality operations, SLA analytics, process
            improvement, customer experience and AI-assisted quality evaluation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-violet-400/50 hover:bg-violet-500/[0.06] transition-all duration-300 h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs text-violet-300 bg-violet-500/10 border border-violet-400/20 rounded-full px-3 py-1">
                  {post.category}
                </span>

                <span className="text-xs text-white/40">{post.readTime}</span>
              </div>

              <h2 className="text-xl font-semibold mb-4 group-hover:text-violet-300 transition-colors">
                {post.title}
              </h2>

              <p className="text-white/55 leading-relaxed mb-6">
                {post.description}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span className="text-sm text-white/35">{post.date}</span>

                <span className="text-sm text-violet-300 group-hover:translate-x-1 transition-transform">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}