import React from 'react';
import FancyBorder from '../FancyBorder/FancyBorder';
import './VictoryModal.css';
export default function VictoryModal(props) {
  return (
    <div className='modal'>
      <FancyBorder crown={true}>
        <p className='victoryMessage'>You've won! Congratulations!</p>
        <p><button
          className='modalButton'
          type='button'
          onClick={() => props.onButtonClick()} >
          New Game
        </button></p>
      </FancyBorder>
    </div>
  )
}