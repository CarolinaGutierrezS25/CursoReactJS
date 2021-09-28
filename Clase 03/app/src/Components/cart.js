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
    const {items, removeItem, clear, calculate_Iva, calculate_total, total_Iva, envio, iva} = useContext(context)
    
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

    useEffect(() => {
        calculate_Iva(total)
    },[total])
    
    useEffect(() => {
        calculate_total(total)
    },[iva])

    const delete_itm = (id, e) => {
        e.stopPropagation()
        removeItem(id)
    }

    

    return ( 
        <div className="container mt-5 mb-5">
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
                                    <div className="row mt-3 mb-3">
                                        <div className="col-12">
                                            <button className="btn-delete btn-clear" onClick={(e) => clear(e)}>
                                                <h3 className="item-title mb-0">Vaciar Carrito</h3>
                                                <span className="material-icons material-i color-p">delete</span>
                                            </button>
                                        </div>
                                    </div>
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
                                    <div className="row"> 
                                        <div class="col-12">
                                            <h1 className="item-title font-color mb-3">Detalle de compra</h1>
                                            <ul>
                                                <li className="detail_li"><span>Costo de Artículos:</span><span className="span_right"> {total} MXN</span></li>
                                                <li className="detail_li"><span>IVA (16%): </span><span className="span_right">{iva} MXN</span></li>
                                                <li className="detail_li"><span>Envío: </span> <span className="span_right">{envio} MXN</span></li>
                                                <li className="detail_li"><span className="item-title font-color a_left">Total a pagar: </span> <span className="item-title span_right">{total_Iva} MXN</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-12 mt-3">
                                            <div div className="mt-3">
                                                <Link to="/order"> <button className="btn-add" >Pagar</button> </Link> 
                                            </div>
                                        </div> 
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