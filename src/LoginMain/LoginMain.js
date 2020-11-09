import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignupMain extends Component {
  state = {
    error: null,
    email: {
      value: '',
      touched: false
    },
    pass: {
      value: '',
      touched: false
    }
  }

  onFieldChange = (element) => {
    const field = element.id;
    const value = element.value;
    const touched = this.state[field].touched;
    this.setState({ [field]: { value, touched } })
  }

  onBlur = (element) => {
    const field = element.id;
    const value = this.state[field].value;
    this.setState({ [field]: { value, touched: true } })
  }

  validateEmail = () => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email.value)
  }

  validatePassword = () => {
    return this.state.pass.value.length > 7;
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/game/setup');
  }

  render() {
    return (
      <main className='base'>
        <h2>Login</h2>
        <form onSubmit={event => this.onSubmit(event)}>
          <p>
            <label htmlFor='email'>Email</label>
          </p>
          <p>
            <input
              onChange={e => this.onFieldChange(e.target)}
              onBlur={e => this.onBlur(e.target)}
              value={this.state.email.value}
              id='email'
              type="text" />
          </p>
          {
            (this.state.email.touched && !this.validateEmail()) && <p className='error'>Valid email required</p>
          }
          <p>
            <label htmlFor='pass'>Password</label>
          </p>
          <p>
            <input
              onChange={e => this.onFieldChange(e.target)}
              onBlur={e => this.onBlur(e.target)}
              value={this.state.pass.value}
              id='pass'
              type="password" />
          </p>
          {
            (this.state.pass.touched && !this.validatePassword()) && <p className='error'>Password must be at least 8 characters</p>
          }
          <button
            disabled={
              !this.validateEmail() ||
              !this.validatePassword()
            }
            type="submit">Sign Up</button>
        </form>
        <p><Link to='/signup'>Sign Up</Link></p>
      </main>
    )
  }
}