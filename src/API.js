import axios from "axios"

export const getAPI = (endpoint='items') => {

return fetch(`https://online-store-nc.herokuapp.com/api/${endpoint}`).then((res) => {
        return res.json()
})
}

export const patchUser = (username = "Paul-R") => {
    return axios.patch(`https://online-store-nc.herokuapp.com/api/users/${username}`, {kudos_inc: 1})
}



export const postToAPI = (endpoint, itemID) => {
    return axios.post(`https://online-store-nc.herokuapp.com/api/${endpoint}`, { item_id : itemID})
}

export const deleteFromAPI = (endpoint) => {
    return axios.delete(`https://online-store-nc.herokuapp.com/api/${endpoint}`)
}