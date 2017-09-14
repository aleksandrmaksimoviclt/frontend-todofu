import React from 'react';
import axios from 'axios';

import './board.css';

import BoardHeader from './board-header/board-header.js';
import List from './list/list.js';

class Board extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      lists: []
    };
  }

  componentDidMount() {
    const self = this;
    axios
      .get("http://api.todofu.com/v1/lists/")
      .then(response => {
        self.setState({ lists: response.data});
        console.log(response.data);
      });
  }

  render() {

    return (
      <div className="board-wrapper">
        <div className="board-main-content">
          <BoardHeader />
          <div className="board-canvas">
            <div id="board">
              {this.state.lists.map(function(list){
                return (
                  <List
                    key={list.id}
                    name={list.name}
                    cards={list.cards}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}




export default Board;
