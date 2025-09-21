// hooks/useRevealOnce.js
import { useEffect, useRef } from "react";

export default function useRevealOnce(options = { threshold: 0.15 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        el.classList.add("is-visible");
        io.unobserve(el); // solo una vez
      }
    }, options);

    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return ref;
}
