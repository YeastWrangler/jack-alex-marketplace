


export const getAPI = () => {

return fetch(`https://online-store-nc.herokuapp.com/api/items`).then((res) => {
    console.log(res)
        return res.json()
})
}

