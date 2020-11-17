import React from 'react';
import ModalComponent from '../ModalComponent/ModalComponent';
import './TurnResultModal.css';

export default class TurnResultModal extends ModalComponent {
  buttonText = () => 'Continue';
  message = () => {
    console.log('message')
    const { roll, correctAnswer, useHint, skipSuccess, onContinue, stageSize, gameWon, lastTurn } = this.props;
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
        console.log(message)
      }
    }
    return message;
  }
}