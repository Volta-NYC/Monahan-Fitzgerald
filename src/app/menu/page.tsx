import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./menu.css";
import { PageHero } from "@/components/PageHero";
import { menu, menuDescriptions, menuImages } from "@/lib/site";

export const metadata: Metadata = { title: "Menu" };

const slug = (category: string) => category.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function MenuPage() {
  return <>
    <PageHero title="Food for the whole table." image="/images/roast-beef.png" imagePosition="center 60%">
      <p>Come for a late bite, a proper dinner, or the thing you order every time. Start here, then confirm current availability in the ordering flow.</p>
    </PageHero>

    <nav className="menu-index" aria-label="Menu categories">
      <div className="shell"><span>Jump to</span>{menu.map((group) => <a href={`#${slug(group.category)}`} key={group.category}>{group.category}</a>)}<Link href="/order">Build an order</Link></div>
    </nav>

    <section className="menu-intro">
      <div className="menu-intro__main reveal reveal-mask" data-parallax="0.035"><Image src="/images/fish-and-chips.png" alt="Fish and chips at Monahan and Fitzgerald" fill sizes="(max-width: 760px) 100vw, 64vw" /></div>
      <div className="menu-intro__side reveal reveal-mask" data-parallax="0.06"><Image src="/images/gallery-room-5.png" alt="Filet mignon sliders and fries" fill sizes="(max-width: 760px) 100vw, 36vw" /></div>
      <div className="menu-intro__copy reveal"><strong>Made for the bar.<br />Made for the table.</strong><p>Pub classics, familiar favorites, and enough range for the whole group.</p></div>
    </section>

    <section className="menu-page shell">
      {menu.map((group, index) => <article id={slug(group.category)} key={group.category} className={`menu-group reveal ${index % 2 ? "menu-group--reverse" : ""}`}>
        <div className="menu-group__photo reveal-mask" data-parallax="0.025"><Image src={menuImages[group.category].src} alt={menuImages[group.category].alt} fill sizes="(max-width: 760px) 100vw, 42vw" /></div>
        <div className="menu-group__content">
          <div className="menu-group__heading"><h2>{group.category}</h2><span>{group.items.length} favorites</span></div>
          <div className="menu-group__items">{group.items.map((item) => <Link href="/order" key={item}>
            <span><strong>{item}</strong>{menuDescriptions[item] ? <small>{menuDescriptions[item]}</small> : null}</span>
            <b aria-hidden="true">↗</b>
          </Link>)}</div>
        </div>
      </article>)}
    </section>

    <section className="menu-closing">
      <Image src="/images/gallery-welcome.jpeg" alt="Corned beef and cabbage with a Guinness at the bar" fill sizes="100vw" />
      <div className="shell menu-closing__content reveal"><h2>Know what<br />you want?</h2><p>Choose pickup, delivery, or curbside. Current availability and the final total are confirmed before you place the order.</p><Link className="button" href="/order">Start an order</Link></div>
    </section>
  </>;
}
