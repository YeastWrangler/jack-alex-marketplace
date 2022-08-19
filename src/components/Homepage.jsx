import {getAPI} from "../API"
import React from "react"
import {useEffect, useState} from "react"
import ItemList from "./ItemList"


function Homepage () {
const [itemList, setItemList] = useState([])

    useEffect(() => {
        getAPI().then((items)=> {
      
        setItemList(items.items)
    }) 
}, [])
return <div>Hello
        <ItemList items={itemList} />
</div>
}

export default Homepage