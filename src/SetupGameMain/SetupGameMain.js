import React from 'react';
import apiHelpers from '../apiHelpers';
import FormComponent from '../FormComponent/FormComponent';
import FormInput from '../FormInput/FormInput';

export default class SetupGameMain extends FormComponent {

  state = {
    error: null,
    totalStages: {
      value: 6,
      touched: false
    },
    hintLimit: {
      value: false,
      touched: false
    },
    maxHints: {
      value: 18,
      touched: false
    }
  }

  onhintLimitedChange = (element) => {
    const value = element.id === 'limited'

    this.setState({ hintLimit: { value, touched: true } })
  }

  onHintLimitChange = (value) => {
    this.setState({ maxHints: { value, touched: true } })
    this.setState({ hintLimit: { value: true, touched: true } })
  }

  onSubmit = async event => {
    event.preventDefault();
    const payload = {
      totalStages: this.state.totalStages.value
    };
    if (this.state.hintLimit.value) {
      payload.hintLimit = true;
      payload.maxHints = this.state.maxHints.value;
    } else {
      payload.hintLimit = false;
    }
    console.log('payload', payload)
    apiHelpers.postGame(payload);
    this.props.history.push('/game/play')
  }

  validateGameLength = () => {
    return this.state.totalStages.value > 2 && this.state.totalStages.value < 18;
  }

  validateHintLimit = () => {
    return this.state.maxHints.value >= 0;
  }

  async componentDidMount() {
    const { gameSettings } = await apiHelpers.fetchGame();
    console.log(gameSettings)
    const { totalStages, hintLimit, maxHints } = gameSettings;
    this.setState({
      totalStages: {
        value: totalStages,
        touched: false
      },
      hintLimit: {
        value: hintLimit,
        touched: false
      },
      maxHints: {
        value: maxHints || 18,
        touched: false
      }
    })
  };

  render() {
    return (
      <main>
        <h2>Set Up Game</h2>
        <form onSubmit={event => this.onSubmit(event)}>
          <FormInput
            {...this.state.totalStages}
            label='Game Length: '
            id='totalStages'
            onChange={this.onFieldChange}
            onBlur={this.onBlur}
            className='setup-number'
            type='number'
            validator={this.validateGameLength}
            validateTouch={false}
            validationMessage='Game length must be at least 3 stages and no more than 18'
          />
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
                checked={!this.state.hintLimit.value}
              />
              <label htmlFor='unlimited'>Unlimited</label>
            </p>
            <p>
              <input
                id='limited'
                name='limitRadio'
                type="radio"
                onChange={e => this.onhintLimitedChange(e.target)}
                checked={this.state.hintLimit.value}
              />
              <label htmlFor='hint-limit'>Limit to:</label>
              <input
                className='setup-number'
                type="number"
                id='hint-limit'
                value={this.state.maxHints.value}
                onChange={e => this.onHintLimitChange(e.target.value)}
              />
            </p>
            {
              this.state.maxHints.touched && !this.validateHintLimit() &&
              <p className='error'>Cannot have negative hints</p>
            }
          </fieldset>
          <button
            disabled={
              !this.validateGameLength() ||
              !this.validateHintLimit()
            }
            type="submit">Start Game</button>
        </form>
      </main>
    )
  }
}