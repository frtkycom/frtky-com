export default function Contact() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-8 py-20 text-white">
      <div className="glow-bg" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-violet-300">
          Contact
        </p>

        <h1 className="text-4xl font-bold md:text-5xl">
          Let's Connect
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
          Interested in customer experience, operational quality,
          service performance, analytics or AI-powered evaluation?
          Feel free to connect.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <a
            href="https://www.linkedin.com/in/f%C4%B1rat-kaya-068384164/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition hover:border-violet-400/50 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              LinkedIn
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              Connect with me
            </h2>

            <p className="mt-3 text-zinc-400">
              View my professional profile, experience and recent activities.
            </p>

            <div className="mt-6 text-violet-300">
              View Profile →
            </div>
          </a>

          <a
            href="mailto:firatkaya8234@gmail.com"
            className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition hover:border-violet-400/50 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Email
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              Send an Email
            </h2>

            <p className="mt-3 break-all text-zinc-400">
              firatkaya8234@gmail.com
            </p>

            <div className="mt-6 text-violet-300">
              Open Mail App →
            </div>
          </a>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Location
          </p>

          <p className="mt-3 text-lg text-zinc-300">
            Istanbul, Türkiye
          </p>
        </div>
      </div>
    </section>
  );
}