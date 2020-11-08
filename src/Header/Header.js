import React from 'react';
import './Header.css';

export default function Header(props) {
  console.log(props)
  if (props.match.path === '/') {
    return (
      <header class='base'>
        <div class='hero'>
          <h1 class='masthead'>Jacob's Ladder</h1>
        </div>
      </header>
    )
  }
  return (
    <header className='base'>
      <h1 className='small-masthead'>Jacob's Ladder</h1>
    </header>
  )
}
