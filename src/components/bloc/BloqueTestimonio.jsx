<<<<<<< HEAD
import "../../styles/bloc/bloquetestimonio.css";
=======
import "../../styles/bloc/BloqueTestimonio.css";
import "../../styles/bloc/btnuno.css";
>>>>>>> 7b62c9e (actualizaciones 1.001)
import { CiStar } from "react-icons/ci";

function BloqueTestimonio({ imagen, colorLetra, colorFondo }) {
  return (
    <div className="bloque__testimonio btn-hover">
      <div className="estrellas">
        <CiStar size={40} />
        <CiStar size={40} />
        <CiStar size={40} />
        <CiStar size={40} />
        <CiStar size={40} />
      </div>
      <div className="contenido" style={{ color: colorLetra }}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          numquam provident ex facere est quos in asperiores corrupti omnis
          quas!
        </p>
      </div>
      <div className="datos__persona">
        <div className="foto">
          <img src={imagen} alt="" />
        </div>
        <div className="descripcion">
          <h3>Nexus Cowork</h3>
          <p>Coworking</p>
        </div>
      </div>
    </div>
  );
}

export default BloqueTestimonio;
