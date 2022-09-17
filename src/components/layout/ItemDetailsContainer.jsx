import React, { useEffect } from "react";
import { useState } from "react";
import ItemDetails from "./ItemDetails";
import {products} from "../layout/Products";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect (() =>{
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
        <div className="container">
            <ItemDetails item = {item}/>
        </div>
    )
};
export default ItemDetailContainer;