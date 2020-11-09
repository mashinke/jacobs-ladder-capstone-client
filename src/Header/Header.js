import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
  return (
    <Switch>
      <Route path='/game'
        render={(props) => (
          <header className='base'>
            <h1 className='small-masthead'>Jacob's Ladder</h1>
          </header>
        )} />
      <Route path='/'
        render={(props) => (
          <header class='base'>
            <div class='hero'>
              <h1 class='masthead'>Jacob's Ladder</h1>
            </div>
          </header>
        )} />
    </Switch>
  )

}
