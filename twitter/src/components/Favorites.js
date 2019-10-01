import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Favorites extends Component {
  render() {
    return (
      <div>
        <h1>favorites</h1>
        </div>
      );
    }
}
//const Favorites = props => {
//  const theseTweets = props.users_tweets.length > 0 ?
//    props.users_tweets.map(t => (<p key={t.user_id}>{"get text from tweets"}</p>)) :
//    null

    //<Link to={`/tweets/${t.id}`}>{t.attributes.name}</Link>

//  return theseTweets
//}


//const mapStateToProps = state => {
//  return {
//    tweets: state.myTweets
//  }
//}

//export default connect(mapStateToProps)(Favorites)
export default connect(null,null)(Favorites)
