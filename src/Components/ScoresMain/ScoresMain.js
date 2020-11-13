import React, { Component } from 'react';
import APIService from '../../Services/APIService';
import GameScoreItem from '../GameScoreItem/GameScoreItem';
import Loading from '../Loading/Loading';

export default class ScoresMain extends Component {
  state = {}
  componentDidMount = async () => {
    const scores = await APIService.fetchScores();
    this.setState({ scores })
  }
  renderScores() {
    return this.state.scores.map((score, i) => {
      console.log(score)
      return(
        <>
          <h3>Game #{i + 1}</h3>
          <ul>{[
            {
              title: 'Turns',
              number: score.position
            },
            {
              title: 'Hints',
              number: score.hintsUsed || 0,
              total: score.maxHints
            },
            {
              title: 'Rolls',
              number: score.successfulRolls || 0,
              total: score.totalRolls || 0
            },
            {
              title: 'Skips',
              number: score.successfulSkips || 0,
              total: score.totalSkips || 0
            }
          ].map((item, i) => <GameScoreItem key={i} {...item} />)}</ul>
        </>
      )
  });
}
render() {
  return (
    <div className='scoresMain'>
      <h2>Scores</h2>
      {
        !this.state.scores
          ? <Loading label='scores' />
          : <ul>{this.renderScores()}</ul>
      }
    </div>
  )
}
}