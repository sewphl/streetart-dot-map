import React from 'react';
import Script from 'react-load-script'
import scriptLoader from 'react-async-script-loader'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


export default class Home extends React.Component {

  render() {

    return (
      <Container>
      <h1>streetart-dot-map</h1>
      <h4>
      Visualizing streetart as it is posted on Twitter around the world.
      </h4>
      <br/>
      <p>
      This app posts newly-published geolocated tweets about streetart to a map,
      and allows users to save their favorites to their own personal map.<br /><br />
      Built in React-Redux with Rails/PostgreSQL back end using Twitter and Google Maps APIs.
      Hosted on Heroku. Newly-published streetart tweets are added hourly with a Rake task using Heroku Scheduler.<br /><br />
      </p>
      <h6>View a <Link to="/map">map</Link> of geolocated streetart tweets (updated hourly).</h6>
      <h6><Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link> to save your favorites.</h6>
      <br/>
      </Container>
    );
    console.log(this.state.myUser)
  }
}
