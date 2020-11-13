import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiHelpers from '../apiHelpers';
import TokenService from '../Services/TokenService';
import UserFormComponent from '../UserFormComponent/UserFormComponent';

export default class SignupMain extends UserFormComponent {
  state = {
    error: null,
    email: {
      value: '',
      validateTouch: true,
      touched: false
    },
    pass: {
      value: '',
      validateTouch: true,
      touched: false
    },
    passTwo: {
      value: '',
      validateTouch: true,
      touchd: false
    }
  }

  formName = 'Signup';

  buttonText = 'Sign up'

  validatePasswordTwo = () => {
    return this.state.pass.value === this.state.passTwo.value;
  }

  formFields = [
    {
      id: 'email',
      validator: this.validateEmail,
      validationMessage: 'Valid email required',
      label: 'Email',
      type: 'text',
      validateTouch: true
    },
    {
      id: 'pass',
      validator: this.validatePassword,
      validationMessage: 'Password must be at least 8 characters',
      label: 'Password',
      type: 'password',
      validateTouch: true
    },
    {
      id: 'passTwo',
      validator: this.validatePasswordTwo,
      validationMessage: 'Passwords must match',
      label: 'Verify Password',
      type: 'password',
      validateTouch: false
    }
  ]

  handleFormSubmit = async () => {
    this.setState({ error: null })
    try {
      await apiHelpers.postUser(this.state.email.value, this.state.pass.value);
      const token = await apiHelpers.postLogin(this.state.email.value, this.state.pass.value);
      this.props.onLoggedIn(token);
    } catch(error) {
      this.setState({ error })
    }
  }

  render() {
    return (
      <main>
        {this.renderForm()}
        <p><Link to='/login'>Log In</Link></p>
      </main>
    )

  }
}