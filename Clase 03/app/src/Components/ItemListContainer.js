import ItemDetailContainer from "./ItemDetailContainer";
import ItemList from "./ItemList";
const ItemListContainer = (props) => {
    console.log(props);
    
    return (
        <div className="container">
            <p>Bienvenido {props.name}</p>
            <ItemDetailContainer/>
        </div>
    )
}

export default ItemListContainer