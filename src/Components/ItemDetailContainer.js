import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {useParams} from "react-router-dom"
import { firestore } from "../firebase"


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [dataShow, setDataShow] = useState([])
    let [loading, setLoading] = useState(false)
    

    useEffect(() => {
        setDataShow([])

        const db = firestore

        const collection = db.collection("items")

        const query = collection.doc(id).get()

        query
        .then((doc)=>{
                        
            setDataShow({id:doc.id,...doc.data()})
            
        })
        .catch((error)=>{
            console.error(error)
        })

        setLoading(true)
        
    },[])

    return ( 
        <div className="container-itemDetail">
            {loading === false ? (
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