import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom"
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { firestore } from "../firebase"

const ItemListContainer = () => {
    const [dataShow, setDataShow] = useState([])
    let [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        setDataShow([])

        const db = firestore

        const collection = db.collection("items")

        let query;

        if(id){
            query = collection.where('category', '==', id).get()

        }else{
            query = collection.get()
        }

        query
        .then((snapshot)=>{
            
            const docs = snapshot.docs

            setDataShow(docs.map(doc=>({id:doc.id,...doc.data()})))
            
        })
        .catch((error)=>{
            console.error(error)
        })

        setLoading(true)
        
    },[id])

    return (
        <div className="container">
            <div className="container-itemlist">
                {loading === false ? (
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