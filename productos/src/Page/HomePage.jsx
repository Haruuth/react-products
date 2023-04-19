import React from "react";
import { Productos } from "../Components/Productos";
import { useState } from "react";
import Comentario from "../Components/Comentario";




export const HomePage = () => {
  

  const myProducts = [
    {
      name: "WebCam",
      cantidad: 5,
    },
    {
      name: "Monitor",
      cantidad: 5,
    },
    {
      name: "Tarjeta gráfica",
      cantidad: 5,
    },
  ];

  const [misProductos, setMisProductos] = useState(myProducts);
  const [isOpen, setIsOpen] = useState(false);

  const modifyProduct = (index) => {
    const listaModificada = [...misProductos];
    listaModificada[index].name = prompt("Elige el nombre");
    listaModificada[index].cantidad = prompt("Elige la cantidad");
    setMisProductos(listaModificada);
  };

  const addProduct = () => {
    let nombre;
    nombre = prompt("Elige el nombre");
    let cantidad;
    cantidad = prompt("Elige la cantidad");
    const nuevaLista = [...misProductos];
    nuevaLista.push({ name: nombre, cantidad: cantidad });
    setMisProductos(nuevaLista);
  };

  const deleteProduct = (indice) => {
    const eliminado = misProductos.filter((item, index) => {
      return indice !== index;
    });
    setMisProductos(eliminado);
  };

  return (
    <div>
      <Productos
        addProduct={addProduct}
        modifyProduct={modifyProduct}
        deleteProduct={deleteProduct}
        products={misProductos}
        close={setIsOpen}
      ></Productos>
      

      
    <Comentario open = {isOpen} close = { () => setIsOpen(false)} ></Comentario>
       {/* <div className="bot-style">
         <button onClick = {() => setIsOpen(true) }> Comentar </button>
       </div>
       <div className="bot-style2">
         Otro contenido / Other content
       </div> */}
    
    </div>
  );
}
