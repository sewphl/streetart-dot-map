import React from 'react';
import Container from 'react-bootstrap/Container'

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Container>
        <h1>about</h1>
        <h4>
        visualizing streetart as it is posted on twitter around the world.
        </h4>
        <br/>
        <p>
        this app allows logged-in users to view geolocated tweets about streetart on a map,
        and save their favorites.<br /><br />
        built in React-Redux with Rails/PostgreSQL back end using Twitter and Google Maps APIs.
        hosted on Heroku. newly-published streetart tweets are added hourly with a Rake task using Heroku Scheduler.<br /><br />
        </p>
      </Container>
    )
  }
}
