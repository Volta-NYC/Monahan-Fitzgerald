import Image from "next/image";
import Link from "next/link";
import { menuMoments, site } from "@/lib/site";

const reel = [
  { src: "/images/fish-and-chips.png", alt: "Fish and chips at Monahan and Fitzgerald", label: "Fish & chips", shape: "wide" },
  { src: "/images/interior.jpeg", alt: "The upstairs room at Monahan and Fitzgerald", label: "Upstairs in Bayside", shape: "tall" },
  { src: "/images/wings.png", alt: "Buffalo wings at Monahan and Fitzgerald", label: "Buffalo wings", shape: "square" },
  { src: "/images/bar-guinness.jpeg", alt: "A Guinness at the Monahan and Fitzgerald bar", label: "A seat at the bar", shape: "tall" },
  { src: "/images/chicken-francaise.jpeg", alt: "Chicken Française at Monahan and Fitzgerald", label: "Chicken Française", shape: "wide" },
  { src: "/images/exterior.png", alt: "Monahan and Fitzgerald on 41st Avenue", label: "214-17 41st Avenue", shape: "square" },
];

export default function Home() {
  return <>
    <section className="hero hero--film">
      <video className="hero__film" autoPlay muted loop playsInline preload="metadata" poster="/images/bar-guinness.jpeg" aria-hidden="true" tabIndex={-1}>
        <source src="/video/monahan-hero-mobile.mp4" type="video/mp4" media="(max-width: 760px)" />
        <source src="/video/monahan-hero.mp4" type="video/mp4" />
      </video>
      <div className="hero__wash" />
      <div className="shell hero__layout">
        <div className="hero__copy">
          <Image className="hero__crest" src="/images/crest.png" alt="Monahan and Fitzgerald" width={150} height={150} priority />
          <h1>Your neighborhood<br /><i>night out.</i></h1>
          <p className="hero__intro">The Bayside table for pub classics, cold pints, late nights, and the people you came to see.</p>
        </div>
      </div>
      <div className="hero__dock">
        <Link href="/order"><span>Pickup, delivery, curbside</span><strong>Build an order</strong></Link>
        <a href={site.maps} target="_blank" rel="noreferrer"><span>214-17 41st Avenue</span><strong>Get directions</strong></a>
        <a href={site.phoneHref}><span>Call the pub</span><strong>{site.phone}</strong></a>
      </div>
    </section>

    <section className="home-intro">
      <div className="shell home-intro__grid">
        <h2 className="reveal">A real local,<br />since 1987.</h2>
        <div className="home-intro__copy reveal"><p>Come in hungry. Stay for the game. Make it a Thursday, a birthday, or a night with no plan at all. Monahan &amp; Fitzgerald is the kind of place Bayside keeps coming back to.</p><Link className="text-link" href="/about">Our story <span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>

    <section className="photo-reel" aria-labelledby="reel-title">
      <div className="shell photo-reel__heading"><h2 id="reel-title">Pass it<br /><i>around.</i></h2><p>Food, friends, and a room that feels right. Scroll the table.</p></div>
      <div className="photo-reel__track" role="region" aria-label="Monahan and Fitzgerald gallery" tabIndex={0}>
        {reel.map((item) => <figure className={`reel-card reel-card--${item.shape}`} key={item.src}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 82vw, 42vw" /><figcaption>{item.label}</figcaption></figure>)}
      </div>
    </section>

    <section className="menu-preview">
      <div className="shell menu-preview__top reveal"><h2>What sounds<br />good tonight?</h2><Link className="button button--cream" href="/menu">View the full menu</Link></div>
      <div className="menu-preview__list shell">
        {menuMoments.map((item) => <Link className="menu-preview__item reveal" href="/order" key={item.title}><h3>{item.title}</h3><p>{item.note}</p><span aria-hidden="true">Add to order ↗</span></Link>)}
      </div>
    </section>

    <section className="home-party">
      <div className="home-party__image reveal"><Image src="/images/interior.jpeg" alt="Monahan and Fitzgerald’s upstairs event room" fill sizes="(max-width: 760px) 100vw, 52vw" /></div>
      <div className="home-party__copy reveal"><h2>Make the upstairs<br /><i>yours.</i></h2><p>Birthdays, family dinners, work gatherings, and the nights that need more room. Tell us what you are planning and we will help you find the right setup.</p><Link className="button" href="/private-parties">Plan a private event</Link></div>
    </section>

    <section className="social-callout">
      <div className="shell social-callout__inner reveal"><p>See what is happening at the bar</p><div><a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a><a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a></div></div>
    </section>

    <section className="visit-band"><div className="shell visit-band__inner"><p>214-17 41st Avenue, Bayside</p><h2>Come in<br />tonight.</h2><a className="button" href={site.maps} target="_blank" rel="noreferrer">Get directions</a></div></section>
  </>;
}
