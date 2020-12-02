import React from 'react';
import FancyBorder from '../FancyBorder/FancyBorder';
import './Loading.css';

export default function Loading(props) {
  return (
    <main className='base'>
      <div className='modal'>
        <FancyBorder>
          <p className='loadingMessage'>
          Loading {props.label}...
          </p>
      </FancyBorder>
      </div>
    </main>
  )
}