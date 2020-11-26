import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LoginMain from './LoginMain';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <BrowserRouter>
      <LoginMain />
    </BrowserRouter>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});