import React from 'react';
import ReactDOM from 'react-dom';
import Crown from './Crown';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Crown />, div);
  ReactDOM.unmountComponentAtNode(div);
});
