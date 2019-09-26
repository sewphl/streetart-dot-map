import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Helmet } from 'react-helmet'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Map from './components/Map'
import Mapbox from './components/Mapbox'
//require('dotenv').config()

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/map' component={Map}/>
        <Route exact path='/mapbox' component={Mapbox}/>
      </div>
    ); //return
  } //render
} //class App

export default connect (null,{getCurrentUser})(App);
