import React from 'react'
import PropTypes from 'prop-types'

const User = props => {
    return(
        <li className="user">
        <p>Username: {props.user.userName}</p>
      </li>
    )
}
User.propTypes = {
    showGamesPlayed: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  };
export default User;