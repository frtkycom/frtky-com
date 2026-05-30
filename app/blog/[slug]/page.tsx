import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <span className="text-violet-400 text-sm">
            {post.category}
          </span>
        </div>

        <h1 className="text-5xl font-bold leading-tight mb-8">
          {post.title}
        </h1>

        <div className="flex gap-6 text-white/50 text-sm mb-12">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <p className="text-xl text-white/70 leading-9 mb-16">
          {post.description}
        </p>

        <section className="mt-20">
          <div className="mb-8">
            <span className="text-violet-400 text-sm">
              Continue Reading
            </span>
            <h2 className="text-3xl font-bold mt-2">
              Related Articles
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:border-violet-500/40 transition"
              >
                <span className="text-violet-400 text-xs">
                  {relatedPost.category}
                </span>

                <h3 className="mt-4 text-lg font-semibold leading-snug group-hover:text-violet-300 transition">
                  {relatedPost.title}
                </h3>

                <p className="mt-4 text-sm text-white/50">
                  {relatedPost.date} · {relatedPost.readTime}
                </p>

                <span className="mt-6 inline-flex text-sm text-white/70 group-hover:text-white transition">
                  Read article →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}