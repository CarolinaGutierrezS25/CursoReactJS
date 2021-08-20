import ItemCount from "./ItemCount";
const ItemListContainer = (props) => {
    console.log(props);
    return (
        <div class="container">
            <p>Bienvenido {props.name}</p>
            <ItemCount stock={5} initial={1} onAdd={(c)=>{console.log(c)}}/>
        </div>
    )
}

export default ItemListContainer