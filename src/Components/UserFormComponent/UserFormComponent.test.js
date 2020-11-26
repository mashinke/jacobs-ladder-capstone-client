import React from 'react';
import ReactDOM from 'react-dom';
import UserFormComponent from './UserFormComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserFormComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});