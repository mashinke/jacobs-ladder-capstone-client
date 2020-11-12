import React from 'react';

export default function AnswerInput(props) {
  return (
    <p>
      <input 
        name='answer' 
        type='radio'
        checked={props.answerText === props.selectedAnswer}
        onChange={() => props.onAnswerChange(props.answerText)}
        />
      <label>{props.answerText}</label>
    </p>
  )

}