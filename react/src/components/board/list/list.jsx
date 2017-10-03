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
          />
        ))}
      </div>
      <CardComposer
        listId={props.id}
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
};

export default List;
