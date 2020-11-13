import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import TokenService from '../Services/TokenService';
import './Nav.css';

export default class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.props.onLogout();
  }

  gameSetupNav = () => ['/game/setup'].map(path =>
    <Route path={path}
      key={path}
      render={
        props => {
          return (
            <nav className='base'>
              <ul className='navigation'>
                <li><Link to='/' className='navlink'>Home</Link></li>
                <li><Link to='/game/scores' className='navlink'>Scores</Link></li>
                <li><Link to='/game/play' className='navlink'>Restore Game</Link></li>
              </ul>
            </nav>
          )
        }
      }
    />
  )
  authNavRoutes = () => ['/login', '/signup'].map(path => {
    return (
      <Route path={path}
        key={path}
        render={
          props => {
            return (
              <nav className='base'>
                <ul className='navigation'>
                  <li><Link to='/' className='navlink'>Home</Link></li>
                </ul>
              </nav>
            )
          }
        }
      />
    )
  })
  gameplayNavRoute = () => ['/game/play'].map(path => {
    return (
      <Route path={path}
        key={path}
        render={
          props => {
            return (
              <nav className='base'>
                <ul className='navigation'>
                  <li><Link to='/' className='navlink'>Home</Link></li>
                </ul>
              </nav>
            )
          }
        }
      />
    )
  })

  loginLink = () => <Link to='/login' className='navlink'>Login</Link>
  logoutLink = () => (
    <Link
      className="navlink"
      onClick={this.handleLogoutClick}
      to='/'>Logout</Link>
  )
  fullNavRoutes = () => ['/', '/rules'].map(path => {
    console.log('Nav render()')
    const authLink = this.props.loggedIn
      ? this.logoutLink()
      : this.loginLink()

    return (
      <Route path={path}
        key={path}
        render={
          props => {
            return (
              <nav className='base'>
                <ul className='navigation'>
                  <li><Link to='/' className='navlink'>Home</Link></li>
                  <li><Link to='/rules' className='navlink'>Rules</Link></li>
                  <li>{authLink}</li>
                  <li><Link to='/game/setup' className='navlink'>Play</Link></li>
                </ul>
              </nav>
            )
          }
        }
      />
    )
  })
  render() {
    return (
      <Switch>
        { this.authNavRoutes()}
        { this.gameplayNavRoute()}
        { this.gameSetupNav()}
        { this.fullNavRoutes()}
      </Switch >
    )
  }
}