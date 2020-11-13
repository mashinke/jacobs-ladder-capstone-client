import React from 'react';

export default function FormInput(props) {
  return (
    <div key={props.id}>
          <p>
            <label htmlFor={props.id}>{props.label}</label>
          </p>
          <p>
            <input
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