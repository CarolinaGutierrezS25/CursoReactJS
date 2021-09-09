import Item from "./Item";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



const ItemList = ({dataShow}) => {
    return ( 
        <div className="container-itemlist">
            {dataShow.length == 0 ? (
                <div>
                    <Loader type="Grid" color="#7a36ff" height={80} width={80}/>
                </div>
            ) : (
                <>
                    {dataShow.map((item)=>(<Item item={item}/>))}
                </>
            )}
        </div>
            
    )
}

export default ItemList;