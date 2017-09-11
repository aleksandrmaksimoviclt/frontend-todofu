import React from 'react';

import './list.css';

import Card from './card/card.js';

class List extends React.Component {
  render() {
    return (
      <div className="list-wrapper">
        <div className="list">
          <div className="list-header">
            <textarea className="list-header-name mod-list-name">
              Header
            </textarea>
          </div>
          <div className="list-cards">
            <Card/>
          </div>
          <a className="open-card-composer"></a>
        </div>
      </div>
    );
  }
}

export default List;
