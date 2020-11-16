import React from 'react';
import './FormInput.css'

export default function FormInput(props) {
  return (
    <div key={props.id}>
          <p className='formInput'>
            <label htmlFor={props.id}>{props.label}</label>
            <input
              className={props.className}
              onChange={e => props.onChange(e.target)}
              onBlur={e => props.onBlur(e.target)}
              value={props.value}
              id={props.id}
              type={props.type} />
          </p>
          {
            (( ( props.touched || !props.validateTouch ) && !props.validator()) && <p className='error'>{props.validationMessage}</p> )
          }
        </div>
  )
}