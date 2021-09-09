import { Link } from "react-router-dom"

const CartWidget = () => {
    return(
        <>
            <Link className="nav-link" to="/">
                <span className="material-icons material-i">shopping_cart</span>
            </Link>
        </>
    )

}

export default CartWidget