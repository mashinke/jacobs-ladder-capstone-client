import React from 'react';
import { Route, Link } from 'react-router-dom';
import FormComponent from '../FormComponent/FormComponent';

export default class UserFormComponent extends FormComponent {
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
  allowSubmit() {
    return this.formFields.reduce((r, field) => {
      if (!r) return false;
      return field.validator();
    }, true)
  }
  renderFields() {
    return this.formFields.map(field => {
      const error = field.validator()
      return (
        <div key={field.id}>
          <p>
            <label htmlFor={field.id}>{field.label}</label>
          </p>
          <p>
            <input
              onChange={e => this.onFieldChange(e.target)}
              onBlur={e => this.onBlur(e.target)}
              value={this.state[field.id].value}
              id={field.id}
              type={field.type} />
          </p>
          {
            ((this.state[field.id].touched && !error) && <p className='error'>{field.validationMessage}</p>)
          }
        </div>
      )
    })
  }
  renderForm() {
    return (
      <>
        <h2>{this.formName}</h2>
        <form onSubmit={event => this.onSubmit(event)}>
          {this.renderFields()}
          <button
            disabled={!this.allowSubmit()}
            type="submit">Sign Up</button>
        </form>
      </>
    )
  }
}