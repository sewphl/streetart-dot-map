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
      this.setState({items: res.payload});
    })
  }

  constructor(props) {
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      selectedTweet: [],
      selectedURL: [],
      selectedComment: [],
      selectedTweetID: [],
      activeMarker: {},
      showingInfoWindow: false,
      items: []
    };
  }

  onMarkerClick = (marker) => {
      this.setState({
          selectedTweet: this.props.user_tweets.tweets[marker.id].text,
          selectedURL: this.props.user_tweets.tweets[marker.id].url,
          selectedTweetID: this.props.user_tweets.tweets[marker.id].id,
          selectedComment: this.props.user_tweets.tweets[marker.id].comment,
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

      return this.state.items.map((art, index) => {
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
      <Map
        google={this.props.google}
        zoom={5}
        style={mapStyles}
        onClick={this.onMapClicked}
        initialCenter={{
         lat: 40.7831,
         lng: -73.9712
         //lat: 34.5331,
         //lng: 69.1661,
         //lat: 44.49899241,
         //lng: 11.34389529
         //lat: 41.6362,
         //lng: -70.9342
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
            <p>My comment: {this.state.selectedComment}</p>
          </div>
        </InfoWindowEx>
      : null
      }
      </Map>
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
