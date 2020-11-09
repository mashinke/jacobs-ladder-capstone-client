import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserFormComponent from '../UserFormComponent/UserFormComponent';

export default class SignupMain extends UserFormComponent {
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

  formName = 'Signup';

  validatePasswordTwo = () => {
    return this.state.pass.value === this.state.passTwo.value;
  }

  formFields = [
    {
      id: 'email',
      validator: this.validateEmail,
      validationMessage: 'Valid email required',
      label: 'Email',
      type: 'text'
    },
    {
      id: 'pass',
      validator: this.validatePassword,
      validationMessage: 'Password must be at least 8 characters',
      label: 'Password',
      type: 'password'
    },
    {
      id: 'passTwo',
      validator: this.validatePasswordTwo,
      validationMessage: 'Passwords must match',
      label: 'Verify Password',
      type: 'password'
    }
  ]

  render() {
    return (
      <main>
        {this.renderForm()}
        <p><Link to='/login'>Log In</Link></p>
      </main>
    )

  }
}