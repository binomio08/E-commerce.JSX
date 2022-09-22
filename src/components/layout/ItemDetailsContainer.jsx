import React, { useEffect } from "react";
import { useState } from "react";
import ItemDetails from "./ItemDetails";
import products from "./Products"
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
    const {id} = useParams()
    const [item, setItem] = useState({})

    useEffect (() =>{
        const getProductos = new Promise((resolve) => {
            setTimeout(() =>{
                resolve(products.find(producto => producto.id === id) || []);
            }, 2000)
        })
        
        getProductos.then((respuesta) =>{
            setItem(respuesta);
        });
    }, [id]);

    return (
        <div className="container">
            <ItemDetails  item={item}/>
        </div>
    )
};
export default ItemDetailContainer;