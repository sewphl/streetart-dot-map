import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm"
import { login } from "../actions/currentUser"
import Container from 'react-bootstrap/Container'

const Login = ({ submit, updateLoginForm, login, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...submit,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(submit)
  }

  return (
    <Container>
    <br/>
    <form onSubmit={handleSubmit}>
      <input placeholder="username" value={submit.username} name="username" type="text" onChange={handleInputChange} />
      <br/>
      <input placeholder="email" value={submit.email} name="email" type="text" onChange={handleInputChange} />
      <br/>
      <input placeholder="password" value={submit.password} name="password" type="password" onChange={handleInputChange} />
      <br/>
      <input type="submit" value="Login"/>
    </form>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    submit: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login)
