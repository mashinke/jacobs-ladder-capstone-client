import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import StaticMain from '../StaticMain/StaticMain';

class App extends Component {
  staticPaths() {
    return ['/', '/rules'].map(path => {
      return (
        <Route exact path={path}
          component={StaticMain}
        />
      )
    })
  }
  render() {
    console.log('App render()')
    return (
      <BrowserRouter>
        <Header />
        <Nav />
        {this.staticPaths()}
      </BrowserRouter>
    );
  }
}

export default App;
