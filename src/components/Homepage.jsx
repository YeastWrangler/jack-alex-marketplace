import {getAPI} from "../API"
import React from "react"
import {useEffect, useState} from "react"
import ItemList from "./ItemList"


function Homepage () {
const [itemList, setItemList] = useState()

    useEffect(() => {
        getAPI().then((data)=> {
        console.log(data)
        setItemList(data)
    }) 
}, [])
return <p>Hello
        <ItemList items={itemList}/>
</p>
}

export default Homepage