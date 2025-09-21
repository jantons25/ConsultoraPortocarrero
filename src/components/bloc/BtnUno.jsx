import "../../styles/index.css";
import "../../styles/bloc/btnuno.css";
import { useState } from "react";

function BtnUno({
  colorFondoInicial = "var(--color-tercero)",
  colorLetraInicial = "var(--color-segundo)",
  seccion = "",
}) {
  const [colorLetra, setColorLetra] = useState(colorLetraInicial);
  const [colorFondo, setColorFondo] = useState(colorFondoInicial);
  return (
    <div
      className=" boton__accion btn-hover slide-right"
      style={{ backgroundColor: colorFondo }}
    >
      <a href={seccion} style={{ color: colorLetra }}>
        Contacto
      </a>
    </div>
  );
}

export default BtnUno;
