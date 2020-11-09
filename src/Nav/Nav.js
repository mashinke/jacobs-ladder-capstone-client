import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

export default function Nav(props) {
  const gameSetupNav = ['/game/setup'].map(path =>
    <Route path={path}
      render={
        props => {
          return (
            <nav className='base'>
              <ul className='navigation'>
                <li><Link to='/' className='navlink'>Home</Link></li>
                <li><Link to='/game/scores' className='navlink'>Scores</Link></li>
                <li><Link to='/game/restore' className='navlink'>Restore Game</Link></li>
              </ul>
            </nav>
          )
        }
      }
    />
  )
  const simpleNavRoutes = ['/login', '/signup', '/game/play'].map(path => {
    return (
      <Route path={path}
        render={
          props => {
            return (
              <nav className='base'>
                <ul className='navigation'>
                  <li><Link to='/' className='navlink'>Home</Link></li>
                </ul>
              </nav>
            )
          }
        }
      />
    )
  })
  const fullNavRoutes = ['/', '/rules'].map(path =>
    (
      <Route path={path}
        render={
          props => {
            return (
              <nav className='base'>
                <ul className='navigation'>
                  <li><Link to='/' className='navlink'>Home</Link></li>
                  <li><Link to='/rules' className='navlink'>Rules</Link></li>
                  <li><Link to='/login' className='navlink'>Login</Link></li>
                  <li><Link to='/game/setup' className='navlink'>Play</Link></li>
                </ul>
              </nav>
            )
          }
        }
      />
    )
  )
  return (
    <Switch>
      {simpleNavRoutes}
      {gameSetupNav}
      {fullNavRoutes}
    </Switch>
  )
}