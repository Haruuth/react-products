import React from 'react'
import {useState} from "react"
export default function Comentario({guardar,producto, misProductos, open, close}) {
  const [value, setValue] = useState('');
  
  // 1- escibir
  if(!open) return null
    // 2- guardar
    //3 - clicar añadir
    // 4- d en producto


    const handleChange = (event) => {
      setValue(event.target.value);
      // console.log("mi textarea")
    }
     
    
    return (
        <div className='modal'>
          <p>{misProductos[producto].comments}</p>
           <label>
        Ingrese su mensaje:
        <textarea value={value} onChange={handleChange} />
      </label>
  
          <button onClick={() => guardar(value)}>Añadir</button>
        </div>
    )
}