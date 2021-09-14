import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {useParams} from "react-router-dom"

const URI_CONSULT = "https://mocki.io/v1/c3e2085a-d561-4b8b-9876-0a92aa423fc5"

const getItems = (id) =>{ 
    return(
        new Promise((res, rej) => {
            setTimeout(()=>{
                fetch(URI_CONSULT).then(response => response.json())
                .then((itms)=>{  res(itms.find(itms => itms.id  === id)) })
            }, 2000)
        })
    )
}

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [dataShow, setDataShow] = useState([])

    useEffect(() => {
        getItems(id).then((itm)=>{
            setDataShow(itm)
        })
    },[])  
    return ( 
        <div className="container-itemDetail">
            {dataShow.length === 0 ? (
                <div>
                    <Loader type="Grid" color="#7a36ff" height={80} width={80}/>
                </div>
            ) : (
                <>
                    <ItemDetail item={dataShow} />
                </>
            )}
        </div>
     );
}
 
export default ItemDetailContainer;