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
          <span className="list-card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan lacus quis est fringilla rhoncus. Cras ac sapien arcu. Cras a elementum ex, a pharetra ante.</span>
        </div>
      </a>
    );
  }
}

export default Card;
