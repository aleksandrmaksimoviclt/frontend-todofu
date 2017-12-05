import React from 'react';
import PropTypes from 'prop-types';

import './card.css';

const Card = props => (
  <a className="list-card">
    <span role="button" tabIndex={0} onClick={() => props.handleCardDelete(props)} className="list-card-operation fa fa-trash-o icon" />
    <div className="list-card-details">
      <span className="list-card-title">{props.title}</span>
    </div>
  </a>
);

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  handleCardDelete: PropTypes.func.isRequired,
  listId: PropTypes.number.isRequired,
};
