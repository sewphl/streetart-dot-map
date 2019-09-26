import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker  } from 'google-maps-react';

const mapStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px',
  width: 500,
  height: 500
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      streetart: [{latitude: 39.95, longitude: -75.165},
              {latitude: 39.952, longitude: -75.1645}]
    }
  }

  displayMarkers = () => {
    return this.state.streetart.map((art, index) => {
      return <Marker key={index} id={index} position={{
       lat: art.latitude,
       lng: art.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 39.9526,
         lng: -75.1652
       }}>
        {this.displayMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
})(MapContainer);
