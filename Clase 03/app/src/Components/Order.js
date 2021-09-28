import { useState, useContext, useEffect } from "react";
import { firestore } from "../firebase"
import firebase from "firebase/app"
import { Link } from "react-router-dom"
import { context } from "../Context/CartContext";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const Order = () => {
    const {items,  total_Iva, clear} = useContext(context)
    const db = firestore

    let [name, setName] = useState("")
    let [phone, setPhone] = useState("")
    let [email, setEmail] = useState("")
    let [address, setAdrress] = useState("")
    let [orderId, setOrderId] = useState(0)
    let [loading, setLoading] = useState(true)
    
    const handleNameChange = (event) => {
        event.preventDefault()
        setName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        event.preventDefault()
        setPhone(event.target.value)
    }

    const handleMailChange = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }

    const handleAddressChange = (event) => {
        event.preventDefault()
        setAdrress(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(false)
        let buyer = [{name : name, phone : phone, email: email}]

        const new_order = {
            buyer : buyer,
            items : items,
            date : firebase.firestore.Timestamp.fromDate(new Date()),
            total: total_Iva
        }

        console.log(new_order)

        const collection = db.collection("orders")

        const query = collection.add(new_order)

        query
        .then(({ id })=>{
            setOrderId(id)
            refreshStock()
            console.log(id)
        })
        .catch((error)=>{
            console.error(error)
        })
        .finally(()=>{
            setLoading(true)
        })
        
    }

    const refreshStock = () => {
        const collection = db.collection("items").where(firebase.firestore.FieldPath.documentId(), 'in', items.map(item => item.id))

        const query = collection.get()
        const batch = db.batch()
        query
        .then((snapshot)=>{
            const docs = snapshot.docs

            docs.forEach((doc, idx) =>{
                batch.update(doc.ref, {stock : doc.data().stock - items[idx].quantity})
            })

            batch.commit().then(clear())
        })
        .catch((error) => {
            console.error(error)
        })
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
                    orderId === 0 ? 
                    (
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <h1 className="item-title font-color">Datos de usuario</h1>
                                <div className="col-sm-12 col-md-8 col-lg-8">
                                    <div className="form-group mt-3 align-text-left">
                                        <label htmlFor="name" className="label-form">
                                        Nombre*
                                        </label>
                                        <input className="input-form" type="text" name="name" placeholder="Nombre" value={name} onChange={handleNameChange} required/>
                                    </div>
                                    <div className="form-group mt-3 align-text-left">
                                        <label htmlFor="phone" className="label-form">
                                        Telefono*
                                        </label>
                                        <input className="input-form" type="tel" name="phone" minLength="10" maxLength="10" size="10" placeholder="Telefono a 10 dígitos" value={phone} onChange={handlePhoneChange} required/>
                                    </div>
                                    <div className="form-group mt-3 align-text-left">
                                        <label htmlFor="email" className="label-form">
                                        Email*
                                        </label>
                                        <input className="input-form" type="mail" name="email" placeholder="ejemplo@gmail.com" value={email} onChange={handleMailChange}  required/>
                                    </div>
                                    <div className="form-group mt-3 align-text-left">
                                        <label htmlFor="email" className="label-form">
                                        Dirección*
                                        </label>
                                        <input className="input-form" type="text" name="address" placeholder="Calle 14" value={address} onChange={handleAddressChange} />
                                    </div>
                                    <div className="form-group mt-3 align-text-right">
                                        <button className="btn-add" type="submit">Continuar</button>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4 align-cntr">
                                    <div>
                                        <img src="/img/wolf_comp_gray.png" alt="Logo" className="logo_order"/>
                                    </div>
                                </div>

                            </div>
                            
                            
                        </form>
                    ) 
                    : 
                    (
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-4 align-cntr">
                                <span className="material-icons done_order">
                                    check_circle
                                </span>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-8 mt-3 mb-3">
                                <h1 className="item-title font-color">Correcto se ha registrado tu orden</h1>
                                <h2 className="label-form">Id de orden: {orderId}</h2>
                                <div div className="mt-5">
                                    <Link to="/"> <button className="btn-add" >Ver más Productos</button> </Link> 
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
     );
}
 
export default Order;