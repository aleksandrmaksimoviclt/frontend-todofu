import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

import './card.css';

class Card extends React.Component {
  handleCardDelete = (cardID) => {
    Axios
      .delete(`http://api.todofu.com/v1/cards/${cardID}/`)
      .then(() => {
        window.location.reload();
      });
  }

  render() {
    return (
      <a className="list-card">
        <span role="button" tabIndex={0} onClick={() => this.handleCardDelete(this.props.id)} className="list-card-operation fa fa-trash-o icon" />
        <div className="list-card-details">
          <span className="list-card-title">{this.props.title}</span>
        </div>
      </a>
    );
  }
}

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
