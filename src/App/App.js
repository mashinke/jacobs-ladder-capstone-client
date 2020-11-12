import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import StaticMain from '../StaticMain/StaticMain';
import SignupMain from '../SignupMain/SignupMain';
import LoginMain from '../LoginMain/LoginMain';
import SetupGameMain from '../SetupGameMain/SetupGameMain';
import GamePlayMain from '../GameplayMain/GameplayMain';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

class App extends Component {
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

  signupPath() {
    return (
      <Route path='/signup'
        component={SignupMain}
      />
    )
  }

  loginPath() {
    return (
      <Route path='/login'
        component={LoginMain}
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
      <BrowserRouter>
        <Header />
        <Nav />
        {this.staticPaths()}
        {this.signupPath()}
        {this.loginPath()}
        {this.gameSetupPath()}
        {this.gamePlayPath()}
      </BrowserRouter>
    );
  }
}

export default App;
