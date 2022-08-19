import axios from "axios"

export const getAPI = (endpoint='items') => {

return fetch(`https://online-store-nc.herokuapp.com/api/${endpoint}`).then((res) => {
        return res.json()
})
}

export const patchUser = (username = "Paul-R") => {
    return axios.patch(`https://online-store-nc.herokuapp.com/api/users/${username}`, {kudos_inc: 1})
}