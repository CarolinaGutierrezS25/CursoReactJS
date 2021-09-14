import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom"
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const promise = () =>{ 
    return(
        new Promise((res, rej) => {
            setTimeout(()=>{
                res([
                    {"name":"Green Crop","id":"1","price":"1000","pictureUrl":"https://aws.glamour.mx/prod/designs/v1/assets/620x620/228024.jpg","category":"Casual", "category_id":1,"color":"green","stock":"20","talla":"Unitalla"},
                    {"name":"Pink Shirt","id":"2","price":"500","pictureUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSAp_dlxRrRJqx_aLSEL0HDsZjayObcz8Fw&usqp=CAU","category":"Formal","category_id":2,"color":"pink","stock":"15","talla":"Unitalla"},
                    {"name":"Blue Casual Shirt","id":"3","price":"700","pictureUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrKulECfw1ycujtkmILHEU8bJEDLt_OHl_aA&usqp=CAU","category":"Formal","category_id":2,"color":"blue","stock":"10","talla":"Unitalla"},
                    {"name":"Navy Shirt","id":"4","price":"950","pictureUrl":"https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/7500454836840.jpg","category":"Casual", "category_id":1,"color":"navy","stock":"5","talla":"Unitalla"}
                ])
            }, 2000)
        })
    )
}

const ItemListContainer = () => {
    const [dataShow, setDataShow] = useState([])
    const {id} = useParams()

    useEffect(() => {
        setDataShow("")
        promise().then((itms)=>{
            if(id){
                const aux = itms.filter(element => element.category === id)
                setDataShow(aux)
            }else{
                setDataShow(itms)
            }
        })
    },[id])

    return (
        <div className="container">
            <div className="container-itemlist">
                {dataShow.length === 0 ? (
                    <div>
                        <Loader type="Grid" color="#7a36ff" height={80} width={80}/>
                    </div>
                ) : (
                    <>
                        <ItemList dataShow={dataShow}/>
                    </>
                )}
            </div>
        </div>
    )
}

export default ItemListContainer