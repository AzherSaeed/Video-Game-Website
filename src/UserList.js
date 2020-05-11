import React from 'react'
import User from './User'



class UserList extends React.Component{ 
    state={
        showGamesPlayed : true
    }
    toggleGamesPlayedPanel = () => {
        this.setState(oldState => ({
          showGamesPlayed: !oldState.showGamesPlayed,
        }));
      };
    render(){
        const {users} = this.props
        const {showGamesPlayed} = this.state

        const gamesPlayedButton  = (
            <div>
                <button onClick={this.toggleGamesPlayedPanel}> {showGamesPlayed ? 'Hide ' : 'Show '}  the Number of Games Played</button>
            </div>
        )
        return(
            <div>
                <h1>User List</h1>
                {users && users.length > 0 ? gamesPlayedButton : ''}
                <ol>
                    {users.map (user => (
                        <User key={user.userName} user={user} showGamesPlayed={showGamesPlayed}/>
                    ))}
                </ol>
            </div>
        )
    }
}

export default UserList;