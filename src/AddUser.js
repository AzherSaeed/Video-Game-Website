import React from 'react'
import PropTypes from 'prop-types';

class AddUser extends React.Component{
    state = {
        user : {
         userName : "",
         firstName : ""
        },
        userExists  : false
     }

     contactExist = currUserName  => {
         const users = this.props.users;
         for (let user of users) {
             if(user.userName === currUserName || user.firstName === currUserName){
                 return true
             }
         }
         return false
     }
    handleSubmit = event => {
        event.preventDefault()
        const userExists = this.contactExist(this.state.user.userName && this.state.user.firstName)
        
        if (!userExists) {
            this.props.onAddUser(this.state.user);
          }
          this.setState({
              userExists
          })
        
    }
    onChangeInputs = (event) => {
     const {name , value} = event.target
        
        this.setState(currState => ({
            ...currState,
            user : {...currState.user , [name] : value}
        }))
    }
    userDisable = () => {
        // const {  userName } = this.state.user;
        // return  userName === '';
      };
    render(){
        const {userName , firstName} = this.state.user;
        return(
            <div>
                <h1>Add User</h1>
                <form onSubmit={this.handleSubmit}> 
                    <label>First name :  </label>
                    <input type="text"
                    name="firstName"
                    value={firstName}
                    onChange={this.onChangeInputs}
                    />
                    <input type="text"
                    name="userName"
                    value={userName}
                    onChange={this.onChangeInputs}
                    />
                    <button disabled={this.userDisable()}>Add User</button>
                </form>
                {this.state.userExists ? (
                    <p className="error">User already Exist</p>
                ) : (
                    ''
                )}
            </div>
        )
    }
}

AddUser.prototypes = {
    onAddUser : PropTypes.func.isRequired,
    users : PropTypes.array.isRequired
}
export default AddUser;