import React from 'react';
import './VictoryModal.css';
export default function VictoryModal(props) {
  return (
    <div className='victoryModal fancyBorder'>
      <p>You've won! Congratulations!</p>
      <button type='button' onClick={() => props.onClickNewGame()} >
        New Game
    </button>
    </div>
  )
}