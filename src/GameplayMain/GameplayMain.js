import React, { Component } from 'react';
// import GameTime from '../GameTime/GameTime';
import GameStatus from '../GameStatus/GameStatus';
import QuestionCard from '../QuestionCard/QuestionCard';
import apiHelpers from '../apiHelpers';
import Loading from '../Loading/Loading';
import TurnResultModal from '../TurnResultModal/TurnResultModal';
import VictoryModal from '../VictoryModal/VictoryModal';

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
    const turnResult = await apiHelpers.postTurn(payload);
    const gameData = await apiHelpers.fetchGame();
    await this.setState({
      ...gameData, answer: '',
      onSkip: false,
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
    // this.setState({ ...dummyStore });
    const gameData = await apiHelpers.fetchGame();
    this.setState({ ...gameData, onSkip: false });
  }

  render() {
    if (!this.state.gameSettings) {
      return <Loading label='Game' />
    }
    return (
      <main className='base game'>
        {/* <GameTime // not yet implemented
          time={this.state.timeElapsed} /> */}

        <GameStatus
          {...this.state.gameState}
          {...this.state.gameSettings}
        />

        {
          this.state.turnResult
            ? <TurnResultModal
              {...this.state.turnResult}
              stageSize={this.state.gameSettings.stageSize}
              onContinue={this.handleTurnResultContinue}
            />
            : this.state.gameSettings.ended
            ? <VictoryModal onClickNewGame={this.handleNewGame}/>
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
            />
        }
      </main>
    )
  }
}