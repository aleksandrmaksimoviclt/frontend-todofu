import React from 'react';
import PropTypes from 'prop-types';

const CardComposer = (props) => {
  if (props.listId === props.openedCardComposerID) {
    return (
      <div className="list-cards">
        <div className="card-composer">
          <div className="list-card">
            <div className="list-card-details">
              <textarea value={props.newCardTitle} onChange={props.handleNewCardTilteChange} className="list-card-composer-textarea" />
            </div>
          </div>
          <div className="card-composer-controls">
            <div className="card-composer-controls-section">
              <input onClick={() => props.handleSubmitNewCard(props.listId)} className="primary confirm" type="submit" value="Add" />
              <a onClick={props.closeCardComposer} role="button" tabIndex="0" className="fa fa-times icon icon-lg">.</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <a onClick={() => props.openCardComposer(props.listId)} role="button" tabIndex="0" className="open-card-composer">Add a card...</a>
  );
};

CardComposer.propTypes = {
  listId: PropTypes.number.isRequired,
  openCardComposer: PropTypes.func.isRequired,
  closeCardComposer: PropTypes.func.isRequired,
  openedCardComposerID: PropTypes.number.isRequired,
  handleNewCardTilteChange: PropTypes.func.isRequired,
  newCardTitle: PropTypes.string.isRequired,
  handleSubmitNewCard: PropTypes.func.isRequired,
};

export default CardComposer;
