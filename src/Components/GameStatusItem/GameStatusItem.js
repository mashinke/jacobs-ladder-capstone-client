import React from 'react';

export default function GameStatusItem(props) {
  return (
    <li>
      <div className='label'>{props.title}</div>
      <div className='datum'>
        {props.number}{(props.total !== undefined) && `/${props.total}`}
      </div>
    </li>
  )
}