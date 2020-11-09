import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignupMain extends Component {
  render() {
    return (
      <main className='base'>
      <h2>Signup</h2>
      <form>
        <p><label htmlFor='email'>Email</label></p>
        <p><input id='email' type="text" /></p>
        <p><label htmlFor='pass'>Password</label></p>
        <p><input id='pass' type="password" /></p>
        <p><label htmlFor='pass2'>Verify Password</label></p>
        <p><input id='pass2' type="password" /></p>
        <button type="submit">Sign Up</button>
      </form>
      <p><Link to='/login'>Log In</Link></p>
    </main>
    )
  }
}