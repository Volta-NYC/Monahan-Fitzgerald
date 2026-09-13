"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const reel = [
  { src: "/images/fish-and-chips.png", alt: "Fish and chips at Monahan and Fitzgerald", label: "Fish & chips", shape: "wide" },
  { src: "/images/gallery-welcome.jpeg", alt: "Corned beef, cabbage, and a Guinness at the bar", label: "At the bar", shape: "wide" },
  { src: "/images/wings.png", alt: "Buffalo wings at Monahan and Fitzgerald", label: "Buffalo wings", shape: "square" },
  { src: "/images/bar-guinness.jpeg", alt: "A Guinness at the Monahan and Fitzgerald bar", label: "A seat at the bar", shape: "tall" },
  { src: "/images/chicken-francaise.jpeg", alt: "Chicken Française at Monahan and Fitzgerald", label: "Chicken Française", shape: "wide" },
  { src: "/images/gallery-room-3.png", alt: "French dip sandwiches with fries and au jus", label: "French dip", shape: "square" },
  { src: "/images/gallery-room-5.png", alt: "Filet mignon sliders with fries", label: "Filet mignon sliders", shape: "square" },
  { src: "/images/gallery-social-1.jpeg", alt: "The upstairs private dining room set for an event", label: "The upstairs room", shape: "wide" },
  { src: "/images/gallery-social-4.jpeg", alt: "Guinness artwork and flowers in the upstairs room", label: "Room details", shape: "tall" },
  { src: "/images/exterior.png", alt: "Monahan and Fitzgerald on 41st Avenue", label: "214-17 41st Avenue", shape: "square" },
];

export function PhotoReel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollFrame = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.querySelectorAll<HTMLElement>(".reel-card"));
    const updateActive = () => {
      scrollFrame.current = 0;
      const trackStart = track.getBoundingClientRect().left;
      const closest = cards.reduce((best, card) => Math.abs(card.getBoundingClientRect().left - trackStart) < Math.abs(best.getBoundingClientRect().left - trackStart) ? card : best, cards[0]);
      setActive(cards.indexOf(closest));
    };
    const requestActive = () => {
      if (!scrollFrame.current) scrollFrame.current = window.requestAnimationFrame(updateActive);
    };

    track.addEventListener("scroll", requestActive, { passive: true });
    window.addEventListener("resize", requestActive);
    updateActive();
    return () => {
      window.cancelAnimationFrame(scrollFrame.current);
      track.removeEventListener("scroll", requestActive);
      window.removeEventListener("resize", requestActive);
    };
  }, []);

  const moveGallery = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.max(0, Math.min(reel.length - 1, active + direction));
    const card = track.querySelectorAll<HTMLElement>(".reel-card")[next];
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  }, [active]);

  const cards = reel.map((item, index) => (
    <figure
      className={`reel-card reel-card--${item.shape}`}
      key={item.src}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") moveGallery(1);
        if (event.key === "ArrowLeft") moveGallery(-1);
      }}
    >
      <Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 82vw, 42vw" />
      <figcaption>{item.label}</figcaption>
      <span className="sr-only">Image {index + 1} of {reel.length}</span>
    </figure>
  ));

  return <section className="photo-reel" aria-labelledby="reel-title">
    <div className="shell photo-reel__heading reveal">
      <h2 id="reel-title">Pass it<br /><i>around.</i></h2>
      <div className="photo-reel__guide">
        <p>Food, friends, and a room that feels right. Swipe, scroll, or use the arrows to look around.</p>
        <div className="photo-reel__controls">
          <span className="photo-reel__count" aria-live="polite">{String(active + 1).padStart(2, "0")} <i>/</i> {String(reel.length).padStart(2, "0")}</span>
          <button type="button" onClick={() => moveGallery(-1)} disabled={active === 0} aria-label="Previous gallery image">←</button>
          <button type="button" onClick={() => moveGallery(1)} disabled={active === reel.length - 1} aria-label="Next gallery image">→</button>
        </div>
      </div>
    </div>
    <div
      className="photo-reel__track"
      ref={trackRef}
      role="region"
      aria-label="Monahan and Fitzgerald photo gallery"
      aria-roledescription="carousel"
    >
      <div className="photo-reel__set">{cards}</div>
    </div>
  </section>;
}
