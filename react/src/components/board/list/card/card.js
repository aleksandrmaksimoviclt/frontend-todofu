import React from 'react';

import './card.css';

class Card extends React.Component {
  render() {
    return (
      <a className="list-card" href='#'>
        <span className="list-card-operation">
          x
        </span>
        <div className="list-card-details">
          <span className="list-card-title">{this.props.title}</span>
        </div>
      </a>
    );
  }
}

export default Card;
