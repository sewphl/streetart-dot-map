import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
//import { Helmet } from 'react-helmet'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Favorites from './components/Favorites'
import MapContainer from './components/Map'
import Map from './components/Mapbox'
import { fetchTweets } from './actions/tweets'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchTweets()
  }
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/map' component = {MapContainer}/>
        <Route exact path='/mapbox' component={Map} />
        <Route exact path='/favorites' component={Favorites} />
      </div>
    ); //return
  } //render
} //class App

const mapStateToProps = state => {
  return {
  myTweets: state.tweets,
  myText: state.tweets.text,
  myLat: state.tweets.lat,
  myLon: state.tweets.lon,
  myDay: state.tweets.day,
  myMonth: state.tweets.month,
  myYear: state.tweets.year}
}

export default connect (mapStateToProps,{getCurrentUser, fetchTweets})(App);
