import { Link } from "react-router-dom"
import { useState, useContext, useEffect } from "react";
import { context } from "../Context/CartContext";

const CartWidget = () => {
    const {items} = useContext(context)
    
    let [quantity, setQuantity] = useState(0)

    useEffect(() => {
        if(items.length >= 0){
            let quantity_ = 0;
            items.forEach(((element) => {
                quantity_ += element.quantity;
            }))
            setQuantity(quantity_)
        }
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