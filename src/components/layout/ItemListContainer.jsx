import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import ofimatica from "../assets/ofimatica.jpeg"
import intel from "../assets/intel.jpeg"
import rysen from "../assets/rysen.png"
import amd from "../assets/amd.webp"
import nvidia from "../assets/nvidia.jpeg"
import samsung from "../assets/samsung.jpeg"
import gigabyte from "../assets/gigabyte.jpeg"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    
useEffect(() => {
        const productos = [
            {"id":1, "nombre":"PC Ofimatica", "imagen":{ofimatica}, "precio":"200"},
            {"id":2, "nombre":"PC Gamer Intel", "imagen":{intel}, "precio":"400"},
            {"id":3, "nombre":"PC Gamer AMD", "imagen":{rysen}, "precio":"390"},
            {"id":4, "nombre":"Placa de Video AMD", "imagen":{amd}, "precio":"800"},
            {"id":5, "nombre":"Placa de Video Nvidia", "imagen":{nvidia}, "precio":"1200"},
            {"id":6, "nombre":"Monitor Samsung 27'", "imagen":{samsung}, "precio":"150"},
            {"id":7, "nombre":"Monitor Gigabyte 27'", "imagen":{gigabyte}, "precio":"250"},
        ];

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
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