import React from 'react';
import ReactDOM from 'react-dom';
import ScoresMain from './ScoresMain';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScoresMain />, div);
  ReactDOM.unmountComponentAtNode(div);
});