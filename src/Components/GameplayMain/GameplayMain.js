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
  state = {}

  modal = () => {
    if (!this.state.gameSettings)
      return 'loading';
    else if (this.state.turnResult)
      return 'turnResult';
    else if (this.state.gameSettings.ended)
      return 'victoryModal';
    else if (this.state.gameSettings.lastTurn)
      return 'skipCard';
    else if (this.state.onSkip)
      return 'skipCard';
    else return 'rollCard';
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
      cardId: (this.state.onSkip)
        ? this.state.skipCard.id
        : this.state.rollCard.id,
      skipCard: this.state.onSkip,
      answer: this.state.answer,
      useHint: this.state.useHint
    }
    const turnResult = await APIService.postTurn(payload);
    const gameData = await APIService.fetchGame();
    console.log(gameData)
    await this.setState({
      ...gameData,
      answer: '',
      onSkip: gameData.gameSettings.lastTurn ? true : false,
      useHint: false,
      turnResult
    })
  }

  handleHintClick = async () => {
    await this.setState({ useHint: true });
    this.handleAnswerClick();
  }

  handleTurnResultContinue = () => {
    this.setState({ turnResult: false })
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
      onSkip: gameData.gameSettings.lastTurn ? true : false,
    });
  }

  render() {
    console.log('modal', this.modal())
    console.log('gameSettings', !this.state.gameSettings)
    return (
      <main className='base game'>
        {
          this.modal() !== 'loading'
            ? <>
              <CSSTransition
                in={(this.modal() !== 'loading')}
                timeout={2000}
                classNames='transition'>
                <GameStatus
                  {...this.state.gameState}
                  {...this.state.gameSettings}
                />
              </CSSTransition>
              <CSSTransition
                in={(this.modal() === 'rollCard')}
                timeout={2000}
                classNames='transition'
                unmountOnExit>
                <QuestionCard
                  card={this.state.rollCard}
                  onAnswerChange={this.onAnswerChange}
                  toggleOnSkip={this.toggleOnSkip}
                  onSkip={this.state.onSkip}
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
                timeout={2000}
                classNames='transition'
                unmountOnExit>
                <QuestionCard
                  card={this.state.skipCard}
                  onAnswerChange={this.onAnswerChange}
                  onAnswerClick={this.handleAnswerClick}
                  selectedAnswer={this.state.answer}
                  lastTurn={true}
                />
              </CSSTransition>
              <CSSTransition
                in={(this.modal() === 'turnResult')}
                timeout={5000}
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
                timeout={2000}
                classNames='transition'
                unmountOnExit>
                <VictoryModal onButtonClick={this.handleNewGame} />
              </CSSTransition>
            </>
            : <CSSTransition
              in={(this.modal() === 'loading')}
              timeout={2000}
              classNames='transition'
              unmountOnExit>
              <Loading label='Game' />
            </CSSTransition>
        }

      </main>
    )
  }
}