import React from 'react';
import PositionDisplay from '../PositionDisplay/PositionDisplay';

export default function GameStatus(props) {
  const currentStage = Math.floor(props.position / props.stageSize) + 1;
  const currentPosInStage = props.position % props.stageSize;
  return (
    <section className='game-status'>
      <PositionDisplay
        label='stages'
        totalSquares={props.totalStages}
        filledSquares={currentStage}
      />
      <section className='turn-info'>
        <ul>
          <li>
            <div className='label'>Turn</div>
            <div className='datum'>{props.turnNumber}</div>
          </li>
          <li>
            <div className='label'>Hints</div>
            <div className='datum'>
              {props.hintsUsed || 0}/{props.maxHints}
            </div>
          </li>
          <li>
            <div className='label'>Rolls</div>
            <div className='datum'>
              {props.successfulRolls || 0}/{props.totalRolls || 0}
            </div>
          </li>
          <li>
            <div className='label'>Skips</div>
            <div className='datum'>
              {props.successfulSkips || 0}/{props.totalSkips || 0}
            </div>
          </li>
        </ul>
      </section>
      <PositionDisplay
        label='stages'
        totalSquares={props.stageSize}
        filledSquares={currentPosInStage}
      />
    </section>
  )
}