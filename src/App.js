import React from 'react';
import AddUser from './AddUser';
import UserList from './UserList';


class App extends React.Component{
  state = {
    users : []
  }

  createContact = user => {
    user.numGamesPlayed = 0
    this.setState(currState => ({
      users : [...currState.users , user]
    }))
  }
  render(){
    return(
      <div>
      <AddUser users={this.state.users}  onAddUser={this.createContact}/>
      <UserList users={this.state.users}/>
      </div>
    )
  }
}

export default App;
