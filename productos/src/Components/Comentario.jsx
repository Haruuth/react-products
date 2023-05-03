import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Comentario.scss";

export default function Comentario({
  guardar,
  producto,
  misProductos,
  open,
  close,
  eliminar
}) {
  const [value, setValue] = useState("");
  const commentsRef = useRef(null);

  useEffect(() => {
    if (commentsRef.current) {
      // Ajusta la altura de la modal según la altura de la sección de comentarios
      const modal = commentsRef.current.closest(".modal");
      modal.style.height = `${commentsRef.current.scrollHeight + 200}px`;
    }
  }, [misProductos]);
  
//   const [showModal, setShowModal] = useState(false);
  
// const openModal = (index) => {
//   setShowModal(true);
//   setSelectedProduct(index);
// };

// const closeModal = () => {
//   setShowModal(false);
// };

const handleSubmit = () => {
  guardar(value);
  setValue("");
};

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
      <div ref={commentsRef}>
        <div className="encabezado">
          <button onClick={() => close(false)}>Cerrar</button>
          <h4>Comentarios</h4>
        </div>
        <ul>
          {misProductos[producto].comments.map((comment, index) => (
            <React.Fragment key={index}>
              <li>{comment}
              
                <img className="eliminar" src="https://cdn-icons-png.flaticon.com/512/6372/6372150.png" alt="eliminar" 
                onClick={() => eliminar(producto, index)}
                />
              
              <div className="linea"></div>
              </li>
              </React.Fragment>
          ))}
        </ul>
        <h4>Añade un comentario</h4>
        <label>
          <textarea value={value} onChange={handleChange} />
        </label>

        {/* <button onClick={() => guardar(value)}>Añadir</button> */}
        <button onClick={handleSubmit}>Añadir</button>
      </div>
    </div>
  );
}
