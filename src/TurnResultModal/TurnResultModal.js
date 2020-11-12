import React from 'react';
import './TurnResultModal.css';

export default function TurnResultModal(props) {
  const { roll, correctAnswer, useHint, skipSuccess, onContinue, stageSize } = props;
  let message;
  if (roll) {
    if (!useHint) {
      message =
        `Congratulations! You answered correctly, and rolled a ${roll}!`
    } else {
      message =
        `The correct answer was ${correctAnswer}. You used a hint and rolled a ${roll}.`
    }
  } else {
    if (skipSuccess) {
      message =
        `Congratulations! You answered correctly and advanced ${stageSize} to the next stage!`
    } else {
      message = `Unfortunately your answer was incorrect. The right answer was ${correctAnswer}.`
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