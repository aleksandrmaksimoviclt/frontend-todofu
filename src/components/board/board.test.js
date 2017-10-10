import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board.js';

it('renders board without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Board />, div);
});
