import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    warning: '',
    passwordwarning: '',
    usernamewarning: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      this.onSubmitSuccess()
    }
    if (password === '') {
      this.setState({passwordwarning: 'Username is not found'})
    }
    if (username === '') {
      this.setState({usernamewarning: 'Username is not found'})
    } else {
      this.setState({warning: 'Username is not found'})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password, passwordwarning} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
        <p>{passwordwarning}</p>
      </>
    )
  }

  renderUsernameField = () => {
    const {username, usernamewarning} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
        <p>{usernamewarning}</p>
      </>
    )
  }

  render() {
    const {warning} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p>{warning}</p>
      </div>
    )
  }
}

export default LoginForm
