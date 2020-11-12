import React from 'react';

export default function GameStatusItem(props) {
  return (
    <li>
      <div className='label'>{props.title}</div>
      <div className='datum'>
        {props.number}{props.total && `/${props.total}`}
      </div>
    </li>
  )
}