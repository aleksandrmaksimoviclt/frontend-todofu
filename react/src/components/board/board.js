import React from 'react';

import './board.css';

import BoardHeader from './board-header/board-header.js';
import List from './list/list.js';

class Board extends React.Component {
  render() {
    return (
      <div className="board-wrapper">
        <div className="board-main-content">
          <BoardHeader />
          <div className="board-canvas">
            <div id="board">
              <List />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
