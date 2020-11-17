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
        onClick={() => props.onAnswerClick()}
        disabled={!props.selectedAnswer}
        >
        Answer
      </button>
    )]
    console.log('maxHints', !props.maxHints)
    if (!props.lastTurn) {
      cardActions = [
        ...cardActions, (
          <button
            key='hint'
            type='button'
            disabled={
              props.onSkip
              || (
                props.maxHints
                && props.hintsUsed >= props.maxHints
              )
            }
            onClick={() => props.onHintClick()}>
            Get Hint
          </button>
        ), (
          <button
            key='switch'
            type='button'
            onClick={() => props.toggleOnSkip()} >
            {props.onSkip ? 'Roll' : 'Challenge'}
          </button>
        )]
    }
    return (
      <form className='card'>
        <div className='challenge-img'><div className={`challenge-alt-text${
          props.onSkip ? ' word' : ''
        }`}>{props.card.altText}</div></div>
        <p className='challenge-text'>{props.card.questionText}</p>
        <section className='challenge-answers'>
          <div className='column'>
            {answerDivs}
          </div>
        </section>
        <div className='challenge-actions'>
          {cardActions}
        </div>
      </form>
    )
  }
  else { return <Loading label='Card' /> }
}