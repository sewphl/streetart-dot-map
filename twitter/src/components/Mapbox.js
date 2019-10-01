import React, {Component} from 'react';
import MapGL, {NavigationControl} from 'react-map-gl';

const TOKEN = process.env.REACT_APP_MAPBOX_KEY;

const navStyle = {
  margin: 'auto',
  width: '70%',
  padding: '20px'
};

export default class Map extends Component {
constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 39.9526,
        longitude: -75.1652,
        zoom: 10,
        bearing: 0,
        pitch: 0,
        width: 500,
        height: 500
      },
      popupInfo: null,
      streetart: [{latitude: 39.95, longitude: -75.165, url:"gohere"},
              {latitude: 39.952, longitude: -75.1645, url: "andgohere"}]
    };
    //this.renderPopup = this.renderPopup.bind(this)
  }

render() {
    const {viewport} = this.state;
return (
      <MapGL
        {...viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken = {TOKEN}>
        <div className="nav" style={navStyle}>
          <NavigationControl/>
        </div>
      </MapGL>
    );
  }
}
