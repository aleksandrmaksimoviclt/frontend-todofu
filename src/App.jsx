import React from 'react';
import Axios from 'axios';

import './App.css';
import './font-awesome-4.7.0/css/font-awesome.css';
import Header from './components/header/header';
import Board from './components/board/board';
import ToastContainer from './components/toast/toast-container';

const listsURL = 'http://api.todofu.com/v1/lists/';

class App extends React.Component {
  state = {
    lists: [],
    listComposerIsOpen: false,
    newListName: '',
    openedCardComposerID: -1,
    newCardTitle: '',
    toastes: [],
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

  handleListDelete = (list) => {
    const self = this;
    const updatedLists = this.state.lists.filter(_list => _list.id !== list.id);
    Axios
      .delete(`http://api.todofu.com/v1/lists/${list.id}/`)
      .then((response) => {
        if (response.status === 204) {
          self.setState({ lists: updatedLists });
          self.showNewToast(`Deleted list "${list.name}"`);
        } else {
          self.showNewToast(`Couldn't delete list "${list.name}"`);
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
  handleCardDelete = (card) => {
    const self = this;
    Axios
      .delete(`http://api.todofu.com/v1/cards/${card.id}/`)
      .then((response) => {
        if (response.status === 204) {
          const updatedLists = self.state.lists.map((list) => {
            if (list.id === card.listId) {
              return Object.assign({}, list, {
                cards: list.cards.filter(_card => _card.id !== card.id),
              });
            }
            return list;
          });
          self.setState({
            lists: updatedLists,
          });
          self.showNewToast(`Deleted card "${card.title}"`);
        } else {
          self.showNewToast(`Couldn't delete card "${card.title}"`);
        }
      });
  }

  // Toast functions

  showNewToast = (text) => {
    const currentToastes = this.state.toastes;
    let newToast = {};
    if (currentToastes.length === 0) {
      newToast = {
        id: 0,
        message: text,
      }
    } else {
      newToast = {
        id: currentToastes[currentToastes.length-1].id+1,
        message: text,
      }
    }
    const updatedToastes = currentToastes.concat(newToast);
    this.setState({
      toastes: updatedToastes,
    });
  }

  dismissToast = (toast) => {
    const currentToastes = this.state.toastes;
    const updatedToastes = currentToastes.filter(_toast => _toast.id !== toast.id);
    this.setState({
      toastes: updatedToastes,
    })
  }


  render() {
    return (
      <div id="surface">
        <Header />
        <div id="content">
          <Board
            lists={this.state.lists}
            newListName={this.state.newListName}
            handleListDelete={this.handleListDelete}
            listComposerIsOpen={this.state.listComposerIsOpen}
            handleListComposerIsOpen={this.handleListComposerIsOpen}
            handlePostNewList={this.handlePostNewList}
            handleNewListNameChange={this.handleNewListNameChange}
            openedCardComposerID={this.state.openedCardComposerID}
            openCardComposer={this.openCardComposer}
            closeCardComposer={this.closeCardComposer}
            newCardTitle={this.state.newCardTitle}
            handleNewCardTilteChange={this.handleNewCardTilteChange}
            handleSubmitNewCard={this.handleSubmitNewCard}
            handleCardDelete={this.handleCardDelete}
          />
        </div>
        <ToastContainer
          toastes={this.state.toastes}
          dismissToast={this.dismissToast}
        />
      </div>
    );
  }
}
export default App;
