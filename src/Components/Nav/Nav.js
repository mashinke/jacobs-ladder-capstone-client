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

  playLink = () =>
    this.props.loggedIn
      ? <Link to='/game/play' className='navLink'>Play</Link>
      : ''

  scoresLink = () =>
    this.props.loggedIn
      ? <Link to='/game/scores' className='navLink'>Scores</Link>
      : ''

  gameSetupNavLinks = () => ['/game/setup'].map(path => {
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
              <ul className='navigation'>
                {links}
              </ul>
            )
          }
        }
      />
    )
  })
  authNavLinks = () => ['/login', '/signup'].map(path => {
    return (
      <Route path={path}
        key={path}
        render={
          props => {
            return (
              <ul className='navigation'>
                <NavItem link={this.homeLink()} />
              </ul>
            )
          }
        }
      />
    )
  })
  gameplayNavLinks = () => ['/game/play'].map(path => {
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
              <ul className='navigation'>
                {links}
              </ul>
            )
          }
        }
      />
    )
  })

  staticPageNavLinks = () => ['/'].map(path => {
    console.log('Nav render()')
    const links = [
      this.homeLink(),
      this.rulesLink(),
      this.playLink(),
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
              <ul className='navigation'>
                {links}
              </ul>
            )
          }
        }
      />
    )
  })
  render() {
    return (
      <nav>
        <Switch>
          {this.authNavLinks()}
          {this.gameplayNavLinks()}
          {this.gameSetupNavLinks()}
          {this.staticPageNavLinks()}
        </Switch >
      </nav>
    )
  }
}