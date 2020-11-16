import React from 'react';
import './NavItem.css';

export default function NavItem(props) {
  return (
    <li className='navItem'>{props.link}</li>
  )
}