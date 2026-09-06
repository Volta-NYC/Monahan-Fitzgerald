"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import Image from "next/image";

const links = [
  ["Menu", "/menu"],
  ["Private parties", "/private-parties"],
  ["Our story", "/about"],
  ["Visit", "/visit"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Monahan and Fitzgerald home"><Image src="/images/crest.png" alt="Monahan and Fitzgerald" width={58} height={58} priority /></Link>
        <div className="nav__links">{links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>
        <Link className="button button--small nav__cta" href="/order">Order online</Link>
        <button className="nav__toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu">
          <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span><i /><i />
        </button>
      </nav>
      <div id="mobile-menu" className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} aria-hidden={!open}>
        {links.map(([label, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link href="/order" onClick={() => setOpen(false)}>Order online</Link>
        <a href={site.phoneHref}>Call {site.phone}</a>
      </div>
    </header>
  );
}
