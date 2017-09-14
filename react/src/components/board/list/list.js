import React from 'react';

import './list.css';

import Card from './card/card.js';

export default class List extends React.Component {

  render() {

    return (
      <div className="list-wrapper">
        <div className="list">
          <div className="list-header">
            <textarea className="list-header-name mod-list-name">
              {this.props.name}
            </textarea>
          </div>
          <div className="list-cards">
            {this.props.cards.map(function(card){
              return (
                <Card
                  key={card.id}
                  title={card.title}
                />
              );
            })}
          </div>
          <a className="open-card-composer"></a>
        </div>
      </div>
    );
  }
}
