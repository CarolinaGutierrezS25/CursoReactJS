import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom"


const Button = ({item}) => {
    let [quantity, setQuantity] = useState(0)

    const onAdd = (quantityToAdd) =>{
        console.log(quantityToAdd)
        setQuantity(quantityToAdd)
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
                        <Link to="/cart"> <button className="btn-add" >Terminar compra</button> </Link> 
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