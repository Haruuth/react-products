import React from "react";
import { Productos } from "../Components/Productos";
import { useState } from "react";
import Comentario from "../Components/Comentario";




export const HomePage = () => {
  const myProducts = [
    {
      name: "WebCam",
      cantidad: 5,
      comments: [],
    },
    {
      name: "Monitor",
      cantidad: 5,
      comments: [],
    },
    {
      name: "Tarjeta gráfica",
      cantidad: 5,
      comments: [],
    },
  ];

  const [misProductos, setMisProductos] = useState(myProducts);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  

    const saveComment = (value) => {
    const listaModificada = [...misProductos];
    listaModificada[selectedProduct].comments.push(value);
    setMisProductos(listaModificada);
    console.log(listaModificada)
  };

  const modifyProduct = (index) => {
    const listaModificada = [...misProductos];
    listaModificada[index].name = prompt("Elige el nombre");
    listaModificada[index].cantidad = prompt("Elige la cantidad");
    setMisProductos(listaModificada);
  };

  const addComment = (index) => {
    // 1- abrir modal
    setIsOpen(true);
    // 2 - guardar el index
    setSelectedProduct(index);
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
      <Comentario
        misProductos={misProductos}
        producto={selectedProduct}
        guardar={saveComment}
        open={isOpen}
        close={() => setIsOpen(false)}
      ></Comentario>
      
      <Productos
        addProduct={addProduct}
        modifyProduct={modifyProduct}
        deleteProduct={deleteProduct}
        products={misProductos}
        comment={addComment}
      ></Productos>

    </div>
  );
};
