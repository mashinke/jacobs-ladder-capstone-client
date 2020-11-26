import React from "react";
import Crown from '../Crown/Crown';
import './FancyBorder.css'

export default function FancyBorder(props) {
  return (
    <div className={
      `fancyBorder${props.className ? ` ${props.className}` : ''}`
    }>
      {props.crown ? <Crown className='smallCrown' /> : ''}
      {props.children}
    </div>
  )
}