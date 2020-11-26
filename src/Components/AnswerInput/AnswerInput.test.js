import React from 'react';
import ReactDOM from 'react-dom';
import AnswerInput from './AnswerInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnswerInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
