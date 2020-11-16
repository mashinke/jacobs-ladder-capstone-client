import React from 'react';
import './PositionDisplay.css'

function convertNumber(num) {
  if (num > 100) return num;
  const hash = {
    1: "א",
    2: "ב",
    3: "ג",
    4: "ד",
    5: "ה",
    6: "ו",
    7: "ז",
    8: "ח",
    9: "ט",
    10: "י",
    20: "כ",
    30: "ל",
    40: "מ",
    50: "נ",
    60: "ס",
    70: "ע",
    80: "פ",
    90: "צ"
  }
  if( num > 10 ) {
    let tens = Math.floor(num / 10) * 10;
    let ones = num % 10;
    return hash[tens] + hash[ones]
  } else return hash[num]
}

export default function PositionDisplay(props) {
  const makeSquares = () => {
    const squares = [...Array(props.totalSquares).keys()].map((_, i) => {
      const squareNumber = i + 1;
      const filled = props.filledSquares >= squareNumber
      return <div key={i} className={`square${filled ? ' filled' : ''}`}>{convertNumber(squareNumber)}</div>
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