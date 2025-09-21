import "../../styles/bloc/navbarredes.css";
import "../../styles/index.css";
import useReveal from "../../hooks/useReveal.jsx";

function NavBarRedes(facebookIcon, instagramIcon, xIcon) {
  useReveal();
  return (
    <div className="navbar__redes slide-right">
      <ul>
        <li>
          <a
            href="https://www.facebook.com/share/1B2NETnbNe/"
            className="img-hover"
            target="_blank"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/portocarreroconsultora?igsh=MTJ0dmtzejY1ODZ1cA=="
            className="img-hover"
            target="_blank"
          >
            <img src={instagramIcon} alt="Ig" />
          </a>
        </li>
        <li>
          <a href="#" className="img-hover">
            <img src={xIcon} alt="Facebook" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBarRedes;
