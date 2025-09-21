// hooks/useRevealOnceOnScroll.js
import { useEffect, useRef } from "react";

export default function useRevealOnceOnScroll(selector = ".reveal-once", options = { threshold: 0.15 }) {
  const hasScrolled = useRef(false);

  useEffect(() => {
    // marcar que ya hubo interacción de scroll/touch
    const markScrolled = () => { hasScrolled.current = true; };
    window.addEventListener("scroll", markScrolled, { once: true, passive: true });
    window.addEventListener("touchmove", markScrolled, { once: true, passive: true });

    const els = document.querySelectorAll(selector);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (hasScrolled.current && entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target); // solo una vez
        }
      });
    }, options);

    els.forEach(el => io.observe(el));

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", markScrolled);
      window.removeEventListener("touchmove", markScrolled);
    };
  }, [selector, options]);
}
