import React, { useState } from "react";
import React, { useState } from "react";
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
          "rounded-lg relative bg-white overflow-hidden h-52 md:h-72 w-full transition-all duration-200 ease-out border",
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
            "absolute left-0 right-0 bottom-0 bg-white/90 flex items-end py-3 px-3 transition-opacity duration-200",
            hovered === index ? "opacity-100" : "opacity-90",
          )}
        >
          <div className="text-sm md:text-base font-medium text-[hsl(var(--foreground))]">
            {card.title}
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
          </DialogHeader>
          {active && (
            <div className="mt-2">
              <img src={active.src} alt={active.title} className="w-full h-auto object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
