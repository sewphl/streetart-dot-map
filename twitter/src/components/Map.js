import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker, GoogleMap } from 'google-maps-react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import store from '../store'
//import Infowindow from './Infowindow'
import Display from './Display'
import Container from 'react-bootstrap/Container'


const mapStyles = {
  margin: 'auto',
  width: '70%',
  padding: '20px'
};

export class MapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedTweet: [],
      selectedURL: [],
      selectedTweetID: [],
      activeMarker: {},
      showingInfoWindow: false
      //showPopup: false
    };
  }

  togglePopup() {
    this.setState({
     showPopup: !this.state.showPopup
   });
 }

  onMarkerClick = (marker) => {
    //debugger
      this.setState({
          selectedTweet: this.props.myTweets.tweets[marker.id].text,
          selectedURL: this.props.myTweets.tweets[marker.id].url,
          selectedTweetID: this.props.myTweets.tweets[marker.id].id,
          activeMarker: marker,
          //showPopup: true
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
    //  debugger
      return this.props.myTweets.tweets.map((art, index) => {
        //debugger
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
    //console.log(this.props.myTweets.tweets)
    //debugger
    return (
      <>
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
         lat: 40.7831,
         lng: -73.9712
       }}
       >
       {this.displayMarkers()}
       { this.state.showingInfoWindow ?
         <InfoWindow
        //marker={this.state.activeMarker}
        position={this.state.activeMarker.position}  pixelOffset={new this.props.google.maps.Size(0, -30)}
        visible={true}>
          <div>
            <p>{this.state.selectedTweet}</p>
            <p>{this.state.selectedURL}</p>
          </div>
        </InfoWindow>
      : null
      }
      </Map>
      </>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
  })(MapContainer);
