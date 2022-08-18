import React from 'react'

const CreateUserProfile = () => {
    return (
        <div>
            CREATE NEW USER PROFILE
            <form>
                
                <label for="username">Username</label>
                <input type="text" id="username"></input>
                <label for="avatar">Avatar</label>
                <input type="text" id="avatar"></input>
               
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default CreateUserProfile
