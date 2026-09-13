"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const moments = [
  { src: "/images/fish-and-chips.png", alt: "Fish and chips at Monahan and Fitzgerald", label: "Fish & chips", position: "center 52%" },
  { src: "/images/gallery-welcome.jpeg", alt: "Corned beef, cabbage, and a Guinness at the bar", label: "At the bar", position: "center 55%" },
  { src: "/images/wings.png", alt: "Buffalo wings at Monahan and Fitzgerald", label: "Buffalo wings", position: "center 53%" },
  { src: "/images/bar-guinness.jpeg", alt: "A Guinness at the Monahan and Fitzgerald bar", label: "A seat at the bar", position: "center 54%" },
  { src: "/images/chicken-francaise.jpeg", alt: "Chicken Française at Monahan and Fitzgerald", label: "Chicken Française", position: "center 48%" },
  { src: "/images/gallery-room-3.png", alt: "French dip sandwiches with fries and au jus", label: "French dip", position: "center 50%" },
  { src: "/images/gallery-room-5.png", alt: "Filet mignon sliders with fries", label: "Filet mignon sliders", position: "center 50%" },
  { src: "/images/gallery-social-1.jpeg", alt: "The upstairs private dining room set for an event", label: "The upstairs room", position: "center 48%" },
  { src: "/images/gallery-social-4.jpeg", alt: "Guinness artwork and flowers in the upstairs room", label: "Room details", position: "center 45%" },
  { src: "/images/exterior.png", alt: "Monahan and Fitzgerald on 41st Avenue", label: "41st Avenue", position: "center 50%" },
];

const wrapIndex = (index: number) => (index + moments.length) % moments.length;

export function PhotoReel() {
  const [active, setActive] = useState(0);
  const previous = moments[wrapIndex(active - 1)];
  const current = moments[active];
  const next = moments[wrapIndex(active + 1)];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!event.currentTarget || !(event.target instanceof HTMLElement) || !event.target.closest(".photo-reel")) return;
      if (event.key === "ArrowRight") setActive((index) => wrapIndex(index + 1));
      if (event.key === "ArrowLeft") setActive((index) => wrapIndex(index - 1));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return <section className="photo-reel" aria-labelledby="reel-title">
    <div className="shell gallery__heading reveal">
      <div><p className="gallery__eyebrow">From the room</p><h2 id="reel-title">Good nights,<br /><i>in frame.</i></h2></div>
      <div className="gallery__intro"><p>From first round to last call—every picture has a place in the story.</p><span><b>{String(active + 1).padStart(2, "0")}</b> / {String(moments.length).padStart(2, "0")}</span></div>
    </div>

    <div className="gallery__stage shell" aria-roledescription="carousel" aria-label="Monahan and Fitzgerald moments">
      <button className="gallery__preview gallery__preview--previous" type="button" onClick={() => setActive(wrapIndex(active - 1))} aria-label={`Show ${previous.label}`}>
        <span className="gallery__preview-media"><Image src={previous.src} alt="" fill sizes="(max-width: 760px) 30vw, 18vw" style={{ objectPosition: previous.position }} /></span><em>Previous</em>
      </button>
      <figure className="gallery__feature" key={current.src}>
        <div className="gallery__feature-media"><Image className="gallery__feature-image" data-parallax="0.12" src={current.src} alt={current.alt} fill sizes="(max-width: 760px) 90vw, 52vw" style={{ objectPosition: current.position }} /></div>
        <figcaption><span>Featured moment</span><strong>{current.label}</strong></figcaption>
      </figure>
      <button className="gallery__preview gallery__preview--next" type="button" onClick={() => setActive(wrapIndex(active + 1))} aria-label={`Show ${next.label}`}>
        <span className="gallery__preview-media"><Image src={next.src} alt="" fill sizes="(max-width: 760px) 30vw, 18vw" style={{ objectPosition: next.position }} /></span><em>Next</em>
      </button>
    </div>

    <div className="gallery__filmstrip" role="tablist" aria-label="Choose a gallery moment">
      <div className="shell gallery__filmstrip-inner">{moments.map((moment, index) => <button type="button" role="tab" aria-selected={index === active} className={index === active ? "is-active" : ""} key={moment.src} onClick={() => setActive(index)}><span><Image src={moment.src} alt="" fill sizes="76px" style={{ objectPosition: moment.position }} /></span><b>{String(index + 1).padStart(2, "0")}</b><i>{moment.label}</i></button>)}</div>
    </div>
    <p className="sr-only" aria-live="polite">Showing {current.label}, image {active + 1} of {moments.length}</p>
  </section>;
}
