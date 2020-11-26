import React from 'react';
import ReactDOM from 'react-dom';
import GameScoreItem from './GameScoreItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GameScoreItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});