import "../../styles/common/formulariocontacto.css";

function FormularioContacto() {
  return (
    <div className="formulario__contacto ">
      <h2>¡Agenda tu cita!</h2>
      <form action="">
        <label htmlFor="">Nombre</label>
        <input type="text" />
        <label htmlFor="">Correo</label>
        <input type="text" />
        <label htmlFor="">Empresa</label>
        <input type="text" />
        <label htmlFor="">Servicio</label>
        <input type="text" />
        <label htmlFor="">Industria</label>
        <input type="text-area" />
        <button>
            Enviar
        </button>
      </form>
    </div>
  );
}

export default FormularioContacto;
