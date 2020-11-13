import React from 'react';
import './PositionDisplay.css'

export default function PositionDisplay(props) {
  const makeSquares = () => {
    const squares = [...Array(props.totalSquares).keys()].map((_, i) => {
      const squareNumber = i + 1;
      const filled = props.filledSquares >= squareNumber
      return <div key={i} className={`square${filled ? ' filled' : ''}`}>{squareNumber}</div>
    })
    if (props.start) {
      squares.unshift(
        <div key='start' className='square first filled'>start</div>
      )
    }
    if (props.end && !props.ended) {
      squares.push(
        <div key='end' className='square last'>end</div>
      )
    }
    if (props.ended) {
      squares.push(
        <div key='end' className='square last filled'>end</div>
      )
    }
    return squares;
  }
  return (
    <section className='square-container'>
      <p>{props.label}</p>
      <div className='squares'>
        {makeSquares()}
      </div>
    </section>
  )
}