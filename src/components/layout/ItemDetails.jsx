import React from "react";

const ItemDetails = ({ item }) => {
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
      </div>
      </div>
    </div>
  );
};

export default ItemDetails;
