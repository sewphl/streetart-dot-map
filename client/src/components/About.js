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
        <h6>
        visualizing streetart as it is posted on twitter around the world.
        </h6>
      </Container>
    )
  }
}
