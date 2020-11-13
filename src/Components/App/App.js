import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import StaticMain from '../StaticMain/StaticMain';
import SignupMain from '../SignupMain/SignupMain';
import LoginMain from '../LoginMain/LoginMain';
import SetupGameMain from '../SetupGameMain/SetupGameMain';
import GamePlayMain from '../GameplayMain/GameplayMain';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import TokenService from '../../Services/TokenService';

class App extends Component {
  state = { error: null, isLoggedIn: TokenService.hasAuthToken() }
  staticPaths() {
    return ['/', '/rules'].map(path => {
      return (
        <Route exact path={path}
          key={path}
          component={StaticMain}
        />
      )
    })
  }

  handleLogIn = (token) => {
    console.log('toggleLoggedIn', token)
    TokenService.saveAuthToken(token);
    this.props.history.push('/game/setup');
    this.setState({ isLoggedIn: true })
  }

  handleLogOut = () => {
    TokenService.clearAuthToken();
    this.setState({ isLoggedIn: false })
  }

  signupPath() {
    return (
      <Route path='/signup'
        component={(props) =>
          <SignupMain
            {...props}
            onLoggedIn={this.handleLogIn}
          />
        }
      />
    )
  }

  loginPath() {
    return (
      <Route path='/login'
        component={(props) =>
          <LoginMain
            {...props}
            onLoggedIn={this.handleLogIn}
          />
        }
      />
    )
  }

  gameSetupPath() {
    return (
      <ProtectedRoute path='/game/setup'
        component={SetupGameMain}
      />
    )
  }

  gamePlayPath() {
    return (
      <ProtectedRoute path='/game/play'
        component={GamePlayMain}
      />
    )
  }

  render() {
    console.log('App render()')
    return (
      <>
        <Header />
        <Nav
          onLogout={this.handleLogOut}
          loggedIn={this.state.isLoggedIn}
        />
        {this.staticPaths()}
        {this.signupPath()}
        {this.loginPath()}
        {this.gameSetupPath()}
        {this.gamePlayPath()}
      </>
    );
  }
}

export default App;
