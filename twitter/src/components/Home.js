import React from 'react';
import Script from 'react-load-script'
import scriptLoader from 'react-async-script-loader'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


export default class Home extends React.Component {

  render() {

    return (
      <Container>
      <h1>home</h1>
      <h6>log in to view a map of geolocated streetart tweets.
      <br/>
      comment on and save your favorites.</h6>
      </Container>
    );
    console.log(this.state.myUser)
  }
}
