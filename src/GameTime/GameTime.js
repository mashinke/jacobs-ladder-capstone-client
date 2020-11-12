import React from 'react';
import './GameTime.css'

export default function GameTime(props) {
  const seconds = props.time % 60
  const minutes = (props.time - seconds) / 60
  return (
    <section className='game-time'>
      <div>Game Time:</div>
      <div>{minutes}:{seconds}</div>
    </section>
  )
}