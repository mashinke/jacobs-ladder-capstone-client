import React from 'react';
import APIService from '../../Services/APIService';
import FormComponent from '../FormComponent/FormComponent';
import FormInput from '../FormInput/FormInput';
import './SetupGameMain.css';

import { IconContext } from 'react-icons';
import { CgRadioCheck, CgRadioChecked } from 'react-icons/cg';

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
    await APIService.postGame(payload);
    this.props.history.push('/game/play')
  }

  validateGameLength = () => {
    return this.state.totalStages.value > 2 && this.state.totalStages.value < 18;
  }

  validateHintLimit = () => {
    return this.state.maxHints.value >= 0;
  }

  async componentDidMount() {
    const { gameSettings } = await APIService.fetchGame();
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
    const unlimitedSelected =
      this.state.hintLimit.value === false
        ? <CgRadioChecked className='radioIcon' />
        : <CgRadioCheck className='radioIcon' />;
    const limitedSelected =
      this.state.hintLimit.value === true
        ? <CgRadioChecked className='radioIcon' />
        : <CgRadioCheck className='radioIcon' />;
    return (
      <IconContext.Provider value={{ className: 'reactIcons' }}>
        <main className='base static'>
          <h2>Set Up Game</h2>
          <form
            className='gameSetupForm'
            onSubmit={event => this.onSubmit(event)}>
            <FormInput
              {...this.state.totalStages}
              className='numberInput'
              label='Game Length: '
              id='totalStages'
              onChange={this.onFieldChange}
              onBlur={this.onBlur}
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
                  className='setupRadio'
                  id='unlimited'
                  name='limitRadio'
                  type="radio"
                  onChange={e => this.onhintLimitedChange(e.target)}
                  checked={!this.state.hintLimit.value}
                />
                <label
                  className='setupRadioLabel'
                  htmlFor='unlimited'>
                  {unlimitedSelected} Unlimited
              </label>
              </p>
              <p>
                <input
                  className='setupRadio'
                  id='limited'
                  name='limitRadio'
                  type="radio"
                  onChange={e => this.onhintLimitedChange(e.target)}
                  checked={this.state.hintLimit.value}
                />
                <label
                  className='setupRadioLabel'
                  htmlFor='limited'>
                  {limitedSelected} Limit to:
              </label>
                <input
                  className='numberInput'
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
              className='formButton'
              disabled={
                !this.validateGameLength() ||
                !this.validateHintLimit()
              }
              type="submit">Start Game</button>
          </form>
        </main>
      </IconContext.Provider >
    )
  }
}