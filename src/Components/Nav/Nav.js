import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {

  authLink = () =>
    this.props.loggedIn
      ? this.logoutLink()
      : this.loginLink()
  homeLink = () =>
    <Link to='/' className='navlink'>Home</Link>

  rulesLink = () =>
    <Link to='/rules' className='navlink'>Rules</Link>

  loginLink = () => <Link to='/login' className='navlink'>Login</Link>

  logoutLink = () => (
    <Link
      className="navlink"
      onClick={() => this.props.onLogout()}
      to='/'>Logout</Link>
  )

  restoreGameLink = () =>
    this.props.loggedIn
      ? <Link to='/game/play' className='navlink'>Restore Game</Link>
      : ''

  newGameLink = () =>
    this.props.loggedIn
      ? <Link to='/game/setup' className='navlink'>New Game</Link>
      : ''

  scoresLink = () =>
    this.props.loggedIn
      ? <Link to='/game/scores' className='navlink'>Scores</Link>
      : ''

  gameSetupNav = () => ['/game/setup'].map(path => {
    const links = [
      this.homeLink(),
      this.restoreGameLink(),
      this.scoresLink(), 
      this.authLink()
    ].map((link, i) =>
    link
      ? <li key={i}>{link}</li>
      : '')
    return (
      <Route path={path}
        key={path}
        render={
          props => {
            return (
              <nav className='base'>
                <ul className='navigation'>
                  {links}
                </ul>
              </nav>
            )
          }
        }
      />
    )
  })
  authNavRoutes = () => ['/login', '/signup'].map(path => {
    return (
      <Route path={path}
        key={path}
        render={
          props => {
            return (
              <nav className='base'>
                <ul className='navigation'>
                  <li>{this.homeLink()}</li>
                </ul>
              </nav>
            )
          }
        }
      />
    )
  })
  gameplayNavRoute = () => ['/game/play'].map(path => {
    const links = [
      this.homeLink(),
      this.newGameLink(),
      this.scoresLink(),
      this.authLink()
    ].map((link, i) =>
      link
        ? <li key={i}>{link}</li>
        : '')
    return (
      <Route path={path}
        key={path}
        render={
          props => {
            return (
              <nav className='base'>
                <ul className='navigation'>
                  {links}
                </ul>
              </nav>
            )
          }
        }
      />
    )
  })

  fullNavRoutes = () => ['/', '/rules'].map(path => {
    console.log('Nav render()')
    const links = [
      this.homeLink(),
      this.rulesLink(),
      this.newGameLink(),
      this.restoreGameLink(),
      this.scoresLink(),
      this.authLink()
    ].map((link, i) =>
      link
        ? <li key={i}>{link}</li>
        : '')
    return (
      <Route path={path}
        key={path}
        render={
          props => {
            return (
              <nav className='base'>
                <ul className='navigation'>
                  {links}
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