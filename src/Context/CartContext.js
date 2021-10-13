import { createContext, useState } from "react";

export const context = createContext()

const {Provider} = context

const CartContext = ({children}) => {
    const [items, setItems] = useState([])
    const [iva, setIva] = useState(0)
    const [total_Iva, setTotal_Iva] = useState(0)
    let [quantity, setQuantity] = useState(0)
    const envio = 130
    
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
        setItems(items_aux)
    }

    const removeItem = (itemId) => {
        setItems(items.filter(item => item.id !== itemId))
    }

    const clear = ()=>{ 
        setItems([])
    }

    const isInCart = (id) => {
        if(items.find(items => items.id  === id)){
            return true
        }else{
            return false
        }
    }

    const calculate_Iva = (total) => {
        let calc_iva = total * .16;
        setIva(calc_iva)
    }

    const calculate_total = (total) => {
        let calc_total = total + iva + envio;
        setTotal_Iva(calc_total)
    }

    const get_total_items = () =>{
        if(items.length >= 0){
            let quantity_ = 0;
            items.forEach(((element) => {
                quantity_ += element.quantity;
            }))
            setQuantity(quantity_)
        }
    }

    return(
        <Provider value={{items, addItem, removeItem, clear, calculate_Iva, calculate_total, get_total_items, total_Iva, envio, iva, quantity}}>
            {children}
        </Provider>
    );
}
 
export default CartContext;