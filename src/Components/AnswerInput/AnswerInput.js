import React from 'react';
import './AnswerInput.css'

export default function AnswerInput(props) {
  return (
    <li className='answerInput'>
      <input
        name='answer'
        type='radio'
        className='answerInputRadio'
        id={props.answerText}
        checked={props.answerText === props.selectedAnswer}
        onChange={() => props.onAnswerChange(props.answerText)}
      />
      <label
      className='answerInputLabel'
        htmlFor={props.answerText}>
        {props.answerText}
      </label>
    </li>
  )

}