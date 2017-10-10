import React from 'react';
import PropTypes from 'prop-types';

import './list.css';

import Card from './card/card';
import CardComposer from './card/card-composer';

const List = props => (
  <div className="list-wrapper">
    <div className="list">
      <div className="list-header">
        <textarea defaultValue={props.name} className="list-header-name mod-list-name" />
        <div className="list-header-extras">
          <a tabIndex={0} role="button" onClick={() => props.handleListDelete(props.id)} className="fa fa-trash-o icon">.</a>
        </div>
      </div>
      <div className="list-cards">
        {props.cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            listId={props.id}
            handleCardDelete={props.handleCardDelete}
          />
        ))}
      </div>
      <CardComposer
        listId={props.id}
        openCardComposer={props.openCardComposer}
        closeCardComposer={props.closeCardComposer}
        openedCardComposerID={props.openedCardComposerID}
        handleNewCardTilteChange={props.handleNewCardTilteChange}
        newCardTitle={props.newCardTitle}
        handleSubmitNewCard={props.handleSubmitNewCard}
      />
    </div>
  </div>
);

List.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
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

export default List;
