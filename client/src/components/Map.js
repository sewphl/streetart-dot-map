import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker, GoogleMap } from 'google-maps-react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import store from '../store'
import Container from 'react-bootstrap/Container'
import { favorite, updateFavoriteForm } from "../actions/favorites"
import InfoWindowEx from './InfoWindowEx'
//const {REACT_GMAPS_KEY} = process.env;

const mapStyles = {
  margin: 'auto',
  width: '70%',
  padding: '20px'
};

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    //this.onMapClicked = this.onMapClicked.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      selectedTweet: [],
      selectedURL: [],
      selectedTweetID: [],
      activeMarker: {},
      showingInfoWindow: false
    };
  }

  handleInputChange = (event) => {
  const { name, value } = event.target
  const updatedFavoriteInfo = {
    ...this.props.postData,
    [name]: value
  }
  //console.log(event.target.name)
  //console.log(event.target.value)
  console.log(updatedFavoriteInfo)
  //debugger
  this.props.updateFavoriteForm(updatedFavoriteInfo)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //debugger
    //debugger
    console.log('A')
    this.props.favorite(this.props.postData)
    console.log('B')
    //this.setState({
    //  showingInfoWindow: false,
    //  activeMarker: null
    //})
    alert("tweet saved to favorites")
  }

  onMarkerClick = (marker) => {
      this.setState({
          selectedTweet: this.props.myTweets.tweets[marker.id].text,
          selectedURL: this.props.myTweets.tweets[marker.id].url,
          selectedTweetID: this.props.myTweets.tweets[marker.id].id,
          activeMarker: marker,
          showingInfoWindow: true,
          redirect: false
      })
      console.log(this.state.selectedTweet)
  }

  onMapClicked = (props) => {
    //debugger
  if (this.state.showingInfoWindow) {
    console.log("this works")
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
    console.log("why doesnt that work")
    console.log(this.state.showingInfoWindow)
    console.log(this.state.activeMarker)
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
    //debugger
    //console.log(this.props.currentUser)
    console.log("rerendered")
    console.log(this.state.activeMarker.position)
    console.log(this.props)
    return (
      <>
      <Container>
      <h1>tweets</h1>
      <h6>click on a marker to view tweet and add to favorites</h6>
      </Container>
      <Map
        google={this.props.google}
        zoom={7}
        style={mapStyles}
        initialCenter={{
         lat: 40.7831,
         lng: -73.9712
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
            <br />
            <form onSubmit = {this.handleSubmit}>
              <input type="hidden" name="user_id" value={this.props.postData.user_id = this.props.currentUser.id} />
              <input type="hidden" name="tweet_id" value={this.props.postData.tweet_id = this.state.selectedTweetID} />
              <textarea name="comment" value={this.props.postData.comment} onChange={this.handleInputChange} placeholder="Add a note" cols="20" rows="5"></textarea>
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
    apiKey: process.env.REACT_GMAPS_PKEY
  })(MapContainer);

export default connect (mapStateToProps,{updateFavoriteForm, favorite})(WrappedContainer)
