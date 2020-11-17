import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Header.css';
import crown from './crown.svg';

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
          <header className='base'>
            <div className='hero fancyBorder'>
              <img className='crown' src={crown} alt='crown'/>
              <h1 className='masthead'>Jacob's Ladder</h1>
            </div>
          </header>
        )} />
    </Switch>
  )

}
