import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="footer"><div className="shell footer__grid">
    <div><Image className="footer__crest" src="/images/crest.png" alt="Monahan and Fitzgerald" width={100} height={100} /><p className="footer__line">Your neighborhood table is waiting.</p></div>
    <div><p className="eyebrow">Find us</p><a href={site.maps} target="_blank" rel="noreferrer">{site.address}</a><br /><a href={site.phoneHref}>{site.phone}</a></div>
    <div><p className="eyebrow">Explore</p><Link href="/menu">Menu</Link><Link href="/order">Order online</Link><Link href="/private-parties">Private parties</Link><Link href="/visit">Visit</Link><a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a><a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a></div>
  </div><div className="shell footer__bottom"><span>© {new Date().getFullYear()} Monahan &amp; Fitzgerald</span><a href="https://novusnyc.org" target="_blank" rel="noreferrer">Made by Novus</a></div></footer>;
}
