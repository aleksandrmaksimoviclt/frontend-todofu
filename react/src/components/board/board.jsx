import React from 'react';
import Axios from 'axios';

import './board.css';

import BoardHeader from './board-header/board-header';
import List from './list/list';
import ListComposer from './list/list-composer';

const listsURL = 'http://api.todofu.com/v1/lists/';

class Board extends React.Component {
  state = {
    lists: [],
  };

  componentWillMount() {
    this.loadListsFromApi();
  }

  loadListsFromApi = () => {
    const self = this;
    Axios
      .get(listsURL)
      .then((response) => {
        if (response.status === 200) {
          self.setState({ lists: response.data });
        }
      });
  }

  handleListDelete = (listID) => {
    const self = this;
    const updatedLists = this.state.lists.filter(list => list.id !== listID);
    Axios
      .delete(`http://api.todofu.com/v1/lists/${listID}/`)
      .then((response) => {
        if (response.status === 204) {
          self.setState({ lists: updatedLists });
        }
      });
  }

  render() {
    const lists = this.state.lists.map(list => (
      <List
        id={list.id}
        key={list.id}
        name={list.name}
        cards={list.cards}
        handleListDelete={this.handleListDelete}
      />
    ));
    return (
      <div className="board-wrapper">
        <div className="board-main-content">
          <BoardHeader />
          <div className="board-canvas">
            <div id="board">
              {lists}
              <ListComposer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
