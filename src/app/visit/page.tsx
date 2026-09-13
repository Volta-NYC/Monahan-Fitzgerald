import type { Metadata } from "next";
import Image from "next/image";
import "../enrich.css";
import "./visit.css";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Visit" };

export default function VisitPage() { return <><PageHero title="Find your way to 41st Avenue." image="/images/bar-guinness.jpeg" imagePosition="center 50%"><p>Steps from Bell Boulevard, close to the action, and open late for the nights that are not over yet.</p></PageHero><section className="section shell visit-grid"><div className="visit-map reveal"><iframe title="Google Map for Monahan and Fitzgerald" src="https://www.google.com/maps?q=Monahan%20%26%20Fitzgerald%2C%20214-17%2041st%20Ave%2C%20Bayside%2C%20NY%2011361&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><div className="visit-details reveal"><div><p className="eyebrow">Address</p><a href={site.maps} target="_blank" rel="noreferrer">{site.address}<br />Get directions ↗</a></div><div><p className="eyebrow">Phone</p><a href={site.phoneHref}>{site.phone}</a></div><div><p className="eyebrow">Reported hours</p>{site.hours.map(([day, time]) => <p className="hours" key={day}><span>{day}</span>{time}</p>)}<p className="small">Hours may change. Please call to confirm.</p></div></div></section><section className="rich-split"><div className="rich-split__image" data-parallax="0.035"><Image src="/images/bar-guinness.jpeg" alt="The Monahan and Fitzgerald bar" fill sizes="(max-width: 760px) 100vw, 50vw" /></div><div className="rich-split__copy"><h2>Find your seat.</h2><p>Stop in for dinner, settle at the bar, or make a night of it in Bayside. Follow along for the latest from the room.</p><a className="button" href={site.instagram} target="_blank" rel="noreferrer">Follow on Instagram</a></div></section></> }
