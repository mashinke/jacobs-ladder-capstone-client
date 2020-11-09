import React, { Component } from 'react';

export default class FormComponent extends Component {
  onFieldChange = (element) => {
    const field = element.id;
    const value = element.value;
    const touched = this.state[field].touched;
    this.setState({ [field]: { value, touched } })
  }

  onBlur = (element) => {
    const field = element.id;
    const value = this.state[field].value;
    this.setState({ [field]: { value, touched: true } })
  }
}