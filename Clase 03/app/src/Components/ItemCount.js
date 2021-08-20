import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    let [count, setCount] = useState(initial)

    const sum = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }
    const subs = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }
    const add = () => {
        if(stock > 0){
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