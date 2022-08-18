import {getAPI} from "../API"
import React from "react"
import {useEffect, useState} from "react"
import ItemList from "./ItemList"


function Homepage ({currentCart, setCurrentCart}) {
const [itemList, setItemList] = useState([])

    useEffect(() => {
        getAPI().then((items)=> {
      
        setItemList(items.items)
    }) 
}, [])
return <div>Hello
        <ItemList items={itemList} currentCart={currentCart} setCurrentCart={setCurrentCart}/>
</div>
}

export default Homepage