"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.1 });

    root.classList.add("motion-ready");
    elements.forEach((element) => observer.observe(element));

    const updateParallax = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      parallaxItems.forEach((element) => {
        const factor = Number(element.dataset.parallax || "0.06");
        const distanceFromCenter = element.getBoundingClientRect().top + element.offsetHeight / 2 - viewportCenter;
        const offset = Math.max(-72, Math.min(72, -distanceFromCenter * factor));
        element.style.setProperty("--parallax-y", `${offset.toFixed(1)}px`);
      });
    };

    const requestParallax = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestParallax, { passive: true });
    window.addEventListener("resize", requestParallax);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestParallax);
      window.removeEventListener("resize", requestParallax);
      parallaxItems.forEach((element) => element.style.removeProperty("--parallax-y"));
      root.classList.remove("motion-ready");
    };
  }, [pathname]);

  return null;
}
