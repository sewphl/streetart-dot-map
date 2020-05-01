import React from 'react'
import { connect } from 'react-redux'
//import { NavLink } from 'react-router-dom'
//import { NavLink } from 'reactstrap';
import { NavLink as RRNavLink, Link } from 'react-router-dom'
import Logout from './Logout'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import Container from 'react-bootstrap/Container'

/* Add basic styling for NavLinks */
//const link = {
  //width: '100px',
  //padding: '12px',
  //margin: '0 6px 6px',
  //background: 'blue',
  //textDecoration: 'none',
  //color: 'white'
//}

/* add the navbar component */
const NavBar = ({currentUser, loggedIn}) => {
  return(
  <Container>
   <Navbar sticky="top" className="bg-light justify-content-between">
    <NavLink tag={RRNavLink}
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      //style={link}
      /* add prop for activeStyle */
      //activeStyle={{
      //  background: 'darkblue'
      //}}
    >Home</NavLink>
    <NavLink tag={RRNavLink}
      to="/about"
      exact
      //style={link}
      //activeStyle={{
      //  background: 'darkblue'
      //}}
    >About</NavLink>
    <NavLink tag={RRNavLink}
      to="/map"
      exact
      //style={link}
      //activeStyle={{
      //  background: 'darkblue'
      //}}
    >Map</NavLink>
    <NavLink tag={RRNavLink}
      to="/login"
      exact
      //style={link}
      //activeStyle={{
      //  background: 'darkblue'
      //}}
    >Login</NavLink>

    {loggedIn ?
      <NavLink tag={RRNavLink}
        to="/favorites"
        exact
        //style={link}
        //activeStyle={{
        //  background: 'darkblue'
        //}}
      >Favorites</NavLink>
      : null}
      { loggedIn ?
      <>  <p>Logged in as {currentUser.username}</p><Logout/></> : null}
      </Navbar>
  </Container>
  )}

  const mapStateToProps = ({currentUser}) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }

  export default connect(mapStateToProps)(NavBar)
