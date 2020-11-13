import React from 'react';
import './PositionDisplay.css'

export default function PositionDisplay(props) {
  const makeSquares = [...Array(props.totalSquares).keys()].map((_, i) => {
    const squareNumber = i + 1;
    const filled = props.filledSquares >= squareNumber
    return <div key={i} className={`square ${filled && 'filled'}`}>{squareNumber}</div>
  })
  return (
    <section className='square-container'>
        <p>{props.label}</p>
        <div className='squares'>
          {makeSquares}
        </div>
      </section>
  )
}