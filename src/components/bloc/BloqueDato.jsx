import "../../styles/bloc/bloquedato.css"

function BloqueDato({colorFondo}) {
  return (
    <div className="bloque__dato slide-right" style={{background:colorFondo}}>
        <h3>100k</h3>
        <p>lorem</p>
    </div>
  )
}

export default BloqueDato