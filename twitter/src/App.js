import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Favorites from './components/Favorites'
import MapContainer from './components/Map'
import Map from './components/Mapbox'
import PostFavorites from './components/PostFavorites'
import { fetchTweets } from './actions/tweets'
import { fetchUserTweets } from './actions/favorites'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchTweets()
    this.props.fetchUserTweets()
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>streetart.map</title>
          <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
          />
        </Helmet>
        <NavBar />
        <Route exact path='/' render={(props) => <Home currentUser={this.props.currentUser} myTweets={this.props.tweets}/>}/>
        <Route exact path='/about' render={(props) => <About currentUser={this.props.currentUser}/>}/>
        <Route exact path='/login' component={Login} />
        <Route exact path='/map' render={(props) => <MapContainer myTweets={this.props.tweets} currentUser={this.props.currentUser}/>} />
        <Route exact path='/mapbox' component={Map} />
        <Route exact path='/favorites' component={Favorites} />
        <Route exact path='/post_favorites' component={PostFavorites} />
      </div>
    ); //return
  } //render
} //class App

const mapStateToProps = state => {
  return {
    tweets: state.tweets,
    currentUser: state.currentUser,
    user_tweets: state.user_tweets
  }
}

export default connect (mapStateToProps,{getCurrentUser,fetchTweets, fetchUserTweets})(App);
