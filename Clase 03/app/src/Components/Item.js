const Item = ({item}) => {
    console.log(item)
    return ( 
        <a key={item.id} href="#">
            <div className="card-item">
                <div>
                    <h3 className="item-title">{item.name}</h3>
                </div>
                <div className="img-section">
                    <img src={item.pictureUrl} alt="Producto" />
                </div>
                <div>
                    <p>$ {item.price} MXN</p>
                </div>
            </div> 
        </a>
    );
}
 
export default Item;