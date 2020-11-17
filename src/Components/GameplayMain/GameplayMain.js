import React, { Component } from 'react';
// import GameTime from '../GameTime/GameTime';
import GameStatus from '../GameStatus/GameStatus';
import QuestionCard from '../QuestionCard/QuestionCard';
import APIService from '../../Services/APIService';
import Loading from '../Loading/Loading';
import TurnResultModal from '../TurnResultModal/TurnResultModal';
import VictoryModal from '../VictoryModal/VictoryModal';
import './GameplayMain.css';

export default class GamePlayMain extends Component {
  state = {}

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
    this.setState({ turnResult: undefined })
  }

  handleNewGame = () => {
    this.props.history.push('/game/setup');
  }

  async componentDidMount() {
    const gameData = await APIService.fetchGame();
    console.log(gameData)
    if(Object.keys(gameData).length === 0) {
      // if gameData object is empty, we need to set up a new game
      return this.props.history.push('/game/setup');
    }
    this.setState({
      ...gameData,
      onSkip: gameData.gameSettings.lastTurn ? true : false,
    });
  }

  render() {
    if (!this.state.gameSettings) {
      return <Loading label='Game' />
    }

    const modal = this.state.turnResult
      ? <TurnResultModal
        {...this.state.turnResult}
        stageSize={this.state.gameSettings.stageSize}
        onButtonClick={this.handleTurnResultContinue}
      />
      : this.state.gameSettings.ended
        ? <VictoryModal onButtonClick={this.handleNewGame} />
        : this.state.gameSettings.lastTurn
          ? <QuestionCard
            card={this.state.skipCard}
            onAnswerChange={this.onAnswerChange}
            onAnswerClick={this.handleAnswerClick}
            selectedAnswer={this.state.answer}
            lastTurn={true}
          />
          : <QuestionCard
            card={this.state.onSkip ? this.state.skipCard : this.state.rollCard}
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

    return (
      <main className='base game'>
        {/* <GameTime // not yet implemented
          time={this.state.timeElapsed} /> */}

        <GameStatus
          {...this.state.gameState}
          {...this.state.gameSettings}
        />

        { modal}
      </main>
    )
  }
}