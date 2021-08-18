const ItemListContainer = (props) => {
    console.log(props);
    return (
        <div class="container">
            <p>Bienvenido {props.name}</p>
        </div>
    )
}

export default ItemListContainer