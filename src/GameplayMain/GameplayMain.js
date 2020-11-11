import React, { Component } from 'react';
import GameTime from '../GameTime/GameTime';
import GameStatus from '../GameStatus/GameStatus';
import QuestionCard from '../QuestionCard/QuestionCard';
import Loading from '../Loading/Loading';
import dummyStore from './dummy_store';
import config from '../config';

export default class GamePlayMain extends Component {
  state = {}

  getChallenge = (e) => {
    e.preventDefault();
    this.setState({ activeCard: this.state.skipCard })
  }

  onAnswerChange = (answer) => {
    this.setState({answer});
  }

  async componentDidMount() {
    // this.setState({ ...dummyStore });
    const response = await fetch(`${config.API_BASEURL}/game`)
    const gameData = await response.json();
    this.setState({...gameData, activeCard: gameData.rollCard});
    this.setState({ activeCard: dummyStore.rollCard })
  }

  render() {
    if(!this.state.gameState) {
      console.log('GameplayMain loading...', this.state.gameState)
      return <Loading label='Game' />
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
          card={this.state.activeCard}
          getChallenge={this.getChallenge}
          onAnswerChange={this.onAnswerChange}
        />
      </main>
    )
  }
}