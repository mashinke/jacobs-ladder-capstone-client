import React from 'react';

export default function VictoryModal(props) {
  return (
    <div className='victoryModal'>
      <p>You've won! Congratulations!</p>
      <button type='button' onClick={() => props.onClickNewGame()} >
        New Game
    </button>
    </div>
  )
}