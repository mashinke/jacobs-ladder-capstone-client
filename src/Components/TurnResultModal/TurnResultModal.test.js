import React from 'react';
import ReactDOM from 'react-dom';
import TurnResultModal from './TurnResultModal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TurnResultModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});