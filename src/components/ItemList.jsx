import React from 'react'

const ItemList = ({items}) => {
    return (
        <div>
            <ul>
            {items.map(({item_name, item}) => {
                return <li> {item_name}</li>

            })}
            </ul>
        </div>
    )
}

export default ItemList
