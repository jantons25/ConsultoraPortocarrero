// /api/contact.js
import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false });

  const { nombre, correo, empresa, servicio, industria } = req.body || {};
  if (!nombre || !correo) return res.status(400).json({ ok: false, error: "Faltan campos" });

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.FROM_EMAIL || "onboarding@resend.dev", // ver notas abajo
      to: process.env.TO_EMAIL,                                // tu correo destino
      subject: "Nuevo contacto desde la landing",
      reply_to: correo,
      html: `
        <h2>Nuevo contacto</h2>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Correo:</b> ${correo}</p>
        <p><b>Empresa:</b> ${empresa || "-"}</p>
        <p><b>Servicio:</b> ${servicio || "-"}</p>
        <p><b>Industria/Mensaje:</b><br>${(industria || "").replace(/\n/g,"<br>")}</p>
      `,
    });

    res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, error: "Email error" });
  }
}
