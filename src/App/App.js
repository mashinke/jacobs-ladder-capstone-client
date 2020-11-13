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
import TokenService from '../Services/TokenService';

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

  toggleLoggedIn = (token) => {
    console.log('toggleLoggedIn')
    TokenService.saveAuthToken(token);
    this.props.history.push('/game/setup');
    this.setState({ isLoggedIn: !this.state.isLoggedIn })
  }

  signupPath() {
    return (
      <Route path='/signup'
        component={(props) =>
          <SignupMain
            {...props}
            onLoggedIn={this.toggleLoggedIn}
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
            onLoggedIn={this.toggleLoggedIn}
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
          onLogout={this.toggleLoggedIn}
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
