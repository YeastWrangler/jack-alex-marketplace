import React from 'react'
import {getAPI} from "../API"
import {useState, useEffect} from 'react'



const ChangeUser = ({currentUser, setCurrentUser}) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getAPI("users").then((data) => {
            setUsers(data.users);
        })
        
    }, [])

    const Profile = (currentUser, users) => {
        const currentUserInfo = users.filter(user => user.username === currentUser)
        console.log(currentUser)
        return (
            <div>
                <p>username:{currentUserInfo.username} </p>
                <img src={currentUserInfo.avatar_url} alt={currentUserInfo.username} width="150px"/>
                <p>kudos:{currentUserInfo.kudos}</p>
                
            </div>
        )
    }


    return (
        <section>
            {Profile(currentUser, users)}
            <ul> {users.map((user)=> {
                    return <li key={user.username}> 
                    <p>username:{user.username} </p>
                    <img src={user.avatar_url} alt={user.username} width="75px"/>
                    <p>kudos:{user.kudos}</p>
                    <button onClick={() => {
                        setCurrentUser(user.username)
                    }}>Click to select this user</button>
                    </li>
            })}</ul>
        </section>
    )
    
        
    
}

export default ChangeUser
