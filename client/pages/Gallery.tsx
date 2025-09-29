import Layout from "@/components/site/Layout";
import { categories } from "@/data/artworks";
import React from "react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Gallery() {
  const [open, setOpen] = React.useState(false);
  const [activeImg, setActiveImg] = React.useState<{
    src: string;
    title: string;
  } | null>(null);
  const [visible, setVisible] = React.useState<Record<string, boolean>>({});
  const sectionRefs = React.useRef<Record<string, HTMLElement | null>>({});
  const { hash, search } = useLocation();
  const [scrolled, setScrolled] = React.useState(false);
  const [selectedKey, setSelectedKey] = React.useState<string | undefined>(undefined);
  const pendingRef = React.useRef<string | null>(null);

  const desiredKey = React.useMemo(() => {
    const fromHash = hash?.replace(/^#/, "");
    if (fromHash) return fromHash;
    const p = new URLSearchParams(search);
    const cat = p.get("cat");
    return cat ?? undefined;
  }, [hash, search]);

  const activeKey = React.useMemo(() => {
    if (selectedKey) return selectedKey;
    const firstVisible = categories.find((c) => visible[c.key]);
    return firstVisible?.key ?? desiredKey ?? categories[0]?.key;
  }, [visible, desiredKey, selectedKey]);

  const scrollToSection = (key: string) => {
    const el = sectionRefs.current[key];
    if (!el) return;
    const headerOffset = 120; // header + sticky chips
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = e.target.getAttribute("data-key");
          if (!id) return;
          if (e.isIntersecting) {
            setVisible((v) => ({ ...v, [id]: true }));
            if (pendingRef.current) {
              if (pendingRef.current === id) {
                setSelectedKey(id);
                pendingRef.current = null;
              }
            } else {
              setSelectedKey(id);
            }
          }
        });
      },
      { threshold: 0.4 },
    );
    const els = Object.values(sectionRefs.current).filter(Boolean) as Element[];
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!desiredKey) return;
    pendingRef.current = desiredKey;
    setSelectedKey(desiredKey);
    let attempts = 0;
    const tryScroll = () => {
      const el = sectionRefs.current[desiredKey];
      if (el && document.body.contains(el)) {
        // Prefer scrollIntoView with CSS scroll margin
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts < 20) {
        attempts += 1;
        setTimeout(tryScroll, 50);
      }
    };
    tryScroll();
  }, [desiredKey]);

  return (
    <Layout>
      {/* Shortcut nav bar */}
      <div className={cn(
        "sticky top-16 z-30 border-b backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--background))]/65",
        scrolled ? "bg-[hsl(var(--background))]/90 pt-4 pb-2" : "bg-[hsl(var(--background))]/80 py-2",
      )}>
        <div className="container mx-auto px-6 overflow-x-auto">
          <nav className="flex gap-2">
            {categories.map((cat) => (
              <a
                key={cat.key}
                href={`#${cat.key}`}
                onClick={(e) => {
                  e.preventDefault();
                  pendingRef.current = cat.key;
                  setSelectedKey(cat.key);
                  const el = sectionRefs.current[cat.key];
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    scrollToSection(cat.key);
                  }
                  // Update URL hash without full navigation
                  history.replaceState(null, "", `#${cat.key}`);
                }}
                className={cn(
                  "px-3 py-1.5 rounded-full border whitespace-nowrap bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
                  activeKey === cat.key && "bg-foreground text-background",
                )}
                aria-current={activeKey === cat.key ? "true" : undefined}
              >
                {cat.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <section className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Gallery Collections</h1>
        <div className="space-y-14" id="collections">
          {categories.map((cat) => (
            <section
              key={cat.key}
              id={cat.key}
              data-key={cat.key}
              ref={(el) => (sectionRefs.current[cat.key] = el)}
              className={`scroll-mt-28 sm:scroll-mt-32 transition-all duration-700 ${visible[cat.key] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="text-xl font-semibold mb-4">{cat.name}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((w) => (
                  <button
                    key={w.id}
                    className="text-left rounded-2xl overflow-hidden border shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    onClick={() => {
                      setActiveImg({ src: w.image, title: w.title });
                      setOpen(true);
                    }}
                    aria-label={`Open ${w.title}`}
                  >
                    <img
                      src={w.image}
                      alt={w.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <div className="font-semibold">{w.title}</div>
                      {w.description && (
                        <p className="text-sm text-foreground/70 mt-1">
                          {w.description}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle>{activeImg?.title}</DialogTitle>
          </DialogHeader>
          {activeImg && (
            <ZoomableImage src={activeImg.src} alt={activeImg.title} />
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}

function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const [scale, setScale] = React.useState(1);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const dragging = React.useRef(false);
  const last = React.useRef({ x: 0, y: 0 });

  const clamp = (v: number, min: number, max: number) =>
    Math.min(max, Math.max(min, v));

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const next = clamp(scale + (e.deltaY < 0 ? 0.15 : -0.15), 1, 4);
    setScale(next);
  };

  const onDown = (e: React.MouseEvent) => {
    if (scale === 1) return;
    dragging.current = true;
    last.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
  };
  const onMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    setPos({ x: e.clientX - last.current.x, y: e.clientY - last.current.y });
  };
  const onUp = () => {
    dragging.current = false;
  };

  const onDoubleClick = () => {
    setScale(1);
    setPos({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative w-full h-[70vh] bg-black/80 overflow-hidden rounded-md"
      onWheel={onWheel}
      onMouseDown={onDown}
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onDoubleClick={onDoubleClick}
      role="img"
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        className="select-none pointer-events-none absolute left-1/2 top-1/2 max-w-full max-h-full"
        style={{
          transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
          willChange: "transform",
          userSelect: "none",
        }}
        draggable={false}
      />
      <div className="absolute bottom-2 right-2 text-xs text-white/90 bg-black/50 rounded px-2 py-1">
        Scroll to zoom · Drag to pan · Double-click to reset
      </div>
    </div>
  );
}
