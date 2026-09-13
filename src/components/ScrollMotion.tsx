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
        const maxOffset = element.classList.contains("gallery__feature-image") ? (window.innerWidth <= 760 ? 58 : 118) : element.classList.contains("page-hero__image") ? (window.innerWidth <= 760 ? 46 : 78) : (window.innerWidth <= 760 ? 48 : 88);
        const offset = Math.max(-maxOffset, Math.min(maxOffset, -distanceFromCenter * factor));
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
