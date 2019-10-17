import React from 'react';
import Container from 'react-bootstrap/Container'

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myComments: [],
      myComment: ''
    };
  }

  handleChange = (event) => {
    this.setState({myComment: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState(state => {
      const myUpdatedComments = [...state.myComments, state.myComment]
      return {
        myComments: myUpdatedComments,
        myComment:''
      }
    })
  }

  render(){
    const myCommentList = this.state.myComments.map((comment) =>
      <li>{comment}</li>
    );
    return (
      <Container>
        <h1>about</h1>
        <h6>
        visualizing streetart as it is posted on twitter around the world.
        </h6>
        <form onSubmit = {this.handleSubmit}>
          <textarea name="comment" value={this.state.myComment} onChange = {this.handleChange} placeholder="Add a note" cols="20" rows="5"></textarea>
          <br/><input type="submit" value="Add to my favorites" />
        </form>
        <ul>{myCommentList}</ul>
      </Container>
    )
  }
}
