import Item from "./Item";

const ItemList = ({dataShow}) => {
    return ( 
        <div>
            {dataShow.map((item)=>(<Item item={item}/>))}
        </div>
            
    )
}

export default ItemList;