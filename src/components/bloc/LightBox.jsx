import { useEffect } from "react";

export default function Lightbox({ open, src, alt = "", onClose }) {
  // Cerrar con ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="lb-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Imagen ampliada"
      onClick={onClose} // clic fuera
    >
      <div
        className="lb-content"
        onClick={(e) => e.stopPropagation()} // evita cierre si clic dentro
      >
        <button className="lb-close" aria-label="Cerrar" onClick={onClose}>
          ×
        </button>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
