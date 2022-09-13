import React, { useEffect } from "react";
import { useState } from "react";
import ItemDetails from "./ItemDetails";
import ofimatica from "../assets/ofimatica.jpeg"
import intel from "../assets/intel.jpeg"
import rysen from "../assets/rysen.png"
import amd from "../assets/amd.webp"
import nvidia from "../assets/nvidia.jpeg"
import samsung from "../assets/samsung.jpeg"
import gigabyte from "../assets/gigabyte.jpeg"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect (() =>{
        const products = [
            {"id":1, "nombre":"PC Ofimatica", "imagen":{ofimatica}, "precio":"200"},
            {"id":2, "nombre":"PC Gamer Intel", "imagen":{intel}, "precio":"400"},
            {"id":3, "nombre":"PC Gamer AMD", "imagen":{rysen}, "precio":"390"},
            {"id":4, "nombre":"Placa de Video AMD", "imagen":{amd}, "precio":"800"},
            {"id":5, "nombre":"Placa de Video Nvidia", "imagen":{nvidia}, "precio":"1200"},
            {"id":6, "nombre":"Monitor Samsung 27'", "imagen":{samsung}, "precio":"150"},
            {"id":7, "nombre":"Monitor Gigabyte 27'", "imagen":{gigabyte}, "precio":"250"},
        ];
        const getProduct = () =>
        new Promise ((res, rej) => {
            const producto = products.find( (prod)=> prod.id === 1)
            setTimeout (() =>{
                res(producto)
            }, 2000);          
        });

        getProduct()
        .then((info) =>{
            setItem(info)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [])
    return (
        <div>
            <ItemDetails item = {item}/>
        </div>
    )
};
export default ItemDetailContainer;