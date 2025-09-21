import "../../styles/common/carsuno.css";
import BtnUno from "../bloc/BtnUno.jsx";
import BtnAccionUno from "./BtnAccionUno.jsx";
import useRevealOnce from "../../hooks/UseRevealOnce.jsx";

function CarsUno({ imagen, margin = "none" }) {

  const revealRef = useRevealOnce();

  return (
    <div ref={revealRef} className="carsuno reveal-pop">
      <div className="imagen">
        <img src={imagen} alt="" />
      </div>
      <div className="contenido">
        <h3>titulo</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          excepturi sint necessitatibus.
        </p>
      </div>
      <div className="botones">
        <BtnAccionUno imagen={imagen} colorInicial="var(--color-segundo)" colorLetra="white"/>
        <BtnUno />
      </div>
    </div>
  );
}

export default CarsUno;
