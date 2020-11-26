import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NavItem from './NavItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <BrowserRouter>
      <NavItem />
    </BrowserRouter>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});