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

  loginLink = () => <Link to='/login' className='navlink'>Login</Link>

  logoutLink = () => (
    <Link
      className="navlink"
      onClick={() => this.props.onLogout()}
      to='/'>Logout</Link>
  )
  
  restoreGameLink = () =>
  <Link to='/game/play' className='navlink'>Restore Game</Link>

  newGameLink = () =>
    <Link to='/game/setup' className='navlink'>New Game</Link>

  scoresLink = () =>
    <Link to='/game/scores' className='navlink'>Scores</Link>

  gameSetupNav = () => ['/game/setup'].map(path =>
    <Route path={path}
      key={path}
      render={
        props => {
          return (
            <nav className='base'>
              <ul className='navigation'>
                <li>{this.homeLink()}</li>
                <li>{this.restoreGameLink()}</li>
                <li>{this.scoresLink}</li>
                <li>{this.authLink()}</li>
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
    return (
      <Route path={path}
        key={path}
        render={
          props => {
            return (
              <nav className='base'>
                <ul className='navigation'>
                  <li>{this.homeLink()}</li>
                  <li>{this.newGameLink()}</li>
                  <li>{this.scoresLink()}</li>
                  <li>{this.authLink()}</li>
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

    return (
      <Route path={path}
        key={path}
        render={
          props => {
            return (
              <nav className='base'>
                <ul className='navigation'>
                  <li>{this.homeLink()}</li>
                  <li><Link to='/rules' className='navlink'>Rules</Link></li>
                  <li>{this.newGameLink()}</li>
                  <li>{this.scoresLink()}</li>
                  <li>{this.authLink()}</li>
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