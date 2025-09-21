import "../../styles/bloc/btnaccionuno.css";
import "../../styles/index.css";
import { useState } from "react";

function BtnAccionUno({
  imagen,
  colorInicial = "var(--color-tercero)",
  colorLetra = "white",
}) {
  const [color, setColor] = useState(colorInicial);
  const [colorLetraBtn, setColorLetraBtn] = useState(colorLetra);

  return (
    <div
      className="slide-right btn-hover btn__accion__uno"
      style={{ backgroundColor: color }}
    >
      <a
        href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODY1Mjg3NTgzMTk4MDUx?story_media_id=3576918089271771603_15627160400&igsh=MW1zNWsxcm1tODM5ZA=="
        target="_blank"
      >
        <img src={imagen} alt="" />
      </a>
      <a
        href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODY1Mjg3NTgzMTk4MDUx?story_media_id=3576918089271771603_15627160400&igsh=MW1zNWsxcm1tODM5ZA=="
        target="_blank"
        style={{ color: colorLetraBtn }}
      >
        Acciones
      </a>
    </div>
  );
}

export default BtnAccionUno;
