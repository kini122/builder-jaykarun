import Layout from "@/components/site/Layout";

export default function About() {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-secondary to-white">
        <div className="container mx-auto px-6 py-16">
          <nav className="text-sm text-foreground/60">Home &gt; About</nav>
          <h1 className="mt-2 text-4xl font-extrabold">About JayKarun</h1>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-start">
        <img src="https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Fb9d916ba8172432a8251389427881d23?format=webp&width=1200" alt="Early life" className="rounded-2xl shadow object-cover w-full h-[420px]" />
        <div>
          <h2 className="text-2xl font-semibold">Early Life & Training</h2>
          <p className="mt-4 text-foreground/80 whitespace-pre-line">{`The painterly instinct in Jay showed up early in life. After graduating from Fine Arts College Thrippunithura, he took to painting avidly and with passion. Each of his paintings is an exploration, deep into the psyche of individual and collective consciousness.`}</p>
        </div>
      </section>
    </Layout>
  );
}
