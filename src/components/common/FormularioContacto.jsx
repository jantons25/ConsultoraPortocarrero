import { useState } from "react";
import "../../styles/common/formulariocontacto.css";

export default function FormularioContacto() {
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  async function handleSubmit(e) {
    e.preventDefault();

    // honeypot anti-bots
    if (e.currentTarget.elements.website.value) return;

    const data = Object.fromEntries(new FormData(e.currentTarget));
    setStatus({ sending: true, ok: null, msg: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus({
        sending: false,
        ok: true,
        msg: "¡Mensaje enviado! Te contactaremos pronto.",
      });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({
        sending: false,
        ok: false,
        msg: "No se pudo enviar. Intenta nuevamente.",
      });
    }
  }

  return (
    <div
      className="formulario__contacto"
      role="region"
      aria-labelledby="form-title"
    >
      <h2 id="form-title">¡Agenda tu cita!</h2>

      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot oculto */}
        <input
          type="text"
          name="website"
          tabIndex="-1"
          autoComplete="off"
          style={{ display: "none" }}
        />

        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Tu nombre"
          required
        />

        <label htmlFor="correo">Correo</label>
        <input
          id="correo"
          name="correo"
          type="email"
          placeholder="tu@empresa.com"
          required
        />

        <label htmlFor="empresa">Empresa</label>
        <input
          id="empresa"
          name="empresa"
          type="text"
          placeholder="Nombre de tu empresa"
        />

        <label htmlFor="servicio">Servicio</label>
        <input
          id="servicio"
          name="servicio"
          type="text"
          placeholder="Ej. Consultoría estratégica"
        />

        <label htmlFor="industria">Industria / Mensaje</label>
        <textarea
          id="industria"
          name="industria"
          rows="4"
          placeholder="Cuéntanos brevemente tu necesidad…"
        />

        <button
          type="submit"
          disabled={status.sending}
          aria-busy={status.sending}
        >
          {status.sending ? "Enviando…" : "Enviar"}
        </button>

        <p
          role="status"
          aria-live="polite"
          style={{ marginTop: 8, color: status.ok ? "green" : "crimson" }}
        >
          {status.msg}
        </p>
      </form>
    </div>
  );
}
