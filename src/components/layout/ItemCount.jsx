import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "./Contex";

const ItemCount = ({props}) => {
  const {item} = props;
    const {cart, setCart, addItem} = useContext(CartContext);
    const [counter, setCounter] = useState(props.initial);
    const [itemStock, setItemStock] = useState(5);

    const restarUnidad = (valor) => {
      if (valor > 0) {
          setCounter(valor);
      }
  }

  const sumarUniadd = (valor) => {
      if (valor <= itemStock) {
          setCounter(valor);
      }
  }

  const agregarProducto = () => {
      if (counter <= itemStock) {
          addItem(item, counter);
          setItemStock(itemStock - counter);
      }   
  }

    return (
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="input-group">
              <input type="button" className="btn btn-primary" value="-" onClick={()=> {restarUnidad(counter - 1)}}/>
              <p className="estadoContador ">{counter}</p>
              <input type="button" className="btn btn-primary" value="+" onClick={()=> {sumarUniadd(counter + 1)}}/>
            </div>
                <div className="d-grid gap-2 pt-2">
                    <input className="btn btn-primary" type="button"  value="Agregar al Carrito" onClick={() => {agregarProducto()}}/>
                </div>
          </div>
        </div>
    );
}
export default ItemCount;