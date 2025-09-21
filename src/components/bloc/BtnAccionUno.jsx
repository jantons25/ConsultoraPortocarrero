import "../../styles/bloc/btnaccionuno.css"
import "../../styles/index.css"
import { useState } from "react";

function BtnAccionUno({imagen, colorInicial="var(--color-tercero)", colorLetra="white"}) {
    const [color, setColor] = useState(colorInicial);
    const [colorLetraBtn, setColorLetraBtn] = useState(colorLetra);

  return <div className="slide-right btn__accion__uno" style={{backgroundColor: color}}>
    <a href=""><img src={imagen} alt="" /></a>
    <a href="" style={{color: colorLetraBtn}}>Acciones</a>
  </div>;
}

export default BtnAccionUno;
