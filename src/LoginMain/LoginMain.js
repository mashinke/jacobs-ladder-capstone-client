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
    }
  }

  formName = 'Login'

  formFields = [
    {
      id: 'email',
      validator: this.validateEmail,
      validationMessage: 'Valid email required',
      label: 'Email',
      validateTouch: true,
      type:'text'
    },
    {
      id: 'pass',
      validator: this.validatePassword,
      validationMessage: 'Password must be at least 8 characters',
      label: 'Password',
      validateTouch: true,
      type: 'password'
    }
  ]

  render() {
    return (
      <main>
        {this.renderForm()}
        <p><Link to='/signup'>Sign Up</Link></p>
      </main>
    )
  }
}