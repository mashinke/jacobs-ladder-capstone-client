import React from 'react';
import ReactDOM from 'react-dom';
import PositionDisplay from './PositionDisplay';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PositionDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});