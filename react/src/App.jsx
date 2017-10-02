import React from 'react';
import './App.css';
import './font-awesome-4.7.0/css/font-awesome.css';
import Header from './components/header/header';
import Board from './components/board/board';

const App = () => (
  <div id="surface">
    <Header />
    <div id="content">
      <Board />
    </div>
  </div>
);

export default App;