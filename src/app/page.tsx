import Image from "next/image";
import Link from "next/link";
import { PhotoReel } from "@/components/PhotoReel";
import { ReviewWall } from "@/components/ReviewWall";
import { menuMoments, site } from "@/lib/site";

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
        <div className="home-intro__copy reveal"><h2>A real local,<br />since 1987.</h2><p>Come in hungry. Stay for the game. Make it a Thursday, a birthday, or a night with no plan at all.</p><Link className="text-link" href="/about">Our story <span aria-hidden="true">↗</span></Link></div>
        <div className="home-intro__mosaic reveal reveal-mask" data-parallax="0.04">
          <figure><Image src="/images/gallery-welcome.jpeg" alt="Corned beef and cabbage with a Guinness at the Monahan and Fitzgerald bar" fill sizes="(max-width: 760px) 92vw, 45vw" /></figure>
          <figure><Image src="/images/exterior.png" alt="The Monahan and Fitzgerald entrance on 41st Avenue" fill sizes="(max-width: 760px) 42vw, 18vw" /></figure>
        </div>
      </div>
    </section>

    <PhotoReel />

    <section className="menu-preview">
      <div className="shell menu-preview__top reveal"><h2>What sounds<br />good tonight?</h2><Link className="button button--cream" href="/menu">View the full menu</Link></div>
      <div className="menu-preview__list shell">
        {menuMoments.map((item) => <Link className="menu-preview__item reveal" href="/order" key={item.title}><h3>{item.title}</h3><p>{item.note}</p><span aria-hidden="true">Add to order ↗</span></Link>)}
      </div>
    </section>

    <ReviewWall />

    <section className="home-party">
      <div className="home-party__media reveal reveal-mask" data-parallax="0.035"><div className="home-party__image"><Image src="/images/gallery-social-1.jpeg" alt="Monahan and Fitzgerald’s upstairs event room set for dinner" fill sizes="(max-width: 760px) 100vw, 52vw" /></div><div className="home-party__detail"><Image src="/images/gallery-social-2.jpeg" alt="A private-event table set with navy linens and greenery" fill sizes="(max-width: 760px) 48vw, 22vw" /></div></div>
      <div className="home-party__copy reveal"><h2>Make the upstairs<br /><i>yours.</i></h2><p>Birthdays, family dinners, work gatherings, and the nights that need more room. Tell us what you are planning and we will help you find the right setup.</p><Link className="button" href="/private-parties">Plan a private event</Link></div>
    </section>

    <section className="social-gallery">
      <div className="social-gallery__image social-gallery__image--wide reveal reveal-mask" data-parallax="0.03"><Image src="/images/gallery-social-3.jpeg" alt="A birthday buffet in the upstairs event room" fill sizes="(max-width: 760px) 100vw, 66vw" /></div>
      <div className="social-gallery__image reveal reveal-mask" data-parallax="0.055"><Image src="/images/gallery-social-4.jpeg" alt="Guinness artwork and flowers in the upstairs room" fill sizes="(max-width: 760px) 100vw, 34vw" /></div>
      <div className="social-gallery__links"><p>See what is happening at the bar</p><a href={site.instagram} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a><a href={site.facebook} target="_blank" rel="noreferrer">Facebook <span aria-hidden="true">↗</span></a></div>
    </section>
  </>;
}
