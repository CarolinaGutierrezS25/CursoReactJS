import { Link } from "react-router-dom";

const Item = ({item}) => {
    let ref = "/item/"+item.id
    return ( 
            <div class="col-6">
                <Link to={ref}>
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
                </Link>
            </div>        
    );
}
 
export default Item;