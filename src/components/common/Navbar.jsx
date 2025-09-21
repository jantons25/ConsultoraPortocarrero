import "../../styles/common/navbar.css";
import "../../styles/index.css";
import "../../styles/global/hoverbotones.css";
import "../../styles/global/maquinaescribir.css";
import NavBarRedes from "../bloc/NavBarRedes";
import facebookIcon from "../../assets/icons/facebook-icono.png";
import instagramIcon from "../../assets/icons/instagram-icono.png";
import xIcon from "../../assets/icons/x-icono.png";
import useReveal from "../../hooks/useReveal.jsx";
import BtnUno from "../bloc/BtnUno.jsx";

function Navbar() {
  useReveal();
  return (
    <section className="navbar fade-slide">
      <div className="navbar__redes__bloc">
        {NavBarRedes(facebookIcon, instagramIcon, xIcon)}
      </div>
      <div className="navbar__titulo">
        <div className="nombre">
          <p className="typewriter">Consultora</p>
        </div>
        <div className="logo">P</div>
        <BtnUno
          colorLetraInicial={"var(--color-segundo)"}
          seccion="#formulario"
        />
      </div>
    </section>
  );
}

export default Navbar;
