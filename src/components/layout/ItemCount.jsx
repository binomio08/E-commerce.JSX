import React from "react";
import { useState } from "react";

const Itemcount = ({stock, initial, onAdd}) => {
  const [cantidad, setCantidad] = useState(initial);
  const [itemStock, setItemStock] = useState(stock);
  const [itemAdd, setItemAdd] = useState(onAdd);

  const restarUnidad = (valor) => {
    if (valor >= 0) {
      setCantidad(valor);
    }
  }
  const sumarUniadd = (valor) => {
    if (valor <= itemStock) {
      setCantidad(valor);
    }
  }
  const agregarProducto = () => {
    if (cantidad <= itemStock){
      setItemStock(itemStock - cantidad);
      setItemAdd(itemAdd + cantidad);
      }
  }

    return (

      <div className="container py-3">
        <div className="row">
          <div className="col-md-2">
            <h2 className="text-center">Producto</h2>
            <div className="input-group">
              <input type="button" className="btn btn-primary" value="-" onClick={()=> {restarUnidad(cantidad - 1)}}/>
              <input type="text" class="form-control text-center" value={cantidad} />
              <input type="button" className="btn btn-primary" value="+" onClick={()=> {sumarUniadd(cantidad + 1)}}/>
            </div>
                <div class="d-grid gap-2 pt-2">
                    <button class="btn btn-primary" type="button" onClick={() => {agregarProducto()}}>Agregar al Carrito</button>
                </div>
                <p className="text-center">Productos Seleccionados: {itemAdd}</p>
          </div>
        </div>
      </div>
    );
}
export default Itemcount;