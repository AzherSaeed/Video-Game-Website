import React from 'react'
import User from './User'



class UserList extends React.Component{
    render(){
        const {users} = this.props
        return(
            <div>
                <h1>User List</h1>
                <ol>
                    {users.map (user => (
                        <User key={user.userName} user={user}/>
                    ))}
                </ol>
            </div>
        )
    }
}

export default UserList;