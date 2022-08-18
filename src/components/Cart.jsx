import React from 'react'

const Cart = ({currentCart, setCurrentCart}) => {
    return (
        <div>
            this is your cart
            <ul> {currentCart.map(({item_name, img_url, price}) => {
               return <li key={item_name}> 
               <h3>{item_name}</h3>
               <img className="item__image" src={img_url} alt={item_name}/>
               <p>£{price/100}</p>
               <button>Delete this item</button>
               </li>
            })}
            </ul>
        </div>
    )
}

export default Cart
