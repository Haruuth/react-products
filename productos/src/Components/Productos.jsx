import React from "react";
import './Producto.scss'


export const Productos = ({
  products,
  deleteProduct,
  modifyProduct,
  addProduct,
  comment,


}) => {
  return (
    <>    
    <h2>PRODUCTOS</h2>
    <div className="prod">
        {products.map((item, index) => (
        <div className="todo">
          <div className="individual" key={index}>
            <div className="images">
              <img
                onClick={() => modifyProduct(index)}
                className="modify"
                src="https://cdn-icons-png.flaticon.com/512/104/104668.png"
                alt={item.name}
              />
              <img
                onClick={() => deleteProduct(index)}
                className="borrar"
                src="https://cdn-icons-png.flaticon.com/512/75/75519.png"
                alt={item.name}
              />
            </div>
            <h4> {item.name}</h4>
            <h4>Cantidad: {item.cantidad}</h4>
          </div>
          <button className="comentar" onClick = {() => {comment(index)} }>COMENTAR</button>
          </div>
        ))}
        <div className="botoncito">
        <img
          onClick={addProduct}
          src="https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-Silhouette-PNG-Cutout.png"
          alt="addProduct"
        /> 
        </div>
      </div>
      </>
    
  );
};

