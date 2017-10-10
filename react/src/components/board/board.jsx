/* eslint-disable react/no-unused-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import './board.css';

import BoardHeader from './board-header/board-header';
import List from './list/list';
import ListComposer from './list/list-composer';

const Board = (props) => {
  const lists = props.lists.map(list => (
    <List
      id={list.id}
      key={list.id}
      name={list.name}
      cards={list.cards}
      handleListDelete={props.handleListDelete}
      openCardComposer={props.openCardComposer}
      closeCardComposer={props.closeCardComposer}
      openedCardComposerID={props.openedCardComposerID}
      handleNewCardTilteChange={props.handleNewCardTilteChange}
      newCardTitle={props.newCardTitle}
      handleSubmitNewCard={props.handleSubmitNewCard}
      handleCardDelete={props.handleCardDelete}
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
              handleListComposerIsOpen={props.handleListComposerIsOpen}
              listComposerIsOpen={props.listComposerIsOpen}
              handlePostNewList={props.handlePostNewList}
              newListName={props.newListName}
              handleNewListNameChange={props.handleNewListNameChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Board.propTypes = {
  handleListComposerIsOpen: PropTypes.func.isRequired,
  listComposerIsOpen: PropTypes.bool.isRequired,
  handlePostNewList: PropTypes.func.isRequired,
  newListName: PropTypes.string.isRequired,
  handleNewListNameChange: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleListDelete: PropTypes.func.isRequired,
  openCardComposer: PropTypes.func.isRequired,
  closeCardComposer: PropTypes.func.isRequired,
  openedCardComposerID: PropTypes.number.isRequired,
  handleNewCardTilteChange: PropTypes.func.isRequired,
  newCardTitle: PropTypes.string.isRequired,
  handleSubmitNewCard: PropTypes.func.isRequired,
  handleCardDelete: PropTypes.func.isRequired,
};

export default Board;
