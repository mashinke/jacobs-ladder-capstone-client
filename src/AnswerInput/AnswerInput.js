import React from 'react';

export default function AnswerInput(props) {
  return (
    <p>
      <input 
        name='answer' 
        type='radio'
        value={props.answerText}
        onChange={(e) => props.onAnswerChange(e.target.value)}
        />
      <label>{props.answerText}</label>
    </p>
  )

}