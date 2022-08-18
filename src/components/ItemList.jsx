import {Link} from "react-router-dom"

const ItemList = ({items, currentCart, setCurrentCart}) => {

    return (
        <div>
            <ul>
            {items.map((item) => {
                return <li key={item.item_id}> 
                <h3>{item.item_name}</h3>
                <img className="item__image" src={item.img_url} alt={item.item_name}/>
                <p>{item.description}</p>
                <p>£{item.price/100}</p>
                <button onClick={(() => {
                    setCurrentCart([...currentCart, item])
                })}>Add to your Cart </button>
                </li>

            })}
            </ul>
        </div>
       
    )
}

export default ItemList
