import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Board from './components/board/board';


class App extends Component {
  render() {
    return (
      <div id="surface">
        <Header />
        <div id="content">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
