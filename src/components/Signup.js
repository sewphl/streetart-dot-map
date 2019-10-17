import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signup.js"
import { signup } from "../actions/currentUser.js"
import Container from 'react-bootstrap/Container'

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

  const handleUserInfoInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }

  return (
    <Container>
    <br/>
    <form onSubmit={handleSubmit}>
      <input placeholder="username" value={signupFormData.username} name="username" type="text" onChange={handleUserInfoInputChange} />
      <br/>
      <input placeholder="email" value={signupFormData.email} name="email" type="text" onChange={handleUserInfoInputChange} />
      <br/>
      <input placeholder="password" value={signupFormData.password} name="password" type="password" onChange={handleUserInfoInputChange} />
      <br/>
      <input type="submit" value="Sign Up"/>
    </form>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)
