import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

/* add the navbar component */
const NavBar = ({currentUser, loggedIn}) => {
  return(
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
    <NavLink
      to="/map"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Map</NavLink>
    <NavLink
      to="/mapbox"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Mapbox</NavLink>
{ loggedIn ? <><p>Logged in as {currentUser.username}</p><Logout/></> : null}
  </div>
  )}

  const mapStateToProps = ({currentUser}) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }

  export default connect(mapStateToProps)(NavBar)
