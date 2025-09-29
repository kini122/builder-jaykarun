import React, { useMemo, useState } from "react";
import Layout from "@/components/site/Layout";
import TiltedCard from "@/components/site/TiltedCard";
import { categories, allWorks, illustrative } from "@/data/artworks";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";
import { FocusCards, type FocusCardItem } from "@/components/ui/focus-cards";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

export default function Index() {
  const illustration = illustrative.find((i) => i.title === "Illustration");

  const randomSelected = useMemo(() => {
    const shuffled = [...allWorks].sort(() => Math.random() - 0.5);
    // keep rows filled for 3-column layout
    const pick = shuffled.slice(0, 6);
    return pick.map<FocusCardItem>((w) => ({
      title: w.title,
      src: w.image,
      href: "/gallery#collections",
    }));
  }, []);

  const [bioOpen, setBioOpen] = useState(false);

  const exploreCards: FocusCardItem[] = useMemo(
    () =>
      categories.map((c) => ({
        title: c.name,
        src: c.items[0]?.image,
        href: `/gallery?cat=${c.key}`,
      })),
    [],
  );

  return (
    <Layout>
      {/* HERO with smooth scroll background */}
      <section className="relative">
        {illustration?.image && (
          <SmoothScrollHero
            desktopImage={
              "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F02e02c01aa6d4bf880524344f2bb0c98"
            }
            mobileImage={illustration.image}
          />
        )}
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center pointer-events-auto">
            <div className="bg-white rounded-2xl p-6 shadow border">
              <p className="uppercase tracking-wide text-xs text-foreground/70">
                Contemporary expressions rooted in tradition
              </p>
              <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                Paintings and prints for your home
              </h1>
              <p className="mt-4 text-lg text-foreground/80">JayKarun Art</p>
              <p className="mt-3 text-foreground/80 max-w-prose">
                Discover evocative works spanning ecological themes, figurative
                explorations and nature inspired abstracts. Each piece blends
                bold color with deep cultural roots.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  to="/gallery"
                  className="inline-flex items-center rounded-full bg-white border px-5 py-3 text-[hsl(var(--foreground))] font-medium shadow-sm hover:opacity-95"
                >
                  Explore Gallery
                </Link>
                <a
                  href="#about"
                  className="inline-flex items-center rounded-full bg-white border px-5 py-3 text-[hsl(var(--foreground))] font-medium shadow-sm hover:opacity-95"
                >
                  About the Artist
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <TiltedCard
                imageSrc="https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F7b236bb9aa2a47338ce2761897ff554c?format=webp&width=1200"
                captionText="Featured work"
                containerHeight="480px"
                imageHeight="480px"
                imageWidth="380px"
                showMobileWarning={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SMALL ABOUT */}
      <section id="about" className="bg-secondary/60 scroll-mt-28 sm:scroll-mt-32">
        <div className="container mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F36014cc458b649769a7ba595a5c2c17d%2Ff0583ba3e967426c965bb83ddf751e63"
            alt="JayKarun portrait"
            className="rounded-2xl shadow-md object-cover w-full h-[380px]"
          />
          <div>
            <h2 className="text-3xl font-bold">About the Artist</h2>
            <p className="mt-4 text-foreground/80">JAY KARUN</p>
            <p className="mt-2 text-foreground/80">
              The painterly instinct in Jay showed up early in life. No wonder,
              after schooling, he didn’t have to think twice about his future
              calling���to be a painter with a difference.
            </p>
            <Dialog open={bioOpen} onOpenChange={setBioOpen}>
              <DialogTrigger asChild>
                <button className="mt-6 inline-block rounded-full bg-white px-5 py-3 text-[hsl(var(--foreground))] font-medium shadow border hover:bg-white/90">
                  Read Full Biography
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Biography</DialogTitle>
                </DialogHeader>
                <div className="prose max-w-none whitespace-pre-line text-sm md:text-base">
                  JAY KARUN The painterly instinct in Jay showed up early in
                  life. No wonder, after schooling, he didn’t have to think
                  twice about his future calling-to be a painter with a
                  difference. For Jay Karun, joining Fine Arts College,
                  Thrippunithura was a logical conclusion of this calling.
                  Thrippunithura, the land of temples, arts, and royal heritage,
                  nourished the painter in him well. After graduating in Fine
                  Arts creditably; he took to painting avidly and with passion.
                  Be it commercial art or art for its own sake, Jay invests a
                  rare passion into his work. He realizes that businesses
                  require a different kind of art, than, let’s say, a painting.
                  But as an advertising professional, he realizes, that both art
                  forms have certain basic things in common like specific
                  objectives and target audiences. Jay’s fascination to delve
                  deep down into the imagery that revolves around his mind and
                  his desire to lend expression to it, led him to explore the
                  world of paintings. What developed was more than an
                  expression, but an impressionistic ensemble of energetic
                  colours and bold strokes. Each of his paintings is an
                  exploration, deep into the psyche of individual and collective
                  consciousness. Little surprise, some of his paintings is
                  mystical renditions of complex human predicament. Humanity,
                  besieged by multiple inner and external pulls, is his
                  favourite topic. Forming the base of his thought is the
                  knowledge, which considers everything that shares space as one
                  single entity. Therefore, his paintings seek to connect with
                  humanity at a deeper, emotional and psychic level, just as his
                  advertising does.
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Selected Works</h3>
          <Link
            to="/gallery"
            className="text-primary underline-offset-4 hover:underline"
          >
            View all
          </Link>
        </div>
        <FocusCards cards={randomSelected} />
      </section>

      {/* CATEGORY SHORTCUTS */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold mb-8">Explore by Category</h3>
          <FocusCards cards={exploreCards} />
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-lg">Get in touch for commissions and inquiries</p>
          <div className="flex gap-3 items-center">
            <Link
              to="/contact"
              className="rounded-full bg-background text-foreground px-5 py-2 font-medium"
            >
              Contact Artist
            </Link>
            <a
              href="mailto:dherma6969@gmail.com"
              className="underline underline-offset-4"
            >
              dherma6969@gmail.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
