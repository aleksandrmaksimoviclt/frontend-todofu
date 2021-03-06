import React from 'react';

import './board-header.css';

const BoardHeader = () => (
  <div className="board-header">
    <a className="board-header-btn board-header-btn-name">
      <span className="board-header-btn-text" dir="auto">Todo-Fu</span>
    </a>
    <div className="board-header-btn mod-left">
      <a className="board-header-btn" title="Click to star or unstar this  board. Starred boards show up at the top of your boards list." aria-label="Star or Unstar Board">
        <span className="icon-sm icon-star board-header-btn-icon" />
      </a>
    </div>
    <div className="board-header-btn mod-right" />
  </div>
);

export default BoardHeader;
