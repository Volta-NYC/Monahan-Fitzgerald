import type { Metadata } from "next";
import Image from "next/image";
import "../enrich.css";
import "./about.css";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Our Story" };

export default function AboutPage() { return <><PageHero title="The kind of place people come back to." image="/images/exterior.png" imagePosition="center 53%"><p>Monahan &amp; Fitzgerald opened on 41st Avenue with a simple idea: make good food, take care of people, and give the neighborhood somewhere to gather.</p></PageHero><section className="section shell story-layout"><div className="story-mark story-mark--image reveal"><Image src="/images/chicken-francaise.jpeg" alt="Chicken Francaise at Monahan and Fitzgerald" fill sizes="(max-width: 760px) 100vw, 42vw" /><span>1987</span></div><div className="story-copy reveal"><h2>Thirty-plus years of knowing what matters.</h2><p>There is no shortcut to being a local institution. It happens one regular at a time, one late bite after a long day, one family dinner that becomes a tradition.</p><p>We are still here for the food, the bar, the game, the music, and the familiar welcome that makes a new face feel like a regular before the night is through.</p></div></section><section className="rich-split"><div className="rich-split__image"><Image src="/images/exterior.png" alt="The Monahan and Fitzgerald exterior on 41st Avenue" fill sizes="(max-width: 760px) 100vw, 50vw" /></div><div className="rich-split__copy"><h2>Built into the neighborhood.</h2><p>Not a destination that came and went. A real room with familiar faces, a full bar, and a reason to come back next week.</p></div></section></> }
