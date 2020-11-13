import React from 'react';
import './TurnResultModal.css';

export default function TurnResultModal(props) {
  const { roll, correctAnswer, useHint, skipSuccess, onContinue, stageSize, gameWon, lastTurn } = props;
  let message;
  if (gameWon) {
    message = 'Congratulations! You answered correctly and won the game!'
  } else {
    if (roll) {
      if (!useHint) {
        message =
          `Congratulations! You answered correctly, and rolled a ${roll}${lastTurn ? '. You are now in the final position' : ''}!`
      } else {
        message =
          `The correct answer was ${correctAnswer}. You used a hint and rolled a ${roll}${lastTurn ? '. You are now in the final position' : ''}.`
      }
    } else {
      if (skipSuccess) {
        message =
          `Congratulations! You answered correctly and 
        ${lastTurn
            ? 'you are now in the final position!'
            : `advanced ${stageSize} to the next stage!`}`
      } else {
        message = `Unfortunately your answer was incorrect. The right answer was ${correctAnswer}.${lastTurn ? ' Try again!' : ''}`
      }
    }
  }

  return (
    <div className='turnResultsModal'>
      <p>{message}</p>
      <button
        type='button'
        onClick={() => onContinue()}
      >
        Continue
          </button>
    </div>
  )
}