import React, { Component } from 'react';
import GameTime from '../GameTime/GameTime';
import GameStatus from '../GameStatus/GameStatus';
import QuestionCard from '../QuestionCard/QuestionCard';
import dummyStore from './dummy_store';

export default class GamePlayMain extends Component {
  state = {
    gameState: {},
    gameSettings: {},
    rollCard: {},
    skipCard: {},
    activeCard: {},
    timeElapsed: {},
    answer: ''
  }

  getChallenge = (e) => {
    e.preventDefault();
    this.setState({ activeCard: this.state.skipCard })
  }

  onAnswerChange = (answer) => {
    this.setState({answer});
  }

  componentDidMount() {
    this.setState({ ...dummyStore });
    this.setState({ activeCard: dummyStore.rollCard })
  }

  render() {
    return (
      <main className='base game'>
        <GameTime
          time={this.state.timeElapsed} />

        <GameStatus
          {...this.state.gameState}
          {...this.state.gameSettings}
        />

        <QuestionCard
          card={this.state.activeCard}
          getChallenge={this.getChallenge}
          onAnswerChange={this.onAnswerChange}
        />
      </main>
    )
  }
}