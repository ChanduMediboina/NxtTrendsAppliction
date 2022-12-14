import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'
import {FaUser} from 'react-icons/fa'
import {RiLockPasswordLine} from 'react-icons/ri'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    togglePassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    Cookies.set(
      'jwt_token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU',
      {
        expires: 30,
      },
    )
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    // const url = 'https://apis.ccbp.in/login'
    const url = 'https://sekharslogin.onrender.com/login'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    // const options = {
    //   method: 'POST',
    //   body: JSON.stringify(userDetails),
    // }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.user_msg)
      //   data.user_msg
    }
  }

  renderPasswordField = () => {
    const {password, togglePassword} = this.state

    return (
      <div className="user-input-container">
        <label htmlFor="password" className="login-label">
          Password*
        </label>
        <div className="input-icon-container">
          <RiLockPasswordLine className="user-icon" />
          <input
            value={password}
            onChange={this.onChangePassword}
            type={togglePassword ? 'text' : 'password'}
            id="password"
            className="login-input"
            placeholder="password"
          />
        </div>
      </div>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <div className="user-input-container">
        <label htmlFor="username" className="login-label">
          Username*
        </label>
        <div className="input-icon-container">
          <FaUser className="user-icon" />
          <input
            type="text"
            value={username}
            onChange={this.onChangeUsername}
            id="username"
            className="login-input"
            placeholder="username"
          />
        </div>
      </div>
    )
  }

  ontoggleShowPassword = () => {
    this.setState(prevState => ({togglePassword: !prevState.togglePassword}))
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-img"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          {this.renderUsernameField()}
          {this.renderPasswordField()}
          <div className="show-password-container">
            <input
              onChange={this.ontoggleShowPassword}
              className="password-input"
              type="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox" className="password-label">
              Show Password
            </label>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          {/* <Link to="sign-in">
            <button type="button" className="sign-btn">
              Sign in
            </button>
          </Link> */}
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
