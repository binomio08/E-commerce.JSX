import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import {products} from './Products';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    
useEffect(() => {
        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
            console.log(respuesta);
        });
    }, []);

    return(
        <div className="container">
            <ItemList  items={items}/>
        </div>
    )
}

export default ItemListContainer;