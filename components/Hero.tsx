export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Quality • Customer Experience • Process Excellence
      </p>

      <h1 className="max-w-5xl text-6xl font-bold leading-tight md:text-8xl">
        Fırat Kaya
      </h1>

      <h2 className="mt-6 text-2xl text-zinc-300 md:text-3xl">
        Customer Experience, Quality & Operational Excellence Professional
      </h2>

      <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-400">
        Helping organizations improve customer experience,
        operational quality and service performance through
        data-driven insights, process excellence and continuous
        improvement.
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
        >
          View Projects
        </a>

        <a
          href="https://www.linkedin.com/in/f%C4%B1rat-kaya-068384164/"
          target="_blank"
          className="rounded-full border border-zinc-700 px-6 py-3 transition hover:border-zinc-500"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}