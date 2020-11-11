import React from 'react';
import AnswerInput from '../AnswerInput/AnswerInput';
import './QuestionCard.css';

export default function QuestionCard(props) {
  console.log(props)
  if (props.card.answers) {
    const answerDivs = props.card.answers.map((ans, i) =>
      <AnswerInput
        answerText={ans}
        onAnswerChange={props.onAnswerChange}
        key={i}
      />)
    return (
      <form className='card'>
        <div className='challenge-img'>{props.card.altText}</div>
        <p className='challenge-text'>{props.card.questionText}</p>
        <section className='challenge-answers'>
          <div className='column'>
            {answerDivs}
          </div>
        </section>
        <div className='challenge-actions'>
          <button>Roll</button>
          <button>Hint</button>
          <button type='button' onClick={() => props.toggleOnSkip()} >
            {props.onSkip ? 'Challenge' : 'Roll'}
          </button>
        </div>
      </form>
    )
  }
  else { console.log('loading...'); return ('loading') }
}