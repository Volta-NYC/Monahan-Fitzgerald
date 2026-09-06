import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="footer">
    <div className="shell footer__body reveal">
      <div className="footer__brand">
        <Image className="footer__crest" src="/images/crest.png" alt="Monahan and Fitzgerald" width={190} height={190} />
        <h2>Your place<br />to <i>land.</i></h2>
        <p>Bayside, Queens · Since 1987</p>
        <div className="footer__actions"><Link className="button" href="/order">Build an order</Link><a className="text-link" href={site.maps} target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a></div>
      </div>
      <div className="footer__column"><p className="footer__label">Find us</p><a href={site.maps} target="_blank" rel="noreferrer">{site.address}</a><a href={site.phoneHref}>{site.phone}</a></div>
      <div className="footer__column"><p className="footer__label">Explore</p><Link href="/menu">Menu</Link><Link href="/order">Order online</Link><Link href="/private-parties">Private parties</Link><Link href="/about">Our story</Link><Link href="/visit">Visit</Link></div>
    </div>
    <div className="shell footer__bottom"><strong>Monahan <i>&amp;</i> Fitzgerald</strong><span>© {new Date().getFullYear()} · Bayside, New York</span><a href="https://novusnyc.org" target="_blank" rel="noreferrer">Made by Novus</a></div>
  </footer>;
}
