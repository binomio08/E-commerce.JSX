import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { customFecth } from "./CustomFetch";
import ItemList from "./ItemList";


function ItemListContainer ()  {
    const [items, setItems] = useState([]);
    const{categoria} = useParams()
    
    useEffect(() => {
        if(!categoria){
        customFecth().then(response => {
            setItems(response)})
        } else {
        customFecth().then(r => {
            setItems(r.filter(st => st.categoria === categoria))
        })
        }
    }, [categoria])

    return(
        <div className="container my-5">
            <ItemList  items={items}/>
        </div>
    )
}

export default ItemListContainer;