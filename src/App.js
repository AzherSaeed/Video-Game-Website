import React from 'react';
import AddUser from './AddUser';
import UserList from './UserList';


class App extends React.Component{
  state = {
    users : []
  }

  createContact = user => {
    this.setState(currState => ({
      users : [...currState.users , user]
    }))
  }
  render(){
    return(
      <div>
      <h1>App</h1>
      <AddUser users={this.state.users}  onAddUser={this.createContact}/>
      <UserList users={this.state.users}/>
      </div>
    )
  }
}

export default App;
