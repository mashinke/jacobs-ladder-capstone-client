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
    },
    passTwo: {
      value: '',
      touchd: false
    }
  }

  onFieldChange = (element) => {
    const field = element.id;
    const value = element.value;
    this.setState({ [field]: { value, touched: true } })
  }

  render() {
    return (
      <main className='base'>
        <h2>Signup</h2>
        <form>
          <p>
            <label htmlFor='email'>Email</label>
          </p>
          <p>
            <input onChange={e => this.onFieldChange(e.target)} value={this.state.email.value} id='email' type="text" />
          </p>
          <p>
            <label htmlFor='pass'>Password</label>
          </p>
          <p>
            <input onChange={e => this.onFieldChange(e.target)} value={this.state.pass.value} id='pass' type="password" />
          </p>
          <p>
            <label htmlFor='passTwo'>Verify Password</label>
          </p>
          <p>
            <input onChange={e => this.onFieldChange(e.target)} value={this.state.passTwo.value} id='passTwo' type="password" />
          </p>
          <button type="submit">Sign Up</button>
        </form>
        <p><Link to='/login'>Log In</Link></p>
      </main>
    )
  }
}