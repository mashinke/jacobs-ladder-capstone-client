import React from 'react';
import PositionDisplay from '../PositionDisplay/PositionDisplay';
import GameStatusItem from '../GameStatusItem/GameStatusItem';
import './GameStatus.css'

export default function GameStatus(props) {
  const currentStage = Math.ceil(props.position / props.stageSize) || 1;
  const currentPosInStage = props.position % props.stageSize;
  const gameStausItems = [
    { 
      title: 'Turns',
      number: props.turnNumber },
    { 
      title: 'Hints',
      number: props.hintsUsed || 0,
      total: props.maxHints 
    },
    { 
      title: 'Rolls',
      number: props.successfulRolls || 0,
      total: props.totalRolls || 0
    },
    {
      title: 'Skips',
      number: props.successfulSkips || 0,
      total: props.totalSkips || 0
    }
  ].map(item => <GameStatusItem {...item} /> )
  return (
    <section className='game-status'>
      <PositionDisplay
        label='stages'
        totalSquares={props.totalStages}
        filledSquares={currentStage}
      />
      <section className='turn-info'>
        <ul>
         {gameStausItems}
        </ul>
      </section>
      <PositionDisplay
        label='spaces'
        totalSquares={props.stageSize}
        filledSquares={currentPosInStage}
      />
    </section>
  )
}