import React from "react";
import { useState } from "react";
import "./Comentario.scss";

export default function Comentario({
  guardar,
  producto,
  misProductos,
  open,
  close,
}) {
  const [value, setValue] = useState("");
  
//   const [showModal, setShowModal] = useState(false);
  
// const openModal = (index) => {
//   setShowModal(true);
//   setSelectedProduct(index);
// };

// const closeModal = () => {
//   setShowModal(false);
// };



  // 1- escibir
  if (!open) return null;
  // 2- guardar
  //3 - clicar añadir
  // 4- d en producto

  const handleChange = (event) => {
    setValue(event.target.value);
    // console.log("mi textarea")
  };

  return (
    <div className="modal">
      <div>
        <div className="encabezado">
          <button onClick={() => close(false)}>Cerrar</button>
          <h4>Comentarios</h4>
        </div>
        <ul>
          {misProductos[producto].comments.map((comment, index) => (
            <>
              <li key={index}>{comment}</li>
              <div className="linea"></div>
            </>
          ))}
        </ul>
        <h4>Añade un comentario</h4>
        <label>
          <textarea value={value} onChange={handleChange} />
        </label>

        <button onClick={() => guardar(value)}>Añadir</button>
      </div>
    </div>
  );
}
