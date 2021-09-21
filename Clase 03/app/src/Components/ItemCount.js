import { useState } from "react";



const ItemCount = ({stock, initial, onAdd}) => {
    let [count, setCount] = useState(initial)

    const sum = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if(count < stock){
            setCount(count + 1)
        }
    }
    const subs = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if(count > 1){
            setCount(count - 1)
        }
    }
    const add = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if(stock > 0 && count <= stock){
            onAdd(count)
        }
    }


    return ( 
         <div>
             <div className="container-item-count">
                <button className="btn-operation" onClick={subs}>-</button>
                <p className="text-count"> {count} </p>
                <button className="btn-operation" onClick={sum}>+</button>
            </div>
             <button className="btn-add" disabled={stock>0 ? false:true} onClick={add}>Agregar al carrito</button>
         </div>
     );
}
 
export default ItemCount;