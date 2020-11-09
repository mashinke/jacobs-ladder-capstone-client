import React from 'react';
import FormComponent from '../FormComponent/FormComponent';

export default class SetupGameMain extends FormComponent {

  state = {
    error: null,
    players: {
      value: 1,
      touched: false
    },
    gameLength: {
      value: 6,
      touched: false
    },
    hintLimited: {
      value: false,
      touched: false
    },
    hintLimit: {
      value: 18,
      touched: false
    }
  }

  onhintLimitedChange = (element) => {
    const value = element.id === 'limited'

    this.setState({ hintLimited: { value, touched: true } })
  }

  onHintLimitChange = (value) => {
    this.setState({ hintLimit: value, touched: true })
    this.setState({ hintLimited: { value: true, touched: true }})
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
            <label htmlFor='players'>Number of Players: </label>
            <input
              onChange={e => this.onFieldChange(e.target)}
              className='setup-number'
              id='players' type="number"
              value={this.state.players.value} />
          </p>
          <p>
            <label htmlFor='gameLength'>Game Length: </label> 
            <input
              onChange={e => this.onFieldChange(e.target)}
              className='setup-number'
              id='gameLength'
              type="number"
              value={this.state.gameLength.value} /> stages
          </p>
          <p className='error'>Game length must be at least 18</p>
          <p>
            <label htmlFor='hints'>Hints</label>
          </p>
          <fieldset id='hints'>
            <p>
              <input 
                id='unlimited' 
                name='limitRadio'
                type="radio"
                onChange={e => this.onhintLimitedChange(e.target)}
                checked={!this.state.hintLimited.value}
                />
              <label htmlFor='unlimited'>Unlimited</label>
            </p>
            <p>
              <input 
                id='limited' 
                name='limitRadio' 
                type="radio" 
                onChange={e => this.onhintLimitedChange(e.target)}
                checked={this.state.hintLimited.value}
                />
              <label htmlFor='hint-limit'>Limit to:</label>
              <input 
                className='setup-number' 
                type="number" 
                id='hint-limit' 
                value={this.state.hintLimit.value} 
                onChange={e => this.onHintLimitChange(e.target.value)}
                />
            </p>
          </fieldset>
          <button type="submit">Start Game</button>
        </form>
      </main>
    )
  }
}