import React, { useContext, useEffect, useState } from 'react'
import {getAPI, deleteFromAPI} from '../API'
import { UserContext } from '../contexts/user'

const Cart = () => {
    const {currentUser} = useContext(UserContext)
    const [currentCart, setCurrentCart] = useState([])

    useEffect(() => {
        const endpoint = `users/${currentUser}/basket`
        getAPI(endpoint).then(({items}) => {
            setCurrentCart(items);
        })    
    }, [currentCart])

    const deleteItem = (event) => {
        const endpoint = `users/${currentUser}/basket/${event.target.value}`
        
        return deleteFromAPI(endpoint)
        .then(setCurrentCart(
            currentCart.filter((item) => event.target.value !== item.item_id)
        ))
    }


    if(currentUser) {return (
        <div>
            this is your cart
            <ul> {currentCart.map(({item_name, img_url, price, item_id}) => {
               return <li key={item_name}> 
               <h3>{item_name}</h3>
               <img className="item__image" src={img_url} alt={item_name}/>
               <p>£{price/100}</p>
               <button onClick={deleteItem} value={item_id}>Delete this item</button>
               </li>
            })}
            </ul>
        </div>
    )} else return
}

export default Cart
