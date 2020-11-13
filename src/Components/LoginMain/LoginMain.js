import React from 'react';
import { Link } from 'react-router-dom';
import APIService from '../../Services/APIService';
import UserFormComponent from '../UserFormComponent/UserFormComponent';

export default class LoginMain extends UserFormComponent {
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

  buttonText = 'Log in'

  formName = 'Login'

  formFields = [
    {
      id: 'email',
      validator: this.validateEmail,
      validationMessage: 'Valid email required',
      label: 'Email',
      validateTouch: true,
      type: 'text'
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

  handleFormSubmit = async () => {
    this.setState({ error: null })
    try {
      const { token } = await APIService.postLogin(
        this.state.email.value,
        this.state.pass.value
      )
      this.props.onLoggedIn(token);
    } catch (error) {
      this.setState({ error })
    }
  }

  render() {
    return (
      <main>
        {this.renderForm()}
        <p><Link to='/signup'>Sign Up</Link></p>
      </main>
    )
  }
}