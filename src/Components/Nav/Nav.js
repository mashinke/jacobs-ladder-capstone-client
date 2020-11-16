import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';
import './Nav.css';

export default class Nav extends Component {

  authLink = () =>
    this.props.loggedIn
      ? this.logoutLink()
      : this.loginLink()
  homeLink = () =>
    <Link to='/' className='navLink'>Home</Link>

  rulesLink = () =>
    <Link to='/rules' className='navLink'>Rules</Link>

  loginLink = () => <Link to='/login' className='navLink'>Login</Link>

  logoutLink = () => (
    <Link
      className="navLink"
      onClick={() => this.props.onLogout()}
      to='/'>Logout</Link>
  )

  restoreGameLink = () =>
    this.props.loggedIn
      ? <Link to='/game/play' className='navLink'>Restore Game</Link>
      : ''

  newGameLink = () =>
    this.props.loggedIn
      ? <Link to='/game/setup' className='navLink'>New Game</Link>
      : ''

  scoresLink = () =>
    this.props.loggedIn
      ? <Link to='/game/scores' className='navLink'>Scores</Link>
      : ''

  gameSetupNav = () => ['/game/setup'].map(path => {
    const links = [
      this.homeLink(),
      this.restoreGameLink(),
      this.scoresLink(), 
      this.authLink()
    ].map((link, i) =>
    link
      ? <NavItem key={i} link={link} />
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
                  <NavItem link={this.homeLink()} />
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
        ? <NavItem key={i} link={link} />
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
      this.authLink()
    ].map((link, i) =>
      link
        ? <NavItem key={i} link={link}/>
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