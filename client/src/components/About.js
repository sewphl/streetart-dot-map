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
        <p>
        this web app allows logged-in users to view geolocated tweets about streetart on a map,
        then comment on and save their favorite tweets.<br /><br />
        built in React-Redux with Rails/PostgreSQL back end using Twitter and Google Maps APIs.<br /><br />
        hosted on Heroku. newly-published tweets are added hourly with a Rake task using Heroku Scheduler.<br /><br />
        </p>
      </Container>
    )
  }
}
