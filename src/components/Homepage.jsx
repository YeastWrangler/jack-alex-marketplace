import {getAPI} from "../API"
import React from "react"
import {useEffect, useState} from "react"
import ItemList from "./ItemList"
import CategoryDropdown from "./CategoryDropdown"

function Homepage () {
const [itemList, setItemList] = useState([])
const [category, setCategory] = useState("")

    useEffect((category = '') => {
        const endpoint = `items?category_name=${category}`
        getAPI(endpoint).then((items)=> {
        setItemList(items.items)
    }) 
}, [category])
return <div>
        <CategoryDropdown setCategory={setCategory}/>
        <ItemList items={itemList} />
</div>
}
//?category_name=Electronics
export default Homepage