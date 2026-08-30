import type { Metadata } from "next";
import { Barlow_Condensed, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import "./motion.css";
import "./page-hero.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const display = Bodoni_Moda({ subsets: ["latin"], variable: "--font-display" });
const sans = Barlow_Condensed({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: { default: "Monahan & Fitzgerald | Bayside, NY", template: "%s | Monahan & Fitzgerald" },
  description: "A Bayside neighborhood pub for good food, good company, and a late night done right.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>
    {/* THESIS: A real Bayside bar at the exact moment a regular decides to stay. It rejects generic pub nostalgia and photo-free restaurant landing pages.
        OWN-WORLD: Black enamel, aged cream, bottle green, brass, condensed sign lettering, the existing crest, and real venue photography.
        STORY: Visitors see the room, know the address, and can order, visit, or plan an event without hunting.
        FIRST VIEWPORT: The bar photograph fills the screen, the crest and headline hold the left, and tonight's actions sit directly below.
        FORM: Bayside after-hours barback, seed b1ffb786. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md. */}
    <Navbar /><main>{children}</main><Footer />
  </body></html>;
}
