import React from 'react';
import { Link } from 'react-router-dom';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute'
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
      type: 'text',
      className: 'textInput'
    },
    {
      id: 'pass',
      validator: this.validatePassword,
      validationMessage: 'Password must be at least 8 characters',
      label: 'Password',
      validateTouch: true,
      type: 'password',
      className: 'textInput'
    }
  ]

  handleFormSubmit = async () => {
    this.setState({ error: null })
    try {
      const { token } = await APIService.postLogin(
        this.state.email.value,
        this.state.pass.value
      )
      this.props.onLoggedIn(token, this.props.location);
    } catch (error) {
      this.setState({ error })
    }
  }

  render() {
    return (
      <PublicOnlyRoute>
        <div className='static'>
          {this.renderForm()}
          <p><Link className='formLink' to='/signup'>Sign Up</Link></p>
          <h3>Demo credentials:</h3>
          <p>Email: demo@example.net</p>
          <p>Password: password</p>
        </div>
      </PublicOnlyRoute>
    )
  }
}