import React from 'react';
import Script from 'react-load-script'
import scriptLoader from 'react-async-script-loader'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


export default class Home extends React.Component {

  render() {

    return (
      <Container>
      <h1>Home</h1>
      <h6>View a <Link to="/map">map</Link> of geolocated streetart tweets (updated hourly).</h6>
      <h6><Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link> to save your favorites.</h6>
      <br/>
      </Container>
    );
    console.log(this.state.myUser)
  }
}
