import React from 'react'
import {getAPI, patchUser} from "../API"
import {useState, useEffect, useContext} from 'react'
import { UserContext } from '../contexts/user'

const ChangeUser = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const [users, setUsers] = useState([])

    console.log(currentUser, "check here")

    useEffect(() => {
        getAPI("users").then((data) => {
            setUsers(data.users);
        })
        
    }, [])

    const Profile = () => {
        const [currentUserInfo] = users.filter(user => user.username === currentUser)
        if (currentUserInfo) {
            return (
                <div>
                    <p>username:{currentUserInfo.username} </p>
                    <img src={currentUserInfo.avatar_url} alt={currentUserInfo.username} width="150px"/>
                    <p>kudos:{currentUserInfo.kudos}</p>  
                </div>
            )
        }
    }

    const giveKudos = (event) => {
        return patchUser(event.target.value)
        .then((res) => {
            setUsers(users.map((user) => {
                if(user.username === event.target.value) {
                    return {
                        username : user.username,
                        avatar_url : user.avatar_url,
                        kudos : user.kudos + 1,
                        items_in_basket : user.items_in_basket,
                        items_ordered : user.items_ordered,
                        error: undefined
                    }
                } else return user
            }))
            return
        })
        .catch(() => {
            setUsers(users.map((user) => {
                if(user.username === event.target.value) {
                    return {
                        username : user.username,
                        avatar_url : user.avatar_url,
                        kudos : user.kudos,
                        items_in_basket : user.items_in_basket,
                        items_ordered : user.items_ordered,
                        error : 'Could not give kudos, please refresh and try again'
                    }
                } else return user
            }))
            return
        })
    }


    return (
        <section>
            <div>{Profile()}</div>
            <ul> {users.map((user)=> {
                    return <li key={user.username}> 
                    <p>username:{user.username} </p>
                    <img src={user.avatar_url} alt={user.username} width="75px"/>
                    <p>kudos:{user.kudos} 
                    <button onClick={giveKudos} value={user.username}>Give kudos</button></p>
                    <p>{user.error}</p>
                    <button onClick={() => {
                        setCurrentUser(user.username)
                    }}>Click to select this user</button>
                    </li>
            })}</ul>
        </section>
    )
    
        
    
}

export default ChangeUser
