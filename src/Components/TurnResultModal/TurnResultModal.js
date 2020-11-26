import React, { Component } from 'react';
import FancyBorder from '../FancyBorder/FancyBorder';
import './TurnResultModal.css';

export default class TurnResultModal extends Component {
  buttonText = () => 'Continue';
  message = () => {
    const { roll, correctAnswer, useHint, skipSuccess, stageSize, gameWon, lastTurn } = this.props;
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
            `The correct answer was ‘${correctAnswer}.’ You used a hint and rolled a ${roll}${lastTurn ? '. You are now in the final position' : ''}.`
        }
      } else {
        if (skipSuccess) {
          message =
            `Congratulations! You answered correctly and 
          ${lastTurn
              ? 'you are now in the final position!'
              : `advanced ${stageSize} to the next stage!`}`
        } else {
          message = `Unfortunately your answer was incorrect. The right answer was ‘${correctAnswer}.’${lastTurn ? ' Try again!' : ''}`
        }
      }
    }
    return message;
  }
  render() {
    return (
      <div className='overlay'>
        <div className='modal'>
          <FancyBorder>
            <p className='turnResultMessage'>{this.message()}</p>
            <p><button
              className='modalButton'
              type='button'
              onClick={() => this.props.onButtonClick()} >
              {this.buttonText()}
            </button></p>
          </FancyBorder>
        </div>
      </div>
    )
  }
}