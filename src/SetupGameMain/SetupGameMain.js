import React from 'react';
import FormComponent from '../FormComponent/FormComponent';

export default class SetupGameMain extends FormComponent {

  state = {
    error: null,
    players: {
      value: '',
      touched: false
    },
    gameLength: {
      value: '',
      touched: false
    },
    hints: {
      value: '',
      touched: false
    },
  }

  onSubmit = event => {
    event.preventDefault();
  }
  render() {
    return (
      <main>
        <h2>Set Up Game</h2>
        <form onSubmit={event => this.onSubmit(event)}>
          <p>
            <label for='players'>Number of Players</label>
            <input className='setup-number' id='players' type="number" value="2" />
          </p>
          <p>
            <label for='gameLength'>Game Length</label>
            <input className='setup-number' id='gameLength' type="number" value="96" />
          </p>
          <p className='error'>Game length must be at least 18</p>
          <p>
            <label for='hints'>Hints</label>
          </p>
          <fieldset id='hints'>
            <p>
              <input id='unlimited' type="radio" />
              <label for='unlimited'>Unlimited</label>
            </p>
            <p>
              <input id='limited' checked type="radio" />
              <label for='hint-limit'>Limit to:</label>
              <input className='setup-number' type="number" id='hint-limit' value="18" />
            </p>
          </fieldset>
          <button className='play-button' type="submit">Start Game</button>
        </form>
      </main>
    )
  }
}