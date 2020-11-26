import React from 'react';
import ReactDOM from 'react-dom';
import FancyBorder from './FancyBorder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FancyBorder />, div);
  ReactDOM.unmountComponentAtNode(div);
});
