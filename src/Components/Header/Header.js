import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import FancyBorder from '../FancyBorder/FancyBorder';
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
            <FancyBorder crown={true} className='hero'>
              <h1 className='masthead'>Jacob's Ladder</h1>
            </FancyBorder>
          </CSSTransition>
        )}
      </Route>
    </header>
  )

}
