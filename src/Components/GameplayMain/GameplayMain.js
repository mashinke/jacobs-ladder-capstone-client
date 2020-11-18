import React, { Component } from 'react';
// import GameTime from '../GameTime/GameTime';
import { CSSTransition } from 'react-transition-group';
import GameStatus from '../GameStatus/GameStatus';
import QuestionCard from '../QuestionCard/QuestionCard';
import APIService from '../../Services/APIService';
import Loading from '../Loading/Loading';
import TurnResultModal from '../TurnResultModal/TurnResultModal';
import VictoryModal from '../VictoryModal/VictoryModal';
import './GameplayMain.css';

export default class GamePlayMain extends Component {
  state = {
    modal: 'loading',
    gameSettings: {},
    gameState: {}

  }

  transitionTimeOut = 350;
  transitionDelay = 350;

  modal = () => {
    if (this.state.modal === 'loading')
      return 'loading';
    else if (this.state.modal === 'turnResult')
      return 'turnResult';
    else if (this.state.modal === 'turnStart') {
      if (this.state.gameSettings.ended)
        return 'victoryModal';
      else if (this.state.gameSettings.lastTurn || this.state.onSkip)
        return 'skipCard';
      else return 'rollCard';
    }
  }

  onAnswerChange = (answer) => {
    this.setState({ answer });
  }

  toggleOnSkip = () => {
    this.setState({ onSkip: !this.state.onSkip })
  }

  handleAnswerClick = async () => {
    const payload = {
      gameId: this.state.gameSettings.gameId,
      cardId: (this.state.onSkip || this.state.gameSettings.lastTurn)
        ? this.state.skipCard.id
        : this.state.rollCard.id,
      skipCard: this.state.onSkip,
      answer: this.state.answer,
      useHint: this.state.useHint
    }
    const turnResult = await APIService.postTurn(payload);
    await this.setState({
      modal: 'turnResult',
      answer: '',
      useHint: false,
      onSkip: false,
      turnResult
    })
  }

  handleHintClick = async () => {
    await this.setState({ useHint: true });
    this.handleAnswerClick();
  }

  handleTurnResultContinue = async () => {
    console.log('handleTurnResultContinue')
    const gameData = await APIService.fetchGame();
    this.setState({
      ...gameData,
      modal: 'turnStart'
    })
  }

  handleNewGame = () => {
    this.props.history.push('/game/setup');
  }

  async componentDidMount() {
    const gameData = await APIService.fetchGame();
    console.log(gameData)
    if (Object.keys(gameData).length === 0) {
      // if gameData object is empty, we need to set up a new game
      return this.props.history.push('/game/setup');
    }
    this.setState({
      ...gameData,
      modal: 'turnStart'
    });
  }

  render() {
    console.log('GameMain rendering');
    return (
      <main className='base game'>
        <CSSTransition
          in={(this.modal() === 'turnStart')}
          timeout={this.transitionTimeOut}
          delay={this.transitionDelay}
          classNames='transition'>
          <GameStatus
            {...this.state.gameState}
            {...this.state.gameSettings}
          />
        </CSSTransition>
        <div className='modalWrapper'>
          <CSSTransition
            in={(this.modal() === 'rollCard')}
            timeout={this.transitionTimeOut}
            delay={this.transitionDelay}
            classNames='transition'
            unmountOnExit>
            <QuestionCard
              card={this.state.rollCard}
              onAnswerChange={this.onAnswerChange}
              toggleOnSkip={this.toggleOnSkip}
              onSkip={false}
              onAnswerClick={this.handleAnswerClick}
              selectedAnswer={this.state.answer}
              onHintClick={this.handleHintClick}
              hintsUsed={this.state.gameState.hintsUsed}
              maxHints={this.state.gameSettings.maxHints}
              hintLimit={this.state.gameSettings.hintLimit}
            />
          </CSSTransition>
          <CSSTransition
            in={(this.modal() === 'skipCard')}
            timeout={this.transitionTimeOut}
            delay={this.transitionDelay}
            classNames='transition'
            unmountOnExit>
            <QuestionCard
              card={this.state.skipCard}
              onAnswerChange={this.onAnswerChange}
              toggleOnSkip={this.toggleOnSkip}
              onSkip={true}
              onAnswerClick={this.handleAnswerClick}
              selectedAnswer={this.state.answer}
              onHintClick={this.handleHintClick}
              hintsUsed={this.state.gameState.hintsUsed}
              maxHints={this.state.gameSettings.maxHints}
              hintLimit={this.state.gameSettings.hintLimit}
              lastTurn={this.state.gameSettings.lastTurn}
            />
          </CSSTransition>
          <CSSTransition
            in={(this.modal() === 'turnResult')}
            timeout={this.transitionTimeOut}
            delay={this.transitionDelay}
            classNames='transition'
            unmountOnExit>
            <TurnResultModal
              {...this.state.turnResult}
              stageSize={this.state.gameSettings.stageSize}
              onButtonClick={this.handleTurnResultContinue}
            />
          </CSSTransition>
          <CSSTransition
            in={(this.modal() === 'victoryModal')}
            timeout={this.transitionTimeOut}
            delay={this.transitionDelay}
            classNames='transition'
            unmountOnExit>
            <VictoryModal onButtonClick={this.handleNewGame} />
          </CSSTransition>
          <CSSTransition
            in={(this.modal() === 'loading')}
            timeout={this.transitionTimeOut}
            delay={this.transitionDelay}
            classNames='transition'
            unmountOnExit>
            <Loading label='Game' />
          </CSSTransition>
        </div>
      </main>
    )
  }
}