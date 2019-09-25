import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'

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
      </div>
    ); //return
  } //render
} //class App

export default connect (null,{getCurrentUser})(App);
