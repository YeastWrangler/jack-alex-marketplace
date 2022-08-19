import React, { useEffect, useState } from 'react'
import { getAPI } from '../API'

const CategoryDropdown = ({setCategory}) => {
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        getAPI('categories').then(({categories})=> {
        setCategoryList(categories)
    }) 
    }, [])

    const handleChangeCategory = (event) => {
        setCategory(event.target.value)
    }

return (
    <div>
        <label htmlFor="category">Category: </label>
        <select onChange={handleChangeCategory} name="category" >
            <option key="null" value="">All categories</option>
            {categoryList.map(({category_name}) => {
                return <option key={category_name} value={category_name}>{category_name}</option>
            })}
        </select>
    </div>
  )
}

export default CategoryDropdown