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
  const loopRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const visibleRef = useRef(false);
  const [paused, setPaused] = useState(false);

  const setPlayback = useCallback((nextPaused: boolean) => {
    pausedRef.current = nextPaused;
    setPaused(nextPaused);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const loop = loopRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!track || !loop || reducedMotion.matches) {
      setPlayback(true);
      return;
    }

    let distance = loop.scrollWidth / 2;
    let frame = 0;
    let previous = performance.now();
    const startOffset = Number.parseFloat(getComputedStyle(track).paddingLeft) || 0;
    track.scrollLeft = startOffset;

    const resizeObserver = new ResizeObserver(() => {
      distance = loop.scrollWidth / 2;
    });
    resizeObserver.observe(loop);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
    }, { threshold: 0.05 });
    visibilityObserver.observe(track);

    const tick = (now: number) => {
      const elapsed = Math.min(now - previous, 40);
      previous = now;

      if (visibleRef.current && !pausedRef.current && !document.hidden && track.matches(":is(:hover, :focus-within)") === false) {
        track.scrollLeft += elapsed * 0.024;
        if (track.scrollLeft >= startOffset + distance) track.scrollLeft -= distance;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, [setPlayback]);

  const cards = (copy: number) => reel.map((item, index) => (
    <figure
      className={`reel-card reel-card--${item.shape}`}
      key={`${copy}-${item.src}`}
      tabIndex={copy === 0 ? 0 : -1}
      aria-hidden={copy === 1 ? true : undefined}
    >
      <Image src={item.src} alt={copy === 0 ? item.alt : ""} fill sizes="(max-width: 760px) 82vw, 42vw" />
      <figcaption>{item.label}</figcaption>
      {copy === 0 ? <span className="sr-only">Image {index + 1} of {reel.length}</span> : null}
    </figure>
  ));

  return <section className="photo-reel" aria-labelledby="reel-title">
    <div className="shell photo-reel__heading reveal">
      <h2 id="reel-title">Pass it<br /><i>around.</i></h2>
      <div className="photo-reel__guide">
        <p>Food, friends, and a room that feels right. Drag to look around.</p>
        <span className="photo-reel__status" aria-hidden="true"><b />{paused ? "Paused" : "Moving"}</span>
      </div>
    </div>
    <div
      className="photo-reel__track"
      ref={trackRef}
      role="region"
      aria-label="Monahan and Fitzgerald gallery. Hover, touch, or focus an image to pause."
      data-paused={paused}
      onMouseEnter={() => setPlayback(true)}
      onMouseLeave={(event) => setPlayback(event.currentTarget.contains(document.activeElement))}
      onFocusCapture={() => setPlayback(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPlayback(false);
      }}
      onPointerDown={() => setPlayback(true)}
      onPointerUp={() => {
        if (!window.matchMedia("(hover: hover)").matches) setPlayback(false);
      }}
      onPointerCancel={() => setPlayback(false)}
    >
      <div className="photo-reel__loop" ref={loopRef}>
        <div className="photo-reel__set">{cards(0)}</div>
        <div className="photo-reel__set" aria-hidden="true">{cards(1)}</div>
      </div>
    </div>
  </section>;
}
