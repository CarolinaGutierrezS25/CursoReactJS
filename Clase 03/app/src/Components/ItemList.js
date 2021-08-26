import Item from "./Item";
import { useEffect, useState } from "react";

const promise = () =>{ 
    return(
        new Promise((res, rej) => {
            setTimeout(()=>{
                res([
                    {name:"Articulo1", id:"1", price:"1000", pictureUrl:"https://aws.glamour.mx/prod/designs/v1/assets/620x620/228024.jpg"},
                    {name:"Articulo2", id:"2", price:"500", pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSAp_dlxRrRJqx_aLSEL0HDsZjayObcz8Fw&usqp=CAU"},
                    {name:"Articulo3", id:"3", price:"700", pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrKulECfw1ycujtkmILHEU8bJEDLt_OHl_aA&usqp=CAU"},
                    {name:"Articulo4", id:"4", price:"950", pictureUrl:"https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/7500454836840.jpg"}
                ])
            }, 10000)
        })
    )
}

const ItemList = () => {

    const [dataShow, setDataShow] = useState([])

    useEffect(() => {
        promise().then((itms)=>{
            setDataShow(itms)
        })
    },[])    

    return ( 
        <div className="container-itemlist">
            {dataShow.length == 0 ? (
                <h3>Cargando Items ...</h3>
            ) : (
                <>
                    {dataShow.map((item)=>(<Item item={item}/>))}
                </>
            )}
        </div>
            
    )
}

export default ItemList;