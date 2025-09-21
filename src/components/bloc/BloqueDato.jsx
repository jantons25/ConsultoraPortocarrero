import "../../styles/bloc/bloquedato.css";
import "../../styles/bloc/btnuno.css";

function BloqueDato({ colorFondo }) {
  /*slide-right*/
  return (
    <div className="bloque__dato btn-hover" style={{ background: colorFondo }}>
      <h3>100k</h3>
      <p>lorem</p>
    </div>
  );
}

export default BloqueDato;
