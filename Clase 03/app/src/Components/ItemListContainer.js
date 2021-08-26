import ItemList from "./ItemList";
const ItemListContainer = (props) => {
    console.log(props);
    
    return (
        <div className="container">
            <p>Bienvenido {props.name}</p>
            <ItemList/>
            
        </div>
    )
}

export default ItemListContainer