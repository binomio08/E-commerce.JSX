import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./Contex";
import { Link } from "react";
import carrito from "../imagenes/carrito.svg";

const CartWidget = () => {
    const {cart} = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let total_items = cart.reduce((total, item) => total+=item.cantidad, 0);
        setTotal(total_items);
    }, [cart]);

    return (
        <Link to={"/cart"}>
            <button type="button" className="btn fondo_naranja position-relative">
                <img src={carrito} alt="Carrito" />
                <span>{total}</span>
            </button>
        </Link>
    )
}

export default CartWidget;