import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <BrowserRouter>
      <ProtectedRoute />
    </BrowserRouter>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});