import type { Metadata } from "next";
import Image from "next/image";
import "./menu.css";
import { PageHero } from "@/components/PageHero";
import { menuMoments, site } from "@/lib/site";
import { menu } from "@/lib/site";

export const metadata: Metadata = { title: "Menu" };

export default function MenuPage() { return <><PageHero title="Food for the whole table." image="/images/roast-beef.png" imagePosition="center 60%"><p>From a late-night bite to a proper sit-down dinner, these are the public menu favorites we could verify. Start an order for pickup, delivery, or curbside.</p></PageHero><section className="menu-visual"><Image src="/images/fish-and-chips.png" alt="Fish and chips from Monahan and Fitzgerald" fill sizes="100vw" /><div><span>41st Avenue favorites</span><strong>Order it your way.</strong></div></section><section className="menu-page shell">{menu.map((group) => <article key={group.category} className="menu-group"><div className="menu-group__heading"><h2>{group.category}</h2></div><div className="menu-group__items">{group.items.map((item) => <a href="/order" key={item}><span>{item}</span><b>Add to order ↗</b></a>)}</div></article>)}<div className="menu-callout"><h2>Ready when you are.</h2><p>Choose pickup, delivery, or curbside in the ordering flow. Availability is confirmed before checkout.</p><a className="button" href="/order">Start an order</a></div></section></> }
