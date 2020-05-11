import React from 'react'
import PropTypes from 'prop-types'

const User = props => {
    return(
        <li>
        <p>Username: {props.user.userName}</p>
        <p>FirstName: {props.user.firstName}</p>
        <p>Number of Games Played: {props.showGamesPlayed ? props.user.numGamesPlayed : '*'}</p>
      </li>
    )
}
User.propTypes = {
    showGamesPlayed: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  };
export default User;