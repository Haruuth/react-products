import React from 'react'
export default function Comentario({children, open, close}) {
    if(!open) return null
    return (
        <div>
          <div><button onClick={close}>CERRAR</button> </div>
          {children}
          <textarea></textarea>
          <button>Añadir</button>
        </div>
    )
}