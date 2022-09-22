import React from "react";
import ItemCount from "./ItemCount";
import {CartContext} from "./Contex";
import { useContext } from "react";
import { useState } from "react";


const ItemDetails = ({item})  => {
  const {addItem} = useContext(CartContext)
  const [counter, setCounter] = useState(0)
  const onAdd = (item, counter) => {
    setCounter(counter);
    addItem(item, counter)
  }
  return (
    <div className="row mt-3">
        <div className="col-md-4 py-4">
      <div className="card cardImg">
        <img src={item.imagen} className="card-img-top"  alt={item.nombre} />
        <div className="card-body">
          <h5 className="card-title text-center">
            <b>{item.nombre}</b>
          </h5>
          <p className="card-text text-center">U${item.precio}</p>
        </div>
        <ItemCount stock={item.stock} initial={1}  onAdd={onAdd} counter={counter} setcounter={setCounter} item={item}/>
      </div>
      </div>
    </div>
  );
};

export default ItemDetails;
