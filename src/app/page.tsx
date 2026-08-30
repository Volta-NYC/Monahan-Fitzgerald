import Link from "next/link";
import Image from "next/image";
import "./home-plates.css";
import { menuMoments, site } from "@/lib/site";

export default function Home() {
  return <>
    <section className="hero hero--photo"><Image className="hero__photo" src="/images/bar-guinness.jpeg" alt="A Guinness at the Monahan and Fitzgerald bar" fill priority sizes="100vw" /><div className="hero__wash" /><div className="shell hero__layout">
      <div className="hero__copy"><Image className="hero__crest" src="/images/crest.png" alt="Monahan and Fitzgerald" width={155} height={155} priority /><p className="hero__place">Bayside, Queens</p><h1>The neighborhood<br /><i>table.</i></h1><p className="hero__intro">Good food, cold pints, and a room that has been part of 41st Avenue since 1987.</p><div className="hero__actions"><a className="button" href={site.order}>Order online</a><a className="hero__phone" href={site.phoneHref}>Call {site.phone}</a></div></div>
    </div><div className="hero__address"><a href={site.maps} target="_blank" rel="noreferrer">214-17 41st Avenue <span>Get directions ↗</span></a><p>Open late, every night</p></div></section>

    <section className="arrival"><div className="shell arrival__grid"><div className="arrival__statement"><p>Irish hospitality, Bayside pace.</p><h2>The kind of<br />place you <i>keep.</i></h2></div><div className="arrival__copy"><p>Come in hungry. Stay for the game. Make it a Thursday, a birthday, or a night with no plan at all. Monahan &amp; Fitzgerald has always known what a real local is for.</p><Link className="text-link" href="/about">Meet the neighborhood spot <span>↗</span></Link></div></div></section>

    <section className="plates"><div className="shell plates__heading"><h2>Good food, no<br />special occasion needed.</h2><Link className="text-link" href="/menu">Explore the menu <span>↗</span></Link></div><div className="plates__grid plates__grid--photos"><figure className="plate plate--wide reveal"><Image src="/images/fish-and-chips.png" alt="Fish and chips served at Monahan and Fitzgerald" fill sizes="(max-width: 760px) 100vw, 50vw" /></figure><figure className="plate reveal"><Image src="/images/chicken-francaise.jpeg" alt="Chicken Française at Monahan and Fitzgerald" fill sizes="(max-width: 760px) 100vw, 33vw" /></figure><figure className="plate reveal"><Image src="/images/wings.png" alt="Buffalo wings at Monahan and Fitzgerald" fill sizes="(max-width: 760px) 100vw, 33vw" /></figure></div></section>

    <section className="house"><div className="house__photo"><Image src="/images/interior.jpeg" alt="Monahan and Fitzgerald's upstairs interior" fill loading="eager" sizes="(max-width: 760px) 100vw, 50vw" /></div><div className="house__copy"><p>Bring the whole table upstairs.</p><h2>Private parties<br />with the <i>right</i> kind<br />of room.</h2><p className="house__body">Family celebrations, work gatherings, and the big nights that need a little more space. We will take care of the details.</p><Link className="button button--cream" href="/private-parties">Plan a private event</Link></div></section>

    <section className="visit-band"><div className="shell visit-band__inner"><p>Find us on 41st Avenue.</p><h2>Come in<br />tonight.</h2><a className="button" href={site.maps} target="_blank" rel="noreferrer">Get directions</a></div></section>
  </>;
}
