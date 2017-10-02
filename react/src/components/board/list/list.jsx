import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

import './list.css';

import Card from './card/card';
import CardComposer from './card/card-composer';


export default class List extends React.Component {
  handleListDelete = (listID) => {
    Axios
      .delete(`http://api.todofu.com/v1/lists/${listID}/`)
      .then(() => {
        window.location.reload();
      });
  }

  render() {
    return (
      <div className="list-wrapper">
        <div className="list">
          <div className="list-header">
            <textarea defaultValue={this.props.name} className="list-header-name mod-list-name" />
            <div className="list-header-extras">
              <a tabIndex={0} role="button" onClick={() => this.handleListDelete(this.props.id)} className="fa fa-trash-o icon">.</a>
            </div>
          </div>
          <div className="list-cards">
            {this.props.cards.map(card => ( // eslint-disable-line
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
              />
            ))}
          </div>
          <CardComposer
            listId={this.props.id}
          />
        </div>
      </div>
    );
  }
}

List.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
