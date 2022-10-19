import { useContext } from "react"
import { postToAPI } from "../API"
import { UserContext } from '../contexts/user'

const ItemList = ({items}) => {
    const {currentUser} = useContext(UserContext)
    const addToBasket = (event) => {
        return postToAPI(`users/${currentUser}/basket`, event.target.value)
    }

    return (
        <div className="item-wrapper">
            <ul className="list-container">
            {items.map((item) => {
                return <li className="list-item" key={item.item_id}> 
                    <h3>- {item.item_name} -</h3>
                    <img className="item__image" src={item.img_url} alt={item.item_name}/>
                    <p>{item.description}</p>
                    <p>£{item.price/100}</p>
                    <button onClick={addToBasket} value={item.item_id}>Add to your Cart </button>
                </li>

            })}
            </ul>
        </div>
       
    )
}

export default ItemList
