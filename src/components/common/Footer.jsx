import "../../styles/index.css"
import facebookIcon from "../../assets/icons/facebook-icono.png"
import instagramIcon from "../../assets/icons/instagram-icono.png"
import xIcon from "../../assets/icons/x-icono.png"
import "../../styles/common/footer.css"
import NavBarRedes from "../bloc/NavBarRedes.jsx"
import useReveal from "../../hooks/useReveal.jsx"

function Footer() {
  useReveal();
  return (
    <section className="footer fade-slide">
      <div className="logo">P</div>
      <div className="paginas">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Contacto</a></li>
          <li><a href="">Nosotros</a></li>
          <li><a href="">Servicios</a></li>
        </ul>
      </div>
      <div className="redes">
      {NavBarRedes(facebookIcon, instagramIcon, xIcon)}
      </div>
      <div className="hastag ">#PortocarreroConsultora</div>
    </section>
  )
}

export default Footer