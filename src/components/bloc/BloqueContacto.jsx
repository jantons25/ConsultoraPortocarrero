import "../../styles/bloc/bloquecontacto.css";

function BloqueContacto({imagen}) {
  return (
    <div className="bloque__contacto ">
      <div className="contacto">
        <img src={imagen} alt="" />
        <p>+51 923445768</p>
      </div>
    </div>
  );
}

export default BloqueContacto;
