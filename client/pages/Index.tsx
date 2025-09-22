import { useMemo } from "react";
import Layout from "@/components/site/Layout";
import TiltedCard from "@/components/site/TiltedCard";
import ChromaGrid from "@/components/site/ChromaGrid";
import { categories, allWorks } from "@/data/artworks";

export default function Index() {
  const selected = useMemo(() => allWorks.slice(0, 6), []);

  return (
    <Layout>
      {/* HERO */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-wide text-xs text-foreground/70">Contemporary expressions rooted in tradition</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">Paintings and prints for your home</h1>
          <p className="mt-4 text-lg text-foreground/80">JayKarun Art</p>
          <p className="mt-3 text-foreground/80 max-w-prose">
            Discover evocative works spanning ecological themes, figurative explorations and nature inspired abstracts. Each piece blends bold color with deep cultural roots.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/gallery" className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-white font-medium shadow hover:opacity-90">Explore Gallery</a>
            <a href="/about" className="inline-flex items-center rounded-full bg-secondary px-5 py-3 text-foreground font-medium shadow hover:bg-secondary/80">About the Artist</a>
          </div>
        </div>
        <div className="flex justify-center">
          <TiltedCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F7b236bb9aa2a47338ce2761897ff554c?format=webp&width=1200"
            captionText="Featured work"
            containerHeight="480px"
            imageHeight="480px"
            imageWidth="380px"
            showMobileWarning={false}
          />
        </div>
      </section>

      {/* SMALL ABOUT */}
      <section className="bg-secondary/60">
        <div className="container mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Fb9d916ba8172432a8251389427881d23?format=webp&width=1200"
            alt="JayKarun portrait"
            className="rounded-2xl shadow-md object-cover w-full h-[380px]"
          />
          <div>
            <h2 className="text-3xl font-bold">About the Artist</h2>
            <p className="mt-4 text-foreground/80 whitespace-pre-line">{`JAY KARUN\n\nThe painterly instinct in Jay showed up early in life... Each of his paintings is an exploration, deep into the psyche of individual and collective consciousness.`}</p>
            <a href="/about" className="mt-6 inline-block rounded-full bg-primary px-5 py-3 text-white font-medium shadow hover:opacity-90">Read Full Biography</a>
          </div>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Selected Works</h3>
          <a href="/gallery" className="text-primary underline-offset-4 hover:underline">View all</a>
        </div>
        <ChromaGrid
          items={selected.map((w) => ({
            image: w.image,
            title: w.title,
            subtitle: w.description || "",
            url: "/gallery",
            gradient: "linear-gradient(145deg,#7A8B7A,#2C2C2C)",
            borderColor: "#7A8B7A",
          }))}
        />
      </section>

      {/* CATEGORY SHORTCUTS */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold mb-8">Explore by Category</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, idx) => (
              <a key={c.key} href={`/gallery?cat=${c.key}`} className={`group relative rounded-2xl overflow-hidden shadow-sm border ${idx % 2 ? "bg-secondary/40" : "bg-white"}`}>
                <img src={c.items[0]?.image} alt={c.name} className="h-56 w-full object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{c.name}</h4>
                    <span className="text-sm text-foreground/60">{c.items.length} pieces</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center">
                  <span className="rounded-full bg-primary text-white px-4 py-2">View Collection</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-lg">Get in touch for commissions and inquiries</p>
          <div className="flex gap-3 items-center">
            <a href="/contact" className="rounded-full bg-white text-primary px-5 py-2 font-medium">Contact Artist</a>
            <a href="mailto:dherma6969@gmail.com" className="underline underline-offset-4">dherma6969@gmail.com</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
