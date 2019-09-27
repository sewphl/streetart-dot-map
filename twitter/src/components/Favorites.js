import React from 'react';
import { connect } from 'react-redux'
import Logout from './Logout'
import Login from './Login'

const Favorites = ({currentUser, loggedIn}) => {
  //render() {
    return (
      <div>
        <h1>{currentUser.username} favorites</h1>
        </div>
      );
  //  }
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(Favorites)
