import React, { Component } from "react";
import Crown from '../Crown/Crown';
import './ModalComponent.css'

export default class ModalComponent extends Component {
  render() {
    return (
      <div className='modalWrapper'>
        <div className='modal fancyBorder'>
          {this.crown ? <Crown className='smallCrown' /> : ''}
          <p>{this.message()}</p>
          <p><button
            className='modalButton'
            type='button'
            onClick={() => this.props.onButtonClick()} >
            {this.buttonText()}
      </button></p>
        </div>
      </div>
    )
  }
  
}