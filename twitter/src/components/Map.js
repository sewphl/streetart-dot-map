import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker  } from 'google-maps-react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import store from '../store'

const mapStyles = {
  margin: 'auto',
  width: '70%',
  padding: '20px'
};

export class MapContainer extends Component {

//  constructor(props) {
//    super(props);

  //  this.state = {
  //    streetart: [],
  //  };

  //  store.subscribe(() => {
  //    debugger
  //    this.setState({
  //      streetart: store.getState().tweets
  //    });
  //  });


  //  this.state = {
  //    streetart: [{lat: 39.95, lon: -75.165},
  //            {lat: 39.952, lon: -75.1645}]
  //  }
  //}


    displayMarkers = () => {
    //  debugger
      return this.props.myTweets.tweets.map((art, index) => {
        //debugger
        return <Marker key={index} id={index} position={{
         lat: art.lon*1,
         lng: art.lat*1

       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }

  render() {
    console.log(this.props.myTweets.tweets)
    //debugger
    return (
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
      </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
  })(MapContainer);
