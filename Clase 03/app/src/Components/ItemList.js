import Item from "./Item";

const ItemList = ({dataShow}) => {
    return ( 
        <div className="row">
            {dataShow.map((item)=>(<Item item={item}/>))}
        </div>
            
    )
}

export default ItemList;