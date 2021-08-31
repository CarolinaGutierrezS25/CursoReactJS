const ItemDetail = ({item}) => {
    return ( 
        <div className="card-item-detail">
            <div className="img-section-detail">
                <img src={item.pictureUrl} alt="Producto" />
            </div>
            <div className="details-section">
                <h1 className="item-title font-color">{item.name}</h1>
                <h2 className="item-title">Características</h2>
                <ul>
                    <li> <h3 className="item-title display-title">Categoria: <p className="font-color m-0"> {item.category}</p> </h3> </li>
                    <li> <h3 className="item-title display-title">Color: <p className="font-color m-0"> {item.color}</p> </h3> </li>
                    <li> <h3 className="item-title display-title">Talla: <p className="font-color m-0"> {item.talla}</p> </h3> </li>
                    <li> <h3 className="item-title display-title">Stock: <p className="font-color m-0"> {item.stock}</p> </h3> </li>
                </ul>
                <h2 className="item-title font-color">$ {item.price} MXN</h2>
                <button className="btn-detail-add">Agregar al Carrito</button>
            </div>
        </div> 
     );
}
 
export default ItemDetail;