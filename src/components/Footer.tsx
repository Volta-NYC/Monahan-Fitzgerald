import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="footer">
    <div className="shell footer__body reveal">
      <div className="footer__brand">
        <div className="footer__crest-frame"><Image className="footer__crest" src="/images/crest.png" alt="Monahan and Fitzgerald" width={260} height={260} /></div>
        <p className="footer__brand-name">Monahan <i>&amp;</i> Fitzgerald</p>
        <h2>Your place<br />to <i>land.</i></h2>
        <p>Bayside, Queens · Since 1987</p>
        <div className="footer__actions">
          <p className="footer__label">For tonight</p>
          <Link className="footer__order" href="/order"><span>Pickup · delivery · curbside</span><strong>Build an order <i aria-hidden="true">→</i></strong></Link>
          <a className="footer__directions" href={site.maps} target="_blank" rel="noreferrer"><span>214-17 41st Avenue</span><strong>Get directions <i aria-hidden="true">↗</i></strong></a>
        </div>
      </div>
      <address className="footer__column footer__column--location"><p className="footer__label">Find us</p><a href={site.maps} target="_blank" rel="noreferrer">{site.address}</a><a href={site.phoneHref}>{site.phone}</a></address>
      <nav className="footer__column" aria-label="Footer navigation"><p className="footer__label">Explore</p><Link href="/menu">Menu</Link><Link href="/order">Order online</Link><Link href="/private-parties">Private parties</Link><Link href="/about">Our story</Link><Link href="/visit">Visit</Link></nav>
    </div>
    <div className="shell footer__bottom"><strong>Monahan <i>&amp;</i> Fitzgerald</strong><span>© {new Date().getFullYear()} · Bayside, New York</span><a href="https://novusnyc.org" target="_blank" rel="noreferrer">Made by Novus</a></div>
  </footer>;
}
