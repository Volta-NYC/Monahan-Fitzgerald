import type { Metadata } from "next";
import { Barlow_Condensed, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import "./motion.css";
import "./page-hero.css";
import "./revamp.css";
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
    {/* THESIS: A moving portrait of a Bayside night, not a static restaurant brochure.
        OWN-WORLD: Black enamel, deep pub green, warm brass, cream lettering, full-bleed film, and real table photography.
        STORY: Visitors feel the room first, then move directly to menu, order, directions, events, or the restaurant's social channels.
        FIRST VIEWPORT: The real M&F film fills the screen while one concise promise and tonight's three practical actions stay legible above it.
        FORM: Film-led neighborhood institution, evolved from the live venue media. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md. */}
    <Navbar /><main>{children}</main><Footer />
  </body></html>;
}
