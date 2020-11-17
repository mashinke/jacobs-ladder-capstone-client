import React from 'react';
import crown from './crown.svg';
import './Crown.css';

export default function Crown(props) {
  return (
    <img src={crown} alt='crown graphic' className={props.className || 'crown'}/>
  )
}