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
    listComposerIsOpen: false,
    newListName: '',
    openedCardComposerID: -1,
    newCardTitle: '',
  };

  componentWillMount() {
    this.getListsFromApi();
  }

  getListsFromApi = () => {
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

  // ListComposer functions
  handleListComposerIsOpen = () => {
    this.setState({ listComposerIsOpen: !this.state.listComposerIsOpen });
  }

  handlePostNewList = () => {
    const self = this;
    const newListName = this.state.newListName;
    const newList = {
      name: newListName,
      cards: [],
    };
    Axios
      .post('http://api.todofu.com/v1/lists/', newList)
      .then((response) => {
        if (response.statusText === 'Created' && response.status === 201) {
          const updatedLists = self.state.lists.concat(response.data);
          self.setState({
            lists: updatedLists,
            newListName: '',
          });
        }
        // provide error handling
      });
  }
  handleNewListNameChange = (event) => {
    this.setState({ newListName: event.target.value });
  }

  // Card composer functions
  openCardComposer = (listId) => {
    this.setState({
      openedCardComposerID: listId,
    });
  };

  closeCardComposer = () => {
    this.setState({
      openedCardComposerID: -1,
      newCardTitle: '',
    });
  };

  handleNewCardTilteChange = (event) => {
    this.setState({ newCardTitle: event.target.value });
  };

  handleSubmitNewCard = (listId) => {
    const self = this;
    const newCard = {
      title: this.state.newCardTitle,
      list: listId,
    };
    Axios
      .post('http://api.todofu.com/v1/cards/', newCard)
      .then((response) => {
        if (response.status === 201 && response.statusText === 'Created') {
          const updatedLists = self.state.lists.map((list) => {
            if (list.id === listId) {
              return Object.assign({}, list, {
                cards: list.cards.concat(response.data),
              });
            }
            return list;
          });
          self.setState({
            lists: updatedLists,
          });
          self.closeCardComposer();
        }
        // provide error handling
      });
  }

  // Card functions
  handleCardDelete = (listID, cardID) => {
    const self = this;
    Axios
      .delete(`http://api.todofu.com/v1/cards/${cardID}/`)
      .then((response) => {
        if (response.status === 204) {
          const updatedLists = self.state.lists.map((list) => {
            if (list.id === listID) {
              return Object.assign({}, list, {
                cards: list.cards.filter(card => card.id !== cardID),
              });
            }
            return list;
          });
          self.setState({
            lists: updatedLists,
          });
        }
        // provide error handling
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
        openCardComposer={this.openCardComposer}
        closeCardComposer={this.closeCardComposer}
        openedCardComposerID={this.state.openedCardComposerID}
        handleNewCardTilteChange={this.handleNewCardTilteChange}
        newCardTitle={this.state.newCardTitle}
        handleSubmitNewCard={this.handleSubmitNewCard}
        handleCardDelete={this.handleCardDelete}
      />
    ));
    return (
      <div className="board-wrapper">
        <div className="board-main-content">
          <BoardHeader />
          <div className="board-canvas">
            <div id="board">
              {lists}
              <ListComposer
                handleListComposerIsOpen={this.handleListComposerIsOpen}
                listComposerIsOpen={this.state.listComposerIsOpen}
                handlePostNewList={this.handlePostNewList}
                newListName={this.state.newListName}
                handleNewListNameChange={this.handleNewListNameChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
