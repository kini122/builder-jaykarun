import Layout from "@/components/site/Layout";
import { categories, CategoryKey } from "@/data/artworks";
import { useMemo } from "react";

export default function Gallery() {
  const params = new URLSearchParams(location.search);
  const initial = (params.get("cat") as CategoryKey) || "ecological";

  const cats = categories;
  const activeIdx = Math.max(0, cats.findIndex((c) => c.key === initial));

  const active = useMemo(() => cats[activeIdx] ?? cats[0], [activeIdx, cats]);

  return (
    <Layout>
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Gallery Collections</h1>
        <div className="flex flex-wrap gap-2 mb-8">
          {cats.map((c) => (
            <a key={c.key} href={`?cat=${c.key}`} className={`px-4 py-2 rounded-full border ${c.key === active.key ? "bg-primary text-white border-primary" : "bg-white hover:bg-secondary/60"}`}>{c.name}</a>
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-4">{active.name}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {active.items.map((w) => (
            <figure key={w.id} className="rounded-2xl overflow-hidden border shadow-sm bg-white">
              <img src={w.image} alt={w.title} className="w-full h-64 object-cover" />
              <figcaption className="p-4">
                <div className="font-semibold">{w.title}</div>
                {w.description && <p className="text-sm text-foreground/70 mt-1">{w.description}</p>}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Layout>
  );
}
