import React from 'react';
import { Link } from 'react-router-dom';
import APIService from '../../Services/APIService';
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
      validateTouch: true,
      className: 'textInput'
    },
    {
      id: 'pass',
      validator: this.validatePassword,
      validationMessage: 'Password must be at least 8 characters',
      label: 'Password',
      type: 'password',
      validateTouch: true,
      className: 'textInput'
    },
    {
      id: 'passTwo',
      validator: this.validatePasswordTwo,
      validationMessage: 'Passwords must match',
      label: 'Verify Password',
      type: 'password',
      validateTouch: false,
      className: 'textInput'
    }
  ]

  handleFormSubmit = async () => {
    this.setState({ error: null })
    try {
      await APIService.postUser(this.state.email.value, this.state.pass.value);
      const token = await APIService.postLogin(this.state.email.value, this.state.pass.value);
      this.props.onLoggedIn(token);
    } catch(error) {
      this.setState({ error })
    }
  }

  render() {
    return (
      <main className='base static'>
        {this.renderForm()}
        <p><Link className='formLink' to='/login'>Log In</Link></p>
      </main>
    )

  }
}