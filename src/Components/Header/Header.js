import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Crown from '../Crown/Crown';
import './Header.css';

export default function Header(props) {
  return (
    <header className='base'>
      <Route path='/game'>
        {({ match }) => (
          <CSSTransition
            in={(match !== null)}
            timeout={1000}
            classNames='small-header'
            unmountOnExit >
            <div className='small-header'>
              <h1 className='small-masthead'>Jacob's Ladder</h1>
            </div>
          </CSSTransition>
        )}
      </Route>
      <Route exact path={'/(|rules|signup|login)'}>
        {({ match }) => (
          <CSSTransition
            in={(match !== null)}
            timeout={1000}
            classNames='big-header'
            unmountOnExit
            onExit={() => {
              document.querySelector('html').style.overflowY = 'hidden';
            }}
            onExited={() => {
              document.querySelector('html').style.overflowY = 'auto';
            }} >
            <div className='hero fancyBorder'>
              <Crown />
              <h1 className='masthead'>Jacob's Ladder</h1>
            </div>
          </CSSTransition>
        )}
      </Route>
    </header>
  )

}
