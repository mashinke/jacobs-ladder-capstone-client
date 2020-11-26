import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SignupMain from './SignupMain';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <BrowserRouter>
      <SignupMain />
    </BrowserRouter>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});