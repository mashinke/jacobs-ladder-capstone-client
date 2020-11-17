import React from 'react';
import AnswerInput from '../AnswerInput/AnswerInput';
import Loading from '../Loading/Loading';
import './QuestionCard.css';

export default function QuestionCard(props) {
  if (props.card.answers) {
    const answerDivs = props.card.answers.map((answerText, i) =>
      <AnswerInput
        answerText={answerText}
        onAnswerChange={props.onAnswerChange}
        selectedAnswer={props.selectedAnswer}
        key={i}
      />)
    console.log(props.hintsUsed >= props.maxHints)
    console.log('hintsUsed', props.hintsUsed)
    let cardActions = [(
      <button
        key='answer'
        type='button'
        className='answerButton'
        onClick={() => props.onAnswerClick()}
        disabled={!props.selectedAnswer}
      >
        Answer
      </button>
    )]
    if (!props.lastTurn) {
      cardActions.unshift(
          <button
            key='switch'
            type='button'
            onClick={() => props.toggleOnSkip()} >
            {props.onSkip ? 'Roll' : 'Challenge'}
          </button>
        )
    }
    if (!props.lastTurn && ( props.maxHints > 0 || !props.hintLimit)) {
      cardActions.push(
        <button
          key='hint'
          type='button'
          disabled={
            props.onSkip
            || ( props.hintsUsed >= props.maxHints
              && props.hintLimit
            )
          }
          onClick={() => props.onHintClick()}>
          Get Hint
        </button>
      )
    }
    return (
      <form className='card'>
        <div className='challenge-img fancyBorder'><div className={`challenge-alt-text${props.onSkip ? ' word' : ''
          }`}>{props.card.altText}</div></div>
        <p className='challenge-text'>{props.card.questionText}</p>
        <ul className='challengeAnswers'>
          {answerDivs}
        </ul>
        <div className='turnActions'>
          {cardActions}
        </div>
      </form>
    )
  }
  else { return <Loading label='Card' /> }
}