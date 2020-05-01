import React from 'react';
import Container from 'react-bootstrap/Container'

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Container>
        <h1>About</h1>
        <h4>
        Visualizing streetart as it is posted on Twitter around the world.
        </h4>
        <br/>
        <p>
        This app posts newly-published geolocated tweets about streetart to a map,
        and allows logged-in users to save their favorites to their own personal map.<br /><br />
        Built in React-Redux with Rails/PostgreSQL back end using Twitter and Google Maps APIs.
        Hosted on Heroku. Newly-published streetart tweets are added hourly with a Rake task using Heroku Scheduler.<br /><br />
        </p>
      </Container>
    )
  }
}
