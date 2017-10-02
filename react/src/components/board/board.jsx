import React from 'react';
import axios from 'axios';

import './board.css';

import BoardHeader from './board-header/board-header';
import List from './list/list';
import ListComposer from './list/list-composer';

class Board extends React.Component {
  constructor() {
    super();

    this.state = {
      lists: [],
    };
  }

  componentWillMount() {
    const self = this;
    axios
      .get('http://api.todofu.com/v1/lists/')
      .then((response) => {
        if (response.status === 200) {
          self.setState({ lists: response.data });
        }
      });
  }

  render() {
    return (
      <div className="board-wrapper">
        <div className="board-main-content">
          <BoardHeader />
          <div className="board-canvas">
            <div id="board">
              {this.state.lists.map(list => (
                <List
                  id={list.id}
                  key={list.id}
                  name={list.name}
                  cards={list.cards}
                />
              ))}
              <ListComposer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;