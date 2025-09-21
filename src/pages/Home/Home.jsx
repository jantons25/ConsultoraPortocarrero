import "../../styles/pages/home.css";
import "../../styles/index.css";
import "../../styles/global/hoverbotones.css";
import FraseSuperior from "../../components/bloc/FraseSuperior.jsx";
import DataNumerico from "../../components/bloc/DataNumerico.jsx";
import CarsUno from "../../components/bloc/CarsUno.jsx";
import IconoWhatsapp from "../../assets/icons/whatsapp-icono.png";
import facebookIcon from "../../assets/icons/facebook-icono_blanco.png";
import instagramIcon from "../../assets/icons/instagram-icono_blanco.png";
import xIcon from "../../assets/icons/x-icono_blanco.png";
import ImagenOficinaUno from "../../assets/img/img_oficina_uno.webp";
import ImagenPersonaUno from "../../assets/img/img_persona_nosotros_uno.png";
import ImagenPersonaDos from "../../assets/img/img_persona_nosotros_dos.webp";
import BtnUno from "../../components/bloc/BtnUno.jsx";
import BtnAccionUno from "../../components/bloc/BtnAccionUno.jsx";
import BloqueDato from "../../components/bloc/BloqueDato.jsx";
import BloqueTestimonio from "../../components/bloc/BloqueTestimonio.jsx";
import BloqueContacto from "../../components/bloc/BloqueContacto.jsx";
import FormularioContacto from "../../components/common/FormularioContacto.jsx";
import useRevealOnceOnScroll from "../../hooks/UseRevealOnceOneScroll.jsx";
import IconoCorreo from "../../assets/icons/correo-electronico.png";
import { useEffect } from "react";

function Home() {
  const logos = [facebookIcon, instagramIcon, xIcon];
  useRevealOnceOnScroll(".banner");

  useEffect(() => {
    const header = document.querySelector(".header");
    if (header) {
      header.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="home">
      <section className="header">
        <div className="container">
          <div className="info">
            <div className="frase">
              <FraseSuperior frase={"Invierte con Inteligencia"} />
            </div>
            <div className="titulo__subtitulo">
              <h1>Consultoría Estratégica de Negocios</h1>
              <p>
                Agenda tu consultoría gratis por tiempo limitado. Más de 10 años
                asesorando empresas
              </p>
            </div>
            <div className="boton">
              <BtnUno
                colorLetraInicial={"var(--color-segundo)"}
                seccion="#formulario"
              />
            </div>
          </div>
          <div className="numeros">
            <DataNumerico numero={10000} />
            <DataNumerico numero={500} />
            <DataNumerico numero={20} />
          </div>
          <div className="bloques">
            <div className="bloque__a">
              <a
                href="https://wa.me/51922773119?text=Hola%20quiero%20más%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="enlace btn-hover slide-right"
              >
                <img src={IconoWhatsapp} alt="WhatsApp" />
              </a>
            </div>
            <div className="bloque__b">
              <a href="#servicios" className="wsp btn-hover slide-right">
                <p>Conoce más ➡︎</p>
              </a>
            </div>
          </div>
        </div>
        <div className="empresas">
          <div className="frase">
            <FraseSuperior frase={"Invierte con Inteligencia"} />
          </div>
          <div className="carrusel">
            <div className="carrusel__track">
              <div className="carrusel__group">
                {logos.map((src, i) => (
                  <img key={i} src={src} alt="" />
                ))}
              </div>
              <div className="carrusel__group" aria-hidden="true">
                {logos.map((src, i) => (
                  <img key={`dup-${i}`} src={src} alt="" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="servicios" id="servicios">
        <div className="container">
          <FraseSuperior frase={"Invierte con Inteligencia"} />
          <h2>¿Por qué elegir nuestros servicios?</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, at!
          </span>
          <div className="cars">
            <CarsUno imagen={ImagenOficinaUno} />
            <CarsUno imagen={ImagenOficinaUno} />
            <CarsUno imagen={ImagenOficinaUno} />
            <CarsUno imagen={ImagenOficinaUno} />
            <CarsUno imagen={ImagenOficinaUno} />
            <CarsUno imagen={ImagenOficinaUno} />
          </div>
        </div>
      </section>
      <section className="nosotros">
        <div className="banner banner__uno">
          <img src={ImagenPersonaUno} alt="" />
        </div>
        <div className="contenido">
          <div className="frase">
            <FraseSuperior frase={"Invierte con Inteligencia"} />
          </div>
          <div className="informacion">
            <h2>Sobre Nosotros</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              ratione consequatur odit maxime earum beatae. Sit adipisci totam,
              necessitatibus, quo at nesciunt officia, molestiae nihil dicta
              repellendus temporibus consectetur. Optio dolor cum nemo saepe
              animi eius odio laudantium adipisci sequi, quidem maxime, veniam
              aliquid, laborum veritatis commodi voluptatibus.
            </p>
            <div className="botones">
              <BtnAccionUno
                imagen={ImagenOficinaUno}
                colorInicial="white"
                colorLetra="black"
              />
              <BtnUno />
            </div>
          </div>
        </div>
        <div className="banner banner__dos">
          <img src={ImagenPersonaUno} alt="" />
        </div>
        <div className="contenido contenido__dos">
          <div className="frase">
            <FraseSuperior frase={"Invierte con Inteligencia"} />
          </div>
          <div className="informacion">
            <h2>Sobre Nosotros</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              blanditiis nostrum nulla libero voluptates ex, provident autem
              voluptate cupiditate quis! provident autem voluptate cupiditate
              quis!
            </p>
            <div className="bloques">
              <BloqueDato colorFondo={"var(--color-tercero)"} />
              <BloqueDato colorFondo={"var(--color-tercero)"} />
              <BloqueDato colorFondo={"white"} />
              <BloqueDato colorFondo={"var(--color-tercero)"} />
              <BloqueDato colorFondo={"white"} />
              <BloqueDato colorFondo={"white"} />
            </div>
          </div>
        </div>
      </section>
      <section className="testimonios">
        <div className="frase">
          <FraseSuperior frase={"Invierte con Inteligencia"} />
        </div>
        <h2>Ellos confían en nosotros</h2>
        <div className="bloques">
          <BloqueTestimonio imagen={ImagenPersonaUno} />
          <BloqueTestimonio imagen={ImagenPersonaUno} />
          <BloqueTestimonio imagen={ImagenPersonaUno} />
          <BloqueTestimonio imagen={ImagenPersonaUno} />
          <BloqueTestimonio imagen={ImagenPersonaUno} />
          <BloqueTestimonio imagen={ImagenPersonaUno} />
        </div>
      </section>
      <section className="formulario" id="formulario">
        <div className="container">
          <div className="frase">
            <FraseSuperior frase={"Invierte con Inteligencia"} />
          </div>
          <h2>Ellos confían en nosotros</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, at!
          </p>
          <hr />
          <h3>Contáctanos</h3>
          <div className="bloque">
            <BloqueContacto imagen={IconoWhatsapp} />
            <BloqueContacto imagen={IconoCorreo} />
            <BloqueContacto imagen={IconoCorreo} />
          </div>
        </div>
        <div className="caja__formulario">
          <FormularioContacto />
        </div>
      </section>
    </div>
  );
}

export default Home;
