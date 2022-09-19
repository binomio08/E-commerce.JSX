import React, { useEffect } from "react";
import { useState } from "react";
import ItemDetails from "./ItemDetails";
import {productsId} from "./CustomFetch";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {

    const [item, setItem] = useState({})

    const {id} = useParams()

    useEffect (() =>{
        productsId(id).then(response => {
            setItem(response)
        })
    }, [id])
    return (
        <div className="container">
            <ItemDetails  {...item}/>
        </div>
    )
};
export default ItemDetailContainer;