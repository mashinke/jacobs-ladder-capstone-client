import React from 'react';
import ReactDOM from 'react-dom';
import SetupGameMain from './SetupGameMain';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SetupGameMain />, div);
  ReactDOM.unmountComponentAtNode(div);
});