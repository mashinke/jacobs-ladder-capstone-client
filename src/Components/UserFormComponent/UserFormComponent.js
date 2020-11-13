import React from 'react';
import FormComponent from '../FormComponent/FormComponent';
import FormInput from '../FormInput/FormInput';

export default class UserFormComponent extends FormComponent {
  validateEmail = () => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email.value)
  }

  validatePassword = () => {
    return this.state.pass.value.length > 7;
  }

  onSubmit = (event) => {
    console.log('prevent default')
    event.preventDefault();
    console.log(this)
    return this.handleFormSubmit();
  }
  allowSubmit() {
    return this.formFields.reduce((r, field) => {
      if (!r) return false;
      return field.validator();
    }, true)
  }
  renderFields() {
    return this.formFields.map(field => {
      return (
        <FormInput
          key={field.id}
          {...field}
          value={this.state[field.id].value}
          touched={this.state[field.id].touched}
          onChange={this.onFieldChange}
          onBlur={this.onBlur}
        />
      )
    })
  }
  renderForm() {
    const error = this.state.error
      ? <p className='error'>{this.state.error.message}</p>
      : null;
    return (
      <>
        <h2>{this.formName}</h2>
        {error}
        <form onSubmit={event => this.onSubmit(event)}>
          {this.renderFields()}
          <button
            disabled={!this.allowSubmit()}
            type="submit">{this.buttonText}</button>
        </form>
      </>
    )
  }
}