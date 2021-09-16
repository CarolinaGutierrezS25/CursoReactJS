import { createContext, useState } from "react";

export const context = createContext()

const {Provider} = context

const CartContext = ({children}) => {
    const [items, setItems] = useState([])
    let items_aux = [...items]

    const addItem = (item, quantity) => {
        const item_custom = {...item, "quantity":quantity}
        if(!isInCart(item.id)){
            items_aux.push(item_custom)
        }else{
            let item_pop = items_aux.pop(items.find(items => items.id  === item.id))
            console.log(item.stock)
            if( (item_pop.quantity + quantity) <= item.stock){
                item_pop.quantity = item_pop.quantity + quantity
            }else{
                item_pop.quantity = item.stock
            }
            items_aux.push(item_pop)
        }
        console.log(items_aux)
        setItems(items_aux)
        
    }

    const removeItem = (itemId) => {
        items_aux.pop(items.find(items => items.id  === itemId))
        setItems(items_aux)
    }

    const clear = ()=>{
        items_aux = []
        setItems(items_aux)
    }

    const isInCart = (id) => {
        if(items.find(items => items.id  === id)){
            return true
        }else{
            return false
        }
    }

    return(
        <Provider value={{items, addItem}}>
            {children}
        </Provider>
    );
}
 
export default CartContext;