import { useEffect } from "react";

export default function useReveal(selector = ".fade-slide, .slide-right") {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    // IntersectionObserver para activar animación al cargar
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // solo una vez
          }
        });
      },
      { threshold: 0.1 } // cuando el 10% sea visible
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
}
