import React from 'react';
import Container from 'react-bootstrap/Container'

export default class About extends React.Component {

  render(){
  const tweets = this.props.allTheTweets && this.props.allTheTweets.map(tweet => {
    return <p>{tweet.tweet.text}</p>
  })
  console.log(tweets)
  return(
    <Container>{tweets}</Container>
  )
}

}
