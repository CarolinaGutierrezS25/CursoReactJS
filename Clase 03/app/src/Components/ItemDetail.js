import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import { context } from "../Context/CartContext";



const Button = ({item}) => {
    let [quantity, setQuantity] = useState(0)

    const {items, addItem} = useContext(context)
    //console.log(items)

    const onAdd = (quantityToAdd) =>{
        setQuantity(quantityToAdd)
        addItem(item, quantityToAdd)
    }
    
    return(
        <>
            {quantity === 0 ?
                (
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                ) 
                : 
                (
                    <div div className="mt-5">
                        <Link to="/cart"> <a className="btn-add">Terminar compra</a> </Link> 
                    </div>
                )
            }
        </>
    );
}


const ItemDetail = ({item}) => {
    

    return ( 
        <div className="card-item-detail">
            <div className="img-section-detail">
                <img src={item.pictureUrl} alt="Producto" />
            </div>
            <div className="details-section">
                <h1 className="item-title font-color">{item.name}</h1>
                <h2 className="item-title">Características</h2>
                <ul>
                    <li> <h3 className="item-title display-title">Categoria: <p className="font-color m-0"> {item.category}</p> </h3> </li>
                    <li> <h3 className="item-title display-title">Color: <p className="font-color m-0"> {item.color}</p> </h3> </li>
                    <li> <h3 className="item-title display-title">Talla: <p className="font-color m-0"> {item.talla}</p> </h3> </li>
                    <li> <h3 className="item-title display-title">Stock: <p className="font-color m-0"> {item.stock}</p> </h3> </li>
                </ul>
                <h2 className="item-title font-color">$ {item.price} MXN</h2>
                <Button item={item}/>
            </div>
        </div> 
     );
}
 
export default ItemDetail;