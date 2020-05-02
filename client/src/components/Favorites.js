import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker, GoogleMap } from 'google-maps-react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import store from '../store'
import Container from 'react-bootstrap/Container'
import { favorite, updateFavoriteForm } from "../actions/favorites"
import InfoWindowEx from './InfoWindowEx'
import { fetchUserTweets } from '../actions/user_tweets'

const mapStyles = {
  margin: 'auto',
  width: '70%',
  padding: '20px'
};

export class Favorites extends Component {

  componentWillMount() {
    this.props.fetchUserTweets().then(res => {
      this.setState({favoriteTweets: res.payload});
    })
  }

  constructor(props) {
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      selectedTweet: [],
      selectedURL: [],
      //selectedComment: [],
      selectedTweetID: [],
      activeMarker: {},
      showingInfoWindow: false,
      favoriteTweets: []
    };
  }

  onMarkerClick = (marker) => {
      this.setState({
          selectedTweet: this.props.user_tweets.tweets[marker.id].text,
          selectedURL: this.props.user_tweets.tweets[marker.id].url,
          selectedTweetID: this.props.user_tweets.tweets[marker.id].id,
          //selectedComment: this.props.user_tweets.tweets[marker.id].comment,
          activeMarker: marker,
          showingInfoWindow: true,
          redirect: false
      })
      console.log(this.state.selectedTweet)
  }

  onMapClicked = () => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null,
      redirect: true
    })
  }
};

    displayMarkers = () => {

      return this.state.favoriteTweets.map((art, index) => {
        return <Marker key={index} id={index} position={{
         lat: art.lon*1,
         lng: art.lat*1
       }}
       //onClick={() => console.log("you clicked")}
       onClick={this.onMarkerClick}
       />
      })
    }

  render() {
    //debugger
    //console.log(this.props.currentUser)
    console.log(this.state.items)
    //debugger
    return (
      <>
      <Container>
      <h1>Favorite Tweets</h1>
      {this.state.favoriteTweets.length >0 ?
        <h6>View your favorite tweets below.</h6>
      : <h6>It looks like you haven't <Link to="/map">favorited any tweets</Link> yet. </h6> }
      </Container>
      {this.state.favoriteTweets.length >0 ?
      <Map
        google={this.props.google}
        zoom={7}
        style={mapStyles}
        onClick={this.onMapClicked}
        initialCenter={{
          lat: 39.9526,
          lng: -75.1652
       }}
       >
       {this.displayMarkers()}
       { this.state.showingInfoWindow ?
         <InfoWindowEx
        position={this.state.activeMarker.position}  pixelOffset={new this.props.google.maps.Size(0, -30)}
        visible={this.state.showingInfoWindow}>
          <div>
            <p>{this.state.selectedTweet}</p>
            <a href={this.state.selectedURL} target="_blank">{this.state.selectedURL}</a>
            <br/>
          </div>
        </InfoWindowEx>
      : null
      }
      </Map>
      : null}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user_tweets: state.user_tweets
  }
}

const WrappedContainer = GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
  })(Favorites);

export default connect (mapStateToProps,{fetchUserTweets})(WrappedContainer)
