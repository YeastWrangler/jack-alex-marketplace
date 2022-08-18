


export const getAPI = (endpoint='items') => {

return fetch(`https://online-store-nc.herokuapp.com/api/${endpoint}`).then((res) => {
    //console.log(res)
        return res.json()
})
}

