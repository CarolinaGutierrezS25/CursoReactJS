import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { context } from "../Context/CartContext";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const promise = () =>{ 
    return(
        new Promise((res, rej) => {
            setTimeout(()=>{
                res(true)
            }, 2000)
        })
    )
}


const Cart = () => {
    const {items, removeItem} = useContext(context)
    
    let [quantity, setQuantity] = useState(0)
    let [total, setTotal] = useState(0)
    let [loading, setLoading] = useState(false)

    useEffect(() => {
        if(items.length >= 0){
            let total_ = 0;
            let quantity_ = 0;
            items.forEach(((element) => {
                total_ += element.price * element.quantity;
                quantity_ += element.quantity;
            }))
            setQuantity(quantity_)
            setTotal(total_)
        }
        promise().then((band)=>{
            setLoading(band)
        })
    },[items])
    
    const delete_itm = (id, e) => {
        e.stopPropagation()
        removeItem(id)
    }

    return ( 
        <div className="container">
            <div className="container-itemlist">
                {loading === false ?
                    (
                        <div>
                            <Loader type="Grid" color="#7a36ff" height={80} width={80}/>
                        </div>
                    ) 
                    : 
                    (
                        quantity === 0 ? 
                        (   
                            <>
                                <h1 className="item-title font-color">Tu carrito esta vacío</h1>
                                <div div className="mt-5">
                                    <Link to="/"> <button className="btn-add" >Ver Productos</button> </Link> 
                                </div>
                            </>
                        ) 
                        : 
                        (   
                            <div className="row align-cntr">
                                <div className="col-sm-8 col-md-8 col-lg-8">
                                    <div className ="row">
                                        {items.map((item)=>(
                                            <div className="col-12">
                                                <div className="card-item-cart">
                                                    <div className="row align-cntr">
                                                        <div className ="col-5">
                                                            <div className="img-section">
                                                                <img src={item.pictureUrl} alt="Producto" />
                                                            </div>
                                                        </div>
                                                        <div className="col-5">
                                                            <div>
                                                                <h3 className="item-title">{item.name}</h3>
                                                            </div>
                                                            
                                                            <div>
                                                                <span> Precio: ${item.price} MXN</span>
                                                            </div>
                                                            <div>
                                                                <span> Piezas: {item.quantity}</span>
                                                            </div>
                                                            <div>
                                                                <span> Talla: {item.talla}</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-2">
                                                            <button className="btn-delete" onClick={(e) => delete_itm(item.id, e)}>
                                                                <span className="material-icons material-i color-p">delete</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-sm-8 col-md-4 col-lg-4">
                                    <h1 className="item-title font-color">Total a pagar: </h1>
                                    <h4>{total} MXN</h4>
                                    <div div className="mt-5">
                                        <Link to="/"> <button className="btn-add" >Pagar</button> </Link> 
                                    </div>
                                </div>
                                
                            </div>
                        ) 
                    )
                }
            </div> 
        </div> 
    );
}
 
export default Cart;