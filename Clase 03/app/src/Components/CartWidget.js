import { Link } from "react-router-dom"
import { useState, useContext, useEffect } from "react";
import { context } from "../Context/CartContext";

const CartWidget = () => {
    const {items, quantity, get_total_items} = useContext(context)
    

    useEffect(() => {
        get_total_items()
    },[items])

    return(
        <div hidden={quantity === 0 ? true : false} >
            <Link className="nav-link" to="/cart">
                <span className="material-icons material-i">shopping_cart</span>
                <span className="counter-items">{quantity}</span>
            </Link>
        </div>
    )

}

export default CartWidget