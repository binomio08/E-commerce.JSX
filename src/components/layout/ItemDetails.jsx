import React from "react";

function ItemDetails({nombre, imagen, precio}) {
  return (
    <div className="row mt-3">
        <div className="col-md-4 py-4">
      <div className="card cardImg">
        <img src={imagen} className="card-img-top"  alt={nombre} />
        <div className="card-body">
          <h5 className="card-title text-center">
            <b>{nombre}</b>
          </h5>
          <p className="card-text text-center">U${precio}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ItemDetails;
