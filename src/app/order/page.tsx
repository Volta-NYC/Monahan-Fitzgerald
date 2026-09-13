"use client";

import "./order.css";
import { useMemo, useState } from "react";
import { menu, site } from "@/lib/site";

export default function OrderPage() {
  const [mode, setMode] = useState("Pickup");
  const [cart, setCart] = useState<Record<string, number>>({});
  const count = useMemo(() => Object.values(cart).reduce((total, quantity) => total + quantity, 0), [cart]);

  const add = (item: string) => setCart((current) => ({ ...current, [item]: (current[item] || 0) + 1 }));
  const remove = (item: string) => setCart((current) => {
    const next = { ...current };
    if (next[item] <= 1) delete next[item]; else next[item] -= 1;
    return next;
  });

  return <>
    <section className="order-hero">
      <div className="shell order-page__top">
        <div><p>Build your order</p><h1>Tonight’s<br /><i>order.</i></h1><span>{mode} · {count} item{count === 1 ? "" : "s"}</span></div>
        <div className="order-mode" role="group" aria-label="Fulfillment method">
          {["Pickup", "Delivery", "Curbside"].map((choice) => <button type="button" className={choice === mode ? "active" : ""} aria-pressed={choice === mode} onClick={() => setMode(choice)} key={choice}>{choice}</button>)}
        </div>
      </div>
      <div className="shell order-notice"><strong>Ordering preview</strong><span>Build your selection here, then call the pub to confirm availability and payment.</span></div>
    </section>
    <section className="order-page">
      <div className="shell order-layout">
        <div className="order-menu">{menu.map((section) => <section key={section.category}><h2>{section.category}</h2>{section.items.map((item) => <button type="button" className="order-item" key={item} onClick={() => add(item)} aria-label={`Add ${item} to order`}><span>{item}</span><b>Add <i>+</i></b></button>)}</section>)}</div>
        <aside className="cart" aria-live="polite">
          <p>Your order</p>
          {count ? <ul>{Object.entries(cart).map(([item, quantity]) => <li key={item}><span><strong>{item}</strong><em>Qty. {quantity}</em></span><button type="button" onClick={() => remove(item)} aria-label={`Remove one ${item}`}>−</button></li>)}</ul> : <div className="cart__empty">Choose a few favorites to start your order.</div>}
          <button type="button" className="button" disabled={!count} onClick={() => { if (count) window.location.href = site.phoneHref; }}>{count ? `Call to place ${mode.toLowerCase()} order` : "Add an item to continue"}</button>
          <small>Have your selections ready when you call. The restaurant will confirm the final order and total.</small><a href={site.phoneHref}>Call {site.phone}</a>
        </aside>
      </div>
    </section>
  </>;
}
