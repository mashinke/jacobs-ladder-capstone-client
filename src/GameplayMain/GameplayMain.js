import React, { Component } from 'react';
import GameTime from '../GameTime/GameTime';
import dummyStore from './dummy_store';

export default class GamePlayMain extends Component {
  state = {
    game_state: {}
  }
  componentDidMount() {
    this.setState({ ...dummyStore })
  }
  render() {
    return (
      <main className='base game'>
        <GameTime
          time={this.state.time_elapsed} />
        <section className='game-status'>
          <section className='square-container'>
            <p>stages</p>
            <div className='squares'>
              <div className='square filled'></div>
              <div className='square filled'></div>
              <div className='square filled'></div>
              <div className='square filled'></div>
              <div className='square'></div>
              <div className='square'></div>
            </div>
          </section>
          <section className='turn-info'>
            <ul>
              <li>
                <div className='label'>Player</div>
                <div className='datum'>1</div>
              </li>
              <li>
                <div className='label'>Turn</div>
                <div className='datum'>9</div>
              </li>
              <li>
                <div className='label'>Hints</div>
                <div className='datum'>3/18</div>
              </li>
              <li>
                <div className='label'>Answers</div>
                <div className='datum'>8/10</div>
              </li>
              <li>
                <div className='label'>Challenges</div>
                <div className='datum'>1/2</div>
              </li>
            </ul>
          </section>
          <section className='square-container'>
            <div className='squares'>
              <div className='square filled'></div>
              <div className='square filled'></div>
              <div className='square filled'></div>
              <div className='square filled'></div>
              <div className='square filled'></div>
              <div className='square filled'></div>
              <div className='square filled'></div>
              <div className='square filled'></div>
              <div className='square filled'></div>
              <div className='square filled'></div>
              <div className='square filled'></div>
              <div className='square filled'></div>
              <div className='square'></div>
              <div className='square'></div>
              <div className='square'></div>
              <div className='square'></div>
            </div>
            <p>spaces</p>
          </section>
        </section>
        <form className='card'>
          <div className='challenge-img'>challenge image</div>
          <p className='challenge-text'>Challenge Text</p>
          <section className='challenge-answers'>
            <div className='column'>
              <p>
                <input type='radio' />
                <label>Answer 1</label>
              </p>
              <p>
                <input type='radio' />
                <label>Answer 2</label>
              </p>
            </div>
            <div className='column'>
              <p>
                <input type='radio' />
                <label>Answer 3</label>
              </p>
              <p>
                <input type='radio' />
                <label>Answer 4</label>
              </p>
            </div>
          </section>
          <div className='challenge-actions'>
            <button>Answer</button>
            <button>Hint</button>
          </div>
        </form>
        <section className='turn-actions'>
          <button>Roll</button>
          <button>Challenge</button>
        </section>
      </main>
    )
  }
}