import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="footer">
    <div className="shell footer__mast">
      <Image className="footer__crest" src="/images/crest.png" alt="Monahan and Fitzgerald" width={190} height={190} />
      <h2>Your place<br />to <i>land.</i></h2>
      <Link className="button" href="/order">Order online</Link>
    </div>
    <div className="shell footer__grid">
      <div><p className="footer__label">Find us</p><a href={site.maps} target="_blank" rel="noreferrer">{site.address}</a><a href={site.phoneHref}>{site.phone}</a></div>
      <div><p className="footer__label">Explore</p><Link href="/menu">Menu</Link><Link href="/private-parties">Private parties</Link><Link href="/about">Our story</Link><Link href="/visit">Visit</Link></div>
      <div className="footer__social"><p className="footer__label">Follow the room</p><a href={site.instagram} target="_blank" rel="noreferrer"><span>Instagram</span><b aria-hidden="true">↗</b></a><a href={site.facebook} target="_blank" rel="noreferrer"><span>Facebook</span><b aria-hidden="true">↗</b></a></div>
    </div>
    <div className="shell footer__wordmark" aria-hidden="true">MONAHAN <span>&amp;</span> FITZGERALD</div>
    <div className="shell footer__bottom"><span>© {new Date().getFullYear()} Monahan &amp; Fitzgerald</span><a href="https://novusnyc.org" target="_blank" rel="noreferrer">Made by Novus</a></div>
  </footer>;
}
