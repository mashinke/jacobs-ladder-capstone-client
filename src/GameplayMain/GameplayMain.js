import React, { Component } from 'react';
import GameTime from '../GameTime/GameTime';
import GameStatus from '../GameStatus/GameStatus';
import QuestionCard from '../QuestionCard/QuestionCard';
import apiHelpers from '../apiHelpers';

export default class GamePlayMain extends Component {
  state = {}

  onAnswerChange = (answer) => {
    this.setState({ answer });
  }

  toggleOnSkip = () => {
    this.setState({ onSkip: !this.state.onSkip })
  }

  async componentDidMount() {
    // this.setState({ ...dummyStore });
    const gameData = await apiHelpers.fetchGame();
    this.setState({ ...gameData, onSkip: false });
  }

  render() {
    if (!this.state.gameState) {
      console.log('GameplayMain loading...', this.state.gameState)
      return <p>loading turn...</p>
    }

    console.log('GameState main return', this.state)
    return (
      <main className='base game'>
        <GameTime
          time={this.state.timeElapsed} />

        <GameStatus
          {...this.state.gameState}
          {...this.state.gameSettings}
        />

        <QuestionCard
          card={this.state.onSkip ? this.state.skipCard : this.state.rollCard}
          onAnswerChange={this.onAnswerChange}
          toggleOnSkip={this.toggleOnSkip}
          onSkip={this.state.onSkip}
        />
      </main>
    )
  }
}