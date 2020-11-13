import React from 'react';
import PositionDisplay from '../PositionDisplay/PositionDisplay';
import GameStatusItem from '../GameStatusItem/GameStatusItem';
import './GameStatus.css'

export default function GameStatus(props) {
  let currentStage = Math.floor(props.position / props.stageSize) + 1 || 1;
  let currentPosInStage;
  currentPosInStage = (props.position % props.stageSize) || 'start';
  if (currentPosInStage === 'start' && currentStage > 1) {
    currentPosInStage = props.stageSize;
    currentStage -= 1;
  }
  if (currentStage > props.totalStages) {
    currentStage = props.totalStages;
    currentPosInStage = props.stageSize;
  }
  console.log(currentPosInStage, currentStage)
  const gameStausItems = [
    {
      title: 'Turns',
      number: props.turnNumber
    },
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
  ].map((item, i) => <GameStatusItem key={i} {...item} />)
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
        start={currentStage === 1}
        end={currentStage === props.totalStages}
        ended={props.ended}
      />
    </section>
  )
}