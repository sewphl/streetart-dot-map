import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker, GoogleMap } from 'google-maps-react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import store from '../store'
import Display from './Display'
import Container from 'react-bootstrap/Container'
import { favorite, updateFavoriteForm } from "../actions/favorites"
import InfoWindowEx from './InfoWindowEx'

const mapStyles = {
  margin: 'auto',
  width: '70%',
  padding: '20px'
};

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      selectedTweet: [],
      selectedURL: [],
      selectedTweetID: [],
      activeMarker: {},
      showingInfoWindow: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //debugger
    //debugger
    this.props.favorite(this.props.postData)
  }

//  handleSubmit(e) {
  //  e.preventDefault()
  //  alert('why doesnt this work')
  //  debugger
  //  favorite(this.props.postData)
//  }

  onMarkerClick = (marker) => {
      this.setState({
          selectedTweet: this.props.myTweets.tweets[marker.id].text,
          selectedURL: this.props.myTweets.tweets[marker.id].url,
          selectedTweetID: this.props.myTweets.tweets[marker.id].id,
          activeMarker: marker,
          showingInfoWindow: true
          //redirect: false
      })
      console.log(this.state.selectedTweet)
  }

  onMapClicked = () => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
};

    displayMarkers = () => {
      return this.props.myTweets.tweets.map((art, index) => {
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
    //console.log(this.props.currentUser)
    return (
      <>
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
         //lat: 40.7831,
         //lng: -73.9712
         //lat: 34.5331,
         //lng: 69.1661,
         lat: 44.49899241,
         lng: 11.34389529
       }}
       >
       {this.displayMarkers()}
       { this.state.showingInfoWindow ?
         <InfoWindowEx
        position={this.state.activeMarker.position}  pixelOffset={new this.props.google.maps.Size(0, -30)}
        visible={true}>
          <div>
            <p>{this.state.selectedTweet}</p>
            <a href={this.state.selectedURL} target="_blank">{this.state.selectedURL}</a>
            <form  onSubmit = {this.handleSubmit}>
              <input type="hidden" name="user_id" value={this.props.postData.user_id = this.props.currentUser.id} />
              <input type="hidden" name="tweet_id" value={this.props.postData.tweet_id = this.state.selectedTweetID} />
              <input type="hidden" name="comment" value={this.props.postData.comment = ""} />
              <br/><input type="submit" value="Add to my favorites" />
            </form>
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
      postData: state.favoritesForm
    }
  }

const WrappedContainer = GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
  })(MapContainer);

export default connect (mapStateToProps,{updateFavoriteForm, favorite})(WrappedContainer)
