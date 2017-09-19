import React from 'react';

import './list.css';

import Card from './card/card.js';
import CardComposer from './card/card-composer.js';


export default class List extends React.Component {

  render() {

    return (
      <div className="list-wrapper">
        <div className="list">
          <div className="list-header">
            <textarea defaultValue={this.props.name} className="list-header-name mod-list-name">
            </textarea>
          </div>
          <div className="list-cards">
            {this.props.cards.map(function(card){
              return (
                <Card
                  key={card.id}
                  id={card.id}
                  title={card.title}
                />
              );
            })}
          </div>
          <CardComposer
            listId={this.props.id}
          />
        </div>
      </div>
    );
  }
}
