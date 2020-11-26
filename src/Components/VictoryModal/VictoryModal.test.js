import React from 'react';
import ReactDOM from 'react-dom';
import VictoryModal from './VictoryModal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VictoryModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});