import React, { useState } from "react";
import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export type FocusCardItem = {
  title: string;
  src: string;
  href?: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    onOpen,
  }: {
    card: FocusCardItem;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    onOpen?: (c: FocusCardItem) => void;
  }) => {
    const inner = (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "group rounded-2xl relative bg-white overflow-hidden h-56 w-full transition-all duration-200 ease-out shadow-sm border",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
        )}
      >
        <img
          src={card.src}
          alt={card.title}
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/0 transition-opacity duration-200 flex items-end",
          )}
        >
          <div className="p-4 w-full bg-white/90">
            <div className="text-sm md:text-base font-medium text-[hsl(var(--foreground))]">
              {card.title}
            </div>
          </div>
        </div>
      </div>
    );

    // If href points to gallery (internal), open modal instead of navigate
    if (card.href && card.href.startsWith("/gallery")) {
      return (
        <button
          type="button"
          onClick={() => onOpen && onOpen(card)}
          aria-label={card.title}
          className="block text-left w-full"
        >
          {inner}
        </button>
      );
    }

    return card.href ? (
      card.href.startsWith("/") ? (
        <Link to={card.href} aria-label={card.title} className="block">
          {inner}
        </Link>
      ) : (
        <a href={card.href} aria-label={card.title} className="block">
          {inner}
        </a>
      )
    ) : (
      inner
    );
  },
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: FocusCardItem[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [active, setActive] = useState<FocusCardItem | null>(null);

  const openModal = (c: FocusCardItem) => {
    setActive(c);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActive(null);
  };

  const imgWrapRef = useRef<HTMLDivElement | null>(null);
  const [zoom, setZoom] = useState(1);

  const changeZoom = (delta: number) => {
    setZoom((z) => Math.min(4, Math.max(0.5, +(z + delta).toFixed(2))));
  };

  const onWheel = (e: React.WheelEvent) => {
    // ctrl+wheel or meta+wheel to zoom, otherwise allow scroll
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      changeZoom(e.deltaY > 0 ? -0.1 : 0.1);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 max-w-5xl mx-auto md:px-8 w-full">
        {cards.map((card, index) => (
          <Card
            key={card.title + index}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            onOpen={openModal}
          />
        ))}
      </div>

      {/* Modal for featured work */}
      <Dialog open={modalOpen} onOpenChange={(v) => !v && closeModal()}>
        <DialogContent className="max-w-4xl w-full">
          <DialogHeader>
            <DialogTitle>{active?.title}</DialogTitle>
            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                onClick={() => changeZoom(-0.1)}
                className="px-3 py-1 border rounded bg-white text-[hsl(var(--foreground))]"
                aria-label="Zoom out"
              >
                −
              </button>
              <button
                type="button"
                onClick={() => setZoom(1)}
                className="px-3 py-1 border rounded bg-white text-[hsl(var(--foreground))]"
                aria-label="Reset zoom"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => changeZoom(0.1)}
                className="px-3 py-1 border rounded bg-white text-[hsl(var(--foreground))]"
                aria-label="Zoom in"
              >
                +
              </button>
            </div>
          </DialogHeader>
          {active && (
            <div className="mt-2">
              <div
                ref={imgWrapRef}
                onWheel={onWheel}
                className="w-full h-[70vh] overflow-auto bg-white flex items-center justify-center"
              >
                <div
                  style={{
                    transform: `scale(${zoom})`,
                    transition: "transform 150ms ease",
                  }}
                >
                  <img
                    src={active.src}
                    alt={active.title}
                    className="max-w-full max-h-[70vh] object-contain block"
                  />
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
