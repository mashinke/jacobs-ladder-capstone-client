import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import StaticMain from '../StaticMain/StaticMain';
import SignupMain from '../SignupMain/SignupMain';

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

  render() {
    console.log('App render()')
    return (
      <BrowserRouter>
        <Header />
        <Nav />
        {this.staticPaths()}
        {this.signupPath()}
      </BrowserRouter>
    );
  }
}

export default App;
