import React from 'react';
import PositionDisplay from '../PositionDisplay/PositionDisplay';

export default function GameStatus(props) {
  const currentStage = Math.floor(props.position / props.stageSize);
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
              {props.hintsUsed}/{props.maxHints}
            </div>
          </li>
          <li>
            <div className='label'>Rolls</div>
            <div className='datum'>
              {props.successfulRolls}/{props.totalRolls}
            </div>
          </li>
          <li>
            <div className='label'>Skips</div>
            <div className='datum'>
              {props.successfulSkips}/{props.totalSkips}
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